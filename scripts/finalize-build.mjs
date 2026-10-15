import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
import deployment from "../src/content/deployment.json" with { type: "json" };
const clientRoot = path.resolve(
  process.env.BUILD_DIRECTORY || "build",
  "client",
);
const base = process.env.SITE_BASE || "";
const root = path.join(clientRoot, base);
if (base) {
  await fs.mkdir(root, { recursive: true });
  for (const entry of await fs.readdir(clientRoot, { withFileTypes: true })) {
    if (
      [base.slice(1), "index.html", "__spa-fallback.html", ".vite"].includes(
        entry.name,
      )
    )
      continue;
    await fs.rename(
      path.join(clientRoot, entry.name),
      path.join(root, entry.name),
    );
  }
}
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
for (const route of routes) {
  const file = path.join(root, route, "index.html");
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
    if (value?.startsWith("/") && !value.startsWith("//")) {
      const relative = value.startsWith(`${deployment.base}/`)
        ? value.slice(deployment.base.length)
        : value;
      const asset = path.join(root, decodeURIComponent(relative));
      await fs.access(asset).catch(() => {
        throw new Error(`Missing asset ${value} on ${route}`);
      });
    }
  }
}
const missing =
  '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found | Cristian Țone</title><style>body{font:18px system-ui;color:#073b4c;background:#f0f4f8;padding:10vh 10vw}a{color:#075975}</style><h1>Page not found</h1><p>This page or resource is unavailable.</p><a href="/">Return to Home</a></html>';
await fs.writeFile(
  path.join(root, "404.html"),
  missing.replace('href="/"', `href="${base}/"`),
);
await fs.writeFile(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${deployment.origin}${deployment.base}/${route}</loc></url>`).join("")}</urlset>`,
);
await fs.writeFile(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: ${deployment.base}/\nSitemap: ${deployment.origin}${deployment.base}/sitemap.xml\n`,
);
console.log(
  `Validated ${routes.length} pre-rendered pages and their local assets.`,
);
