import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  getCategories,
  getGamesByCategory,
  getCategoryBySlug,
  getCategoryIntro,
  getRelatedCategories,
  categoryFullName,
  PER_PAGE,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Adsterra } from "@/components/Adsterra";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

type SearchParams = Record<string, string | string[] | undefined>;

function pageFrom(sp: SearchParams | undefined): number {
  const raw = sp?.page;
  const n = Number(Array.isArray(raw) ? raw[0] : raw);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = pageFrom(sp);
  const games = getGamesByCategory(slug);
  if (!games.length) return {};

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(games[0].category);
  const count = games.length;
  const path = (l: string) => `/${l}/category/${slug}`;

  return {
    metadataBase,
    title: `${fullName} — Play Free Online | VioraPlay`,
    description: getCategoryIntro(slug, fullName.toLowerCase()).replace(
      /\.$/,
      ""
    ) + ` Browse ${count} free ${fullName.toLowerCase()} — no download, instant play.`,
    alternates: {
      canonical: path("en"),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    // Only the first page is indexable; deeper pages are paginated copies.
    robots: page > 1 ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${fullName} — Play Free Online`,
      description: `Play ${count} free ${fullName.toLowerCase()} online. No download, no install.`,
      url: path("en"),
      type: "website" as const,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const games = getGamesByCategory(slug);
  if (!games.length) notFound();

  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("category");

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(games[0].category);

  const page = pageFrom(sp);
  const totalPages = Math.max(1, Math.ceil(games.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageGames = games.slice(start, start + PER_PAGE);

  const relatedCats = getRelatedCategories(slug, 6);

  const pageUrl = (n: number) =>
    n === 1 ? `/category/${slug}` : `/category/${slug}?page=${n}`;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="category-page">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("categories"), href: "/categories" },
          { label: fullName, href: `/category/${slug}` },
        ]}
      />

      <h1>{fullName}</h1>
      <p className="cat-intro">{getCategoryIntro(slug, fullName.toLowerCase())}</p>

      <Adsterra variant="banner" />

      <div className="game-grid">
        {pageGames.map((g, i) => (
          <GameCard key={g.id} game={g} priority={safePage === 1 && i < 8} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label={tc("pagination")}>
          {safePage > 1 && (
            <Link href={pageUrl(safePage - 1)} className="pg-link">
              {tc("prev")}
            </Link>
          )}
          {pages.map((n) => (
            <Link
              key={n}
              href={pageUrl(n)}
              className={`pg-link ${n === safePage ? "is-current" : ""}`}
              aria-current={n === safePage ? "page" : undefined}
            >
              {n}
            </Link>
          ))}
          {safePage < totalPages && (
            <Link href={pageUrl(safePage + 1)} className="pg-link">
              {tc("next")}
            </Link>
          )}
        </nav>
      )}

      {relatedCats.length > 0 && (
        <section className="section">
          <h2>{tc("relatedCategories")}</h2>
          <div className="cat-grid">
            {relatedCats.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="cat-card"
              >
                <span>{c.fullName}</span>
                <span className="cat-count">{c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
