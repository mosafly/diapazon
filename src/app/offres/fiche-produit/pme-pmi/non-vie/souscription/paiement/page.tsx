import { Suspense } from "react";
import PaiementClient from "./PaiementClient";

export const dynamic = "force-dynamic";

export default function Paiement() {
  return (
    <Suspense fallback={<div className="space-y-4"><div className="h-20 animate-pulse rounded-md bg-muted" /><div className="h-40 animate-pulse rounded-md bg-muted" /></div>}>
      <PaiementClient />
    </Suspense>
  );
}

// Client component moved to ./PaiementClient
