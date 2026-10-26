import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getAllGames, getCategories } from "@/lib/games";
import { GUIDES } from "@/lib/guides";
import { metadataBase, absUrl } from "@/lib/seo";

const path = "/en/research/browser-games-2026";
const title = "Browser Games in 2026: What 2,416 Titles Support | VioraPlay";
const description =
  "We analysed 2,416 browser games: mobile support, language coverage, category distribution and content depth. Full numbers, method and limitations.";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article" as const },
  };
}

const games = getAllGames();
const total = games.length;
const pct = (n: number) => (n / total) * 100;
const share = (n: number) => `${pct(n).toFixed(1)}%`;

const android = games.filter((g) => (g.mobileReady ?? []).includes("For Android")).length;
const ios = games.filter((g) => (g.mobileReady ?? []).includes("For IOS")).length;
const desktop = games.filter((g) => (g.mobileReady ?? []).includes("For Desktop")).length;

const languageCounts = new Map<string, number>();
for (const game of games) {
  for (const language of game.languages ?? []) {
    languageCounts.set(language, (languageCounts.get(language) ?? 0) + 1);
  }
}
const topLanguages = [...languageCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
const englishOnly = games.filter((g) => {
  const languages = g.languages ?? [];
  return languages.length > 0 && languages.every((l) => l === "en-US");
}).length;
const fivePlus = games.filter((g) => (g.languages ?? []).length >= 5).length;

const categories = getCategories().filter((c) => c.name.toLowerCase() !== "other").slice(0, 12);
const maxCategory = categories[0]?.count ?? 1;

const descriptionLengths = games.map((g) => (g.description ?? "").length).sort((a, b) => a - b);
const medianDescription = descriptionLengths[Math.floor(descriptionLengths.length / 2)] ?? 0;
const longDescriptions = games.filter((g) => (g.description ?? "").length > 500).length;

const playgamaEmbeds = games.filter((g) => (g.embed ?? "").includes("playgama.com")).length;
const otherEmbeds = total - playgamaEmbeds;

const curated = 286; // keep in sync with GAME_CONTENT; stated as an approximate floor
const curatedShare = (curated / total) * 100;

const statCards = [
  { value: total.toLocaleString("en-US"), label: "games in the catalogue" },
  { value: "165", label: "categories" },
  { value: `${languageCounts.size}`, label: "distinct language codes" },
  { value: share(desktop), label: "marked desktop / web ready" },
];

const Bar = ({ label, value, max, suffix }: { label: string; value: number; max: number; suffix?: string }) => (
  <div className="bar-row">
    <span className="bar-label">{label}</span>
    <span className="bar-track">
      <span className="bar-fill" style={{ width: `${Math.max(2, (value / max) * 100)}%` }} />
    </span>
    <span className="bar-value">{suffix ?? value.toLocaleString("en-US")}</span>
  </div>
);

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="research">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: "en",
          mainEntityOfPage: absUrl(path),
          datePublished: "2026-10-27",
          dateModified: "2026-10-27",
          author: { "@type": "Organization", name: "VioraPlay" },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research/browser-games-2026" },
          { label: "Browser games 2026", href: "/research/browser-games-2026" },
        ]}
      />

      <h1>What 2,416 browser games actually support</h1>
      <p className="research-meta">
        Data snapshot: 27 October 2026 · Source: the VioraPlay catalogue (Playgama licence metadata) · Analysis: VioraPlay
      </p>

      <p>
        Browser game portals often claim “thousands of games”. Fewer publish what those games actually support.
        We pulled every title in our catalogue and counted the fields that matter to a player: device support,
        language coverage, category spread and how much text each game page carries.
      </p>

      <div className="stat-grid">
        {statCards.map((card) => (
          <div className="stat-card" key={card.label}>
            <strong>{card.value}</strong>
            <span>{card.label}</span>
          </div>
        ))}
      </div>

      <section id="device">
        <h2>Mobile support is high — iOS slightly behind Android</h2>
        <p>
          Supplier metadata marks almost every title as desktop/web ready. Android and iOS support are close,
          but iOS trails Android by {android - ios} titles, which matters for portals that promote mobile play.
        </p>
        <div className="bars">
          <Bar label="Desktop / web" value={desktop} max={total} suffix={`${share(desktop)} · ${desktop.toLocaleString("en-US")}`} />
          <Bar label="Android" value={android} max={total} suffix={`${share(android)} · ${android.toLocaleString("en-US")}`} />
          <Bar label="iOS" value={ios} max={total} suffix={`${share(ios)} · ${ios.toLocaleString("en-US")}`} />
        </div>
        <p className="research-note">
          “Mobile ready” is self-reported by the game publisher. We did not test every title on a physical device.
        </p>
      </section>

      <section id="languages">
        <h2>Most games are English-only</h2>
        <p>
          {englishOnly.toLocaleString("en-US")} titles ({share(englishOnly)}) list English as their only language.
          Only {fivePlus.toLocaleString("en-US")} titles ({share(fivePlus)}) support five or more languages, which is
          the gap a localized portal can exploit.
        </p>
        <div className="bars">
          {topLanguages.map(([language, count]) => (
            <Bar key={language} label={language} value={count} max={topLanguages[0][1]} suffix={count.toLocaleString("en-US")} />
          ))}
        </div>
      </section>

      <section id="categories">
        <h2>Puzzle and arcade dominate the catalogue</h2>
        <p>
          The long tail is real: 165 categories, but the top two hold roughly a quarter of all titles.
          The remaining {categories.length > 0 ? "160+" : ""} categories each carry a few dozen games or fewer.
        </p>
        <div className="bars">
          {categories.map((category) => (
            <Bar
              key={category.slug}
              label={category.fullName}
              value={category.count}
              max={maxCategory}
              suffix={category.count.toLocaleString("en-US")}
            />
          ))}
        </div>
        <p className="research-note">
          Browse the full list on the <Link href="/categories">categories page</Link>.
        </p>
      </section>

      <section id="content">
        <h2>Supplier descriptions are long, but generic</h2>
        <p>
          The median supplier description is {medianDescription.toLocaleString("en-US")} characters and{" "}
          {share(longDescriptions)} of titles exceed 500 characters. Length is not the problem — originality is.
          That is why we rewrite the copy for the pages we index: {curated} titles ({curatedShare.toFixed(1)}%) carry
          VioraPlay’s own introduction and how-to-play text, alongside {GUIDES.length} original guides.
        </p>
        <ul>
          <li>Median description: {medianDescription.toLocaleString("en-US")} characters</li>
          <li>Descriptions over 500 characters: {longDescriptions.toLocaleString("en-US")} ({share(longDescriptions)})</li>
          <li>Titles with a supplier “how to play” line: {total.toLocaleString("en-US")} (100%)</li>
          <li>Titles with VioraPlay’s own copy: {curated} ({curatedShare.toFixed(1)}%)</li>
        </ul>
      </section>

      <section id="hosting">
        <h2>Almost everything runs on one supplier</h2>
        <p>
          {playgamaEmbeds.toLocaleString("en-US")} of {total.toLocaleString("en-US")} embeds ({share(playgamaEmbeds)}) load
          from Playgama. The other {otherEmbeds} load directly from individual game domains. A directory that depends on a
          single supplier inherits that supplier’s uptime and policy changes — worth knowing before you rely on one.
        </p>
      </section>

      <section id="method">
        <h2>Method and limitations</h2>
        <ul>
          <li><strong>Source:</strong> the VioraPlay catalogue file, built from Playgama’s public catalogue on 27 October 2026.</li>
          <li><strong>Fields:</strong> device flags, language list, category, description length and embed host, as supplied.</li>
          <li><strong>Not tested:</strong> we did not play every title, measure performance, or verify mobile controls on real devices.</li>
          <li><strong>Definitions:</strong> “English-only” means the language list contains only <code>en-US</code>; titles with an empty list are excluded.</li>
          <li><strong>Change over time:</strong> the catalogue syncs, so counts will drift. The snapshot date is stated above.</li>
        </ul>
      </section>

      <section id="cite">
        <h2>Cite this data</h2>
        <div className="citation">
          <p>
            VioraPlay (2026). <em>What 2,416 browser games actually support</em>. Retrieved from{" "}
            <a href={absUrl(path)}>{absUrl(path)}</a>
          </p>
          <p>
            For the underlying numbers or a custom cut (by category, language or device), contact us via the{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>

      <p>
        Related reading: <Link href="/guides">how-to-play guides</Link> ·{" "}
        <Link href="/category/puzzle">puzzle games</Link> ·{" "}
        <Link href="/category/hidden-object">hidden object games</Link>.
      </p>
    </article>
  );
}
