import { COMPANY, SERVICE_AREA_CITIES } from "@/lib/constants";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { FAQItem } from "@/components/FAQSection";

const SITE_URL = "https://kiddscleanup.com";
const WEBSITE_ID = `${SITE_URL}/#website`;
const BUSINESS_ID = `${SITE_URL}/#business`;

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function schemaId(path: string, suffix: string) {
  return `${toAbsoluteUrl(path)}#${suffix}`;
}

function SchemaScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": schemaId(path, "webpage"),
        name: title,
        description,
        url: toAbsoluteUrl(path),
        isPartOf: {
          "@type": "WebSite",
          "@id": WEBSITE_ID,
        },
        about: {
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
        },
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": schemaId(items[items.length - 1]?.href ?? "/", "breadcrumbs"),
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: toAbsoluteUrl(item.href ?? "/"),
        })),
      }}
    />
  );
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": schemaId(path, "article"),
        headline: title,
        description,
        image: toAbsoluteUrl(image),
        datePublished,
        dateModified,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": schemaId(path, "webpage"),
        },
        author: {
          "@type": "Organization",
          "@id": BUSINESS_ID,
          name: COMPANY.name,
        },
        publisher: {
          "@type": "Organization",
          "@id": BUSINESS_ID,
          name: COMPANY.name,
        },
        about: {
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
        },
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": schemaId(path, "service"),
        name,
        description,
        serviceType,
        provider: {
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
        },
        areaServed: SERVICE_AREA_CITIES.map((city) => ({
          "@type": "City",
          name: city,
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: toAbsoluteUrl(path),
        },
        url: toAbsoluteUrl(path),
      }}
    />
  );
}

export function CityServiceSchema({
  city,
  state,
  path,
  description,
  services,
}: {
  city: string;
  state?: string;
  path: string;
  description: string;
  services: string[];
}) {
  const cityLabel = state ? `${city}, ${state}` : city;

  return (
    <SchemaScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": schemaId(path, "service"),
        name: `${cityLabel} cleanup, demolition, junk removal, and water mitigation services`,
        description,
        serviceType: services,
        provider: {
          "@type": "LocalBusiness",
          "@id": BUSINESS_ID,
        },
        areaServed: {
          "@type": "City",
          name: cityLabel,
          addressRegion: state,
          addressCountry: "US",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: toAbsoluteUrl(path),
        },
        url: toAbsoluteUrl(path),
      }}
    />
  );
}
