import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Tower Defense: Placement, Economy & Waves | VioraPlay";
const description = "Learn how to play tower defense: where to place towers, how to manage economy, and how to survive later waves.";
const path = "/en/guides/how-to-play-tower-defense";

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

export default async function TowerDefenseGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="td-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Tower Defense",
          description,
          inLanguage: "en",
          mainEntityOfPage: absUrl(path),
          author: { "@type": "Organization", name: "VioraPlay" },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/guides" },
          { label: "How to Play Tower Defense", href: "/guides/how-to-play-tower-defense" },
        ]}
      />
      <h1>How to Play Tower Defense</h1>
      <p>
        Tower defense is a strategy game where enemies travel along a fixed path and you place
        defensive towers to stop them before they reach your base. Each enemy you destroy earns
        currency you reinvest into more or stronger towers.
      </p>
      <nav aria-label="Guide sections">
        <a href="#placement">Placement</a> · <a href="#economy">Economy</a> ·{" "}
        <a href="#waves">Waves</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="placement">
        <h2>Where to place towers</h2>
        <p>
          Cover the longest stretch of the path. Towers near corners and chokepoints hit enemies
          for more time than towers on a straight, fast section. Mix range towers (to soften
          groups early) with high-damage towers at the end where enemies are already weakened.
        </p>
      </section>

      <section id="economy">
        <h2>Managing economy</h2>
        <p>
          Don’t spend every coin the moment you get it. Upgrading one strong tower often beats
          spreading thin across many weak ones. Keep a reserve so a surprise tough wave doesn’t
          catch you with no way to respond.
        </p>
      </section>

      <section id="waves">
        <h2>Surviving later waves</h2>
        <p>
          Later waves introduce faster or armored enemies. Save splash or slow effects for them,
          and reassign towers between waves when the game allows it. The goal is to thin the
          group before it bunches up at the base.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Should I build many cheap towers or a few strong ones?</h3>
        <p>
          Early on, a couple of well-placed towers is enough. As waves scale, upgrading those
          same towers outperforms buying more cheap ones that cannot keep up.
        </p>
        <h3>What do “slow” or “support” towers do?</h3>
        <p>
          They don’t kill efficiently but reduce enemy speed or resistance, letting your damage
          towers finish the job. Use them on the longest path sections.
        </p>
        <h3>How do I play tower defense online on VioraPlay?</h3>
        <p>
          Try <Link href="/game/epic-empire-tower-defense">Epic Empire: Tower Defense</Link> from
          the <Link href="/category/tower-defense">tower defense games</Link> category.
        </p>
      </section>
    </article>
  );
}
