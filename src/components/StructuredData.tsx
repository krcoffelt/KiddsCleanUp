import { COMPANY, SERVICE_AREA_CITIES } from "@/lib/constants";

const SITE_URL = "https://kiddscleanup.com";
const WEBSITE_ID = `${SITE_URL}/#website`;
const BUSINESS_ID = `${SITE_URL}/#business`;

function SchemaScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: COMPANY.name,
    url: SITE_URL,
    publisher: {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: COMPANY.name,
    description:
      "Family-owned cleanup and demolition company serving the Kansas City metro area. Residential and commercial cleanup, junk removal, demolition, lead-safe services, and water mitigation.",
    telephone: "+1-816-457-4363",
    email: COMPANY.emails[0],
    url: SITE_URL,
    logo: `${SITE_URL}/images/Visby%20%28500%20x%20500%20px%29%20%28400%20x%20200%20px%29%20%281%29.png`,
    image: `${SITE_URL}/images/Screenshot_Homepage_Kidds.png`,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-816-457-4363",
        contactType: "customer service",
        areaServed: "US-KS",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-816-457-4363",
        contactType: "sales",
        areaServed: "US-MO",
        availableLanguage: "English",
      },
    ],
    foundingDate: "2017-04",
    priceRange: "$$",
    serviceType: [
      "Residential Cleanup",
      "Commercial Cleanup",
      "Junk Removal",
      "Residential Demolition",
      "Commercial Demolition",
      "Lead-Safe Removal",
      "Water Mitigation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kansas City cleanup, demolition, junk removal, and mitigation services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Demolition",
          itemListElement: [
            "Residential demolition",
            "Commercial demolition",
            "Interior demolition",
            "Garage demolition",
            "Shed demolition",
            "Deck removal",
            "Concrete removal",
            "Construction debris removal",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
        {
          "@type": "OfferCatalog",
          name: "Junk removal and cleanouts",
          itemListElement: [
            "Junk removal",
            "Furniture removal",
            "Appliance removal",
            "Mattress removal",
            "Hot tub removal",
            "Yard debris removal",
            "House cleanouts",
            "Estate cleanouts",
            "Basement cleanouts",
            "Rental property cleanouts",
            "Commercial cleanouts",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
        {
          "@type": "OfferCatalog",
          name: "Lead-safe and water mitigation",
          itemListElement: [
            "Lead-safe demolition",
            "Lead paint removal support",
            "Water mitigation",
            "Water damage cleanup",
            "Flood cleanup",
            "Burst pipe cleanup",
            "Water extraction",
            "Basement water cleanup",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
      ],
    },
  };

  return (
    <>
      <SchemaScript data={websiteSchema} />
      <SchemaScript data={businessSchema} />
    </>
  );
}
