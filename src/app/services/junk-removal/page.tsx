import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description: `Junk removal in Kansas City for homes, rental properties, garages, estates, and job sites. Fast haul-away for furniture, appliances, debris, and clutter. Call ${COMPANY.phone} for a free quote.`,
};

const services = [
  {
    title: "Household Junk Removal",
    description: "Removal of old furniture, boxed clutter, mattresses, appliances, and unwanted household items from homes and apartments.",
  },
  {
    title: "Garage, Basement & Shed Cleanouts",
    description: "Fast cleanout of overfilled garages, basements, sheds, and storage spaces so you can reclaim usable space.",
  },
  {
    title: "Estate & Move-Out Cleanouts",
    description: "Practical haul-away help for estate situations, downsizing, evictions, and move-out cleanups when large volumes need to go quickly.",
  },
  {
    title: "Yard Debris & Exterior Cleanup",
    description: "Removal of branches, fencing, exterior junk piles, and general debris left around the property.",
  },
  {
    title: "Rental Property Turnover Cleanup",
    description: "Junk removal and property cleanout for landlords and property managers between tenants.",
  },
  {
    title: "Construction & Renovation Debris",
    description: "Haul-away for leftover material, broken fixtures, packaging, and debris after remodels or demolition work.",
  },
];

export default function JunkRemovalPage() {
  return (
    <>
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2">Junk Removal</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Junk Removal That Gets the Space Cleared Fast
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            We remove unwanted junk, furniture, appliances, debris, and clutter from
            homes, rental properties, garages, and job sites across the Kansas City metro.
            You point to what needs to go, and we handle the haul-away.
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

      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need Junk Removed?</h2>
          <p className="text-white/80 mb-8">
            Tell us what needs to go and we&apos;ll give you a straightforward quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-white hover:bg-surface text-primary font-bold rounded-md transition-colors text-lg border border-white"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
