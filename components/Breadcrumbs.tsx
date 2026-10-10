import { getLocale } from "next-intl/server";
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
export async function Breadcrumbs({ items }: { items: Crumb[] }) {
  const locale = await getLocale();
  const list = items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    item: `${SITE_URL}/${locale}${it.href === "/" ? "" : it.href}`,
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

