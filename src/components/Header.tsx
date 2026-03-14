"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY } from "@/lib/constants";

const HEADER_LINKS = [
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Lead-Safe", href: "/services/lead-safe" },
  { label: "Water Mitigation", href: "/services/water-mitigation" },
  { label: "Junk Removal", href: "/services/junk-removal" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 min-h-[5rem]">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src="/images/Visby (500 x 500 px) (400 x 200 px) (1).png"
              alt={`${COMPANY.name} logo`}
              width={2500}
              height={200}
              className="h-[1.6rem] sm:h-[2rem] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 shrink-0">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 lg:px-2.5 py-2 text-[0.92rem] lg:text-sm font-medium tracking-tight whitespace-nowrap text-white/90 hover:text-accent transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={COMPANY.phoneTel}
              className="ml-1.5 lg:ml-2 px-2 lg:px-2.5 py-2 text-[0.92rem] lg:text-sm font-semibold tracking-tight whitespace-nowrap text-white/90 hover:text-accent transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="premium-cta ml-2 lg:ml-3 inline-flex items-center px-4 lg:px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-[0.92rem] lg:text-sm whitespace-nowrap rounded-md transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-white/90 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 pb-4">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-base font-medium text-white/90 hover:text-accent hover:bg-white/5 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={COMPANY.phoneTel}
              className="mt-2 block px-3 py-2.5 text-base font-semibold text-white/90 hover:text-accent hover:bg-white/5 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="premium-cta mt-2 block mx-3 text-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Request Quote
            </Link>
            <p className="px-3 pt-3 text-sm text-white/60">
              {COMPANY.hours} &middot; {COMPANY.area}
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}
