"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Option = {
  id: string;
  label: string;
  montant: string;
  garanties: { g: string; m: string; f: string; b: string }[];
};

const OPTIONS: Option[] = [
  {
    id: "opt1",
    label: "Option 1",
    montant: "10K",
    garanties: [
      { g: "Incendie Bâtiment", m: "50 000 000", f: "Néant", b: "Forfait" },
      { g: "Dommages Électriques", m: "1 000 000", f: "Néant", b: "Forfait" },
    ],
  },
  {
    id: "opt2",
    label: "Option 2",
    montant: "20K",
    garanties: [
      { g: "Incendie Contenu", m: "10 000 000", f: "Néant", b: "Forfait" },
      { g: "Bris de Glace", m: "1 000 000", f: "Néant", b: "Forfait" },
    ],
  },
];

export default function NonVieTableauPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <h1 className="text-xl font-semibold">Tableau des primes et capitaux assurés</h1>

        {/* Sélecteur produit (comme avant) */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Sélectionnez le produit</label>
          <select className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm max-w-md">
            {["ProEduc","ProPharma","TourisPro","ProCom","DistriPro","RestoPro","ProResort","BakerPro"].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="rounded-md border border-border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60%]">Options</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Choix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {OPTIONS.map((o) => {
                const isOpen = !!open[o.id];
                return (
                  <>
                    <TableRow key={o.id} className="hover:bg-transparent">
                      <TableCell>
                        <button
                          type="button"
                          onClick={() => toggle(o.id)}
                          className="flex items-center gap-2"
                          aria-expanded={isOpen}
                          aria-controls={`garanties-${o.id}`}
                        >
                          <ChevronDown
                            className={`size-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                          />
                          <span className="font-medium">{o.label}</span>
                        </button>
                      </TableCell>
                      <TableCell className="font-medium">{o.montant}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/offres/fiche-produit/pme-pmi/non-vie/souscription?option=${o.id}`}
                            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                          >
                            Souscrire
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                    {isOpen && (
                      <TableRow>
                        <TableCell colSpan={3} className="bg-slate-50 p-0">
                          <div id={`garanties-${o.id}`} className="p-3">
                            <div className="text-xs uppercase text-slate-500 mb-2">Garanties</div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="text-left text-slate-500">
                                    <th className="py-1 pr-3 font-normal">Garantie</th>
                                    <th className="py-1 pr-3 font-normal">Montant</th>
                                    <th className="py-1 pr-3 font-normal">Franchise</th>
                                    <th className="py-1 pr-3 font-normal">Base</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {o.garanties.map((g) => (
                                    <tr key={g.g} className="border-t border-border/70">
                                      <td className="py-2 pr-3">{g.g}</td>
                                      <td className="py-2 pr-3">{g.m}</td>
                                      <td className="py-2 pr-3">{g.f}</td>
                                      <td className="py-2 pr-3">{g.b}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
