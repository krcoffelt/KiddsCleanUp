import { COMPANY, SERVICE_AREA_CITIES } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description:
      "Family-owned cleanup and demolition company serving the Kansas City metro area. Residential and commercial cleanup, demolition, lead-safe services, and water mitigation.",
    telephone: "+1-816-457-4363",
    email: COMPANY.emails[0],
    url: "https://kiddscleanup.com",
    areaServed: SERVICE_AREA_CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
    openingHours: "Mo-Su 08:00-18:00",
    foundingDate: "2017-04",
    priceRange: "$$",
    serviceType: [
      "Residential Cleanup",
      "Commercial Cleanup",
      "Residential Demolition",
      "Commercial Demolition",
      "Lead-Safe Removal",
      "Water Mitigation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
