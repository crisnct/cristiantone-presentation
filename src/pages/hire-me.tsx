import { Hero } from "../components/layout";
import { ContentSections } from "../components/content";
import { hireSections } from "../content/migrated";
import { pageMeta } from "../content/metadata";
import { site } from "../content/site";
export const meta = () =>
  pageMeta(
    "Hire Me",
    "Seven reasons to work with Cristian Țone: Java experience, verifiable references, long-term commitment and technical leadership.",
    "/hire-me",
  );
export default function HireMe() {
  return (
    <>
      <Hero title="Hire Me" subtitle={site.statement} />
      <main id="main-content" className="container section">
        <h2 className="page-intro">7 Reasons Why It’s Worth To Hire Me</h2>
        <ContentSections sections={hireSections} />
        <div className="contact-card card">
          <h2>Let’s work together</h2>
          <a className="button primary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </main>
    </>
  );
}
