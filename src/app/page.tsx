import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 space-y-4">
        {/* Top bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="text-accent font-medium">Gestion sinistre</span> • Assurance PME
          </div>
          <div className="flex gap-3">
            {/* Counters */}
            <Card className="rounded-lg border-2 border-emerald-200">
              <CardContent className="py-3 px-4">
                <div className="text-xs text-muted-foreground">Contrats souscrits</div>
                <div className="text-2xl font-semibold text-emerald-600">85</div>
              </CardContent>
            </Card>
            <Card className="rounded-lg border-2 border-red-200">
              <CardContent className="py-3 px-4">
                <div className="text-xs text-muted-foreground">Nombres de sinistres</div>
                <div className="text-2xl font-semibold text-red-600">17</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search field */}
        <Card>
          <CardContent className="py-4">
            <Input placeholder="SELECTIONNER NOM OU RAISON SOCIALE" className="h-11" />
          </CardContent>
        </Card>

        <div className="text-accent font-semibold">Déclarer un sinistre</div>
        <div className="text-sm text-muted-foreground -mt-2">Informations</div>

        {/* Table */}
        <Card className="rounded-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-secondary">
                    {[
                      "N° Contrat",
                      "Nom ou raison sociale",
                      "Date d’effet",
                      "Date d’échéance",
                      "Prime TTC",
                      "Documents",
                      "Gestion Sinistres",
                      "Statuts",
                    ].map((h) => (
                      <TableHead key={h} className="border border-border whitespace-nowrap px-3 py-2">
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Row 1 */}
                  <TableRow>
                    <TableCell className="border border-border">2025121536</TableCell>
                    <TableCell className="border border-border">Hôtel GRACE</TableCell>
                    <TableCell className="border border-border">01/05/2025</TableCell>
                    <TableCell className="border border-border">30/04/2026</TableCell>
                    <TableCell className="border border-border">222 000</TableCell>
                    <TableCell className="border border-border">
                      <Button variant="link" className="px-0 text-accent">Voir</Button>
                    </TableCell>
                    <TableCell className="border border-border space-x-2">
                      <Button variant="link" className="px-0 text-accent">Renseigner le formulaire</Button>
                      <Button variant="link" className="px-0 text-accent">Envoyer le formulaire</Button>
                    </TableCell>
                    <TableCell className="border border-border">
                      <Badge className="bg-red-50 text-red-600 border border-red-200">réglées</Badge>
                    </TableCell>
                  </TableRow>
                  {/* Row 2 */}
                  <TableRow>
                    <TableCell className="border border-border">2025369875</TableCell>
                    <TableCell className="border border-border">Des Gâteaux &amp; Du Pain</TableCell>
                    <TableCell className="border border-border">25/06/2025</TableCell>
                    <TableCell className="border border-border">24/06/2026</TableCell>
                    <TableCell className="border border-border">208 500</TableCell>
                    <TableCell className="border border-border">
                      <Button variant="link" className="px-0 text-accent">Voir</Button>
                    </TableCell>
                    <TableCell className="border border-border space-x-2">
                      <Button variant="link" className="px-0 text-accent">Renseigner le formulaire</Button>
                      <Button variant="link" className="px-0 text-accent">Envoyer le formulaire</Button>
                    </TableCell>
                    <TableCell className="border border-border">
                      <Badge variant="secondary" className="text-[var(--primary)]">En cours</Badge>
                    </TableCell>
                  </TableRow>
                  {/* Empty rows (grid look) */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      {Array.from({ length: 8 }).map((__, j) => (
                        <TableCell key={j} className="border border-border">&nbsp;</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* CTA row (optionnel) */}
        <Card className="rounded-lg">
          <CardContent className="py-4">
            <div className="mb-3 text-sm text-muted-foreground">Démarrer un parcours</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Offres Non-Vie",
                "Offres Vie",
                "Souscription",
                "Notifications",
              ].map((t) => (
                <Button key={t} className="rounded-lg justify-center">{t}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator />
        <div className="text-xs text-muted-foreground">© diapazon 2025</div>
      </main>
    </div>
  );
}
