import type { CSSProperties } from "react";

export function PortalIcon({ name, style }: { name: string; style?: CSSProperties }) {
  const paths: Record<string, React.ReactNode> = {
    gamepad: <><path d="M7 7h10c3 0 4 3 5 9 .4 3-2 4-4 2l-2-2H8l-2 2c-2 2-4.4 1-4-2 1-6 2-9 5-9Z"/><path d="M7 10v5m-2.5-2.5h5" stroke="var(--icon-detail, white)" strokeWidth="2"/><circle cx="16" cy="11" r="1" fill="var(--icon-detail, white)"/><circle cx="18" cy="14" r="1" fill="var(--icon-detail, white)"/></>,
    bolt: <path d="m14 1-11 13h8l-1 9 11-14h-8Z"/>,
    heart: <path d="M12 21 3 12C-3 5 7-1 12 6c5-7 15-1 9 6Z"/>,
    racing: <><path d="M4 2v21" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M5 3c5-3 8 4 15 1v11c-7 3-10-4-15-1Z"/></>,
    puzzle: <path d="M3 3h6V1a3 3 0 0 1 6 0v2h6v6h-2a3 3 0 0 0 0 6h2v6h-6v-2a3 3 0 0 0-6 0v2H3v-6h2a3 3 0 0 0 0-6H3Z"/>,
    arcade: <><circle cx="12" cy="5" r="4"/><path d="M10 8h4v9h-4zM3 17h18v6H3z"/></>,
    action: <path d="m12 0 2 7 5-5-2 7 7-1-6 5 6 3-7 1 2 7-5-5-2 5-2-7-5 5 2-7-7 1 6-5-6-3 7-1-2-7 5 5Z"/>,
    sports: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2v20M4 4c8 4 8 12 0 16M20 4c-8 4-8 12 0 16" fill="none" stroke="var(--icon-detail, #bb77ed)" strokeWidth="1.7"/></>,
    strategy: <path d="M5 2h3v4h3V2h2v4h3V2h3v7l-3 3v5l4 6H4l4-6v-5L5 9Z"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" style={style}>{paths[name] ?? paths.gamepad}</svg>;
}
