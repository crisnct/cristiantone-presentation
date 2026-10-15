# Migrarea publicării la Tailscale — 15 octombrie 2026

Adresa publică: https://cristiantone.taila68086.ts.net/cristiantone/

Adresa locală: http://127.0.0.1:8082/

## Configurația implementată

- Tailscale 1.104.1 rulează pe Windows. Funnel publică HTTPS pe portul 443, în mod persistent (`--bg`).
- Handlerul `/cristiantone` trimite către `http://127.0.0.1:8082`, fără sufix în target. Handlerul `/` către portofoliu este eliminat. `/medicina` este păstrat. Rădăcina publică răspunde cu HTTP 404.
- Containerul `cristiantone-web` păstrează portul loopback 8082, healthcheckul și restricțiile existente. Compose folosește acum propria rețea, fără dependență de `jobshunter-net`.
- `src/content/deployment.json` furnizează originea publică și baza publică `/cristiantone` pentru canonical, Open Graph, sitemap, robots.txt și scriptul de publicare.
- `scripts/install-tailscale.ps1` verifică nodul, buildul local, starea containerului, configurația Funnel și accesul public. Salvează configurația inițială în `artifacts/tailscale-before-*.json`, păstrează celelalte handlere și poate fi rulat din nou.
- Scripturile și fragmentul pentru instalarea vechiului proxy au fost eliminate. Playwright nu mai folosește headerul pentru ocolirea avertismentului ngrok.

În `D:\Workspace\jobshunter\nginx.conf` a fost modificat exclusiv blocul `CRISTIANTONE PORTFOLIO`: vechile rute returnează HTTP 308 către Tailscale, cu păstrarea prefixului public, subpaginii și query stringului. Backupurile configurațiilor anterioare sunt lângă fișierul Nginx, cu prefixul `nginx.conf.backup-`.

Containerul ngrok rămâne activ pentru serviciile JobsHunter. Portofoliul este publicat direct prin Funnel și nu mai folosește acel container sau proxy-ul JobsHunter pentru servire.

## Verificări

| Verificare | Rezultat |
| --- | --- |
| TypeScript, ESLint, Vitest | Trecute; 8 teste unitare |
| Build local și Docker | Două variante din aceeași sursă, fiecare cu 10 pagini prerandate și resurse verificate |
| Container | Healthy; `127.0.0.1:8082` |
| Playwright prin Tailscale | 18 teste trecute, la 360, 768 și 1440 px |
| Playwright local la `/` | 18 teste trecute, la 360, 768 și 1440 px; navigare și resurse funcționale |
| Rădăcina domeniului public | HTTP 404, fără redirecționare către portofoliu |
| Rute și refresh | Toate cele 10 pagini funcționează |
| Metadate | Canonical și Open Graph folosesc Tailscale pe fiecare pagină; sitemap și robots.txt verificate |
| Resurse, aliasuri și pagini inexistente | CV accesibil; HTTP 308 și query string păstrat; HTTP 404 real |
| Accesibilitate și interacțiuni | Audit axe fără încălcări serious/critical; navigare, căutare și galerii verificate |
| Afișare | Capturi publice desktop/tabletă/mobil; captura mobilă inspectată vizual |
| Ruta Tailscale `/medicina/` | HTTP 200 înainte și după; handlerul este păstrat |
| Proxy partajat JobsHunter | Statusuri, rutare, content type și hashuri OAuth identice cu starea inițială |
| Vechiul URL al portofoliului | HTTP 308 către Tailscale, inclusiv pentru subpagini și query string |
| Reexecutarea publicării | Reușită; handlerele existente păstrate |

Snapshoturile proxy-ului sunt în `artifacts/root-proxy-before.json` și `artifacts/mount-proxy-after.json`. Pe vechiul proxy, `/medicina/` răspundea deja cu HTTP 502 înainte de migrare și răspunde identic după; ruta Tailscale `/medicina/` funcționează cu HTTP 200. Această problemă preexistentă a vechiului proxy nu a fost modificată.

Imaginea dinaintea eliminării prefixului este păstrată cu tagul `cristiantone-presentation:before-root`. Imaginea anterioară migrării inițiale este păstrată local cu tagul `cristiantone-presentation:pre-tailscale`. README descrie publicarea, verificarea stării și eliminarea exclusivă a handlerului portofoliului. Raportul din `migration-verification.md` rămâne evidența istorică din 10 octombrie.

Referință: [documentația oficială Tailscale Funnel](https://tailscale.com/docs/reference/tailscale-cli/funnel).

## Montare publică și acces local

Configurația finală separă prefixul public de targetul proxy:

```text
/cristiantone → http://127.0.0.1:8082
/medicina    → http://127.0.0.1:8760
```

`npm run build` construiește secvențial aceeași aplicație pentru două baze: `/cristiantone/` public și `/` local. Varianta publică este plasată în folderul `build/client/cristiantone/`; varianta locală rămâne în `build/client/`. Nu există copii separate ale codului sursă.

Funnel elimină prefixul înainte de proxy și setează `X-Forwarded-Host`. Nginx selectează folderul public când primește hostname-ul Tailscale și păstrează prefixul public în redirecționări. Cererile locale folosesc varianta de la rădăcină. Canonical, Open Graph, sitemap și robots.txt indică aceeași adresă publică în ambele variante.

Referință pentru comportamentul proxy: [implementarea oficială Tailscale](https://github.com/tailscale/tailscale/blob/main/ipn/ipnlocal/serve.go).
