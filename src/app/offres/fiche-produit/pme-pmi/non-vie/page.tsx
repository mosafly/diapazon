import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PmePmiNonViePage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-4">
        {/* Header + tabs */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Offres Non-Vie</h1>
          <div className="flex gap-2">
            <span className="rounded-full border px-4 py-2 text-sm bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]">
              Offres Non-Vie
            </span>
            <Link
              href="/offres/fiche-produit/pme-pmi/vie"
              className="rounded-full border px-4 py-2 text-sm border-border text-foreground hover:bg-muted"
              title="Aller à la présentation Offres Vie"
            >
              Offres Vie
            </Link>
          </div>
        </div>

        <NonVie />
      </main>
    </div>
  );
}

function NonVie() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Main visual */}
      <div className="lg:col-span-2">
        <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary">
          <Image
            src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
            alt="Offres Non-Vie"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right FAQs + CTA */}
      <div className="space-y-3">
        <Card>
          <details className="group">
            <summary className="list-none">
              <CardHeader>
                <div className="flex items-center justify-between cursor-pointer select-none">
                  <CardTitle className="text-base">Quelles sont les garanties ?</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#333e48] opacity-80 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </CardHeader>
            </summary>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                L'Offre PME/PMI propose des garanties adaptées au non-vie: responsabilité civile,
                multirisque professionnelle, flotte auto, etc. Les conditions détaillées seront
                précisées selon le secteur et la taille de l'entreprise.
              </p>
            </CardContent>
          </details>
        </Card>
        <Card>
          <details className="group">
            <summary className="list-none">
              <CardHeader>
                <div className="flex items-center justify-between cursor-pointer select-none">
                  <CardTitle className="text-base">Qui peut souscrire ?</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#333e48] opacity-80 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </CardHeader>
            </summary>
            <CardContent>
              <p className="text-sm text-muted-foreground">PME/PMI éligibles selon critères d'activité.</p>
            </CardContent>
          </details>
        </Card>
        <Card>
          <details className="group">
            <summary className="list-none">
              <CardHeader>
                <div className="flex items-center justify-between cursor-pointer select-none">
                  <CardTitle className="text-base">Comment s’effectue le paiement des primes et cotisations ?</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#333e48] opacity-80 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </CardHeader>
            </summary>
            <CardContent>
              <p className="text-sm text-muted-foreground">Mensuel, trimestriel, semestriel ou annuel.</p>
            </CardContent>
          </details>
        </Card>
        <div className="space-y-2">
          <Link
            href="/offres/fiche-produit/pme-pmi/non-vie/tableau"
            className={cn(buttonVariants(), "w-full text-center")}
          >
            Voir le tableau des primes et capitaux assurés
          </Link>
          <Link
            href="/offres/fiche-produit/pme-pmi/non-vie/souscription"
            className="block w-full text-center rounded-md border px-4 py-2 text-sm border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--secondary)]"
          >
            Souscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
