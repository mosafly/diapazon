"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { getSouscriptionSteps } from "@/features/souscription/flowConfig";

type Props = {
  current: number;
  total: number;
  label?: string; // left label under the bar
  rightLabel?: string; // right label under the bar
  boxed?: boolean; // add white background + subtle bottom border (10% opacity)
};

// Matches Figma: two split rounded pills with Sanlam Blue (#0075C9) and labels under
export function StepIndicator({ current, total, label, rightLabel, boxed = true }: Props) {
  const safeTotal = Math.max(1, total);
  const safeCurrent = Math.min(Math.max(current, 1), safeTotal);
  return (
    <div className={boxed ? "mb-4 bg-white rounded-md px-3.5 py-3 border-b border-black/10" : "mb-4"}>
      {/* Top bar split into total segments */}
      <div className="flex items-center gap-1 w-full mb-1.5">
        {Array.from({ length: safeTotal }).map((_, i) => (
          <div
            key={i}
            className="basis-0 grow h-2 rounded-full"
            style={{ backgroundColor: i < safeCurrent ? "#0075C9" : "var(--muted)" }}
          />
        ))}
      </div>
      {/* Labels under: left: Étape X/Y, right: custom */}
      <div className="flex items-center justify-between text-[14px] leading-none">
        <div className="text-muted-foreground">{`Étape ${safeCurrent}/${safeTotal}`}</div>
        <div className="text-muted-foreground">{rightLabel ?? label ?? ""}</div>
      </div>
    </div>
  );
}

// Auto stepper: infers current step, total and right label from the route.
// Separates flows: cotation vs souscription.
export function FlowStepIndicator({ boxed = true }: { boxed?: boolean }) {
  const pathname = usePathname() || "";
  const lower = pathname.toLowerCase();

  let current = 1;
  let total = 2;
  let rightLabel: string | undefined;

  // Parcours Souscription (dynamic steps via config)
  if (lower.includes("/souscription/")) {
    const steps = getSouscriptionSteps(lower);
    total = steps.length;
    current = 1;
    for (let i = 0; i < steps.length; i++) {
      if (lower.includes(`/souscription/${steps[i]}`)) {
        current = i + 1;
        break;
      }
    }
    rightLabel = steps[current - 1] === "paiement" ? "Paiement" : "Formulaire de cotation";
  } else if (lower.includes("/cotation")) {
    // Pages de tableau (ex: /non-vie/cotation, /vie/cotation) ou flow cotation 2 étapes
    if (lower.endsWith("/confirmation")) {
      current = 2;
      total = 2;
      rightLabel = "Confirmation";
    } else {
      current = 1;
      total = 1;
      rightLabel = "Tableau";
    }
  }

  return <StepIndicator current={current} total={total} rightLabel={rightLabel} boxed={boxed} />;
}

