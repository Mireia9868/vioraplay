"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  getConsent,
  setConsent,
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
} from "@/lib/consent";
import { isEeaVisitor } from "@/lib/geo-client";

// Bottom fixed banner shown until the visitor decides about ANALYTICS cookies.
//
// Region split (2026-11): EEA/UK visitors never see this banner. There Google's
// certified CMP is the single consent surface, and a second prompt from us
// would both confuse the visitor and muddy what was actually consented to.
// Everywhere else this banner stays, because GA4 sets cookies and needs an
// explicit analytics decision.
//
// Reopenable from the footer "Cookie settings" link (CONSENT_OPEN_EVENT).
export function ConsentBanner() {
  const t = useTranslations("consent");
  const [visible, setVisible] = useState(false);
  // null = still checking, so nothing is painted until the region is known.
  const [eea, setEea] = useState<boolean | null>(null);

  useEffect(() => {
    let alive = true;
    isEeaVisitor().then((isEea) => {
      if (alive) setEea(isEea);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const sync = () => setVisible(getConsent() === null);
    const open = () => setVisible(true);
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
    };
  }, []);

  // EEA/UK: Google's CMP owns consent there, so this banner stays out of the way.
  if (eea === null || eea) return null;
  if (!visible) return null;

  return (
    <div className="consent-banner" role="dialog" aria-modal="false" aria-label={t("title")}>
      <div className="consent-inner">
        <p className="consent-text">
          <strong>{t("title")}</strong>
          <span> {t("body")}</span>
        </p>
        <div className="consent-actions">
          <button
            type="button"
            className="consent-btn consent-reject"
            onClick={() => setConsent(false)}
          >
            {t("reject")}
          </button>
          <button
            type="button"
            className="consent-btn consent-accept"
            onClick={() => setConsent(true)}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
