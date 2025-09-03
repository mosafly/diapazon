// Sidebar provided by layout
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PmePmiViePage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-4">
        {/* Header + tabs */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Offres Vie</h1>
          <div className="flex gap-2">
            <Link
              href="/offres/fiche-produit/pme-pmi/non-vie"
              className="rounded-full border px-4 py-2 text-sm border-border text-foreground hover:bg-muted"
            >
              Offres Non-Vie
            </Link>
            <span className="rounded-full border px-4 py-2 text-sm bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]">
              Offres Vie
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Main visual */}
          <div className="lg:col-span-2">
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Offres Vie"
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
                    L'Offre Vie PME/PMI s'articule autour d'une garantie Décès Collectif (obligatoire) et d'options
                    complémentaires comme l'Épargne et les Frais Funéraires.
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
                  <p className="text-sm text-muted-foreground">Toutes PME/PMI pour le compte de leur personnel (18 à 65 ans).</p>
                </CardContent>
              </details>
            </Card>
            <Card>
              <details className="group">
                <summary className="list-none">
                  <CardHeader>
                    <div className="flex items-center justify-between cursor-pointer select-none">
                      <CardTitle className="text-base">Comment s’effectue le paiement ?</CardTitle>
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

            <Link
              href="/offres/fiche-produit/pme-pmi/vie/cotation"
              className={cn(
                buttonVariants(),
                "w-full text-center"
              )}
            >
              Voir le tableau des primes et capitaux assurés
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
