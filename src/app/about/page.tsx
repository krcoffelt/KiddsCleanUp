import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name}, a family-owned cleanup and demolition company serving the Kansas City metro since ${COMPANY.since}. Owner-operated with integrity and pride.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Family-owned, owner-operated, and committed to doing the job right
            since {COMPANY.since}.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Kidds Clean Up And Demolition started in {COMPANY.since} with a
                simple idea: do honest work, charge fair prices, and leave every
                job site cleaner than we found it. What began as a small family
                operation has grown into one of the Kansas City metro&apos;s most
                trusted cleanup and demolition teams.
              </p>
              <p>
                As an owner-operated company, you&apos;ll always deal directly
                with the decision-maker. There are no middlemen, no
                miscommunication, and no finger-pointing. When we give you a
                quote, that&apos;s the price — no loaded bids, no hidden fees,
                no surprises.
              </p>
              <p>
                We own our own dumpsters and equipment, which means we control
                the quality and timeline of every project. From residential
                cleanouts to large-scale commercial demolition, we bring the
                same level of dedication and professionalism to every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Integrity",
                text: "We say what we mean and do what we say. Our word is our bond, and our reputation is built on trust.",
              },
              {
                title: "Safety",
                text: "Every crew member follows strict safety protocols. We're trained in lead-safe practices and always prioritize the well-being of our team and your property.",
              },
              {
                title: "Quality",
                text: "We don't cut corners. From the first swing to the final sweep, every detail matters. We leave your site clean, safe, and ready for what's next.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {v.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With a Team You Can Trust?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free, no-obligation quote for your next project.
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
