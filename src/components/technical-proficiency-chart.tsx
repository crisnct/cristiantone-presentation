import type { Skill } from "../content/types";

const colors = [
  "#118AB2",
  "#06D6A0",
  "#FFD166",
  "#FF6B6B",
  "#073B4C",
  "#8B5CF6",
  "#F59E0B",
];

export function TechnicalProficiencyChart({
  skills,
  maxYears = 16,
}: {
  skills: readonly Skill[];
  maxYears?: number;
}) {
  const maximum = Math.max(maxYears, ...skills.map((skill) => skill.years));
  const ticks = Array.from({ length: 9 }, (_, index) => (maximum * index) / 8);
  const groups = new Map<number, { labels: string[]; color: string }>();
  skills.forEach((skill) => {
    const group = groups.get(skill.years);
    if (group) group.labels.push(skill.label);
    else
      groups.set(skill.years, {
        labels: [skill.label],
        color: colors[groups.size % colors.length] ?? "#118AB2",
      });
  });
  return (
    <figure
      className="technical-proficiency-chart"
      aria-label="Technical proficiency in years of experience"
    >
      <ol className="technical-skill-list">
        {Array.from(groups, ([years, group]) => (
          <li className="technical-skill-row" key={years}>
            <span className="technical-skill-label">
              {group.labels.join(", ")}
            </span>
            <span className="technical-skill-track" aria-hidden="true">
              <span
                className="technical-skill-bar"
                style={{
                  width: `${(years / maximum) * 100}%`,
                  backgroundColor: group.color,
                }}
              />
            </span>
            <span className="technical-skill-value">
              {years}
              <span className="sr-only"> years</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="technical-chart-axis" aria-hidden="true">
        <div>
          {ticks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      </div>
      <figcaption>Years of experience</figcaption>
    </figure>
  );
}
