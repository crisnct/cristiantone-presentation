import deployment from "./deployment.json" with { type: "json" };

export const site = {
  name: "Nelu-Cristian Țone",
  shortName: "Cristian Țone",
  role: "Senior Java Backend Engineer",
  email: "nelucristian2005@gmail.com",
  statement:
    "I build high-quality software through clean architecture, rigorous code reviews, human-centered leadership, and clean, maintainable code.",
  origin: deployment.origin,
  base: deployment.base,
  cv: "documents/cristian-tone-dev-resume.pdf",
  linkedin: "https://www.linkedin.com/in/ctone/",
  github: "https://github.com/crisnct",
} as const;

export const assetUrl = (path: string) =>
  `${site.base}/${path.replace(/^\/+/, "")}`;
export const pageUrl = (path = "/") => `${site.origin}${site.base}${path}`;
export const navigation = [
  { label: "Home", to: "/" },
  { label: "Hire Me", to: "/hire-me" },
  { label: "Projects", to: "/projects" },
  { label: "Certificates", to: "/certificates" },
  { label: "About", to: "/about" },
] as const;
