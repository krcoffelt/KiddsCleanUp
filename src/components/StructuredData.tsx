import { COMPANY } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description:
      "Family-owned cleanup and demolition company serving the Kansas City metro area. Residential and commercial cleanup, demolition, and lead-safe services.",
    telephone: "+1-816-457-4363",
    email: COMPANY.emails[0],
    url: "https://kiddscleanup.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.0997,
        longitude: -94.5786,
      },
      geoRadius: "80467",
    },
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
