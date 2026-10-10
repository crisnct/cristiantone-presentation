import { Hero } from "../components/layout";
import { ImageViewer } from "../components/content";
import { certificates } from "../content/migrated";
import { pageMeta } from "../content/metadata";
export const meta = () =>
  pageMeta(
    "Certificates",
    "Informatics degree, leadership courses and Google UX/UI design certificates.",
    "/certificates",
  );
export default function Certificates() {
  const groups = [...new Set(certificates.map((item) => item.group))];
  return (
    <>
      <Hero
        title="Certificates"
        subtitle="Education, leadership & UX/UI design"
      />
      <main id="main-content" className="container section">
        {groups.map((group) => (
          <section key={group} className="section">
            <h2>{group}</h2>
            <div className="grid two certificates">
              {certificates
                .filter((item) => item.group === group)
                .map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className="card certificate-card"
                  >
                    <h3>{item.title}</h3>
                    <ImageViewer image={item.image} title={item.title} />
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
