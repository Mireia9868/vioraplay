"use client";

import { useTranslations } from "next-intl";
import { CONSENT_OPEN_EVENT } from "@/lib/consent";

// Footer link that reopens the consent banner so visitors can change their
// cookie choices at any time (GDPR/AdSense requirement).
export function FooterConsentLink() {
  const t = useTranslations("footer");
  return (
    <button
      type="button"
      className="footer-link-btn"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
    >
      {t("cookieSettings")}
    </button>
  );
}
