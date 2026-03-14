"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerLinks = NAV_LINKS.filter((link) => link.href !== "/");

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 min-h-[5rem]">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/Visby (500 x 500 px) (400 x 200 px) (1).png"
              alt={`${COMPANY.name} logo`}
              width={2500}
              height={200}
              className="h-[1.8rem] sm:h-[2.25rem] w-auto max-w-[225px] sm:max-w-none"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-accent transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={COMPANY.phoneTel}
              className="ml-2 px-3 py-2 text-sm font-semibold text-white/90 hover:text-accent transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="premium-cta ml-3 inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-md transition-colors"
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
            {headerLinks.map((link) => (
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
