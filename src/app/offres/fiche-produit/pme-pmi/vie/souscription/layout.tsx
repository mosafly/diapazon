"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Stepper from "@/components/ui/stepper";
import { usePathname } from "next/navigation";

function StepperBar() {
  const pathname = usePathname();
  const isPayment = pathname?.endsWith("/paiement");
  const current = isPayment ? 2 : 1;
  const label = isPayment ? "Paiement" : "Formulaire de cotation";
  return <Stepper current={current} total={2} label={label} />;
}

export default function SouscriptionVieLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="text-sm text-muted-foreground">Mandataire • Nos offres • Fiches produit • Offres PME/PMI • Offres Vie • Souscription</div>
        <StepperBar />
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
