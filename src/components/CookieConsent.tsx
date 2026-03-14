"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_MEASUREMENT_ID = "G-2MEYMKHX08";
const COOKIE_CONSENT_KEY = "kidds-cookie-consent";

type ConsentState = "accepted" | "declined" | null;

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") {
    return null;
  }

  const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return savedConsent === "accepted" || savedConsent === "declined" ? savedConsent : null;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = () => onStoreChange();
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getStoredConsent, () => null);

  function updateConsent(nextConsent: Exclude<ConsentState, null>) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, nextConsent);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-surface-dark bg-white p-5 shadow-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-lg font-bold text-primary-dark">Cookie Preferences</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  We use cookies and analytics to understand website traffic and improve the site.
                  You can accept analytics cookies or decline them. See our{" "}
                  <Link href="/privacy" className="font-semibold text-primary hover:text-accent">
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => updateConsent("declined")}
                  className="inline-flex items-center justify-center rounded-md border border-surface-dark px-5 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-surface"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={() => updateConsent("accepted")}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Accept Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
