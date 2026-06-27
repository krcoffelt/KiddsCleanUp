import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { BreadcrumbSchema, CityServiceSchema, FAQSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import type { CityServicePageData } from "@/lib/seo-pages";

export default function CityServiceLandingPage({ page }: { page: CityServicePageData }) {
  const path = `/${page.service}/${page.citySlug}`;
  const serviceLabel = page.service === "junk-removal" ? "Junk Removal" : "Demolition";
  const relatedServiceHref = page.service === "junk-removal" ? "/services/junk-removal" : "/services/residential";
  const siblingHref = page.service === "junk-removal"
    ? `/demolition/${page.citySlug}`
    : `/junk-removal/${page.citySlug}`;
  const siblingLabel = page.service === "junk-removal"
    ? `${page.city} Demolition`
    : `${page.city} Junk Removal`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: serviceLabel, href: relatedServiceHref },
    { label: `${page.city}, ${page.state}`, href: path },
  ];

  return (
    <>
      <WebPageSchema title={page.title} description={page.description} path={path} />
      <CityServiceSchema
        city={page.city}
        state={page.state}
        path={path}
        description={page.description}
        services={page.services}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={page.faq} />

      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">{serviceLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{page.h1}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: `${page.service}_${page.citySlug}_hero` }}
              className="premium-cta inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: `${page.service}_${page.citySlug}_hero` }}
              className="inline-flex w-full items-center justify-center rounded-md border border-white bg-white px-8 py-3 text-lg font-bold text-primary transition-colors hover:bg-surface sm:w-auto"
            >
              Call {COMPANY.phone}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              {serviceLabel} Work in {page.city}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              These are the project types property owners, landlords, and contractors
              commonly call us for in {page.city} and nearby KC metro areas.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.commonJobs.map((job) => (
              <div key={job} className="rounded-xl border border-surface-dark bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="font-semibold text-primary-dark">{job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Why {page.city} Property Owners Call Us
            </h2>
            <ul className="space-y-4">
              {page.whyUs.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-foreground/80">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-surface-dark bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">
              Related Local Pages
            </h2>
            <div className="grid gap-3">
              <Link
                href={relatedServiceHref}
                className="rounded-lg border border-surface-dark bg-surface px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                Kansas City {serviceLabel}
              </Link>
              <Link
                href={`/service-areas/${page.citySlug === "shawnee-ks" ? "shawnee" : page.citySlug}`}
                className="rounded-lg border border-surface-dark bg-surface px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {page.city} Service Area
              </Link>
              <Link
                href={siblingHref}
                className="rounded-lg border border-surface-dark bg-surface px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {siblingLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={`${page.city} ${serviceLabel} FAQs`}
        intro={`Common questions about ${serviceLabel.toLowerCase()} in ${page.city}, ${page.state}.`}
        items={page.faq}
      />

      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">
            Need {serviceLabel} in {page.city}?
          </h2>
          <p className="text-white/80 mb-8">
            Tell us what needs to go and we&apos;ll help you figure out the right next step.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: `${page.service}_${page.citySlug}_footer` }}
              className="premium-cta inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: `${page.service}_${page.citySlug}_footer` }}
              className="inline-flex w-full items-center justify-center rounded-md border border-white bg-white px-8 py-3 text-lg font-bold text-primary transition-colors hover:bg-surface sm:w-auto"
            >
              Call {COMPANY.phone}
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}

