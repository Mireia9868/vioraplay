# C — Retro editorial redesign

- Cream paper palette, ink borders, cobalt/yellow/coral/green category blocks.
- Compact highlighted headline and lightweight decorative SVG controller.
- Two numbered editorial picks from the existing Playgama catalog, followed by four category shortcuts and quick picks.
- Actual provider thumbnails and embed URLs retained; no generated game covers or invented rankings.
- Existing logo, search, favorites/recent visits, device filters, advertising integration and SEO preserved.
- Shared rectangular styling across category, search, information and game pages.
- Mobile two-column cards, wrapping header/search, two-column category shortcuts; decoration hidden below 900 px.
- Fixed the iOS device translation lookup (deviceIOS) revealed by multilingual regression checks.

Validation: TypeScript, production build, portal verification script and diff whitespace check.
Live desktop screenshot and width measurements are checked after deployment. This environment does not expose mobile viewport emulation; real-device layout and native fullscreen remain pending.
