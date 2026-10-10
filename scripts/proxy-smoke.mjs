import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import { createHash } from "node:crypto";
const routes = [
  "/",
  "/medicina/",
  "/mcp",
  "/.well-known/oauth-protected-resource",
  "/.well-known/oauth-authorization-server",
  "/.well-known/jwks.json",
  "/authorize",
  "/token",
];
const snapshot = [];
for (const route of routes) {
  const raw = execFileSync(
    "docker",
    [
      "exec",
      "jobshunter-nginx",
      "curl",
      "-sS",
      "--max-time",
      "20",
      "-D",
      "-",
      "-H",
      "Host: ronin-archesporial-lonnie.ngrok-free.dev",
      `http://127.0.0.1:8080${route}`,
    ],
    { encoding: "utf8", maxBuffer: 10_000_000 },
  );
  const boundary = raw.indexOf("\r\n\r\n");
  const headers = raw.slice(0, boundary);
  const body = raw.slice(boundary + 4);
  const row = {
    route,
    status: Number(headers.match(/^HTTP\/\S+ (\d+)/)?.[1]),
    routedTo: headers.match(/x-routed-to:\s*(.+)/i)?.[1]?.trim(),
    contentType: headers.match(/content-type:\s*(.+)/i)?.[1]?.trim(),
    bodyBytes: Buffer.byteLength(body),
    sha256: createHash("sha256").update(body).digest("hex"),
  };
  snapshot.push(row);
}
await fs.mkdir("artifacts", { recursive: true });
const output = process.argv[2] || "artifacts/proxy-smoke.json";
await fs.writeFile(output, JSON.stringify(snapshot, null, 2));
console.log(
  JSON.stringify(
    snapshot.map(({ route, status, routedTo }) => ({
      route,
      status,
      routedTo,
    })),
    null,
    2,
  ),
);
if (process.argv[3]) {
  const baseline = JSON.parse(await fs.readFile(process.argv[3], "utf8"));
  const differences = snapshot.filter(
    (row, i) =>
      row.status !== baseline[i].status ||
      row.routedTo !== baseline[i].routedTo ||
      row.contentType !== baseline[i].contentType ||
      (row.route.startsWith("/.well-known/") &&
        row.sha256 !== baseline[i].sha256),
  );
  if (differences.length)
    throw new Error(
      `Proxy regression: ${differences.map((row) => row.route).join(", ")}`,
    );
  console.log(
    "Existing proxy status, routing and OAuth metadata match the baseline.",
  );
}
