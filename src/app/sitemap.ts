import type { MetadataRoute } from "next";
import { PRIORITY_CITY_PAGES } from "@/lib/local-seo";
import { CITY_SERVICE_PAGES, SPECIALTY_SERVICE_PAGES } from "@/lib/seo-pages";

const SEO_EXPANSION_DATE = "2026-07-08";
const LATEST_CONTENT_DATE = "2026-07-17";
const SEO_OWNERSHIP_UPDATE_DATE = "2026-08-13";
const SEO_OWNERSHIP_UPDATE_SLUGS = new Set([
  "demolition",
  "construction-debris-removal",
  "cleanouts",
  "garage-cleanouts",
  "hoarder-cleanouts",
  "rental-property-cleanouts",
]);
const UPDATED_SPECIALTY_SLUGS = new Set([
  "furniture-removal",
  "appliance-removal",
  "yard-debris-removal",
  "bulk-trash-pickup",
  "water-damage-cleanup",
  "flood-cleanup",
  "burst-pipe-cleanup",
  "water-extraction",
  "basement-water-cleanup",
  "basement-cleanouts",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kiddscleanup.com";

  return [
    { url: baseUrl, lastModified: SEO_EXPANSION_DATE, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services/residential`, lastModified: LATEST_CONTENT_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/commercial`, lastModified: LATEST_CONTENT_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/junk-removal`, lastModified: SEO_OWNERSHIP_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/lead-safe`, lastModified: SEO_EXPANSION_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/water-mitigation`, lastModified: SEO_OWNERSHIP_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    ...SPECIALTY_SERVICE_PAGES.map((page) => ({
      url: `${baseUrl}/services/${page.slug}`,
      lastModified: SEO_OWNERSHIP_UPDATE_SLUGS.has(page.slug)
        ? SEO_OWNERSHIP_UPDATE_DATE
        : UPDATED_SPECIALTY_SLUGS.has(page.slug)
          ? LATEST_CONTENT_DATE
          : SEO_EXPANSION_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PRIORITY_CITY_PAGES.map((city) => ({
      url: `${baseUrl}/service-areas/${city.slug}`,
      lastModified: SEO_EXPANSION_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...CITY_SERVICE_PAGES.map((page) => ({
      url: `${baseUrl}/${page.service}/${page.citySlug}`,
      lastModified: SEO_EXPANSION_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/about`, lastModified: SEO_OWNERSHIP_UPDATE_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: SEO_EXPANSION_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: SEO_EXPANSION_DATE, changeFrequency: "yearly", priority: 0.3 },
  ];
}
