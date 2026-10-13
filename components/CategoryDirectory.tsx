"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import type { Category } from "@/lib/types";

const FEATURED = new Set(["racing", "puzzle", "arcade", "action", "sports", "strategy"]);
export function CategoryDirectory({categories, labels}: {
  categories: Category[];
  labels: {heading: string; search: string; empty: string; resultCount: string};
}) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase();
  const matches = categories.filter(c => normalized ? c.name.toLocaleLowerCase().includes(normalized) : !FEATURED.has(c.slug));
  return <section className="category-more">
    <div className="section-head">
      <h2>{labels.heading}</h2>
      <label className="category-search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></svg><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={labels.search} aria-label={labels.search}/></label>
    </div>
    <div className="category-more-grid">
      {matches.map(c=><Link key={c.slug} href={`/category/${c.slug}`} prefetch={false} className="category-mini"><span>{c.name}</span><span className="category-mini-count">{c.count} <span aria-hidden="true">↗</span></span></Link>)}
    </div>
    <p className="category-search-status" aria-live="polite">{normalized && (matches.length ? labels.resultCount.replace("{count}",String(matches.length)) : labels.empty)}</p>
  </section>;
}
