import { useLocation } from "react-router";
import { Hero } from "../components/layout";
import { ContentSections } from "../components/content";
import { projects } from "../content/migrated";
import { pageMeta } from "../content/metadata";
import type { Project } from "../content/types";
export const meta = ({ location }: { location: { pathname: string } }) => {
  const project = projects.find((item) =>
    location.pathname.replace(/\/+$/, "").endsWith(`/${item.slug}`),
  );
  return pageMeta(
    project?.title || "Project",
    project?.summary || "Software project",
    `/projects/${project?.slug || ""}`,
  );
};
export default function ProjectPage() {
  const location = useLocation();
  const project: Project | undefined = projects.find((item) =>
    location.pathname.replace(/\/+$/, "").endsWith(`/${item.slug}`),
  );
  if (!project)
    return (
      <main id="main-content">
        <h1>Project not found</h1>
      </main>
    );
  return (
    <>
      <Hero
        title={project.title}
        subtitle={project.subtitle || project.summary}
      />
      <main id="main-content" className="container section">
        {project.technologies.length > 0 && (
          <section className="card content-section" id="technical-stack">
            <h2>Technical Stack</h2>
            <ul className="tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        )}
        <ContentSections sections={project.sections} />
      </main>
    </>
  );
}
