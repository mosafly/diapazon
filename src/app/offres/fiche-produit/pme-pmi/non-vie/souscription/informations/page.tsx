import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Informations() {
  return (
    <>
      <Card>
      <CardHeader>
        <CardTitle className="text-base">Souscripteur & Assuré</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Souscripteur */}
        <div className="grid gap-3 md:grid-cols-2">
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Raison sociale" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Secteur d'activité" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm md:col-span-2" placeholder="Adresse" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Nom & Prénoms du représentant" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Téléphone" />
        </div>

        {/* Assuré */}
        <div className="grid gap-3 md:grid-cols-2">
          <select className="h-10 rounded-md border border-border bg-background px-3 text-sm">
            <option>Civilité</option>
            <option>M.</option>
            <option>Mme</option>
            <option>Mlle</option>
          </select>
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Nom et Prénom(s)" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Sexe (M ou F)" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Profession" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Nationalité" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Adresse Géographique" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Adresse postale" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="E-mail" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Tél Fixe" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm" placeholder="Tél Mobile" />
          <input className="h-10 rounded-md border border-border bg-background px-3 text-sm md:col-span-2" placeholder="N° Pièce d'identité" />
        </div>

        <div className="flex justify-end mb-8">
          <Link
            href="/offres/fiche-produit/pme-pmi/non-vie"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Précédent
          </Link>
          <Link
            href="/offres/fiche-produit/pme-pmi/non-vie/souscription/documents"
            className={cn(buttonVariants(), "bg-blue-700 hover:bg-blue-800 text-white")}
          >
            Suivant
          </Link>
        </div>
      </CardContent>
      </Card>
    </>
  );
}
