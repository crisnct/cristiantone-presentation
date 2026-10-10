import { lazy, Suspense, useSyncExternalStore } from "react";
import { TechnicalProficiencyChart } from "./technical-proficiency-chart";
import { technicalSkills } from "../content/skills";
const Charts = lazy(() => import("./charts.client"));
const subscribe = () => () => {};
export function ChartCard({
  title,
  kind,
  children,
  caption,
}: {
  title: string;
  kind: "competencies" | "technical" | "applications" | "industries";
  children: React.ReactNode;
  caption: string;
}) {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  return (
    <article className="card chart-card">
      <h3>{title}</h3>
      <div
        className={`chart chart-${kind}`}
        aria-hidden={kind === "technical" ? undefined : true}
      >
        {kind === "technical" ? (
          <TechnicalProficiencyChart skills={technicalSkills} />
        ) : (
          mounted && (
            <Suspense fallback={<p>Loading chart…</p>}>
              <Charts kind={kind} />
            </Suspense>
          )
        )}
      </div>
      <div className="chart-caption">
        <p>{caption}</p>
        <details>
          <summary>View chart data</summary>
          {children}
        </details>
      </div>
    </article>
  );
}
