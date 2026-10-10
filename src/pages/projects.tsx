import { Link } from "react-router";
import { Hero } from "../components/layout";
import { projects } from "../content/migrated";
import { pageMeta } from "../content/metadata";
export const meta = () =>
  pageMeta(
    "Projects",
    "Software development and UX/UI portfolio: Metal Investment, JobsHunter, Simple Contacts Manager, SnowSWT and VeriDate.",
    "/projects",
  );
export default function Projects() {
  return (
    <>
      <Hero title="Projects" subtitle="Software development & UX/UI design" />
      <main id="main-content" className="container section">
        {(["software", "design"] as const).map((category) => (
          <section className="section" key={category}>
            <h2>
              {category === "software"
                ? "Software Development Portfolio"
                : "UX/UI Design Portfolio"}
            </h2>
            <p className="section-intro">
              {category === "software"
                ? "Practical demonstrations of technical skills, problem-solving, SOLID principles and Domain-Driven Design."
                : "Research, visual design and interactive prototypes that put people first."}
            </p>
            <div className="grid three">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Link
                    to={`/projects/${project.slug}`}
                    className="card project-card"
                    key={project.slug}
                  >
                    <span className="project-icon" aria-hidden="true">
                      {project.icon || "💻"}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <span className="project-link">Explore project →</span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
