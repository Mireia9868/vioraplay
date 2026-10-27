import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  getCategories,
  getGamesByCategory,
  getCategoryBySlug,
  getCategoryIntro,
  getNearbyCategories,
  categoryFullName,
  PER_PAGE,
  parseDeviceParam,
  filterGamesByDevices,
  countGamesByDevice,
  DEVICE_FILTERS,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PuzzleSearchGuide } from "@/components/PuzzleSearchGuide";
import { PUZZLE_SEO } from "@/data/regional-seo";
import { CATEGORY_EDITORIAL } from "@/data/category-editorial";
import { GAME_CONTENT } from "@/data/game-content";
import { CATEGORY_FAQ } from "@/data/category-faq";
import { guideForCategory } from "@/lib/guides";
import { isCategoryIndexable } from "@/lib/indexability";
import { routing } from "@/i18n/routing";
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
      languages: buildLanguageAlternates((l) => path(l), routing.locales.filter(l => isCategoryIndexable(l, slug, count))),
    },
    // Thin categories, deeper pages and device-filtered views: crawlable but
    // out of the index. Shared with the sitemap via lib/indexability.ts.
    robots:
      page > 1 || devices.length > 0 || !isCategoryIndexable(locale, slug, count)
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

  const relatedCats = getNearbyCategories(slug, 6);
  // "Start here": show curated titles first, then the rest of the category.
  const topPicks = [...allGames]
    .sort((a, b) => Number(Boolean(GAME_CONTENT[b.slug])) - Number(Boolean(GAME_CONTENT[a.slug])))
    .slice(0, 3);
  // Category editorial is English-only for now (see data/category-editorial.ts).
  // The puzzle page already carries localized copy and a search guide, so it is
  // deliberately excluded here rather than stacked with a second intro.
  const editorial = locale === "en" && slug !== "puzzle" ? CATEGORY_EDITORIAL[slug] : undefined;
  const guide = locale === "en" ? guideForCategory(slug) : undefined;
  const heroName = puzzleCopy?.name ?? fullName;
  const heroParts = heroName.split(" ");
  const heroTail = heroParts.length > 1 ? heroParts[heroParts.length - 1] : heroName;
  const heroHead = heroParts.length > 1 ? heroParts.slice(0, -1).join(" ") : "";
  const heroIntro = editorial?.intro ?? puzzleCopy?.intro ?? getCategoryIntro(slug, fullName.toLowerCase());
  const faq = locale === "en" ? CATEGORY_FAQ[slug] : undefined;

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

      <section className="cat-hero">
        <div className="cat-hero-copy">
          <p className="cat-eyebrow">{tc("exploreEyebrow")}</p>
          <h1>
            {heroHead ? <>{heroHead} </> : null}
            <span>{heroTail}</span>
          </h1>
          <p className="cat-hero-desc">{heroIntro}</p>
        </div>
        <span className="cat-emblem" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" />
          </svg>
        </span>
      </section>

      <div className="cat-filterbar" aria-label={tc("filterHeading")}>
        <span className="cat-filter-label">{tc("filterHeading")}</span>
        <div className="cat-devices" role="group" aria-label={tc("filterHeading")}>
          {DEVICE_FILTERS.map((d) => {
            const active = devices.includes(d.key);
            const labelKey = d.key === "ios" ? "deviceIOS" : `device${d.key[0].toUpperCase()}${d.key.slice(1)}`;
            return (
              <Link
                key={d.key}
                href={deviceHref(d.key)}
                className={`cat-device ${active ? "is-active" : ""}`}
                aria-pressed={active}
                scroll={false}
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  {d.key === "desktop" && <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>}
                  {d.key === "android" && <><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M10 6h4" /></>}
                  {d.key === "ios" && <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 19h2" /></>}
                </svg>
                {tc(labelKey)}
              </Link>
            );
          })}
          {devices.length > 0 && (
            <Link href={`/category/${slug}`} className="cat-device cat-clear" scroll={false}>
              {tc("clear")}
            </Link>
          )}
        </div>
        <span className="cat-count">{tc("gameCount", { count: games.length })}</span>
      </div>

      {devices.length > 0 && (
        <p className="filter-note">
          {tc("showing", { count: games.length, total: allGames.length })}
        </p>
      )}

      <div className="game-grid">
        {pageGames.map((g, i) => (
          <GameCard key={g.id} game={g} priority={safePage === 1 && i < 8} />
        ))}
      </div>

      {pageGames.length === 0 && <p className="empty-note">{tc("noResults")}</p>}

      {slug === "puzzle" && safePage === 1 && devices.length === 0 && <PuzzleSearchGuide locale={locale} />}

      {safePage === 1 && devices.length === 0 && (
        <div className={`cat-bottom ${faq ? "" : "cat-bottom--two"}`}>
          <section className="cat-editorial">
            <p className="cat-label">{fullName}</p>
            <h2>{editorial?.sections[0]?.h ?? fullName}</h2>
            <p>{heroIntro}</p>
            {guide && (
              <Link href={`/guides/${guide.slug}`} className="cat-read-guide">
                {tc("readGuide")} →
              </Link>
            )}
          </section>

          {faq && (
            <section className="cat-faq">
              <p className="cat-label">{tc("faqTitle")}</p>
              <h2>{tc("faqTitle")}</h2>
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </section>
          )}

          {relatedCats.length > 0 && (
            <section className="cat-chips">
              <p className="cat-label">{tc("relatedCategories")}</p>
              <h2>{tc("relatedCategories")}</h2>
              <div className="cat-chip-row">
                {relatedCats.map((c) => (
                  <Link key={c.slug} href={`/category/${c.slug}`} className="cat-chip">
                    {c.fullName}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {editorial && safePage === 1 && devices.length === 0 && editorial.sections.length > 1 && (
        <section className="category-editorial">
          {editorial.sections.slice(1).map((section) => (
            <div key={section.h}>
              <h2>{section.h}</h2>
              <p>{section.p}</p>
            </div>
          ))}
        </section>
      )}

    </div>
  );
}

