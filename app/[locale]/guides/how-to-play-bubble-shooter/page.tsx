import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Bubble Shooter: Aiming, Banks & Combos | VioraPlay";
const description = "Learn how to play bubble shooter: aiming, banking shots off walls, and building chain-reaction combos to clear the board.";
const path = "/en/guides/how-to-play-bubble-shooter";

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

export default async function BubbleShooterGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="bubble-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Bubble Shooter",
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
          { label: "How to Play Bubble Shooter", href: "/guides/how-to-play-bubble-shooter" },
        ]}
      />
      <h1>How to Play Bubble Shooter</h1>
      <p>
        Bubble shooter is an aiming puzzle. You fire colored bubbles from a launcher at a cluster
        of bubbles stuck to the top of the play area. Match three or more of the same color and
        they pop. Clear the board — or survive as long as you can — before the cluster reaches
        the bottom.
      </p>
      <nav aria-label="Guide sections">
        <a href="#aim">Aiming</a> · <a href="#banks">Bank shots</a> · <a href="#combos">Combos</a>{" "}
        · <a href="#questions">Common questions</a>
      </nav>

      <section id="aim">
        <h2>Aiming without wasting shots</h2>
        <p>
          Most bubble shooters show a guideline for your shot. Aim for the spot where your bubble
          will connect with two or more same-colored bubbles. Plan one shot ahead: every shot
          that does not make a match adds to the stack.
        </p>
      </section>

      <section id="banks">
        <h2>Banking shots off the walls</h2>
        <p>
          When a direct line is blocked, fire at the side wall. The bubble bounces and can reach
          pockets you cannot hit head-on. Banking is how you reach bubbles tucked behind others.
        </p>
      </section>

      <section id="combos">
        <h2>Building chain-reaction combos</h2>
        <p>
          When you pop a group, any bubbles left hanging with no support fall off the board for a
          bonus. Set up shots so a single match cuts the anchor holding a big cluster, and the
          whole section drops at once.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Do I always need three to pop?</h3>
        <p>
          The standard rule is three or more of the same color connected together. Some variants
          pop on two; check the level goal shown in the game.
        </p>
        <h3>What happens when the stack reaches the bottom?</h3>
        <p>
          In most versions that ends the level. The launcher also drops the cluster lower after a
          set number of shots, so clearing efficiently matters more than firing fast.
        </p>
        <h3>How do I play bubble shooter online on VioraPlay?</h3>
        <p>
          Start with <Link href="/game/bubble-shooter-tap--pop">Bubble Shooter: Tap &amp; Pop</Link>{" "}
          from the <Link href="/category/bubble-shooter">bubble shooter games</Link> category.
        </p>
      </section>
    </article>
  );
}
