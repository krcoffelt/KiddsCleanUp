import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Water Mitigation Services",
  description: `Emergency water mitigation in Kansas City for burst pipes, flooding, roof leaks, and appliance failures. Fast water extraction, drying, and moisture control. Call ${COMPANY.phone} for a free quote.`,
};

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

export default function WaterMitigationPage() {
  return (
    <>
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2">Water Mitigation</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Fast Water Mitigation When Damage Can&apos;t Wait
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Why Quick Water Mitigation Matters
            </h2>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              {[
                "Standing water needs to be removed immediately to keep damage from spreading through floors, walls, and contents.",
                "Professional drying equipment helps remove moisture trapped inside building materials, not just surface water.",
                "Mold growth and structural damage can begin within 24 to 48 hours if water is left untreated.",
                "Fast mitigation helps stabilize the property and reduce long-term repair and restoration costs.",
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
          <h2 className="text-3xl font-bold mb-4">Need Water Mitigation Fast?</h2>
          <p className="text-white/80 mb-8">
            Tell us what happened and we&apos;ll help you take the next step quickly.
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
