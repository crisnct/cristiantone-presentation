import type { Config } from "@react-router/dev/config";
import deployment from "./src/content/deployment.json" with { type: "json" };

export default {
  appDirectory: "src/app",
  basename: `${process.env.SITE_BASE ?? deployment.base}/`,
  buildDirectory: process.env.BUILD_DIRECTORY || "build",
  ssr: false,
  prerender: true,
} satisfies Config;
