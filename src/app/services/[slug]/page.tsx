import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import LocationLinkChips from "@/components/LocationLinkChips";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS } from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";
import { SPECIALTY_SERVICE_PAGES, getSpecialtyServicePage } from "@/lib/seo-pages";

export function generateStaticParams() {
  return SPECIALTY_SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = getSpecialtyServicePage(slug);

    if (!page) {
      return {};
    }

    return buildPageMetadata({
      title: page.title,
      description: page.description,
      path: `/services/${page.slug}`,
    });
  });
}

export default async function SpecialtyServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSpecialtyServicePage(slug);

  if (!page) {
    notFound();
  }

  const path = `/services/${page.slug}`;
  const relatedServices = page.relatedServices.filter((service) => service.href !== path);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: page.eyebrow, href: path },
  ];

  return (
    <>
      <WebPageSchema title={page.title} description={page.description} path={path} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={page.title}
        description={page.description}
        path={path}
        serviceType={page.serviceType}
      />
      <FAQSchema items={page.faq} />

      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">{page.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{page.h1}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: `specialty_${page.slug}_hero` }}
              className="premium-cta inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: `specialty_${page.slug}_hero` }}
              className="inline-flex w-full items-center justify-center rounded-md border border-white bg-white px-8 py-3 text-lg font-bold text-primary transition-colors hover:bg-surface sm:w-auto"
            >
              Call {COMPANY.phone}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Common {page.eyebrow} Jobs
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              These are the most common project types customers ask us to quote
              when they need this service in the Kansas City metro.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.commonJobs.map((job) => (
              <div
                key={job}
                className="rounded-xl border border-surface-dark bg-white p-5 shadow-sm"
              >
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              How We Help
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              The goal is simple: remove the material, haul it away, and leave
              the space ready for repair, renovation, sale, rental, or reuse.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.jobDetails.map((detail) => (
              <div
                key={detail.title}
                className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark mb-2">{detail.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Why Call Kidd&apos;s Clean Up and Demo?
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
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Related Services</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-lg border border-surface-dark bg-surface px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={`${page.eyebrow} FAQs`}
        intro={`Common questions about ${page.eyebrow.toLowerCase()} in the Kansas City metro.`}
        items={page.faq}
      />

      <LocationLinkChips
        title={`${page.eyebrow} Service Areas`}
        intro="We serve priority KC metro locations for demolition, cleanout, junk removal, and property cleanup work."
        links={PRIORITY_CITY_LINKS}
      />

      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need {page.eyebrow}?</h2>
          <p className="text-white/80 mb-8">
            Tell us what needs to be removed and we&apos;ll help you figure out the next step.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: `specialty_${page.slug}_footer` }}
              className="premium-cta inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: `specialty_${page.slug}_footer` }}
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
