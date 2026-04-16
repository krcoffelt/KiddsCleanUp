"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export default function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventParams,
  target,
  rel,
  onClick,
}: TrackedLinkProps) {
  function handleClick() {
    if (eventName) {
      trackEvent(eventName, eventParams);
    }

    onClick?.();
  }

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
