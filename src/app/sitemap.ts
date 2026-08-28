import type { MetadataRoute } from "next";
import { PRIORITY_CITY_PAGES } from "@/lib/local-seo";
import { CITY_SERVICE_PAGES, SPECIALTY_SERVICE_PAGES } from "@/lib/seo-pages";
import { BLOG_POSTS } from "@/lib/blog-posts";

const SEO_AUDIT_UPDATE_DATE = "2026-08-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kiddscleanup.com";

  return [
    { url: baseUrl, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services/residential`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/commercial`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/junk-removal`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/lead-safe`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/water-mitigation`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    ...SPECIALTY_SERVICE_PAGES.map((page) => ({
      url: `${baseUrl}/services/${page.slug}`,
      lastModified: SEO_AUDIT_UPDATE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PRIORITY_CITY_PAGES.map((city) => ({
      url: `${baseUrl}/service-areas/${city.slug}`,
      lastModified: SEO_AUDIT_UPDATE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...CITY_SERVICE_PAGES.map((page) => ({
      url: `${baseUrl}/${page.service}/${page.citySlug}`,
      lastModified: SEO_AUDIT_UPDATE_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/blog`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.75 },
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/about`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: SEO_AUDIT_UPDATE_DATE, changeFrequency: "yearly", priority: 0.3 },
  ];
}
