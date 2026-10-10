import { Hero } from "../components/layout";
import { ContentSections } from "../components/content";
import { aboutSections } from "../content/migrated";
import { pageMeta } from "../content/metadata";
export const meta = () =>
  pageMeta(
    "About",
    "My journey from BASIC and game development to Java, UX design and leadership.",
    "/about",
  );
export default function About() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle="My Journey – From BASIC to UX and Leadership"
      />
      <main id="main-content" className="container section">
        <ContentSections sections={aboutSections} />
      </main>
    </>
  );
}
