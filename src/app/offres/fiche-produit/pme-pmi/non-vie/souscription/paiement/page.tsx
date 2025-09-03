"use client";
import { useState, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Paiement() {
  return (
    <Suspense fallback={<div className="space-y-4"><div className="h-20 animate-pulse rounded-md bg-muted" /><div className="h-40 animate-pulse rounded-md bg-muted" /></div>}>
      <PaiementInner />
    </Suspense>
  );
}

function PaiementInner() {
  const [selected, setSelected] = useState<string | null>(null);
  const mobile = [
    { name: "Orange Money", src: "/payments/orange-money.svg" },
    { name: "MTN Money", src: "/payments/mtn.svg" },
    { name: "Wave", src: "/payments/wave.svg" },
    { name: "Moov Africa", src: "/payments/moov-africa.svg" },
  ];
  const others = [
    { name: "Carte bancaire" },
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
  const [linkSent, setLinkSent] = useState(false);
  const [linkUrl, setLinkUrl] = useState<string | null>(null);

  const isMobileMethod = selected && mobile.some(m => m.name === selected);
  const isCard = selected === "Carte bancaire";
  const isVirement = selected === "Virement";
  const canPay = Boolean(
    (isMobileMethod && mobilePhone.trim().length >= 8) ||
    (isCard) ||
    (isVirement) // Virement: plus de champs, simple sélection suffit
  );

  const searchParams = useSearchParams();
  const cotation = searchParams.get("cotation") ?? "—";

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Récapitulatif</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">N° de cotation</div>
            <div className="font-medium">{cotation}</div>
          </div>
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
                    "h-24 rounded-md border text-sm flex flex-col items-center justify-center gap-2 px-2",
                    isActive ? "border-[var(--accent)] bg-[var(--accent)]/10" : "hover:bg-muted"
                  )}
                >
                  <Image src={p.src} alt={p.name} width={64} height={32} className="object-contain" />
                  <span className="truncate max-w-[120px]">{p.name}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {linkSent && linkUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Lien de paiement envoyé</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Un lien de paiement sécurisé a été généré pour la carte bancaire.
            </p>
            <div className="mt-2 text-sm">
              <a className="text-primary underline break-all" href={linkUrl} target="_blank" rel="noreferrer">
                {linkUrl}
              </a>
            </div>
          </CardContent>
        </Card>
      )}

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
              <p className="text-sm text-muted-foreground">
                Aucun champ à saisir ici. Un lien de paiement par carte bancaire sera envoyé au client pour finaliser le règlement.
              </p>
            </div>
          )}
          {isVirement && (
            <div className="mt-4 grid gap-3">
              <p className="text-sm text-muted-foreground">
                Téléchargez le RIB Sanlam pour effectuer votre virement.
              </p>
              <a
                href="/docs/rib-sanlam.pdf"
                download
                className={cn(buttonVariants(), "w-fit")}
              >
                Télécharger le RIB (PDF)
              </a>
              <p className="text-xs text-muted-foreground">
                Une fois le virement effectué, vous pourrez transmettre la preuve sur l’étape suivante.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-4">
        <Link href="/offres/fiche-produit/pme-pmi/non-vie/souscription/documents" className={cn(buttonVariants({ variant: "secondary" }))}>Précédent</Link>
        <button
          type="button"
          disabled={!canPay}
          onClick={() => {
            if (isCard) {
              const url = `https://pay.sanlam.test/link/${encodeURIComponent(cotation)}-${Date.now()}`;
              setLinkUrl(url);
              setLinkSent(true);
            }
          }}
          className={cn(buttonVariants(), !canPay && "opacity-60 cursor-not-allowed")}
        >
          Payer
        </button>
      </div>
    </div>
  );
}
