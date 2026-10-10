import { index, route, type RouteConfig } from "@react-router/dev/routes";
export default [
  index("../pages/home.tsx"),
  route("hire-me", "../pages/hire-me.tsx"),
  route("projects", "../pages/projects.tsx"),
  ...[
    "metal-investment",
    "jobs-hunter",
    "simple-contacts",
    "snowswt",
    "veridate",
  ].map((slug) =>
    route(`projects/${slug}`, "../pages/project.tsx", { id: slug }),
  ),
  route("certificates", "../pages/certificates.tsx"),
  route("about", "../pages/about.tsx"),
] satisfies RouteConfig;
