// Centralized configuration of souscription steps per parcours.
// Allows dynamic variation in step counts (> / < 3) per route prefix.

export type StepKey = "informations" | "documents" | "paiement" | "confirmation";

const DEFAULT_STEPS: StepKey[] = ["informations", "documents", "paiement"];

// Map route prefixes to their step sequences
// Extend here if some products have fewer or additional steps.
const SOUSCRIPTION_STEPS_BY_PREFIX: Array<{ prefix: string; steps: StepKey[] }> = [
  {
    prefix: "/offres/fiche-produit/pme-pmi/non-vie/souscription",
    steps: DEFAULT_STEPS,
  },
  {
    prefix: "/offres/fiche-produit/pme-pmi/vie/souscription",
    steps: DEFAULT_STEPS,
  },
];

export function getSouscriptionSteps(pathname: string): StepKey[] {
  const lower = pathname.toLowerCase();
  for (const { prefix, steps } of SOUSCRIPTION_STEPS_BY_PREFIX) {
    if (lower.startsWith(prefix)) return steps;
  }
  return DEFAULT_STEPS;
}
