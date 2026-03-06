import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-surface-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-light/30 transition-all"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors">
        Learn More
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
