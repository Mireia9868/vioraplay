import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GameCard } from "@/components/GameCard";
import { COLLECTIONS } from "@/data/collections.generated";
import { GUIDE_ARTICLES } from "@/data/guide-articles";
import { metadataBase } from "@/lib/seo";

const BASE = "https://www.vioraplay.com";

export function generateStaticParams() {
  return Object.keys(COLLECTIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const c = COLLECTIONS[slug];
  if (!c) return {};
  return {
    metadataBase,
    title: c.title,
    description: c.description,
    alternates: { canonical: `/${locale}/collections/${slug}` },
    robots: locale === "en" ? undefined : { index: false, follow: true },
    openGraph: { title: c.h1, description: c.description, url: `${BASE}/en/collections/${slug}`, type: "website" },
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (locale !== "en") notFound();
  const c = COLLECTIONS[slug];
  if (!c) notFound();
  const guide = c.guide ? GUIDE_ARTICLES[c.guide] : undefined;
  const others = Object.values(COLLECTIONS).filter((x) => x.slug !== slug);

  return (
    <div className="category-page collection-page">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: c.h1, href: `/collections/${slug}` }]} />

      <section className="cat-hero">
        <div className="cat-hero-copy">
          <p className="cat-eyebrow">Curated collection</p>
          <h1>{c.h1}</h1>
          <p className="cat-hero-desc">{c.intro}</p>
        </div>
        <span className="cat-emblem" aria-hidden="true">{c.games.length}</span>
      </section>

      <div className="game-grid">
        {c.games.map((g, i) => (
          <GameCard key={g.slug} game={g} priority={i < 4} source="featured" />
        ))}
      </div>

      <div className="cat-bottom cat-bottom--two">
        <section className="cat-editorial">
          <p className="cat-label">Keep playing</p>
          <h2>More ways to play</h2>
          <p>
            Browse the full <Link href={c.playHref}>category</Link> for every title, or read the guide before your first run.
          </p>
          {guide && (
            <Link href={`/guides/${guide.slug}`} className="cat-read-guide">
              {guide.title} →
            </Link>
          )}
        </section>

        <section className="cat-faq">
          <p className="cat-label">FAQ</p>
          <h2>Common questions</h2>
          {c.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>
      </div>

      <section className="section">
        <h2>Other collections</h2>
        <div className="cat-chip-row">
          {others.map((x) => (
            <Link key={x.slug} href={`/collections/${x.slug}`} className="cat-chip">
              {x.h1}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
