import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { BreadcrumbSchema, CityServiceSchema, FAQSchema, WebPageSchema } from "@/components/PageSchemas";
import ServiceCard from "@/components/ServiceCard";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import {
  PRIORITY_CITY_LINKS,
  PRIORITY_CITY_PAGES,
  buildServiceAreaBreadcrumbs,
} from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";

const SERVICE_OVERVIEW = [
  {
    title: "Residential Demo",
    href: "/services/residential",
    getDescription: (city: string) =>
      `Home cleanouts, garage and shed demo, deck removal, interior demolition, and property cleanup for ${city} homeowners.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Commercial Demo",
    href: "/services/commercial",
    getDescription: (city: string) =>
      `Commercial cleanup, buildout demo, retail strip-outs, site prep, and debris hauling for contractors and property managers in ${city}.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Junk Removal",
    href: "/services/junk-removal",
    getDescription: (city: string) =>
      `Fast junk removal in ${city} for household items, move-out debris, rental turnovers, and property cleanouts.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M9.75 6.75V5.25c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v1.5m-8.25 0v11.25c0 .828.672 1.5 1.5 1.5h9c.828 0 1.5-.672 1.5-1.5V6.75M9.75 10.5v5.25m4.5-5.25v5.25" />
      </svg>
    ),
  },
  {
    title: "Water Mitigation",
    href: "/services/water-mitigation",
    getDescription: (city: string) =>
      `Rapid water mitigation in ${city} for burst pipes, roof leaks, flooding, and moisture control when damage cannot wait.`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-2.94 3.31-6 7.029-6 10.5a6 6 0 0012 0c0-3.471-3.06-7.19-6-10.5z" />
      </svg>
    ),
  },
];

const CITY_SERVICE_SLUGS: Record<string, string> = {
  "overland-park": "overland-park",
  olathe: "olathe",
  shawnee: "shawnee-ks",
  lenexa: "lenexa",
};

const COMMON_SERVICE_LINKS = [
  { label: "Demolition Services", href: "/services/demolition" },
  { label: "Cleanout Services", href: "/services/cleanouts" },
  { label: "Furniture Removal", href: "/services/furniture-removal" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
];

function getCityPage(slug: string) {
  return PRIORITY_CITY_PAGES.find((city) => city.slug === slug);
}

export function generateStaticParams() {
  return PRIORITY_CITY_PAGES.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const cityPage = getCityPage(slug);

    if (!cityPage) {
      return {};
    }

    const cityLabel = cityPage.state ? `${cityPage.city}, ${cityPage.state}` : cityPage.city;

    return buildPageMetadata({
      title: `${cityLabel} Demolition, Cleanouts & Junk Removal`,
      description: `Local demolition, cleanouts, junk removal, lead-safe work, and water mitigation in ${cityLabel}. Call Kidd's Clean Up and Demo for a free quote.`,
      path: `/service-areas/${cityPage.slug}`,
    });
  });
}

export default async function CityServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cityPage = getCityPage(slug);

  if (!cityPage) {
    notFound();
  }

  const cityLabel = cityPage.state ? `${cityPage.city}, ${cityPage.state}` : cityPage.city;
  const pagePath = `/service-areas/${cityPage.slug}`;
  const breadcrumbs = buildServiceAreaBreadcrumbs(cityLabel, pagePath);
  const pageDescription = `Local demolition, cleanouts, junk removal, lead-safe work, and water mitigation in ${cityLabel}. Call Kidd's Clean Up and Demo for a free quote.`;
  const relatedCities = PRIORITY_CITY_LINKS.filter((city) => city.href !== pagePath).slice(0, 4);
  const cityServiceSlug = CITY_SERVICE_SLUGS[cityPage.slug];

  return (
    <>
      <WebPageSchema
        title={`${cityLabel} Demolition, Cleanouts & Junk Removal`}
        description={pageDescription}
        path={pagePath}
      />
      <CityServiceSchema
        city={cityPage.city}
        state={cityPage.state}
        description={pageDescription}
        path={pagePath}
        services={[
          "Residential demolition",
          "Commercial demolition",
          "Junk removal",
          "Lead-safe work",
          "Water mitigation",
          "Property cleanouts",
        ]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={cityPage.faq} />

      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">Service Area</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{cityPage.heroTitle}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{cityPage.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Popular Services in {cityLabel}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {cityPage.serviceIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICE_OVERVIEW.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.getDescription(cityLabel)}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Why Property Owners in {cityLabel} Call Us
            </h2>
            <div className="grid gap-4">
              {cityPage.whyUs.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-surface-dark bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-foreground/80 leading-relaxed">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={`FAQs for ${cityLabel}`}
        intro={`Common questions we hear from property owners and contractors looking for cleanup, demolition, junk removal, and related services in ${cityLabel}.`}
        items={cityPage.faq}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-surface-dark bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-primary-dark mb-3">
                  Need Help in {cityLabel}?
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Tell us about your project and we&apos;ll help you figure out the
                  right next step for demolition, cleanouts, junk removal, lead-safe work,
                  or water mitigation.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="/contact"
                  eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
                  eventParams={{ cta_location: `city_page_${cityPage.slug}` }}
                  className="premium-cta inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-accent-dark"
                >
                  Request a Quote
                </TrackedLink>
                <TrackedLink
                  href={COMPANY.phoneTel}
                  eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
                  eventParams={{ cta_location: `city_page_${cityPage.slug}` }}
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-white px-8 py-3 text-lg font-bold text-primary transition-colors hover:bg-surface"
                >
                  Call {COMPANY.phone}
                </TrackedLink>
              </div>
            </div>
            {relatedCities.length > 0 && (
              <div className="mt-8 border-t border-surface-dark pt-6">
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-3">
                    Common Service Pages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {COMMON_SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-full border border-surface-dark bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {cityServiceSlug && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-3">
                      Focused {cityPage.city} Services
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/junk-removal/${cityServiceSlug}`}
                        className="rounded-full border border-surface-dark bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        {cityPage.city} Junk Removal
                      </Link>
                      <Link
                        href={`/demolition/${cityServiceSlug}`}
                        className="rounded-full border border-surface-dark bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        {cityPage.city} Demolition
                      </Link>
                    </div>
                  </div>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-3">
                  Nearby Service Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {relatedCities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      className="rounded-full border border-surface-dark bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                    >
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
