import { Link } from "react-router";
import { Hero } from "../components/layout";
import { ChartCard } from "../components/chart-card";
import { career, homeSections } from "../content/migrated";
import { assetUrl, site } from "../content/site";
import { pageMeta } from "../content/metadata";
import {
  applicationFocus,
  competencies,
  competencyValues,
  industryExposure,
  technicalSkills,
} from "../content/skills";
export const meta = () =>
  pageMeta(
    "Home",
    "Senior Java Backend Engineer with 18+ years of experience, technical leadership and a software and UX portfolio.",
    "/",
  );
function Intro({ index }: { index: number }) {
  const item = homeSections[index];
  return item ? (
    <>
      <h2>{item.title}</h2>
      <p className="section-intro">{item.intro}</p>
    </>
  ) : null;
}
export default function Home() {
  return (
    <>
      <Hero title={site.name} subtitle={site.role} home />
      <main id="main-content" className="container">
        <section id="career-at-a-glance" className="section">
          <Intro index={0} />
          <div className="grid three stats">
            {[
              ["18+", "Years of Professional Experience"],
              ["5+", "Years of Leadership Experience"],
              ["4", "Key Industries Served"],
            ].map(([number, label], i) => (
              <article className={`stat stat-${i}`} key={label}>
                <strong>{number}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="skills-profile" className="section">
          <Intro index={1} />
          <div className="grid two">
            <ChartCard
              title="Core Competencies"
              kind="competencies"
              caption="A balanced profile of leadership, technical communication, and strategic problem-solving developed over years of experience."
            >
              <ul>
                {competencies.map((label, i) => (
                  <li key={label}>
                    {label}: {competencyValues[i]} / 15
                  </li>
                ))}
              </ul>
            </ChartCard>
            <ChartCard
              title="Technical Proficiency"
              kind="technical"
              caption="Extensive, long-term expertise in core development technologies, frameworks, and version control systems."
            >
              <ul>
                {technicalSkills.map((skill) => (
                  <li key={skill.label}>
                    {skill.label}: {skill.years} years
                  </li>
                ))}
              </ul>
            </ChartCard>
          </div>
        </section>
        <section id="career-timeline" className="section">
          <Intro index={2} />
          <ol className="timeline card">
            {career.map((entry) => (
              <li key={entry.company}>
                <div>
                  <p className="period">{entry.period}</p>
                  <h3>
                    {entry.role} | {entry.company}
                  </h3>
                  <p>{entry.description}</p>
                </div>
                <img
                  src={assetUrl(entry.logo)}
                  alt={`${entry.company} logo`}
                  loading="lazy"
                />
              </li>
            ))}
          </ol>
        </section>
        <section id="domain-experience" className="section">
          <Intro index={3} />
          <div className="grid two">
            <ChartCard
              title="Application Focus"
              kind="applications"
              caption="A deep specialization in complex desktop applications, complemented by significant experience in building robust web application backends."
            >
              <ul>
                {applicationFocus.map((item) => (
                  <li key={item.label}>
                    {item.label}: {item.value} years
                  </li>
                ))}
              </ul>
            </ChartCard>
            <ChartCard
              title="Industry Exposure"
              kind="industries"
              caption="Diverse experience across several technically demanding sectors, from logistics and automotive to gaming and healthcare."
            >
              <ul>
                {industryExposure.map((item) => (
                  <li key={item.label}>
                    {item.label}: {item.value} years
                  </li>
                ))}
              </ul>
            </ChartCard>
          </div>
        </section>
        <section id="ux-ui-design" className="section">
          <Intro index={4} />
          <div className="grid three">
            {[
              [
                "🔎",
                "User Research",
                "Conducting interviews and competitive audits to inform design decisions.",
              ],
              [
                "🎨",
                "Visual Design",
                "Selecting typography and colors with a focus on accessibility and brand identity.",
              ],
              [
                "📱",
                "Prototyping",
                "Creating wireframes, mockups, and interactive prototypes in Figma.",
              ],
            ].map(([icon, title, text]) => (
              <article key={title} className="card feature">
                <span aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="section grid two cta-section"
          aria-label="Portfolio and curriculum vitae"
        >
          <Link to="/projects" className="card feature">
            <span aria-hidden="true">💼</span>
            <h2>Portfolio</h2>
            <p>Explore software and UX/UI projects →</p>
          </Link>
          <article className="card feature">
            <span aria-hidden="true">👨‍💻</span>
            <h2>Curriculum Vitae</h2>
            <div className="actions">
              <a className="button primary" href={assetUrl(site.cv)}>
                View CV
              </a>
              <a className="button secondary" href={assetUrl(site.cv)} download>
                Download CV
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
