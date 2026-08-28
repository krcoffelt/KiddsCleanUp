import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import LocationLinkChips from "@/components/LocationLinkChips";
import Link from "next/link";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS, SERVICE_PAGE_FAQS } from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";

const pageTitle = "Kansas City Water Mitigation";
const pageDescription = `Kansas City water mitigation, extraction, drying, and moisture control for leaks, flooding, and burst pipes. Call ${COMPANY.phone} for a free quote.`;
export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/water-mitigation",
});

const services = [
  {
    title: "Emergency Water Extraction",
    description: "Rapid removal of standing water from floors, basements, crawlspaces, and affected rooms to stabilize the property quickly.",
  },
  {
    title: "Structural Drying",
    description: "Targeted drying of walls, flooring, framing, and building materials with air movers and industrial dehumidifiers.",
  },
  {
    title: "Moisture Detection & Monitoring",
    description: "Moisture checks throughout the drying process to identify hidden water and track progress until the area is stable.",
  },
  {
    title: "Burst Pipe & Leak Response",
    description: "Fast action after pipe breaks, appliance failures, and roof leaks to reduce damage before it spreads further.",
  },
  {
    title: "Flooded Area Cleanup",
    description: "Cleanup and mitigation for water intrusion from storms, overflows, and indoor flooding events.",
  },
  {
    title: "Property Stabilization",
    description: "Immediate drying and moisture control that helps reduce long-term damage and prepares the property for repairs.",
  },
];

const waterDamageScenarios = [
  {
    title: "Water Damage Cleanup",
    href: "/services/water-damage-cleanup",
    description:
      "Remove standing water, damaged contents, and wet debris so the affected area can be dried and stabilized.",
  },
  {
    title: "Flood Cleanup",
    href: "/services/flood-cleanup",
    description:
      "Cleanup support after indoor flooding, storm intrusion, overflows, and water that has spread through floors or lower levels.",
  },
  {
    title: "Burst Pipe Cleanup",
    href: "/services/burst-pipe-cleanup",
    description:
      "Fast response after pipe breaks to remove water, start drying, and limit additional damage.",
  },
  {
    title: "Water Extraction",
    href: "/services/water-extraction",
    description:
      "Extraction of standing water from floors, basements, crawlspaces, and affected rooms before deeper drying begins.",
  },
  {
    title: "Basement Water Cleanup",
    href: "/services/basement-water-cleanup",
    description:
      "Basement cleanup and water removal for leaks, backups, appliance failures, and storm-related water intrusion.",
  },
];

export default function WaterMitigationPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Water Mitigation", href: "/services/water-mitigation" },
  ];

  return (
    <>
      <WebPageSchema title={pageTitle} description={pageDescription} path="/services/water-mitigation" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Kansas City Water Mitigation"
        description={pageDescription}
        path="/services/water-mitigation"
        serviceType="Water mitigation services"
      />
      <FAQSchema items={SERVICE_PAGE_FAQS["water-mitigation"]} />

      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">Water Mitigation</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Water Mitigation When Damage Can&apos;t Wait
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Water mitigation is the first and most critical step after burst pipes,
            flooding, roof leaks, or appliance failures. We move quickly to stop the
            source, remove standing water, and begin drying before the damage gets worse.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Water Damage Cleanup, Flood Cleanup, and Basement Water Removal
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Water mitigation searches often describe the event, not the service.
              We help with the practical cleanup and drying steps after leaks,
              floods, burst pipes, and basement water problems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {waterDamageScenarios.map((scenario) => (
              <Link
                key={scenario.title}
                href={scenario.href}
                className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-dark mb-2">{scenario.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{scenario.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Why Quick Water Mitigation Matters
            </h2>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              {[
                "Standing water needs to be removed immediately to keep damage from spreading through floors, walls, and contents.",
                "Professional drying equipment helps remove moisture trapped inside building materials, not just surface water.",
                "Moisture can move into nearby materials and concealed spaces when affected areas are not addressed.",
                "Mitigation helps stabilize the affected area and gives the property owner a clearer path toward repairs.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection
        title="Water Mitigation FAQs"
        intro="Questions we commonly hear from property owners looking for fast water mitigation help in the Kansas City metro."
        items={SERVICE_PAGE_FAQS["water-mitigation"]}
      />

      <LocationLinkChips
        title="Water Mitigation Service Areas"
        intro="We provide water mitigation and property stabilization support throughout these priority KC metro locations."
        links={PRIORITY_CITY_LINKS}
      />

      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need Water Mitigation Fast?</h2>
          <p className="text-white/80 mb-8">
            Tell us what happened and we&apos;ll help you take the next step quickly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "water_mitigation_service_page" }}
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "water_mitigation_service_page" }}
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
