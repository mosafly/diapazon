export type Crumb = { href: string; label: string };

const LABEL_MAP: Record<string, string> = {
  offres: "Nos offres",
  "fiche-produit": "Fiche produit",
  "pme-pmi": "PME/PMI",
  "non-vie": "Non-Vie",
  vie: "Vie",
  tableau: "Tableau",
  souscription: "Souscription",
};

function humanize(segment: string): string {
  const mapped = LABEL_MAP[segment];
  if (mapped) return mapped;
  return segment
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export function getBreadcrumbs(pathname: string): Crumb[] {
  const cleanPath = pathname.split("?")[0].split("#")[0];
  const parts = cleanPath.split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ href: "/", label: "Mandataire" }];
  let acc = "";

  for (const part of parts) {
    acc += `/${part}`;
    const href = acc;
    const label = humanize(part);
    crumbs.push({ href, label });
  }
  return crumbs;
}
