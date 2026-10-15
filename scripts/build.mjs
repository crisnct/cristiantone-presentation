import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import deployment from "../src/content/deployment.json" with { type: "json" };

const cli = path.resolve("node_modules/@react-router/dev/bin.cjs");
// Build sequentially because React Router generates shared route types.
for (const [directory, base] of [
  ["artifacts/public-build", deployment.base],
  ["build", ""],
]) {
  execFileSync(process.execPath, [cli, "build"], {
    stdio: "inherit",
    env: { ...process.env, SITE_BASE: base, BUILD_DIRECTORY: directory },
  });
  execFileSync(process.execPath, ["scripts/finalize-build.mjs"], {
    stdio: "inherit",
    env: { ...process.env, SITE_BASE: base, BUILD_DIRECTORY: directory },
  });
}
await fs.cp(
  `artifacts/public-build/client${deployment.base}`,
  `build/client${deployment.base}`,
  {
    recursive: true,
  },
);
console.log(
  `Local application: build/client/; public application: build/client${deployment.base}/`,
);
