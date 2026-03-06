import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA band */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your cleanup or demolition project.
            Family-owned and serving the KC metro since {COMPANY.since}.
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
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <Link href="/" className="mb-3 inline-flex items-center">
              <Image
                src="/images/KiddsCleanUpLogo_ExtraLong.png"
                alt={`${COMPANY.name} logo`}
                width={1200}
                height={200}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Family-owned cleanup and demolition company serving the Kansas City
              metro area since {COMPANY.since}. Owner-operated with our own
              dumpsters and equipment.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={COMPANY.phoneTel} className="hover:text-accent transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              {COMPANY.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                    {email}
                  </a>
                </li>
              ))}
              <li>{COMPANY.hours}</li>
              <li>{COMPANY.area}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
