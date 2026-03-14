import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Lead-Safe", href: "/services/lead-safe" },
  { label: "Water Mitigation", href: "/services/water-mitigation" },
  { label: "Junk Removal", href: "/services/junk-removal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

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
            <a
              href={COMPANY.textTel}
              className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-white/10 hover:bg-white/15 text-white font-bold rounded-md transition-colors text-lg border border-white/20"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9A2.25 2.25 0 0118.75 10.5v4.5a2.25 2.25 0 01-2.25 2.25h-5.69a2.25 2.25 0 00-1.006.238L6 19.5v-1.875A2.25 2.25 0 013.75 15.375V12A3.75 3.75 0 017.5 8.25z" />
              </svg>
              Text Us 24/7
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
                src="/images/Visby (500 x 500 px) (400 x 200 px) (1).png"
                alt={`${COMPANY.name} logo`}
                width={2500}
                height={200}
                className="h-[1.8rem] sm:h-[2rem] w-auto max-w-full"
              />
            </Link>
            <div className="space-y-2 text-sm leading-relaxed text-white/70">
              <p className="font-semibold text-white">Kidds Clean Up and Demo</p>
              <p>Kansas City Metro Service-Area Business</p>
              <p>
                <a href={COMPANY.phoneTel} className="hover:text-accent transition-colors">
                  (816) 457-4363
                </a>
              </p>
              <p>Open Daily: 8:00 AM &ndash; 6:00 PM</p>
              <p>
                Residential Demo | Commercial Demo | Junk Removal | Lead-Safe |
                {" "}Water Mitigation
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
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
