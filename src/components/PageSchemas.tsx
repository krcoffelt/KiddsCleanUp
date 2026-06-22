import { COMPANY, SERVICE_AREA_CITIES } from "@/lib/constants";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import type { FAQItem } from "@/components/FAQSection";

const SITE_URL = "https://kiddscleanup.com";

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
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
        name: title,
        description,
        url: toAbsoluteUrl(path),
        isPartOf: {
          "@type": "WebSite",
          name: COMPANY.name,
          url: SITE_URL,
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
        name,
        description,
        serviceType,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY.name,
          url: SITE_URL,
          telephone: "+1-816-457-4363",
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
        name: `${cityLabel} cleanup, demolition, junk removal, and water mitigation services`,
        description,
        serviceType: services,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY.name,
          url: SITE_URL,
          telephone: "+1-816-457-4363",
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
