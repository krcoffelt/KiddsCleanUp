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
              <p>
                {COMPANY.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
                This Privacy Policy explains what information we collect through this website,
                how we use it, when we may share it, and the choices you have regarding your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Information We Collect</h2>
              <p>
                We collect information you choose to provide when you contact us or request a
                quote. This may include your name, phone number, email address, project address,
                service type, preferred date or time, and any project details you submit.
              </p>
              <p>
                We also collect limited technical and usage information automatically, such as
                IP-related security data, browser and device information, pages viewed, and
                analytics events used to understand how visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your quote requests and inquiries</li>
                <li>Schedule estimates and communicate about your project</li>
                <li>Send follow-up emails or texts related to your request</li>
                <li>Operate, monitor, and improve our services and website experience</li>
                <li>Prevent spam and fraudulent submissions</li>
                <li>Measure site usage and marketing performance through analytics tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Analytics and Cookies</h2>
              <p>
                We use tools such as Google Analytics to understand website traffic and how visitors
                interact with our pages. These tools may use cookies or similar technologies to
                collect information such as pages visited, approximate location, device type, and
                time spent on the site.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect
                some site functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">How We Share Information</h2>
              <p>
                We do not sell your personal information. We may share information with service
                providers that help us operate the website and communicate with customers, such as
                website hosting, analytics, form handling, database, and email delivery providers.
              </p>
              <p>
                We may also disclose information if required by law, to respond to legal process,
                or to protect our rights, safety, property, or customers.
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
              <h2 className="text-xl font-bold text-primary-dark mb-3">Data Retention</h2>
              <p>
                We keep customer inquiry and quote request information for as long as reasonably
                necessary to respond to requests, maintain business records, improve our services,
                and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Your Choices</h2>
              <p>
                You may contact us to request updates or deletion of the personal information you
                submitted through our website, subject to any legal or operational recordkeeping
                requirements we may have.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites or services. We are not
                responsible for the privacy practices or content of those third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">Contact Information</h2>
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
