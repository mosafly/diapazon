import { redirect } from "next/navigation";

export default function PmePmiPage() {
  redirect("/offres/fiche-produit/pme-pmi/non-vie");
  return null;
}

// Vie content is now on its own page at /offres/fiche-produit/pme-pmi/vie
