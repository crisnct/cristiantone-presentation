import fs from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import {
  aboutSections,
  hireSections,
  projects,
  certificates,
  career,
  branding,
} from "../src/content/migrated";
import type { ContentBlock, ContentSection } from "../src/content/types";
function sources(block: ContentBlock): string[] {
  if (block.kind === "image") return [block.image.src];
  if (block.kind === "gallery") return block.images.map((image) => image.src);
  if (block.kind === "disclosure") return block.blocks.flatMap(sources);
  return [];
}
describe("migration assets", () => {
  it("includes every referenced original image and document locally", () => {
    const assets = [
      ...Object.values(branding),
      ...career.map((entry) => entry.logo),
      ...certificates.map((certificate) => certificate.image.src),
      ...[
        ...aboutSections,
        ...hireSections,
        ...projects.flatMap<ContentSection>((project) => project.sections),
      ].flatMap((section) => section.blocks.flatMap(sources)),
      "documents/cristian-tone-dev-resume.pdf",
    ];
    for (const asset of assets) {
      expect(asset).not.toMatch(/^https?:/);
      expect(fs.existsSync(path.resolve("public", asset)), asset).toBe(true);
    }
    expect(certificates).toHaveLength(9);
    expect(projects).toHaveLength(5);
  });
  it("preserves the complete SnowSWT gallery order", () => {
    const project = projects.find((project) => project.slug === "snowswt")!;
    const images = project.sections.flatMap((section) =>
      section.blocks.flatMap((block) =>
        block.kind === "gallery" ? block.images : [],
      ),
    );
    expect(images.map((image) => image.src)).toEqual(
      Array.from({ length: 25 }, (_, i) => `images/snowswt-${i + 1}.png`),
    );
  });
});
