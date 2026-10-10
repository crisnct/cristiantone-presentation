import type { Skill } from "./types";
export const technicalSkills: Skill[] = [
  ["Java 7–11", 10],
  ["Java 17–25", 6],
  ["Spring Boot", 5],
  ["REST API", 5],
  ["JPA", 5],
  ["PostgreSQL", 3],
  ["Amazon S3", 2],
  ["Kubernetes", 2],
  ["Docker", 2],
  ["Jenkins CI/CD", 2],
  ["JUnit 5", 2],
  ["Mockito", 2],
  ["GCP", 1],
  ["AWS", 1],
  ["Kafka", 1],
  ["ActiveMQ", 1],
  ["SWT", 15],
  ["Eclipse RCP", 15],
].map(([label, years]) => ({ label: String(label), years: Number(years) }));
export const competencies = [
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Organization & Prioritization",
  "Responsibility & Trustworthiness",
];
export const competencyValues = [9, 8, 9, 8, 9];
export const applicationFocus = [
  { label: "Desktop Applications", value: 14 },
  { label: "Web Backends", value: 5 },
];
export const industryExposure = [
  { label: "Logistics", value: 10.4 },
  { label: "Automotive", value: 5 },
  { label: "Healthcare", value: 0.6 },
  { label: "Gaming", value: 1.4 },
];
