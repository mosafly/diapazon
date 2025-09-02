import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function SouscriptionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="text-sm text-muted-foreground">Mandataire • Nos offres • Fiches produit • Offres PME/PMI • Offres Non‑Vie • Souscription</div>
        <nav className="flex gap-2">
          <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/informations" className="rounded-full border px-3 py-1.5 text-sm">Informations</Link>
          <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/documents" className="rounded-full border px-3 py-1.5 text-sm">Documents</Link>
          <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/paiement" className="rounded-full border px-3 py-1.5 text-sm">Paiement</Link>
        </nav>
        {children}
      </main>
    </div>
  );
}
