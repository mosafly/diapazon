import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PmePmiPage({ searchParams }: { searchParams?: { tab?: string } }) {
  const tab = (searchParams?.tab ?? "non-vie").toLowerCase();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="text-sm text-muted-foreground">Mandataire • Nos offres • Fiches produit • Offres PME/PMI</div>

        {/* Header + tabs */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{tab === "vie" ? "Offres Vie" : "Offres Non-Vie"}</h1>
          <div className="flex gap-2">
            <Link
              href="?tab=non-vie"
              className={`rounded-full border px-4 py-2 text-sm ${
                tab === "non-vie"
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              Offres Non-Vie
            </Link>
            <Link
              href="/offres/fiche-produit/pme-pmi/vie"
              className="rounded-full border px-4 py-2 text-sm border-border text-foreground hover:bg-muted"
              title="Aller à la présentation Offres Vie"
            >
              Offres Vie
            </Link>
          </div>
        </div>

        {tab === "non-vie" ? <NonVie /> : <Vie />}
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
            className={cn(
              buttonVariants(),
              "w-full text-center"
            )}
          >
            Voir le tableau des primes et capitaux assurés
          </Link>
          <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription" className="block w-full text-center rounded-md border px-4 py-2 text-sm border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--secondary)]">
            Souscrire
          </Link>
        </div>
      </div>
    </div>
  );
}

function Vie() {
  return (
    <div className="space-y-6">
      {/* Tables */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card id="table-vie" className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Décès Collectif (option obligatoire)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Option</TableHead>
                  <TableHead>Prime annuelle</TableHead>
                  <TableHead>Capitaux assurés</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { opt: "Option 1", prime: "17 500", capital: "5 000 000" },
                  { opt: "Option 2", prime: "35 000", capital: "10 000 000" },
                  { opt: "Option 3", prime: "52 500", capital: "15 000 000" },
                  { opt: "Option 4", prime: "70 000", capital: "20 000 000" },
                ].map((r) => (
                  <TableRow key={r.opt}>
                    <TableCell>{r.opt}</TableCell>
                    <TableCell>{r.prime}</TableCell>
                    <TableCell>{r.capital}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Options facultatives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div>Épargne (1) • Cotisation: de 5 000 à 30 000</div>
            <div>Frais Funéraires (2) • Options/Capitaux au choix</div>
          </CardContent>
        </Card>
      </div>

      {/* Simulation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Réaliser une simulation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <select className="h-10 rounded-md border border-border bg-background px-3 text-sm">
            <option>Choisir l'option du décès collectif (*)</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <select className="h-10 rounded-md border border-border bg-background px-3 text-sm">
            <option>Option facultative</option>
            <option>Épargne</option>
            <option>Frais funéraires</option>
          </select>
          <select className="h-10 rounded-md border border-border bg-background px-3 text-sm">
            <option>Option des Frais Funéraires</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select className="h-10 rounded-md border border-border bg-background px-3 text-sm">
            <option>Prime suivant la périodicité</option>
            <option>Mensuelle</option>
            <option>Trimestrielle</option>
            <option>Semestrielle</option>
            <option>Annuelle</option>
          </select>
          <input
            type="number"
            min={1}
            className="h-10 rounded-md border border-border bg-background px-3 text-sm"
            placeholder="Nombre d'adhérents"
          />
          <input
            className="h-10 rounded-md border border-border bg-background px-3 text-sm md:col-span-2"
            placeholder="Montant de la cotisation épargne en FCFA"
          />

          <div className="md:col-span-2 flex items-center justify-between pt-2">
            <button className={cn(buttonVariants({ variant: "secondary" }))}>Partager</button>
            <Link href="/offres/fiche-produit/pme-pmi/vie/souscription" className={cn(buttonVariants())}>Souscrire</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
