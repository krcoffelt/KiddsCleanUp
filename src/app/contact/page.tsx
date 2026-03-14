import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote",
  description: `Get a free quote from ${COMPANY.name}. Serving Kansas City metro with residential and commercial cleanup, junk removal, demolition, lead-safe services, and water mitigation. Call ${COMPANY.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Request a Free Quote
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Fill out the form below and we&apos;ll get back to you promptly.
            Or call us directly at{" "}
            <a href={COMPANY.phoneTel} className="whitespace-nowrap text-accent hover:underline font-semibold">
              {COMPANY.phone}
            </a>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-surface-dark bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">
                  Tell Us About Your Project
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Contact sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary-dark mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href={COMPANY.phoneTel} className="text-primary hover:text-accent transition-colors">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      {COMPANY.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="block text-primary hover:text-accent transition-colors">
                          {email}
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-foreground/70">{COMPANY.hours}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-foreground/70">{COMPANY.area}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-surface-dark bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary-dark mb-3">
                  What to Expect
                </h3>
                <ol className="space-y-3 text-sm text-foreground/70">
                  {[
                    "Submit your project details",
                    "We'll review and contact you within 24 hours",
                    "Schedule a free on-site estimate",
                    "Receive your honest, no-surprises quote",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
