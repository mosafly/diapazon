import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  { key: "etudes", title: "Assurance Etudes", img: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" },
  { key: "obsèques", title: "Assurance Obsèques Solidis", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" },
  { key: "retraite", title: "Assurance Retraite", img: "https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg" },
  { key: "individuel", title: "Assurance Individuel Accident", img: "https://images.pexels.com/photos/213130/pexels-photo-213130.jpeg" },
  { key: "deces", title: "Prévoyance Décès", img: "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg" },
  { key: "auto", title: "Assurance Auto / 2 & 3 roues", img: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg" },
  { key: "voyage", title: "Assurance Voyage", img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" },
  { key: "habitation", title: "Multirisque Habitation", img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" },
  { key: "pme-pmi", title: "Offres PME/PMI", img: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg" },
];

export default function FicheProduitPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 space-y-4">
        <div className="text-sm text-muted-foreground">Mandataire • Nos offres • Fiches produit</div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.key} className="overflow-hidden rounded-lg">
              <div className="relative h-36 w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0">
                <Link href={`/offres/fiche-produit/${p.key}`} className="text-[var(--accent)] text-sm font-medium hover:underline">
                  CONSULTER
                </Link>
                <Link href="#" className="text-[var(--accent)] text-sm font-medium hover:underline">
                  PARTAGER
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
