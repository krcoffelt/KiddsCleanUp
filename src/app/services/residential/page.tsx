import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Cleanup & Demolition Services",
  description: `Residential cleanup and demolition services in Kansas City. Home cleanouts, garage demolition, deck removal, interior demo, and more. Call ${COMPANY.phone} for a free quote.`,
};

const services = [
  {
    title: "Whole-Home Cleanouts",
    description: "Complete property cleanouts for moves, estate settlements, or renovation prep. We remove everything and leave the space broom-clean.",
  },
  {
    title: "Garage & Shed Demolition",
    description: "Safe teardown and removal of garages, sheds, and outbuildings. We handle permits where required and haul away all debris.",
  },
  {
    title: "Deck & Patio Removal",
    description: "Removal of old decks, patios, concrete slabs, and outdoor structures. We prep the area for your next project.",
  },
  {
    title: "Interior Demolition",
    description: "Kitchen and bathroom gutting, wall removal, flooring demo, and selective interior teardowns for remodels and renovations.",
  },
  {
    title: "Fence & Landscape Removal",
    description: "Old fence teardown, stump removal, overgrowth clearing, and yard cleanup to restore your property.",
  },
  {
    title: "Construction Debris Cleanup",
    description: "Post-construction or post-renovation cleanup including debris removal, sweeping, and site restoration.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2">Residential Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Residential Cleanup &amp; Demolition
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From whole-home cleanouts to selective interior demolition, we help
            KC homeowners reclaim their space with honest pricing and clean results.
          </p>
        </div>
      </section>

      {/* Services grid */}
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

      {/* Why us */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Why Kansas City Homeowners Trust Us
            </h2>
            <ul className="text-left space-y-4 max-w-xl mx-auto">
              {[
                "Owner on every job — you work directly with the decision-maker",
                "Our own dumpsters — no third-party rental markups",
                "No loaded bids — the price we quote is the price you pay",
                "Clean job sites — we leave it better than we found it",
                `Family-owned and serving the KC metro since ${COMPANY.since}`,
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
          <h2 className="text-3xl font-bold mb-4">Get a Free Residential Quote</h2>
          <p className="text-white/80 mb-8">
            Tell us about your project and we&apos;ll provide an honest, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="premium-cta inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
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
