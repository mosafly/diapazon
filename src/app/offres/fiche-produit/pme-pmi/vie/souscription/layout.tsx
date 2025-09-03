"use client";
// Sidebar already rendered by parent layout
import Link from "next/link";
import { FlowStepIndicator } from "@/components/StepIndicator";

export default function SouscriptionVieLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <FlowStepIndicator />
        <nav className="flex gap-2">
          <Link href="/offres/fiche-produit/pme-pmi/vie/souscription/informations" className="rounded-full border px-3 py-1.5 text-sm">Informations</Link>
          <Link href="/offres/fiche-produit/pme-pmi/vie/souscription/documents" className="rounded-full border px-3 py-1.5 text-sm">Documents</Link>
          <Link href="/offres/fiche-produit/pme-pmi/vie/souscription/paiement" className="rounded-full border px-3 py-1.5 text-sm">Paiement</Link>
        </nav>
        {children}
      </main>
    </div>
  );
}
