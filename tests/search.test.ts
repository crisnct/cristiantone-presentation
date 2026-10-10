import { describe, expect, it } from "vitest";
import { normalizeSearch, searchContent } from "../src/content/search";
import type { SearchEntry } from "../src/content/types";
const entries: SearchEntry[] = [
  {
    id: "1",
    title: "Țone – Java",
    page: "About",
    href: "/about#career",
    text: "Leadership in Timișoara with Spring Boot and Kafka.",
  },
  {
    id: "2",
    title: "VeriDate",
    page: "Projects",
    href: "/projects/veridate",
    text: "UX research and Figma prototypes.",
  },
];
describe("local search", () => {
  it("matches without case or Romanian diacritics", () => {
    expect(normalizeSearch("ȚONE în Timișoara")).toBe("tone in timisoara");
    expect(
      searchContent("TIMISOARA java", entries).map((entry) => entry.id),
    ).toEqual(["1"]);
  });
  it("requires every term and handles blank/no-match queries", () => {
    expect(searchContent("Kafka Figma", entries)).toEqual([]);
    expect(searchContent(" ", entries)).toEqual([]);
    expect(searchContent("unknown", entries)).toEqual([]);
  });
  it("returns the original text snippet and section link", () => {
    const result = searchContent("leadership", entries)[0];
    expect(result?.href).toBe("/about#career");
    expect(result?.snippet).toContain("Timișoara");
  });
  it("indexes all migrated projects and collapsed content", () => {
    expect(
      searchContent("VeriDate").some(
        (entry) => entry.href === "/projects/veridate",
      ),
    ).toBe(true);
    expect(
      searchContent("feedback").some((entry) => entry.page === "Hire Me"),
    ).toBe(true);
  });
});
