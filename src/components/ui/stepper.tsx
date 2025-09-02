import * as React from "react";

export type StepperProps = {
  current: number; // 1-indexed
  total: number;
  label?: string;
  className?: string;
};

/**
 * Pixel-perfect stepper based on Figma (Primary Blue #0075C9)
 * Renders two pill tracks with rounded ends and a caption row below.
 */
export function Stepper({ current, total, label, className }: StepperProps) {
  const safeTotal = Math.max(1, total);
  const safeCurrent = Math.min(Math.max(1, current), safeTotal);
  // We render two equal pills as per design. If total !== 2, we still show progress proportionally.
  const percentage = safeCurrent / safeTotal; // 0..1

  return (
    <div className={["bg-white box-border flex flex-col gap-2 p-3 rounded-lg w-full", className].filter(Boolean).join(" ")}
      data-name="Stepper">
      {/* Top track: two pills */}
      <div className="flex flex-row items-center gap-1 w-full">
        {/* Left pill */}
        <div className="relative grow h-2 rounded-full bg-[#E6F0F8]">
          <div className="absolute inset-0 rounded-full" style={{ width: `${Math.min(1, percentage * 2) * 100}%`, backgroundColor: "#0075C9" }} />
        </div>
        {/* Right pill */}
        <div className="relative grow h-2 rounded-full bg-[#E6F0F8]">
          <div className="absolute inset-0 rounded-full" style={{ width: `${Math.max(percentage * 2 - 1, 0) * 100}%`, backgroundColor: "#0075C9" }} />
        </div>
      </div>

      {/* Caption row */}
      <div className="flex items-center justify-between py-0.5">
        <p className="text-[14px] leading-4 text-[#666666]">Étape {safeCurrent}/{safeTotal}</p>
        <p className="text-[14px] leading-4 text-[#666666]">{label ?? ""}</p>
      </div>
    </div>
  );
}

export default Stepper;
