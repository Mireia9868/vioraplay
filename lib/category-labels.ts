/** Display labels only: safe to import in client components without the catalog. */
export function displayCategory(raw: string): string {
  const labels: Record<string, string> = {"3d": "3D", "2d": "2D", "io": ".io", "two-player": "2 Player", "fps": "FPS"};
  return labels[raw.toLowerCase()] ?? raw.split(/[\s_-]+/).filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
