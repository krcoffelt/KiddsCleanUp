import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

export default function Breadcrumbs({
  items,
  className = "",
  theme = "dark",
}: BreadcrumbsProps) {
  const colorClasses =
    theme === "light"
      ? "text-primary/70 hover:text-primary"
      : "text-white/70 hover:text-white";
  const currentClasses =
    theme === "light" ? "text-primary-dark" : "text-white";

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className={`transition-colors ${colorClasses}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={`font-medium ${currentClasses}`}>{item.label}</span>
              )}
              {!isLast && <span className={theme === "light" ? "text-primary/40" : "text-white/35"}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
