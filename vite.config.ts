import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import deployment from "./src/content/deployment.json" with { type: "json" };

export default defineConfig({
  base: `${process.env.SITE_BASE ?? deployment.base}/`,
  define: {
    "import.meta.env.VITE_APP_BASE": JSON.stringify(
      process.env.SITE_BASE ?? deployment.base,
    ),
  },
  plugins: [tailwindcss(), reactRouter()],
  server: { port: 5173, strictPort: true },
});
