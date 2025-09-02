import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NonVieTableauPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="text-sm text-muted-foreground">Mandataire • Nos offres • Fiches produit • Offres PME/PMI • Offres Non-Vie</div>
        <h1 className="text-xl font-semibold">Tableau des primes et capitaux assurés</h1>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Sélecteur produit */}
          <div className="space-y-2 lg:col-span-3">
            <label className="text-sm font-medium">Sélectionnez le produit</label>
            <select className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm max-w-md">
              {["ProEduc","ProPharma","TourisPro","ProCom","DistriPro","RestoPro","ProResort","BakerPro"].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Option 1 */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Option 1 • Prime TTC: 99 000</CardTitle>
                <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription" className={cn(buttonVariants())}>Souscrire</Link>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Garantie</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Franchise</TableHead>
                    <TableHead>Base</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { g: "Incendie Bâtiment", m: "50 000 000", f: "Néant", b: "Forfait" },
                    { g: "Dommages Électriques", m: "1 000 000", f: "Néant", b: "Forfait" },
                    { g: "Volpar effraction", m: "1 000 000", f: "Néant", b: "Forfait" },
                  ].map((r) => (
                    <TableRow key={r.g}>
                      <TableCell>{r.g}</TableCell>
                      <TableCell>{r.m}</TableCell>
                      <TableCell>{r.f}</TableCell>
                      <TableCell>{r.b}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Option 2 • Prime TTC: 153 000</CardTitle>
                <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription" className={cn(buttonVariants())}>Souscrire</Link>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Garantie</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Franchise</TableHead>
                    <TableHead>Base</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { g: "Incendie Contenu", m: "10 000 000", f: "Néant", b: "Forfait" },
                    { g: "Bris de Glace", m: "1 000 000", f: "Néant", b: "Forfait" },
                    { g: "TR", m: "500 000", f: "Néant", b: "Forfait" },
                  ].map((r) => (
                    <TableRow key={r.g}>
                      <TableCell>{r.g}</TableCell>
                      <TableCell>{r.m}</TableCell>
                      <TableCell>{r.f}</TableCell>
                      <TableCell>{r.b}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 flex justify-center">
            <button className={cn(buttonVariants({ variant: "secondary" }))}>Partager</button>
          </div>
        </div>
      </main>
    </div>
  );
}
