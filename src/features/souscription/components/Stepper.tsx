"use client";
import Stepper from "@/components/ui/stepper";

export default function SouscriptionStepper({ current, total, label }: { current: number; total?: number; label?: string }) {
  return <Stepper current={current} total={total ?? 3} label={label ?? "Souscription"} />;
}

