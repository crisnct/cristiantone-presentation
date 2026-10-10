import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
const root = path.resolve("build/client");
const port = Number(process.env.PORT || 8082);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".data": "text/x-script",
};
const aliases = {
  "/cristiantone": "/cristiantone/",
  "/cristiantone/home": "/cristiantone/",
  "/cristiantone/home/": "/cristiantone/",
  "/cristiantone/portfolio": "/cristiantone/projects",
  "/cristiantone/portfolio/": "/cristiantone/projects",
};
http
  .createServer(async (request, response) => {
    try {
      const url = new URL(request.url, "http://localhost");
      if (aliases[url.pathname]) {
        response.writeHead(308, {
          Location: aliases[url.pathname] + url.search,
        });
        response.end();
        return;
      }
      const name = decodeURIComponent(url.pathname);
      let file = path.resolve(root, `.${name}`);
      if (!file.startsWith(root + path.sep)) {
        response.writeHead(404);
        response.end();
        return;
      }
      try {
        const stat = await fs.stat(file);
        if (stat.isDirectory()) file = path.join(file, "index.html");
        await fs.access(file);
        response.writeHead(200, {
          "Content-Type":
            types[path.extname(file)] || "application/octet-stream",
          "Cache-Control": name.includes("/assets/")
            ? "public,max-age=31536000,immutable"
            : "no-cache",
        });
        response.end(await fs.readFile(file));
      } catch {
        response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        response.end(
          await fs.readFile(path.join(root, "cristiantone/404.html")),
        );
      }
    } catch {
      response.writeHead(400);
      response.end();
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Static preview: http://127.0.0.1:${port}/cristiantone/`),
  );
