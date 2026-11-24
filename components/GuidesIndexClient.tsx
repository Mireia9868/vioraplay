"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

export type UiGuide = {
  slug: string;
  title: string;
  blurb: string;
  cat: string;
  catName: string;
  category: string;
  icon: string;
};

type Category = { id: string; label: string; img: string; href: string; desc: string };

const CATEGORIES: Category[] = [
  { id: "puzzle", label: "Puzzle", img: "category-puzzle", href: "/category/puzzle", desc: "Sudoku · 2048 · Match-3 · Merge · Mahjong" },
  { id: "board", label: "Board & Card", img: "category-board", href: "/category/cards", desc: "Chess · Gomoku · Solitaire · Backgammon" },
  { id: "arcade", label: "Arcade & Action", img: "category-arcade", href: "/category/arcade", desc: "Snake · Shooting · Racing · Platform" },
  { id: "strategy", label: "Strategy & Idle", img: "category-strategy", href: "/category/strategy", desc: "Tower Defense · Tycoon · Idle · Clicker" },
  { id: "word", label: "Word & Hidden", img: "category-word", href: "/category/words", desc: "Crosswords · Word Search · Hidden Object" },
  { id: "casual", label: "Casual & Creative", img: "category-casual", href: "/category/cooking", desc: "Cooking · Dress-Up · Drawing · Sports" },
];

const CAT_LABEL: Record<string, string> = {
  puzzle: "Puzzle", board: "Board", arcade: "Arcade",
  strategy: "Strategy", word: "Word", casual: "Casual",
};

const FEATURED_SLUGS = ["how-to-play-sudoku", "how-to-play-chess", "how-to-play-match-3"];

export function GuidesIndexClient({ guides }: { guides: UiGuide[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (event.key === "/" && target?.tagName !== "INPUT" && target?.tagName !== "TEXTAREA") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) =>
      (active === "all" || g.category === active) &&
      (!q || g.title.toLowerCase().includes(q) || g.blurb.toLowerCase().includes(q))
    );
  }, [guides, query, active]);

  const featured = FEATURED_SLUGS
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is UiGuide => Boolean(g));

  return (
    <div className="guides-page">
      <section className="gp-hero">
        <div className="gp-wrap">
          <nav className="gp-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Guides</span>
          </nav>
          <div className="gp-hero-main">
            <div className="gp-hero-copy">
              <span className="gp-eyebrow">LEARN · PLAY · MASTER</span>
              <h1>Game Guides<br />&amp; How-To Play</h1>
              <p className="gp-hero-sub">
                Plain-language how-to-play guides for browser games. Learn the rules, a beginner routine,
                and the questions everyone asks — then jump straight in and play free.
              </p>
              <div className="gp-hero-cta">
                <button type="button" className="gp-btn gp-btn-primary" onClick={() => document.getElementById("guides")?.scrollIntoView()}>
                  Browse all guides
                </button>
                <button type="button" className="gp-btn gp-btn-secondary" onClick={() => document.getElementById("categories")?.scrollIntoView()}>
                  See categories
                </button>
              </div>
              <div className="gp-stats">
                <div><strong>{guides.length}</strong><span>step-by-step guides</span></div>
                <div><strong>{CATEGORIES.length}</strong><span>topics to explore</span></div>
                <div><strong>100%</strong><span>free in your browser</span></div>
              </div>
            </div>
            <div className="gp-hero-art">
              <img src="/guides/hero-gaming.png" alt="Game elements illustration" width={1536} height={946} />
            </div>
          </div>
        </div>
      </section>

      <section className="gp-search">
        <div className="gp-wrap">
          <div className="gp-search-head">
            <h2>Find a guide</h2>
            <span className="gp-count">Showing {filtered.length} guide{filtered.length === 1 ? "" : "s"}</span>
          </div>
          <label className="gp-search-bar">
            <img src="/guides/icons/ui-search-lg.svg" alt="" width={20} height={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Search ${guides.length} how-to-play guides…`}
              autoComplete="off"
              aria-label="Search guides"
            />
            <span className="gp-key">/ to search</span>
          </label>
          <div className="gp-filters" role="group" aria-label="Filter guides by topic">
            <button type="button" className={`gp-chip${active === "all" ? " is-active" : ""}`} onClick={() => setActive("all")}>All guides</button>
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" className={`gp-chip${active === c.id ? " is-active" : ""}`} onClick={() => setActive(c.id)}>{c.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="gp-section" id="categories">
        <div className="gp-wrap">
          <div className="gp-section-head">
            <h2>Browse by category</h2>
            <span className="gp-sub">Pick a genre and start learning</span>
          </div>
          <div className="gp-cat-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.id} className="gp-cat-card" href={c.href}>
                <div className="gp-cat-thumb">
                  <img src={`/guides/${c.img}.svg`} alt="" width={436} height={168} />
                </div>
                <div className="gp-cat-body"><h3>{c.label}</h3><p>{c.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gp-featured">
        <div className="gp-wrap">
          <div className="gp-featured-head">
            <div><div className="gp-featured-eyebrow">HAND-PICKED</div><h2>Editor&apos;s picks</h2></div>
            <Link className="gp-featured-link" href="/guides">
              View all {guides.length} guides
              <img src="/guides/icons/ui-arrow-yellow.svg" alt="" width={16} height={16} />
            </Link>
          </div>
          <div className="gp-featured-grid">
            {featured.map((g, i) => (
              <article key={g.slug} className="gp-feat-card">
                <span className="gp-badge">EDITOR&apos;S PICK</span>
                <img className="gp-feat-icon" src={`/guides/icons/featured-${["sudoku", "chess", "match3"][i]}.svg`} alt="" width={44} height={44} />
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
                <Link className="gp-read" href={`/guides/${g.slug}`}>
                  Read the guide
                  <img src="/guides/icons/ui-arrow-blue.svg" alt="" width={14} height={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gp-section" id="guides">
        <div className="gp-wrap">
          <div className="gp-section-head"><h2>All how-to-play guides</h2><span className="gp-sort">Sort: A–Z</span></div>
          <div className="gp-guide-grid">
            {filtered.length ? filtered.map((g) => (
              <Link key={g.slug} className="gp-guide-tile" href={`/guides/${g.slug}`}>
                <img src={`/guides/icons/${g.icon}.svg`} alt="" width={38} height={38} />
                <h3>{g.title}</h3>
                <p>{CAT_LABEL[g.category] ?? "Guide"} · {g.blurb}</p>
              </Link>
            )) : (
              <div className="gp-empty"><strong>No guides found</strong>Try a different search or category.</div>
            )}
          </div>
          <div className="gp-cta-row">
            <Link className="gp-btn gp-btn-primary" href="/categories">
              Explore all games
              <img src="/guides/icons/ui-arrow-white.svg" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
