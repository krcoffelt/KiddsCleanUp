import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import LocationLinkChips from "@/components/LocationLinkChips";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS, SERVICE_PAGE_FAQS } from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";

const pageTitle = "Kansas City Commercial Demolition & Cleanup";
const pageDescription = `Commercial demolition, office buildout demo, warehouse cleanup, retail strip-outs, and site prep across the Kansas City metro. Call ${COMPANY.phone} for a free quote.`;
export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/commercial",
});

const services = [
  {
    title: "Office Buildout Demolition",
    description: "Complete or selective demolition of office interiors including walls, ceilings, flooring, and fixtures to prepare spaces for new tenants or renovations.",
  },
  {
    title: "Warehouse & Industrial Cleanup",
    description: "Large-scale cleanup of warehouse spaces, industrial facilities, and storage buildings. We handle heavy debris and oversized items efficiently.",
  },
  {
    title: "Retail Space Clearing",
    description: "Strip-out and clearing of retail locations for new buildouts. From shelving removal to complete interior demolition.",
  },
  {
    title: "Site Preparation",
    description: "Ground-level site prep including structure removal, debris clearing, and grading preparation for new construction projects.",
  },
  {
    title: "Concrete & Asphalt Removal",
    description: "Breaking and removal of concrete slabs, sidewalks, parking areas, and asphalt surfaces for commercial properties.",
  },
  {
    title: "Construction Waste Hauling",
    description: "Ongoing or one-time construction debris removal for contractors and project managers. We keep your job site clean and compliant.",
  },
];

const commercialSupportLinks = [
  { label: "Demolition Services", href: "/services/demolition" },
  { label: "Construction Debris Removal", href: "/services/construction-debris-removal" },
  { label: "Concrete Removal", href: "/services/concrete-removal" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
  { label: "Rental Property Cleanouts", href: "/services/rental-property-cleanouts" },
  { label: "Foreclosure Cleanouts", href: "/services/foreclosure-cleanouts" },
];

export default function CommercialPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Commercial Demo", href: "/services/commercial" },
  ];

  return (
    <>
      <WebPageSchema title={pageTitle} description={pageDescription} path="/services/commercial" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Kansas City Commercial Demolition & Cleanup"
        description={pageDescription}
        path="/services/commercial"
        serviceType="Commercial demolition and cleanup services"
      />
      <FAQSchema items={SERVICE_PAGE_FAQS.commercial} />

      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">Commercial Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Commercial Cleanup &amp; Demolition
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Reliable, efficient commercial demolition and cleanup for businesses,
            contractors, and property managers across the Kansas City metro.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Commercial Cleanup and Debris Support
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Commercial demolition often creates related cleanup needs. These
              focused pages help contractors, landlords, and property managers
              find the right service faster.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commercialSupportLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-surface-dark bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Built for Commercial Projects
            </h2>
            <ul className="text-left space-y-4 max-w-xl mx-auto">
              {[
                "Experienced with large-scale commercial teardowns and cleanups",
                "Own equipment and dumpsters — no delays waiting on rentals",
                "Flexible scheduling to minimize business disruption",
                "Clean, safe, and compliant job sites at all times",
                "Direct communication with the owner on every project",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
        title="Commercial Demolition FAQs"
        intro="Common questions from Kansas City contractors, businesses, landlords, and property managers planning a commercial cleanup or demolition project."
        items={SERVICE_PAGE_FAQS.commercial}
      />

      <LocationLinkChips
        title="Commercial Demo Service Areas"
        intro="We support commercial demolition and cleanup projects throughout these priority KC metro markets."
        links={PRIORITY_CITY_LINKS}
      />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Get a Free Commercial Quote</h2>
          <p className="text-white/80 mb-8">
            Tell us about your commercial project and we&apos;ll provide a detailed, honest estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "commercial_service_page" }}
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "commercial_service_page" }}
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
