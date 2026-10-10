import { assetUrl, pageUrl, site } from "./site";
import { branding } from "./migrated";
export function pageMeta(title: string, description: string, path: string) {
  const fullTitle =
    title === "Home"
      ? `${site.name} | ${site.role}`
      : `${title} | ${site.shortName}`;
  return [
    { title: fullTitle },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: pageUrl(path) },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl(path) },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: `${site.origin}${assetUrl(branding.portrait)}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
