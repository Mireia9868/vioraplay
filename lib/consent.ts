// Consent state for analytics + advertising cookies.
//
// AdSense's EU User Consent Policy requires that we obtain consent BEFORE
// setting advertising/analytics cookies in the EEA/UK. We show a banner, store
// the decision in localStorage, and gate Google Analytics (and future AdSense
// snippets) on the stored choice.
//
// `analytics` gates Google Analytics. `ads` gates any future AdSense unit — when
// you add the AdSense <script>/<ins> snippet, render it only when
// getConsent()?.ads === true (see components/GoogleAnalytics.tsx for the
// pattern). Reject sets both to false: no analytics, no personalized ads.

export type ConsentDecision = {
  analytics: boolean;
  ads: boolean;
  decidedAt: number;
};

const KEY = "vioraplay_consent_v1";
export const CONSENT_CHANGE_EVENT = "vioraplay:consent-change";
export const CONSENT_OPEN_EVENT = "vioraplay:open-consent";

export function getConsent(): ConsentDecision | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentDecision>;
    if (typeof parsed?.analytics === "boolean" && typeof parsed?.ads === "boolean") {
      return parsed as ConsentDecision;
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean, ads: boolean): void {
  if (typeof window === "undefined") return;
  const decision: ConsentDecision = { analytics, ads, decidedAt: Date.now() };
  window.localStorage.setItem(KEY, JSON.stringify(decision));
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function hasDecided(): boolean {
  return getConsent() !== null;
}

export function resetConsent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}
