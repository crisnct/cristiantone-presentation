param([string]$ProxyConfig = 'D:\Workspace\jobshunter\nginx.conf', [int]$LocalPort = 8082)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$resolvedConfig = (Resolve-Path -LiteralPath $ProxyConfig).Path
if ($resolvedConfig -ne 'D:\Workspace\jobshunter\nginx.conf') { throw 'Unexpected proxy configuration path.' }
$health = Invoke-WebRequest "http://127.0.0.1:$LocalPort/health" -TimeoutSec 10
if ($health.StatusCode -ne 200) { throw 'The static container is not healthy.' }
$node = (Get-Command node -ErrorAction Stop).Source
$smoke = Join-Path $PSScriptRoot 'proxy-smoke.mjs'
$baseline = Join-Path $projectRoot 'artifacts/proxy-before.json'
$after = Join-Path $projectRoot 'artifacts/proxy-after.json'
Push-Location $projectRoot
try {
    & $node $smoke $baseline
    if ($LASTEXITCODE -ne 0) { throw 'Existing proxy preflight failed.' }
} finally { Pop-Location }
$previous = [System.IO.File]::ReadAllText($resolvedConfig)
$block = [System.IO.File]::ReadAllText((Join-Path $projectRoot 'infrastructure\proxy-location.conf'))
$pattern = '(?ms)^\s*# BEGIN CRISTIANTONE PORTFOLIO.*?# END CRISTIANTONE PORTFOLIO\r?\n?'
if ($previous -match $pattern) {
    $updated = [regex]::Replace($previous, $pattern, [System.Text.RegularExpressions.MatchEvaluator]{ param($match) "`n$block`n" })
} else {
    $marker = '        # MCP SERVER'
    $index = $previous.IndexOf($marker)
    if ($index -lt 0) { throw 'The expected proxy insertion point is missing.' }
    $updated = $previous.Insert($index, "$block`n`n")
}
$backup = "$resolvedConfig.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item -LiteralPath $resolvedConfig -Destination $backup
try {
    [System.IO.File]::WriteAllText($resolvedConfig, $updated, [System.Text.UTF8Encoding]::new($false))
    docker exec jobshunter-nginx nginx -t
    if ($LASTEXITCODE -ne 0) { throw 'Nginx configuration validation failed.' }
    docker exec jobshunter-nginx nginx -s reload
    if ($LASTEXITCODE -ne 0) { throw 'Nginx reload failed.' }
    Start-Sleep -Milliseconds 500
    $localContent = docker exec jobshunter-nginx curl --fail --silent --show-error --max-time 10 --retry 2 --retry-all-errors 'http://127.0.0.1:8080/cristiantone/'
    if ($LASTEXITCODE -ne 0 -or ($localContent -join "`n") -notmatch 'Career at a Glance') { throw 'Proxy upstream verification failed.' }
    $publicContent = & curl.exe --fail --silent --show-error --max-time 20 --retry 2 --retry-all-errors -H 'ngrok-skip-browser-warning: true' 'https://ronin-archesporial-lonnie.ngrok-free.dev/cristiantone/'
    if ($LASTEXITCODE -ne 0 -or ($publicContent -join "`n") -notmatch 'Career at a Glance') { throw 'Public verification failed.' }
    Push-Location $projectRoot
    try {
        & $node $smoke $after $baseline
        if ($LASTEXITCODE -ne 0) { throw 'Existing proxy regression check failed.' }
    } finally { Pop-Location }
    Write-Output "Proxy installed. Backup: $backup"
} catch {
    Copy-Item -LiteralPath $backup -Destination $resolvedConfig -Force
    docker exec jobshunter-nginx nginx -t
    if ($LASTEXITCODE -eq 0) { docker exec jobshunter-nginx nginx -s reload }
    throw
}
