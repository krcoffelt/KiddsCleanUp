import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your quote request has been submitted. We'll be in touch soon.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
          <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
          Your quote request has been submitted successfully. We&apos;ll review
          your project details and get back to you within 24 hours.
        </p>
        <p className="text-foreground/70 mb-8">
          Need something sooner? Call us directly at{" "}
          <a href={COMPANY.phoneTel} className="text-primary font-semibold hover:text-accent transition-colors">
            {COMPANY.phone}
          </a>.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
