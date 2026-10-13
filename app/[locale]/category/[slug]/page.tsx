import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  getCategories,
  getGamesByCategory,
  getCategoryBySlug,
  getCategoryIntro,
  getRelatedCategories,
  categoryFullName,
  PER_PAGE,
  parseDeviceParam,
  filterGamesByDevices,
  countGamesByDevice,
  DEVICE_FILTERS,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Adsterra } from "@/components/Adsterra";
import { PuzzleSearchGuide } from "@/components/PuzzleSearchGuide";
import { PUZZLE_SEO, isNewLocale } from "@/data/regional-seo";
import { routing } from "@/i18n/routing";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

type SearchParams = Record<string, string | string[] | undefined>;

/**
 * Minimum games a category needs before it is worth indexing on its own.
 *
 * 76 of 165 categories hold 3 or fewer games; 116 hold fewer than 10. Those
 * pages duplicate the parent category's content with a handful of tiles, so
 * indexing them dilutes the site's quality evaluation across the whole catalog.
 * Threshold chosen at 10: it keeps 49 categories indexable while parking the
 * thin tail. Games inside stay reachable via the parent category and homepage,
 * and follow:true keeps their link equity flowing.
 */
const MIN_INDEXABLE_GAMES = 10;

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
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug, locale } = await params;
  const sp = await searchParams;
  const page = pageFrom(sp);
  const devices = parseDeviceParam(sp?.device);
  const games = getGamesByCategory(slug);
  if (!games.length) return {};

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(games[0].category);
  const count = games.length;
  const puzzleCopy = slug === "puzzle" ? PUZZLE_SEO[locale] : undefined;
  const deviceQs = devices.length ? `device=${devices.join(",")}` : "";
  const path = (l: string) => {
    const parts: string[] = [];
    if (page > 1) parts.push(`page=${page}`);
    if (deviceQs) parts.push(deviceQs);
    const qs = parts.join("&");
    return `/${l}/category/${slug}${qs ? `?${qs}` : ""}`;
  };

  return {
    metadataBase,
    title: puzzleCopy?.title ?? `${fullName} — Play Free Online | VioraPlay`,
    description: puzzleCopy?.description ?? getCategoryIntro(slug, fullName.toLowerCase()).replace(
      /\.$/,
      ""
    ) + ` Browse ${count} free ${fullName.toLowerCase()} — no download, instant play.`,
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l), routing.locales.filter(l => slug === "puzzle" || !isNewLocale(l))),
    },
    // Deeper pages and device-filtered views: crawlable but out of the index.
    // Thin categories: same, for the reason documented on MIN_INDEXABLE_GAMES.
    robots:
      page > 1 || devices.length > 0 || count < MIN_INDEXABLE_GAMES || (isNewLocale(locale) && !puzzleCopy)
        ? { index: false, follow: true }
        : undefined,
    openGraph: {
      title: puzzleCopy?.name ?? `${fullName} — Play Free Online`,
      description: puzzleCopy?.description ?? `Play ${count} free ${fullName.toLowerCase()} online. No download, no install.`,
      url: path(locale),
      type: "website" as const,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug, locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const allGames = getGamesByCategory(slug);
  if (!allGames.length) notFound();

  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("categories");

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(allGames[0].category);
  const puzzleCopy = slug === "puzzle" ? PUZZLE_SEO[locale] : undefined;

  const devices = parseDeviceParam(sp?.device);
  const games = devices.length ? filterGamesByDevices(allGames, devices) : allGames;
  const deviceCounts = countGamesByDevice(allGames);

  const page = pageFrom(sp);
  const totalPages = Math.max(1, Math.ceil(games.length / PER_PAGE));
  // Unfiltered out-of-range pages 404 (deliberate SEO choice); filtered views
  // clamp instead so a stale ?page= on a smaller result set never hard-fails.
  const safePage = page > totalPages && devices.length > 0 ? totalPages : page;
  if (page > totalPages && devices.length === 0) notFound();
  const start = (safePage - 1) * PER_PAGE;
  const pageGames = games.slice(start, start + PER_PAGE);

  const relatedCats = getRelatedCategories(slug, 6);

  const deviceQs = devices.length ? `device=${devices.join(",")}` : "";
  const pageUrl = (n: number) => {
    const parts: string[] = [];
    if (n > 1) parts.push(`page=${n}`);
    if (deviceQs) parts.push(deviceQs);
    const qs = parts.join("&");
    return qs ? `/category/${slug}?${qs}` : `/category/${slug}`;
  };

  const deviceHref = (toggleKey: string) => {
    const set = new Set(devices);
    if (set.has(toggleKey)) set.delete(toggleKey);
    else set.add(toggleKey);
    const next = DEVICE_FILTERS.map((d) => d.key).filter((k) => set.has(k));
    return next.length ? `/category/${slug}?device=${next.join(",")}` : `/category/${slug}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="category-page">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("categories"), href: "/categories" },
          { label: puzzleCopy?.name ?? fullName, href: `/category/${slug}` },
        ]}
      />

      <h1>{puzzleCopy?.name ?? fullName}</h1>
      <p className="cat-intro">{puzzleCopy?.intro ?? getCategoryIntro(slug, fullName.toLowerCase())}</p>

      <div className="device-filter" aria-label={tc("filterHeading")}>
        <span className="df-label">{tc("filterHeading")}</span>
        <div className="df-chips">
          {DEVICE_FILTERS.map((d) => {
            const active = devices.includes(d.key);
            const n = deviceCounts[d.key];
            const labelKey = d.key === "ios" ? "deviceIOS" : `device${d.key[0].toUpperCase()}${d.key.slice(1)}`;
            return (
              <Link
                key={d.key}
                href={deviceHref(d.key)}
                className={`df-chip ${active ? "is-active" : ""}`}
                aria-pressed={active}
                scroll={false}
              >
                {tc(labelKey)}
                <span className="df-count">{n}</span>
              </Link>
            );
          })}
          {devices.length > 0 && (
            <Link href={`/category/${slug}`} className="df-clear" scroll={false}>
              {tc("clear")}
            </Link>
          )}
        </div>
      </div>

      {devices.length > 0 && (
        <p className="filter-note">
          {tc("showing", { count: games.length, total: allGames.length })}
        </p>
      )}

      <Adsterra variant="banner" />

      <div className="game-grid">
        {pageGames.map((g, i) => (
          <GameCard key={g.id} game={g} priority={safePage === 1 && i < 8} />
        ))}
      </div>

      {pageGames.length === 0 && <p className="empty-note">{tc("noResults")}</p>}

      {slug === "puzzle" && safePage === 1 && devices.length === 0 && <PuzzleSearchGuide locale={locale} />}

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

