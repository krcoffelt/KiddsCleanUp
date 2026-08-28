import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import LocationLinkChips from "@/components/LocationLinkChips";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS, SERVICE_PAGE_FAQS } from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";

const pageTitle = "Kansas City Lead-Safe Removal & Demolition";
const pageDescription = `Lead-safe removal, EPA-conscious demolition, and hazard-focused cleanup services across the Kansas City metro. Call ${COMPANY.phone} for a free quote.`;
export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/lead-safe",
});

const services = [
  {
    title: "Lead-Safe Removal Support",
    description: "Removal work is scoped around the painted materials, occupied areas, testing information, containment needs, and required cleanup steps.",
  },
  {
    title: "Lead-Safe Demolition",
    description: "Selective demolition involving painted materials is planned with dust control, containment, cleanup, and disposal requirements in view.",
  },
  {
    title: "Pre-Renovation Lead Testing Coordination",
    description: "We coordinate lead testing before renovation or demolition projects to identify hazards and plan safe work procedures.",
  },
  {
    title: "Containment & Disposal",
    description: "Containment and disposal requirements are confirmed for the specific material, project type, and jurisdiction before work begins.",
  },
];

const leadSearchTopics = [
  {
    title: "Lead Paint Removal",
    description:
      "Removal work planned around older painted surfaces where lead-containing paint may be present.",
  },
  {
    title: "Lead Remediation Support",
    description:
      "Containment-minded removal and cleanup support for projects where lead hazards need to be handled carefully.",
  },
  {
    title: "Lead Removal Contractor Searches",
    description:
      "Property owners often search for a contractor who can discuss safe removal, demolition, containment, and disposal steps.",
  },
  {
    title: "Lead Abatement Planning",
    description:
      "When a project requires formal abatement direction, we help clarify the demolition and cleanup scope without overstating unsupported claims.",
  },
  {
    title: "Lead Paint Contractor Coordination",
    description:
      "We can coordinate the removal side of a project with testing, property contacts, and other trades when needed.",
  },
];

export default function LeadSafePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Lead-Safe Demo", href: "/services/lead-safe" },
  ];

  return (
    <>
      <WebPageSchema title={pageTitle} description={pageDescription} path="/services/lead-safe" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Kansas City Lead-Safe Removal & Demolition"
        description={pageDescription}
        path="/services/lead-safe"
        serviceType="Lead-safe removal and demolition services"
      />
      <FAQSchema items={SERVICE_PAGE_FAQS["lead-safe"]} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">Lead-Safe Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Lead-Safe Removal &amp; Demolition
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Lead-safe work starts by identifying what will be disturbed, confirming
            the applicable requirements, and planning containment, dust control,
            cleanup, and disposal before removal begins.
          </p>
        </div>
      </section>

      {/* Alert banner */}
      <section className="bg-accent/10 border-b border-accent/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <svg className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-sm text-foreground/80">
              <strong>Important:</strong> Homes built before 1978 may contain lead-based paint.
              EPA&apos;s Renovation, Repair and Painting Rule applies to covered work that
              disturbs painted surfaces in pre-1978 homes and child-occupied facilities;
              total demolition is treated differently. The exact scope matters.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Lead Paint Removal, Remediation, and Contractor Support
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Lead-related projects need careful planning, clear scope, and
              practical handling from the first walkthrough through cleanup and disposal.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {leadSearchTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark mb-2">{topic.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
              Our Lead-Safe Approach
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  text: "We review the property, the material being disturbed, and available testing information, then coordinate additional testing when the scope requires it.",
                },
                {
                  step: "2",
                  title: "Containment",
                  text: "The containment plan is matched to the project so dust and debris can be kept away from unaffected areas.",
                },
                {
                  step: "3",
                  title: "Safe Removal",
                  text: "Lead-containing materials are carefully removed using wet methods and HEPA-filtered equipment to minimize dust.",
                },
                {
                  step: "4",
                  title: "Cleanup & Verification",
                  text: "Cleanup and any required verification are defined by the work type, applicable rule, and agreed project scope.",
                },
                {
                  step: "5",
                  title: "Proper Disposal",
                  text: "Waste handling and disposal are confirmed for the material and local requirements before debris leaves the site.",
                },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-primary-dark">{s.title}</h3>
                    <p className="text-sm text-foreground/70">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-surface-dark bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-3">
            Lead-Safe Rules and Planning Sources
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-5">
            These primary EPA resources explain when the federal renovation rule
            applies and why demolition work involving lead-based paint needs dust-control planning.
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.epa.gov/lead/lead-renovation-repair-and-painting-program"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-accent underline-offset-4 hover:text-accent-dark"
              >
                EPA: Lead Renovation, Repair and Painting Program
              </a>
            </li>
            <li>
              <a
                href="https://www.epa.gov/large-scale-residential-demolition/lead-based-paint-and-demolition"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-accent underline-offset-4 hover:text-accent-dark"
              >
                EPA: Lead-Based Paint and Demolition
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection
        title="Lead-Safe Service FAQs"
        intro="Common questions from Kansas City property owners looking for lead-safe handling, certified demo practices, and practical next steps."
        items={SERVICE_PAGE_FAQS["lead-safe"]}
      />

      <LocationLinkChips
        title="Lead-Safe Service Areas"
        intro="We provide lead-safe removal and demolition support throughout these priority service areas in the KC metro."
        links={PRIORITY_CITY_LINKS}
      />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need Lead-Safe Services?</h2>
          <p className="text-white/80 mb-8">
            Don&apos;t take chances with lead. Get a free consultation and quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "lead_safe_service_page" }}
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "lead_safe_service_page" }}
              className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-white hover:bg-surface text-primary font-bold rounded-md transition-colors text-lg border border-white"
            >
              Call {COMPANY.phone}
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
