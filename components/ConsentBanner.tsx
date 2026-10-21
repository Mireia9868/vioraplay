"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  getConsent,
  setConsent,
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
} from "@/lib/consent";

// Bottom fixed banner shown until the visitor makes a choice. Reopenable from
// the footer "Cookie settings" link, which dispatches CONSENT_OPEN_EVENT.
export function ConsentBanner() {
  const t = useTranslations("consent");
  const [visible, setVisible] = useState(false);

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
            onClick={() => setConsent(false, false)}
          >
            {t("reject")}
          </button>
          <button
            type="button"
            className="consent-btn consent-accept"
            onClick={() => setConsent(true, true)}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
