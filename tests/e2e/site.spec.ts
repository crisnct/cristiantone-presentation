import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const prefix = "/cristiantone";
const paths = [
  "/",
  "/hire-me",
  "/projects",
  "/projects/metal-investment",
  "/projects/jobs-hunter",
  "/projects/simple-contacts",
  "/projects/snowswt",
  "/projects/veridate",
  "/certificates",
  "/about",
];
test("all pre-rendered routes work directly and after refresh", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  const external: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("requestfailed", (request) =>
    errors.push(`Request failed: ${request.url()}`),
  );
  page.on("request", (request) => {
    if (
      !request.url().startsWith(testInfo.project.use.baseURL as string) &&
      !request.url().startsWith("data:")
    )
      external.push(request.url());
  });
  for (const path of paths) {
    const response = await page.goto(prefix + path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    await page.reload();
    await expect(page.locator("h1")).toBeVisible();
    if (path === "/") {
      await expect(page.locator("canvas")).toHaveCount(3);
      await expect(page.locator(".technical-skill-row")).toHaveCount(7);
      expect(
        await page
          .locator(".technical-skill-bar")
          .evaluateAll(
            (bars) =>
              new Set(bars.map((bar) => getComputedStyle(bar).backgroundColor))
                .size,
          ),
      ).toBe(7);
      expect(
        await page
          .locator(".technical-skill-bar")
          .evaluateAll((bars) =>
            bars.every(
              (bar) =>
                Math.abs(bar.getBoundingClientRect().height - 7.2) < 0.02,
            ),
          ),
      ).toBe(true);
      expect(
        await page
          .locator(".technical-proficiency-chart")
          .evaluate((figure) => {
            const caption = figure
              .closest(".chart-card")
              ?.querySelector(".chart-caption");
            return (
              caption &&
              caption.getBoundingClientRect().top >=
                figure.getBoundingClientRect().bottom
            );
          }),
      ).toBe(true);
      for (const label of [
        "Java 7–11",
        "Java 17–25",
        "Spring Boot, REST API, JPA",
        "PostgreSQL",
        "Amazon S3, Kubernetes, Docker, Jenkins CI/CD, JUnit 5, Mockito",
        "GCP, AWS, Kafka, ActiveMQ",
        "SWT, Eclipse RCP",
      ])
        await expect(page.getByText(label, { exact: true })).toBeVisible();
    }
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`${prefix}${path === "/" ? "/$" : path + "$"}`),
    );
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
      )
      .toBe(true);
    const broken = await page
      .locator("img")
      .evaluateAll((images) =>
        images
          .filter(
            (image) =>
              image instanceof HTMLImageElement &&
              image.complete &&
              image.naturalWidth === 0,
          )
          .map((image) => (image as HTMLImageElement).src),
      );
    expect(broken).toEqual([]);
  }
  expect(errors).toEqual([]);
  expect(external).toEqual([]);
});
test("charts stay within the page when resizing", async ({ page }) => {
  await page.goto(prefix + "/");
  await expect(page.locator("canvas")).toHaveCount(3);
  for (const width of [1440, 768, 360]) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
      )
      .toBe(true);
  }
});
test("navigation and local search", async ({ page }, testInfo) => {
  await page.goto(prefix + "/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Menu" }).click();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("button", { name: "Search website" }).click();
  await page.getByRole("searchbox").fill("VERIDATE");
  await page.locator(".search-results a").first().click();
  await expect(page).toHaveURL(/veridate/);
  await page.getByRole("button", { name: "Search website" }).click();
  await page.getByRole("searchbox").fill("zzzzzzzzzz");
  await expect(
    page.getByText("No results found. Try a different word."),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".search-dialog")).not.toBeVisible();
  await page.goto(prefix + "/hire-me");
  await page.getByRole("button", { name: "Search website" }).click();
  await page.getByRole("searchbox").fill("code-review");
  await page.locator('.search-results a[href$="#code-review"]').click();
  await expect(page.locator("details#code-review")).toHaveAttribute("open", "");
});
test("disclosure, gallery keyboard and certificate viewer", async ({
  page,
}) => {
  await page.goto(prefix + "/about");
  const details = page.locator("details").first();
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await page.goto(prefix + "/projects/snowswt");
  const next = page.getByRole("button", { name: "Next image" }).first();
  await next.click();
  await expect(page.locator(".gallery-controls p").first()).toHaveText(
    /^2 \/ /,
  );
  await next.press("ArrowRight");
  await expect(page.locator(".gallery-controls p").first()).toHaveText(
    /^3 \/ /,
  );
  await page.goto(prefix + "/certificates");
  await page
    .getByRole("button", { name: /Enlarge/ })
    .first()
    .click();
  await expect(page.locator("dialog[open]")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("dialog[open]")).toHaveCount(0);
});
test("real 404 responses, aliases and local CV", async ({ request }) => {
  for (const path of [
    "/missing-page",
    "/assets/missing.js",
    "/images/missing.png",
  ])
    expect((await request.get(prefix + path)).status()).toBe(404);
  expect(
    (await request.get(prefix + "?test=1", { maxRedirects: 0 })).headers()
      .location,
  ).toBe(prefix + "/?test=1");
  expect(
    (await request.get(prefix + "/home?test=1", { maxRedirects: 0 })).headers()
      .location,
  ).toBe(prefix + "/?test=1");
  expect(
    (await request.get(prefix + "/portfolio", { maxRedirects: 0 })).status(),
  ).toBe(308);
  const pdf = await request.get(
    prefix + "/documents/cristian-tone-dev-resume.pdf",
  );
  expect(pdf.status()).toBe(200);
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
});
test("accessibility and visual records", async ({ page }, testInfo) => {
  await fs.mkdir("artifacts", { recursive: true });
  const report = [];
  for (const path of paths) {
    await page.goto(prefix + path);
    await expect(page.locator("h1")).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    report.push({ path, violations: results.violations });
  }
  await fs.writeFile(
    `artifacts/accessibility-${testInfo.project.name}.json`,
    JSON.stringify(report, null, 2),
  );
  expect(
    report.flatMap(({ path, violations }) =>
      violations
        .filter((issue) => ["serious", "critical"].includes(issue.impact || ""))
        .map((issue) => ({
          path,
          id: issue.id,
          nodes: issue.nodes.map((node) => node.target),
        })),
    ),
  ).toEqual([]);
  await page.goto(prefix + "/");
  await page.screenshot({
    path: `artifacts/home-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.screenshot({
    path: `artifacts/home-${testInfo.project.name}-viewport.png`,
  });
  await page.getByRole("button", { name: "Search website" }).click();
  const modal = await new AxeBuilder({ page }).analyze();
  expect(
    modal.violations
      .filter((issue) => ["serious", "critical"].includes(issue.impact || ""))
      .map((issue) => issue.id),
  ).toEqual([]);
});
