export interface InlineContent {
  text: string;
  href?: string;
  strong?: boolean;
  emphasis?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
export type ContentBlock =
  | { kind: "paragraph"; content: InlineContent[] }
  | { kind: "heading"; level: 2 | 3 | 4; id: string; content: InlineContent[] }
  | { kind: "list"; ordered: boolean; items: InlineContent[][] }
  | { kind: "image"; image: GalleryImage }
  | { kind: "gallery"; id: string; images: GalleryImage[] }
  | { kind: "disclosure"; id: string; title: string; blocks: ContentBlock[] }
  | { kind: "embed-link"; href: string; title: string };

export interface ContentSection {
  id: string;
  title: string;
  collapsed?: boolean;
  blocks: ContentBlock[];
}
export interface CareerEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  logo: string;
}
export interface Skill {
  label: string;
  years: number;
}
export interface Project {
  slug: string;
  title: string;
  category: "software" | "design";
  icon: string;
  summary: string;
  subtitle: string;
  technologies: string[];
  sections: ContentSection[];
}
export interface Certificate {
  id: string;
  title: string;
  group: string;
  image: GalleryImage;
}
export interface SearchEntry {
  id: string;
  title: string;
  page: string;
  href: string;
  text: string;
}
