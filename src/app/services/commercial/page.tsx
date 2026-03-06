import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Cleanup & Demolition Services",
  description: `Commercial cleanup and demolition in Kansas City. Office buildout demo, warehouse cleanup, retail clearing, and site prep. Call ${COMPANY.phone} for a free quote.`,
};

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

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2">Commercial Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Commercial Cleanup &amp; Demolition
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

      {/* Why choose */}
      <section className="py-16 sm:py-24 bg-surface">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Get a Free Commercial Quote</h2>
          <p className="text-white/80 mb-8">
            Tell us about your commercial project and we&apos;ll provide a detailed, honest estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-surface text-primary font-bold rounded-md transition-colors text-lg border border-white"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
