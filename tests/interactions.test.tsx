import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { Gallery, ContentSections } from "../src/components/content";
describe("gallery", () => {
  it("wraps in both directions and supports arrow keys", async () => {
    const user = userEvent.setup();
    render(
      <Gallery
        id="example"
        images={[
          { src: "images/a.png", alt: "First image" },
          { src: "images/b.png", alt: "Second image" },
        ]}
      />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "First image");
    await user.click(screen.getByRole("button", { name: "Previous image" }));
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Second image");
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "First image");
    await user.click(screen.getByRole("button", { name: "Next image" }));
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Second image");
  });
});
describe("disclosures", () => {
  it("opens a collapsed section when linked through search", () => {
    window.history.replaceState(null, "", "#early");
    const { container } = render(
      <MemoryRouter initialEntries={["/#early"]}>
        <ContentSections
          sections={[
            {
              id: "early",
              title: "Early discoveries",
              collapsed: true,
              blocks: [
                { kind: "paragraph", content: [{ text: "Archived story" }] },
              ],
            },
          ]}
        />
      </MemoryRouter>,
    );
    expect(container.querySelector("details")).toHaveAttribute("open");
    window.history.replaceState(null, "", "/");
  });
});
