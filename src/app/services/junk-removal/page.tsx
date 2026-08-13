import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import LocationLinkChips from "@/components/LocationLinkChips";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS, SERVICE_PAGE_FAQS } from "@/lib/local-seo";
import { buildPageMetadata } from "@/lib/metadata";

const pageTitle = "Kansas City Junk Removal & Haul-Away";
const pageDescription = `Junk removal and haul-away across the Kansas City metro for furniture, appliances, bulky items, household clutter, yard debris, and renovation debris. Call ${COMPANY.phone} for a free quote.`;
export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/junk-removal",
});

const services = [
  {
    title: "Household Junk Removal",
    description: "Removal of old furniture, boxed clutter, mattresses, appliances, and unwanted household items from homes and apartments.",
  },
  {
    title: "Bulky Item Pickup",
    description: "Inside or outside pickup for furniture, appliances, mattresses, hot tubs, and other bulky items that are difficult to move.",
  },
  {
    title: "Garage, Basement & Storage Junk",
    description: "Haul-away for boxes, stored items, old equipment, furniture, and mixed clutter from garages, basements, sheds, and storage spaces.",
  },
  {
    title: "Yard Debris & Exterior Cleanup",
    description: "Removal of branches, fencing, exterior junk piles, and general debris left around the property.",
  },
  {
    title: "Rental & Move-Out Junk Removal",
    description: "Removal of furniture, trash, boxes, and left-behind contents for landlords, property managers, and residents preparing for a move.",
  },
  {
    title: "Construction & Renovation Debris",
    description: "Haul-away for leftover material, broken fixtures, packaging, and debris after remodels or demolition work.",
  },
];

const itemRemovalServices = [
  "Furniture removal",
  "Appliance removal",
  "Mattress removal",
  "Hot tub removal",
  "Yard debris removal",
  "Bulk trash pickup alternatives",
  "General haul-away junk",
  "Move-out junk removal",
];

const cleanoutLinks = [
  { label: "House Cleanouts", href: "/services/house-cleanouts" },
  { label: "Estate Cleanouts", href: "/services/estate-cleanouts" },
  { label: "Garage Cleanouts", href: "/services/garage-cleanouts" },
  { label: "Basement Cleanouts", href: "/services/basement-cleanouts" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
  { label: "Rental Property Cleanouts", href: "/services/rental-property-cleanouts" },
  { label: "Foreclosure Cleanouts", href: "/services/foreclosure-cleanouts" },
];

const itemRemovalLinks = [
  { label: "Furniture Removal", href: "/services/furniture-removal" },
  { label: "Appliance Removal", href: "/services/appliance-removal" },
  { label: "Mattress Removal", href: "/services/mattress-removal" },
  { label: "Yard Debris Removal", href: "/services/yard-debris-removal" },
  { label: "Hot Tub Removal", href: "/services/hot-tub-removal" },
  { label: "Trash Removal", href: "/services/trash-removal" },
  { label: "Bulk Trash Pickup", href: "/services/bulk-trash-pickup" },
  { label: "Haul Away Junk", href: "/services/haul-away-junk" },
];

const cityJunkRemovalLinks = [
  { label: "Overland Park Junk Removal", href: "/junk-removal/overland-park" },
  { label: "Olathe Junk Removal", href: "/junk-removal/olathe" },
  { label: "Shawnee Junk Removal", href: "/junk-removal/shawnee-ks" },
  { label: "Lenexa Junk Removal", href: "/junk-removal/lenexa" },
];

const quoteFactors = [
  {
    title: "Amount and Type of Material",
    description:
      "The number of items, approximate load volume, weight, and disposal needs establish the basic scope.",
  },
  {
    title: "Where Items Are Located",
    description:
      "Inside pickup, stairs, basements, elevators, narrow doors, and carrying distance affect labor and loading time.",
  },
  {
    title: "Handling Requirements",
    description:
      "Very heavy pieces, disassembly, disconnected appliances, and mixed debris should be identified before scheduling.",
  },
  {
    title: "Cleanout or Single Pickup",
    description:
      "A few bulky items are scoped differently from a whole-home, estate, rental, garage, or commercial cleanout.",
  },
];

const pickupDetails = [
  "Share photos and the approximate number of items when requesting a quote.",
  "Tell us whether items are inside, outside, upstairs, or in a basement.",
  "Appliances should be empty and disconnected unless different preparation is confirmed in the quote.",
  "Identify liquids, chemicals, paint, fuel, very heavy material, or anything that may require regulated disposal.",
];

export default function JunkRemovalPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Junk Removal", href: "/services/junk-removal" },
  ];

  return (
    <>
      <WebPageSchema title={pageTitle} description={pageDescription} path="/services/junk-removal" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Kansas City Junk Removal and Haul-Away"
        description={pageDescription}
        path="/services/junk-removal"
        serviceType="Junk removal and haul-away services"
      />
      <FAQSchema items={SERVICE_PAGE_FAQS["junk-removal"]} />

      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" className="mb-6" />
          <p className="text-accent font-semibold mb-2">Junk Removal</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Junk Removal That Gets the Space Cleared Fast
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            We remove unwanted junk, furniture, appliances, debris, and clutter from
            homes, rental properties, garages, and job sites across the Kansas City metro.
            You identify what needs to go, and our crew handles the lifting, loading,
            and haul-away.
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

      <section className="border-y border-surface-dark bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              What Shapes a Junk Removal Quote
            </h2>
            <p className="max-w-3xl text-foreground/70 leading-relaxed mb-8">
              A useful quote starts with the material, access, and handling details.
              Clear information up front helps us scope the crew, loading time, and
              haul-away needs accurately.
            </p>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {quoteFactors.map((factor) => (
                <div key={factor.title} className="border-l-2 border-accent pl-4">
                  <h3 className="font-bold text-primary-dark mb-1">{factor.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">
              What to Tell Us Before Pickup
            </h2>
            <ul className="space-y-4">
              {pickupDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-foreground/80 leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Furniture, Appliance, Mattress, Yard Debris, and Bulk Junk Removal
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Many junk removal calls are item-specific. We remove bulky items,
              outdoor debris, and leftover contents from homes, garages, rentals,
              and job sites throughout the Kansas City metro.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {itemRemovalServices.map((item) => (
              <div key={item} className="rounded-xl border border-surface-dark bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-semibold text-primary-dark">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Why Homeowners and Property Managers Call Us
            </h2>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              {[
                "Fast turnaround when a property needs to be cleared out quickly",
                "Heavy lifting and haul-away handled by our crew",
                "Great fit for move-outs, estate cleanouts, and rental turnovers",
                "Honest pricing without drawn-out cleanup timelines",
                "A cleaner, safer property that is ready for its next use",
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

      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Cleanout and Haul-Away Pages
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              If your project is bigger than a single pickup, these cleanout pages
              explain the most common property cleanup situations we handle.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {cleanoutLinks.map((link) => (
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
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Item Removal Pages
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              For item-specific pickup and haul-away jobs, these pages map to
              the common searches customers use when they know exactly what needs to go.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {itemRemovalLinks.map((link) => (
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
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">
              Priority Junk Removal Service Areas
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              We also provide dedicated local junk removal support for priority
              Kansas-side communities near the KC metro.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cityJunkRemovalLinks.map((link) => (
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
        </div>
      </section>

      <FAQSection
        title="Junk Removal FAQs"
        intro="Common questions from homeowners, landlords, and property managers looking for junk removal and cleanout help in the Kansas City metro."
        items={SERVICE_PAGE_FAQS["junk-removal"]}
      />

      <LocationLinkChips
        title="Junk Removal Service Areas"
        intro="We provide junk removal and cleanout support throughout these priority KC metro locations."
        links={PRIORITY_CITY_LINKS}
      />

      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need Junk Removed?</h2>
          <p className="text-white/80 mb-8">
            Tell us what needs to go and we&apos;ll give you a straightforward quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "junk_removal_service_page" }}
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "junk_removal_service_page" }}
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
