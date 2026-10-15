# Verificarea migrării — 10 octombrie 2026

> Raport istoric al migrării la React. Publicarea a fost mutată pe Tailscale la 15 octombrie 2026; configurația curentă și verificările sunt în [raportul Tailscale](tailscale-migration.md).

Public: https://ronin-archesporial-lonnie.ngrok-free.dev/cristiantone/

## Rezultatul implementat

React 19, TypeScript strict, Vite, React Router Framework Mode (`ssr: false`, prerandare), Tailwind compilat și Chart.js. Zece pagini HTML statice: Home, Hire Me, Projects, cele cinci proiecte, Certificates și About. Human este exclus.

Au fost recuperate fundalul foto al headerului, portretele, logo-ul, fotografiile About și cele nouă imagini originale ale diplomelor/certificatelor. CV-ul PDF original este local. Galeria SnowSWT are toate cele 25 de imagini în ordinea inițială; galeriile VeriDate păstrează ordinea din sursă. Secțiunile expandabile și conținutul pentru code review sunt păstrate în HTML.

Conținutul întreținut al site-ului este în `src/content/`, iar imaginile și documentele servite sunt în `public/`. Arhivele surselor și scripturile de import și comparație au fost eliminate după migrare. Capturile utilizatorului au servit ca referință vizuală; nu înlocuiesc CV-ul sau certificatele. Portretul din header a fost ulterior înlocuit cu fotografia furnizată de utilizator, păstrată în `public/images/cristian-tone-portrait.png`.

## Verificări executate

| Verificare                                  | Rezultat                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Typecheck strict                            | Trecut                                                                                      |
| ESLint                                      | Trecut                                                                                      |
| Vitest / Testing Library                    | 8 teste trecute                                                                             |
| Build local și build Docker                 | 10 pagini prerandate; resurse verificate                                                    |
| Playwright local                            | 18 teste trecute                                                                            |
| Playwright prin ngrok                       | 18 teste trecute                                                                            |
| Viewport                                    | 360, 768, 1440 px; inclusiv redimensionarea graficelor după încărcare                       |
| axe WCAG A/AA                               | Zero încălcări raportate pe cele 10 pagini la fiecare viewport                              |
| Console / erori JavaScript / cereri eșuate  | Zero în verificarea celor 10 rute publice                                                   |
| Dependențe pentru afișare                   | Toate cererile necesare rămân pe originea site-ului                                         |
| Audit inițial de conținut                   | 259 paragrafe / elemente de listă verificate; zero lipsuri, înainte de eliminarea arhivelor |
| Resurse tipizate                            | Toate imaginile referite și CV-ul există local                                              |
| Rute necunoscute / imagini / JS inexistente | HTTP 404 real                                                                               |
| Prefix fără slash și aliasuri               | HTTP 308; query string păstrat                                                              |
| Container                                   | Healthy, UID 101, filesystem read-only                                                      |

Auditul automat nu certifică exhaustiv accesibilitatea; verificarea vizuală și interacțiunile prin tastatură completează testele. PDF-ul și certificatele au fost verificate ca documente originale, nu ca reproduceri ale capturilor.

Artefacte locale, generate de verificări și excluse din Git: `artifacts/accessibility-{desktop,tablet,mobile}.json`, `artifacts/home-*.png`, `playwright-report/index.html`. Capturile și rapoartele axe provin din verificarea adresei publice. Comparația inițială cu sursele a fost executată în timpul migrării; nu mai face parte din verificările curente după eliminarea arhivelor. Existența resurselor locale și ordinea galeriei SnowSWT rămân verificate prin Vitest.

## Proxy și publicare

Configurația modificată: `D:\Workspace\jobshunter\nginx.conf`.

Backupul configurației anterioare publicării reușite: `D:\Workspace\jobshunter\nginx.conf.backup-20261010-113930`. Au rămas și backupurile încercărilor anterioare. Restaurarea automată a fost executată când verificarea inițială a eșuat.

`nginx -t` și reload au trecut. Reverse proxy-ul păstrează prefixul și query string-ul și rezolvă upstream-ul prin DNS Docker la runtime. După publicare, containerul static a fost recreat pentru ultima versiune; testele publice au trecut fără reload suplimentar al proxy-ului.

| Rută existentă                            | Înainte / după    |
| ----------------------------------------- | ----------------- |
| `/`                                       | 200, JobsHunter   |
| `/medicina/`                              | 200, medicina     |
| `/mcp`                                    | 401, MCP          |
| `/.well-known/oauth-protected-resource`   | 200, metadate MCP |
| `/.well-known/oauth-authorization-server` | 200, metadate MCP |
| `/.well-known/jwks.json`                  | 200, metadate MCP |
| `/authorize`                              | 400, OAuth MCP    |
| `/token`                                  | 403, OAuth MCP    |

Statusurile, upstream-urile și tipurile de conținut coincid. Hashurile celor trei răspunsuri de metadate OAuth sunt identice. Nu s-au emis tokenuri și nu s-au testat operații autentificate. Datele comparației sunt în `artifacts/proxy-before.json` și `artifacts/proxy-after.json`.

Ngrok gratuit afișează „Visit Site” la prima vizită și adaugă `X-Robots-Tag: noindex, nofollow`. Aceste comportamente ale tunelului au fost observate direct; aplicația include titluri, descrieri, canonical, Open Graph, sitemap și resurse locale.

Instrucțiunile pentru dezvoltare, actualizarea conținutului, publicare și rollback sunt în README.

## Verificarea după eliminarea arhivelor

La 10 octombrie 2026, după eliminarea arhivelor și a celor trei scripturi folosite la import și comparație, `npm run check` a trecut: typecheck, ESLint, toate cele 8 teste Vitest și buildul celor 10 pagini prerandate. Conținutul și resursele locale sunt suficiente pentru construirea aplicației.

Graficul Technical Proficiency a fost ulterior refăcut în `src/components/technical-proficiency-chart.tsx` cu bare HTML/CSS randate de React. Cele 18 tehnologii sunt grupate după numărul de ani în 7 rânduri, cu etichete separate prin virgulă. Barele au 7,2 px: grosimea redusă inițial la 6 px a fost ulterior mărită cu 20%. Fiecare dintre cele 7 bare are o culoare distinctă. Valorile existente sunt păstrate în HTML-ul prerandat, iar pe mobil etichetele lungi apar deasupra barelor. După corecția înălțimii pe mobil, verificările publice ale rutelor și auditul axe au trecut la 360, 768 și 1440 px; testele verifică și absența suprapunerii graficului peste descriere. Capturile componentei sunt în `artifacts/technical-proficiency-{desktop,mobile}.png`.
