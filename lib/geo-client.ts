"use client";

/**
 * Client-side cache for the EEA check.
 *
 * The answer is stable for a session, so a single fetch is enough; one module
 * level promise also prevents the banner and the footer link from requesting
 * it twice in the same page load.
 */
let cached: boolean | null = null;
let inflight: Promise<boolean> | null = null;

export function isEeaVisitor(): Promise<boolean> {
  if (cached !== null) return Promise.resolve(cached);
  if (inflight) return inflight;

  inflight = fetch("/api/geo", { cache: "no-store" })
    .then((res) => (res.ok ? res.json() : null))
    .then((data: { eea?: boolean } | null) => {
      // On any failure keep the banner visible: asking for analytics consent is
      // the safe default, silently skipping it is not.
      cached = data?.eea === true;
      return cached;
    })
    .catch(() => {
      cached = false;
      return false;
    })
    .finally(() => {
      inflight = null;
    });

  return inflight;
}
