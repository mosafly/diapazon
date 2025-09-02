import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Documents() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Documents & Signature</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {/* Zone signature */}
          <div className="md:col-span-1 space-y-2">
            <div className="h-64 rounded-md border border-dashed border-border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Zone de signature (placeholder)
            </div>
            <div className="flex gap-2">
              <button className={cn(buttonVariants({ variant: "secondary" }), "flex-1")}>Effacer</button>
              <button className={cn(buttonVariants(), "flex-1")}>Signer</button>
            </div>
          </div>

          {/* Liste documents */}
          <div className="md:col-span-2 space-y-3">
            <details className="rounded-md border p-3">
              <summary className="cursor-pointer text-sm font-medium">Pièces requises</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Pièce d'identité du représentant</li>
                <li>RCCM / IFU</li>
                <li>Statuts de la société</li>
              </ul>
            </details>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-sm">Téléverser la pièce d'identité<input type="file" className="mt-1 block w-full text-sm" /></label>
              <label className="text-sm">Téléverser le RCCM<input type="file" className="mt-1 block w-full text-sm" /></label>
              <label className="text-sm md:col-span-2">Téléverser les statuts<input type="file" className="mt-1 block w-full text-sm" /></label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/informations" className={cn(buttonVariants({ variant: "secondary" }))}>Précédent</Link>
        <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/paiement" className={cn(buttonVariants(), "bg-teal-700 hover:bg-teal-800 text-white")}>Suivant</Link>
      </div>
    </div>
  );
}
