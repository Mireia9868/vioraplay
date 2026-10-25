// Consent state for analytics cookies only.
//
// Why ads moved out of this file: Google requires a Google-certified CMP
// (TCF v2.2) to collect ad consent in the EEA/UK. A hand-rolled banner is not
// certified, so claiming ad consent from it would be inaccurate. Ad consent is
// now collected by Google's own consent message configured in AdSense
// ("Privacy & messaging" → GDPR/CCPA messages). This module only remembers
// whether the visitor allowed Google Analytics.
//
// Analytics is consent-gated because GA4 sets cookies. Ads are handled by the
// Google tag + CMP, which refuses personalised ads until the CMP has consent.

export type ConsentDecision = {
  analytics: boolean;
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
    // Records written by the previous version also carry `ads`; that field is
    // ignored from now on, `analytics` is what we honour.
    if (typeof parsed?.analytics === "boolean") {
      return {
        analytics: parsed.analytics,
        decidedAt: typeof parsed.decidedAt === "number" ? parsed.decidedAt : Date.now(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): void {
  if (typeof window === "undefined") return;
  const decision: ConsentDecision = { analytics, decidedAt: Date.now() };
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
