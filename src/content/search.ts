import {
  aboutSections,
  career,
  hireSections,
  homeSections,
  projects,
  certificates,
} from "./migrated";
import type { ContentBlock, ContentSection, SearchEntry } from "./types";
import {
  technicalSkills,
  competencies,
  applicationFocus,
  industryExposure,
} from "./skills";
export const normalizeSearch = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function blockText(block: ContentBlock): string {
  switch (block.kind) {
    case "disclosure":
      return `${block.title} ${block.blocks.map(blockText).join(" ")}`;
    case "paragraph":
    case "heading":
      return block.content.map((item) => item.text).join("");
    case "list":
      return block.items
        .map((items) => items.map((item) => item.text).join(""))
        .join(" ");
    case "image":
      return block.image.alt;
    case "gallery":
      return block.images.map((image) => image.alt).join(" ");
    case "embed-link":
      return block.title;
  }
}
const sections = (
  items: ContentSection[],
  page: string,
  path: string,
): SearchEntry[] =>
  items.flatMap((section) => [
    {
      id: `${path}-${section.id}`,
      title: section.title,
      page,
      href: `${path}#${section.id}`,
      text: section.blocks.map(blockText).join(" "),
    },
    ...section.blocks.flatMap((block) =>
      block.kind === "disclosure"
        ? [
            {
              id: `${path}-${block.id}`,
              title: block.title,
              page,
              href: `${path}#${block.id}`,
              text: block.blocks.map(blockText).join(" "),
            },
          ]
        : [],
    ),
  ]);
export const searchIndex: SearchEntry[] = [
  {
    id: "technical-skills",
    title: "Technical Proficiency",
    page: "Home",
    href: "/#skills-profile",
    text: technicalSkills
      .map((skill) => `${skill.label}: ${skill.years} years of experience`)
      .join(". "),
  },
  {
    id: "core-competencies",
    title: "Core Competencies",
    page: "Home",
    href: "/#skills-profile",
    text: competencies.join(", "),
  },
  {
    id: "domain-experience",
    title: "Domain Experience",
    page: "Home",
    href: "/#domain-experience",
    text: [...applicationFocus, ...industryExposure]
      .map((item) => item.label)
      .join(", "),
  },
  ...homeSections.map((section) => ({
    id: section.title,
    title: section.title,
    page: "Home",
    href: `/#${normalizeSearch(section.title).replace(/[^a-z0-9]+/g, "-")}`,
    text: section.intro,
  })),
  ...career.map((entry, i) => ({
    id: `career-${i}`,
    title: `${entry.role} | ${entry.company}`,
    page: "Home",
    href: "/#career-timeline",
    text: `${entry.period} ${entry.description}`,
  })),
  ...sections(aboutSections, "About", "/about"),
  ...sections(hireSections, "Hire Me", "/hire-me"),
  ...projects.flatMap((project) => [
    {
      id: project.slug,
      title: project.title,
      page: "Projects",
      href: `/projects/${project.slug}`,
      text: `${project.summary} ${project.subtitle} ${project.technologies.join(" ")}`,
    },
    ...sections(project.sections, project.title, `/projects/${project.slug}`),
  ]),
  ...certificates.map((certificate) => ({
    id: certificate.id,
    title: certificate.title,
    page: "Certificates",
    href: `/certificates#${certificate.id}`,
    text: certificate.group,
  })),
];
export function searchContent(
  query: string,
  index: SearchEntry[] = searchIndex,
) {
  const words = normalizeSearch(query.trim()).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return index
    .filter((entry) =>
      words.every((word) =>
        normalizeSearch(`${entry.title} ${entry.text}`).includes(word),
      ),
    )
    .map((entry) => {
      const normalized = normalizeSearch(entry.text);
      const match = words
        .map((word) => normalized.indexOf(word))
        .filter((i) => i >= 0);
      const start = Math.max(0, (match.length ? Math.min(...match) : 0) - 45);
      return {
        ...entry,
        snippet: `${start ? "…" : ""}${entry.text.slice(start, start + 190)}${entry.text.length > start + 190 ? "…" : ""}`,
      };
    })
    .slice(0, 30);
}
