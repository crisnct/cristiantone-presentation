import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Doughnut, Pie, Radar } from "react-chartjs-2";
import {
  applicationFocus,
  competencies,
  competencyValues,
  industryExposure,
} from "../content/skills";
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
);
const colors = ["#118AB2", "#06D6A0", "#FFD166", "#FF6B6B", "#073B4C"];
export default function Charts({
  kind,
}: {
  kind: "competencies" | "applications" | "industries";
}) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const common = {
    responsive: true,
    maintainAspectRatio: false,
    animation: reduced ? (false as const) : undefined,
    plugins: { legend: { display: false } },
  };
  if (kind === "competencies")
    return (
      <Radar
        options={{
          ...common,
          scales: {
            r: {
              min: 0,
              max: 15,
              ticks: { display: false },
              pointLabels: { font: { size: 12 } },
            },
          },
        }}
        data={{
          labels: competencies.map((label) =>
            label.includes("&") ? label.split(" & ") : label,
          ),
          datasets: [
            {
              data: competencyValues,
              backgroundColor: "rgba(17,138,178,.2)",
              borderColor: "#118AB2",
              borderWidth: 2,
            },
          ],
        }}
      />
    );
  const items = kind === "applications" ? applicationFocus : industryExposure;
  const Chart = kind === "applications" ? Doughnut : Pie;
  return (
    <Chart
      options={{
        ...common,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: { boxWidth: 18, padding: 12, font: { size: 12 } },
          },
        },
      }}
      data={{
        labels: items.map((item) => item.label),
        datasets: [
          {
            data: items.map((item) => item.value),
            backgroundColor: colors,
            borderWidth: 2,
            borderColor: "#fff",
          },
        ],
      }}
    />
  );
}
