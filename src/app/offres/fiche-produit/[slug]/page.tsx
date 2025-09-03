// Sidebar comes from root layout
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-4">
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="relative h-48 w-full overflow-hidden rounded-md bg-secondary">
              <Image src={`/products/${slug}.jpg`} alt={title} fill className="object-cover" />
            </div>
            <p className="text-sm text-muted-foreground">
              Description du produit {title}. Ajoutez ici les garanties, conditions, exclusions, et documents à télécharger.
            </p>
            <Link href="/offres/fiche-produit" className="text-[var(--accent)] text-sm font-medium hover:underline">
              ← Retour à la liste des produits
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
