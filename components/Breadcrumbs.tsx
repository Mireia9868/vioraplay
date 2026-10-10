import { Link } from "@/i18n/navigation";
import { SITE_URL } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Visible breadcrumb trail + BreadcrumbList structured data.
 * Helps both users and crawlers/AI understand page hierarchy (GEO).
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const list = items.map((it) => ({
    "@type": "ListItem",
    position: items.indexOf(it) + 1,
    name: it.label,
    item: `${SITE_URL}${it.href}`,
  }));

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.href}>
            {i < items.length - 1 ? (
              <Link href={it.href}>{it.label}</Link>
            ) : (
              <span aria-current="page">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="bc-sep"> / </span>}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: list,
        }}
      />
    </nav>
  );
}
