import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lead-Safe Removal & Demolition Services",
  description: `Lead-safe removal and demolition services in Kansas City. EPA-compliant lead paint removal, certified practices, and safe disposal. Call ${COMPANY.phone} for a free quote.`,
};

const services = [
  {
    title: "Lead Paint Removal",
    description: "Safe removal of lead-based paint from surfaces using EPA-approved methods. We contain, remove, and dispose of lead materials properly.",
  },
  {
    title: "Lead-Safe Demolition",
    description: "Demolition of structures containing lead paint or materials using certified lead-safe work practices to protect occupants and workers.",
  },
  {
    title: "Pre-Renovation Lead Testing Coordination",
    description: "We coordinate lead testing before renovation or demolition projects to identify hazards and plan safe work procedures.",
  },
  {
    title: "Containment & Disposal",
    description: "Proper containment of lead dust and debris during work, with compliant disposal at authorized facilities.",
  },
];

export default function LeadSafePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold mb-2">Lead-Safe Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Kansas City Lead-Safe Removal &amp; Demolition
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Protect your family, tenants, and workers with certified lead-safe
            practices. We follow EPA guidelines for every lead-related project.
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
              Federal law requires that renovation, repair, and painting activities that
              disturb lead paint in these homes follow lead-safe work practices.
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

      {/* Our approach */}
      <section className="py-16 sm:py-24 bg-surface">
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
                  text: "We evaluate the property and coordinate lead testing to identify all hazardous materials before work begins.",
                },
                {
                  step: "2",
                  title: "Containment",
                  text: "Work areas are fully contained with plastic sheeting and barriers to prevent lead dust from spreading to clean areas.",
                },
                {
                  step: "3",
                  title: "Safe Removal",
                  text: "Lead-containing materials are carefully removed using wet methods and HEPA-filtered equipment to minimize dust.",
                },
                {
                  step: "4",
                  title: "Cleanup & Verification",
                  text: "Thorough cleanup with HEPA vacuums followed by verification that all surfaces meet clearance standards.",
                },
                {
                  step: "5",
                  title: "Proper Disposal",
                  text: "All lead waste is packaged and transported to authorized disposal facilities in compliance with regulations.",
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">Need Lead-Safe Services?</h2>
          <p className="text-white/80 mb-8">
            Don&apos;t take chances with lead. Get a free consultation and quote for your project.
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
