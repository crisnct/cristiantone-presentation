import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
const root = path.resolve("build/client");
const routes = [
  "",
  "hire-me",
  "projects",
  "projects/metal-investment",
  "projects/jobs-hunter",
  "projects/simple-contacts",
  "projects/snowswt",
  "projects/veridate",
  "certificates",
  "about",
];
const published = path.join(root, "cristiantone");
await fs.mkdir(published, { recursive: true });
for (const entry of await fs.readdir(root, { withFileTypes: true })) {
  if (
    ["cristiantone", "index.html", "__spa-fallback.html", ".vite"].includes(
      entry.name,
    )
  )
    continue;
  await fs.rename(
    path.join(root, entry.name),
    path.join(published, entry.name),
  );
}
for (const route of routes) {
  const file = path.join(published, route, "index.html");
  let html;
  try {
    html = await fs.readFile(file, "utf8");
  } catch {
    throw new Error(`Missing pre-rendered page: ${route}`);
  }
  const $ = load(html);
  if (!$("h1").length || !$("link[rel=canonical]").length)
    throw new Error(`Missing content/metadata: ${route}`);
  for (const element of $("img[src],script[src],link[href]").toArray()) {
    const value = $(element).attr("src") || $(element).attr("href");
    if (value?.startsWith("/cristiantone/")) {
      const asset = path.join(root, decodeURIComponent(value));
      await fs.access(asset).catch(() => {
        throw new Error(`Missing asset ${value} on ${route}`);
      });
    }
  }
}
const missing =
  '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found | Cristian Țone</title><style>body{font:18px system-ui;color:#073b4c;background:#f0f4f8;padding:10vh 10vw}a{color:#075975}</style><h1>Page not found</h1><p>This page or resource is unavailable.</p><a href="/cristiantone/">Return to Home</a></html>';
await fs.writeFile(path.join(published, "404.html"), missing);
await fs.writeFile(
  path.join(published, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>https://ronin-archesporial-lonnie.ngrok-free.dev/cristiantone/${route}</loc></url>`).join("")}</urlset>`,
);
await fs.writeFile(
  path.join(published, "robots.txt"),
  "User-agent: *\nAllow: /cristiantone/\nSitemap: https://ronin-archesporial-lonnie.ngrok-free.dev/cristiantone/sitemap.xml\n",
);
console.log(
  `Validated ${routes.length} pre-rendered pages and their local assets.`,
);
