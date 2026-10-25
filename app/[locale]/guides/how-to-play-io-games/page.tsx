import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play .io Games: Multiplayer Basics & Strategy | VioraPlay";
const description =
  "What .io games are, how a browser multiplayer arena works, and the early-game habits — edge play, farming, risk control — that get you onto the leaderboard.";
const path = "/en/guides/how-to-play-io-games";

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

export default async function HowToPlayIo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play .io Games",
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
          { label: "How to Play .io Games", href: "/guides/how-to-play-io-games" },
        ]}
      />
      <h1>How to Play .io Games</h1>
      <p>
        “.io games” are browser multiplayer games that start in seconds and put everyone in one
        shared arena. There is no download and usually no account: you spawn small, collect
        something, and try to outlast players who spawned at the same time as you.
      </p>

      <nav aria-label="Guide sections">
        <a href="#loop">Core loop</a> · <a href="#start">First minute</a> ·{" "}
        <a href="#midgame">Mid-game</a> · <a href="#mistakes">Mistakes</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="loop">
        <h2>The shared core loop</h2>
        <p>
          Most .io games share the same skeleton, whether they are about snakes, cells, tanks or
          blobs:
        </p>
        <ul>
          <li>You begin small and weak, usually with a short body, low mass or a starter unit.</li>
          <li>Collecting or eating increases your size, score or power.</li>
          <li>Larger players can eliminate you; smaller players are food or targets.</li>
          <li>A leaderboard ranks the current session, and dying resets you to the start.</li>
        </ul>
        <p>
          That structure creates the same tension in every variant: growing makes you stronger but
          also slower, easier to see, and worth more to someone else.
        </p>
      </section>

      <section id="start">
        <h2>Your first minute decides the run</h2>
        <ol>
          <li><strong>Stay near the edge.</strong> Fewer directions to be attacked from, and an escape route behind you.</li>
          <li><strong>Farm before you fight.</strong> Points from neutral pickups are risk-free; a fight at spawn size is a coin flip.</li>
          <li><strong>Watch the minimap, if there is one.</strong> It tells you where the big players are, which is where you should not be.</li>
          <li><strong>Pick a growth route, not a random path.</strong> Circles around a dense area beat wandering across the map.</li>
        </ol>
      </section>

      <section id="midgame">
        <h2>Playing from ahead — and from behind</h2>
        <p>
          When you are near the top of the leaderboard, the map changes: other players avoid you, so
          your job becomes not losing. Avoid tight corridors, keep your escape route open, and take
          only fights you can finish quickly.
        </p>
        <p>
          When you are behind, do not chase the leader. Farm the quiet corner of the map, wait for
          the leader to be distracted by someone else, and only then take the risk. Most leaderboard
          collapses come from a large player entering a space they could not reverse out of.
        </p>
      </section>

      <section id="mistakes">
        <h2>Common mistakes</h2>
        <ul>
          <li>Chasing kills in the first thirty seconds, when you have the least to gain.</li>
          <li>Growing into a corner with no exit.</li>
          <li>Ignoring the map and meeting a larger player head-on.</li>
          <li>Switching games after one death instead of learning one arena’s layout.</li>
        </ul>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Do I need an account?</h3>
        <p>
          Usually not. .io games are designed for instant play; your progress is the current session.
          Some titles add optional profiles or friend lists, but the core game works without them.
        </p>
        <h3>Does lag matter?</h3>
        <p>
          In games where you steer a body or aim at moving targets, yes. A stable connection is worth
          more than a large screen, so close background downloads before a serious run.
        </p>
        <h3>Can I play with friends?</h3>
        <p>
          Some arenas let you join the same server or form a team; others are free-for-all only. If
          the game has no party option, joining at the same moment is usually enough to land in the
          same session.
        </p>
        <p>
          Start with <Link href="/game/snake-2048-64be-1">Snake 2048</Link>,{" "}
          <Link href="/game/eat-blobs-simulator">Eat Blobs Simulator</Link> or{" "}
          <Link href="/game/tall-io">Tall io</Link>, or browse the{" "}
          <Link href="/category/io">.io games</Link> category.
        </p>
      </section>
    </article>
  );
}
