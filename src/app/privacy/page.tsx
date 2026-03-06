import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary-dark text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Information We Collect</h2>
              <p>
                When you submit a quote request through our website, we collect the information you
                provide, including your name, phone number, email address, project address, project
                details, and other optional information you choose to share. We also collect basic
                technical data such as browser type for security and abuse prevention purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your quote requests and inquiries</li>
                <li>Schedule estimates and communicate about your project</li>
                <li>Improve our services and website experience</li>
                <li>Prevent spam and fraudulent submissions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only as required by law or to protect our rights and safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Data Security</h2>
              <p>
                We take reasonable measures to protect your information using industry-standard
                security practices. Your data is stored securely and access is limited to authorized
                personnel only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your personal information,
                please contact us:
              </p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li>Phone: <a href={COMPANY.phoneTel} className="text-primary hover:text-accent">{COMPANY.phone}</a></li>
                {COMPANY.emails.map((email) => (
                  <li key={email}>
                    Email: <a href={`mailto:${email}`} className="text-primary hover:text-accent">{email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
