import Link from "next/link";

interface LocationLink {
  label: string;
  href: string;
}

interface LocationLinkChipsProps {
  title: string;
  intro: string;
  links: LocationLink[];
}

export default function LocationLinkChips({
  title,
  intro,
  links,
}: LocationLinkChipsProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{title}</h2>
          <p className="text-foreground/70 leading-relaxed">{intro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-surface-dark bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
