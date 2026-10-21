import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Snake: Controls, Safe Space & Growth Tips | VioraPlay";
const description = "Learn how to play Snake: the controls, how the snake grows, and how to avoid trapping yourself as the board fills up.";
const path = "/en/guides/how-to-play-snake";

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

export default async function SnakeGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="snake-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Snake",
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
          { label: "How to Play Snake", href: "/guides/how-to-play-snake" },
        ]}
      />
      <h1>How to Play Snake</h1>
      <p>
        Snake is a classic arcade game. You steer a growing line that constantly moves; eating
        food makes it longer, and the run ends if the snake hits a wall or crosses its own body.
        The challenge is keeping enough open space as the snake grows.
      </p>
      <nav aria-label="Guide sections">
        <a href="#controls">Controls</a> · <a href="#growth">How it grows</a> ·{" "}
        <a href="#space">Keeping safe space</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="controls">
        <h2>Controls</h2>
        <p>
          On desktop, use the arrow keys or WASD, and on mobile, swipe. The snake turns
          immediately but cannot reverse directly into itself — pressing the opposite direction is
          ignored. In multiplayer arena versions, the mouse often steers and a key dashes.
        </p>
      </section>

      <section id="growth">
        <h2>How the snake grows</h2>
        <p>
          Each piece of food adds one segment. Longer snakes score faster but leave less room to
          maneuver, so the difficulty rises with your own success.
        </p>
      </section>

      <section id="space">
        <h2>Keeping safe space</h2>
        <ol>
          <li>Don’t chase food along the wall; a wrong turn there ends the run instantly.</li>
          <li>Reuse open loops — circle a cleared area to buy time before committing to a far pickup.</li>
          <li>In arena modes, cut off rivals by steering them into your tail rather than ramming them.</li>
        </ol>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Why did my snake die when it looked clear?</h3>
        <p>
          You likely crossed your own body at the tail, which moves a step behind your head. Watch
          the whole length, not just the front.
        </p>
        <h3>Is Snake the same as Slither.io?</h3>
        <p>
          They share the core idea, but Slither.io is a multiplayer arena where you grow by
          absorbing orbs and can be cut off by others. Solo Snake is the grid original.
        </p>
        <h3>How do I play Snake online on VioraPlay?</h3>
        <p>
          Try <Link href="/game/snake-2048-64be-1">Snake 2048</Link> from the{" "}
          <Link href="/category/snake">snake games</Link> category.
        </p>
      </section>
    </article>
  );
}
