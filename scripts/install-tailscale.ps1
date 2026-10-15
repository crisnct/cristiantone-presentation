param(
    [ValidateRange(1, 65535)]
    [int]$LocalPort = 8082,
    [string]$TailscalePath = ''
)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$deployment = Get-Content -LiteralPath (Join-Path $projectRoot 'src/content/deployment.json') -Raw | ConvertFrom-Json
if (-not $TailscalePath) {
    $command = Get-Command tailscale -ErrorAction SilentlyContinue
    if ($command) { $TailscalePath = $command.Source }
    else { $TailscalePath = Join-Path $env:ProgramFiles 'Tailscale/tailscale.exe' }
}
if (-not (Test-Path -LiteralPath $TailscalePath -PathType Leaf)) { throw 'Install Tailscale and sign in before publishing.' }

function Invoke-Tailscale {
    param([string[]]$CliArgs)
    $output = & $TailscalePath @CliArgs
    if ($LASTEXITCODE -ne 0) { throw "Tailscale command failed: $($CliArgs -join ' ')" }
    return ($output -join "`n")
}

$status = Invoke-Tailscale -CliArgs @('status', '--json') | ConvertFrom-Json
if ($status.BackendState -ne 'Running') { throw 'Tailscale must be connected before publishing.' }
$origin = "https://$($status.Self.DNSName.TrimEnd('.'))"
if ($origin -ne $deployment.origin) { throw "Node URL is $origin. Update src/content/deployment.json and rebuild before publishing." }
$health = Invoke-WebRequest "http://127.0.0.1:$LocalPort/health" -TimeoutSec 10
if ($health.StatusCode -ne 200) { throw 'The portfolio container is not healthy.' }
$local = Invoke-WebRequest "http://127.0.0.1:$LocalPort/" -TimeoutSec 10
if ($local.Content -notmatch 'Career at a Glance' -or $local.Content -notmatch [regex]::Escape("$origin$($deployment.base)/")) {
    throw 'Rebuild the portfolio with the configured public URL before publishing.'
}

$beforeJson = Invoke-Tailscale -CliArgs @('serve', 'status', '--json')
$before = $beforeJson | ConvertFrom-Json -AsHashtable
if (-not $before.Web) { $before.Web = @{} }
$endpoint = "$(([uri]$origin).Host):443"
$mount = $deployment.base
$target = "http://127.0.0.1:$LocalPort"
$handlers = if ($before.Web.ContainsKey($endpoint)) { $before.Web[$endpoint].Handlers } else { @{} }
if ($handlers.Count -gt 0 -and (-not $before.AllowFunnel -or -not $before.AllowFunnel[$endpoint])) {
    throw 'HTTPS port 443 has private Serve handlers. Use a separate Funnel endpoint to avoid making them public.'
}
$previous = $handlers[$mount]
if ($previous -and $previous.Proxy -ne $target) { throw "An existing handler already owns $mount. Inspect tailscale serve status before replacing it." }
$removeRoot = $mount -ne '/' -and $handlers['/'].Proxy -eq $target
$artifacts = Join-Path $projectRoot 'artifacts'
New-Item -ItemType Directory -Path $artifacts -Force | Out-Null
$backup = Join-Path $artifacts "tailscale-before-$(Get-Date -Format 'yyyyMMdd-HHmmss-fff').json"
[System.IO.File]::WriteAllText($backup, $beforeJson)
$installed = $false
$removedRoot = $false
try {
    Invoke-Tailscale -CliArgs @('funnel', '--bg', '--yes', '--https=443', "--set-path=$mount", $target) | Write-Output
    $installed = $true
    if ($removeRoot) {
        Invoke-Tailscale -CliArgs @('funnel', '--https=443', '--set-path=/', 'off') | Write-Output
        $removedRoot = $true
    }
    $after = Invoke-Tailscale -CliArgs @('serve', 'status', '--json') | ConvertFrom-Json -AsHashtable
    if ($after.Web[$endpoint].Handlers[$mount].Proxy -ne $target -or -not $after.AllowFunnel[$endpoint]) {
        throw 'Funnel configuration verification failed.'
    }
    # Check every pre-existing handler, including services sharing this HTTPS endpoint.
    foreach ($hostKey in $before.Web.Keys) {
        foreach ($pathKey in $before.Web[$hostKey].Handlers.Keys) {
            if ($hostKey -eq $endpoint -and $pathKey -eq $mount) { continue }
            if ($hostKey -eq $endpoint -and $pathKey -eq '/' -and $removeRoot) { continue }
            $expected = $before.Web[$hostKey].Handlers[$pathKey] | ConvertTo-Json -Compress -Depth 20
            $actual = $after.Web[$hostKey].Handlers[$pathKey] | ConvertTo-Json -Compress -Depth 20
            if ($expected -ne $actual) { throw "Existing handler changed: $hostKey$pathKey" }
        }
    }
    $public = & curl.exe --fail --silent --show-error --max-time 30 --retry 2 --retry-all-errors "$origin$mount/"
    if ($LASTEXITCODE -ne 0 -or ($public -join "`n") -notmatch 'Career at a Glance') { throw 'Public portfolio verification failed.' }
    Write-Output "Published: $origin$mount/"
    Write-Output "Configuration snapshot: $backup"
} catch {
    if ($removedRoot) {
        Invoke-Tailscale -CliArgs @('funnel', '--bg', '--yes', '--https=443', '--set-path=/', $target) | Write-Output
    }
    # Remove only the handler installed here; never reset the shared Funnel configuration.
    if ($installed -and -not $previous) {
        Invoke-Tailscale -CliArgs @('funnel', '--https=443', "--set-path=$mount", 'off') | Write-Output
    }
    throw
}
