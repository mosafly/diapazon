"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Paiement() {
  const [selected, setSelected] = useState<string | null>(null);
  const mobile = [
    { name: "Orange Money" },
    { name: "MTN Money" },
    { name: "Wave" },
    { name: "Moov Africa" },
  ];
  const others = [
    { name: "Carte bleue" },
    { name: "Virement" },
  ];
  // Form states
  const [mobilePhone, setMobilePhone] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [virementIban, setVirementIban] = useState("");
  const [virementRef, setVirementRef] = useState("");

  const isMobileMethod = selected && mobile.some(m => m.name === selected);
  const isCard = selected === "Carte bleue";
  const isVirement = selected === "Virement";
  const canPay = Boolean(
    (isMobileMethod && mobilePhone.trim().length >= 8) ||
    (isCard && cardName && cardNumber && cardExpiry && cardCvc) ||
    (isVirement && virementIban && virementRef)
  );

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Récapitulatif</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">Frais opérateur</div>
            <div>0 F CFA</div>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <div className="text-muted-foreground">Prime totale à payer</div>
            <div className="font-semibold">99 000 F CFA</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Paiement mobile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mobile.map((p) => {
              const isActive = selected === p.name;
              return (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => setSelected(p.name)}
                  className={cn(
                    "h-16 rounded-md border text-sm",
                    isActive ? "border-[var(--accent)] bg-[var(--accent)]/10" : "hover:bg-muted"
                  )}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Autres moyens de paiement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((p) => {
              const isActive = selected === p.name;
              return (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => setSelected(p.name)}
                  className={cn(
                    "h-16 rounded-md border text-sm",
                    isActive ? "border-[var(--accent)] bg-[var(--accent)]/10" : "hover:bg-muted"
                  )}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
          {/* Conditional forms */}
          {isMobileMethod && (
            <div className="mt-4 grid gap-2">
              <label className="text-sm text-muted-foreground">Numéro mobile</label>
              <input
                className="h-10 px-3 rounded-md border bg-background"
                placeholder="Ex: 07000000"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
                inputMode="numeric"
              />
            </div>
          )}
          {isCard && (
            <div className="mt-4 grid gap-3">
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground">Nom sur la carte</label>
                <input className="h-10 px-3 rounded-md border bg-background" value={cardName} onChange={(e)=>setCardName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground">Numéro de carte</label>
                <input className="h-10 px-3 rounded-md border bg-background" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} inputMode="numeric" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <label className="text-sm text-muted-foreground">Expiration</label>
                  <input className="h-10 px-3 rounded-md border bg-background" value={cardExpiry} onChange={(e)=>setCardExpiry(e.target.value)} placeholder="MM/AA" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-muted-foreground">CVC</label>
                  <input className="h-10 px-3 rounded-md border bg-background" value={cardCvc} onChange={(e)=>setCardCvc(e.target.value)} inputMode="numeric" placeholder="123" />
                </div>
              </div>
            </div>
          )}
          {isVirement && (
            <div className="mt-4 grid gap-3">
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground">IBAN / RIB</label>
                <input className="h-10 px-3 rounded-md border bg-background" value={virementIban} onChange={(e)=>setVirementIban(e.target.value)} placeholder="FR76 ...." />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-muted-foreground">Référence de virement</label>
                <input className="h-10 px-3 rounded-md border bg-background" value={virementRef} onChange={(e)=>setVirementRef(e.target.value)} placeholder="Numéro de dossier" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-4">
        <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/documents" className={cn(buttonVariants({ variant: "secondary" }))}>Précédent</Link>
        <button
          type="button"
          disabled={!canPay}
          className={cn(
            buttonVariants(),
            "w-full md:w-auto",
            !canPay && "opacity-50 cursor-not-allowed"
          )}
        >
          Payer
        </button>
      </div>
    </div>
  );
}
