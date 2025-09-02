"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "@/lib/breadcrumbs";
import { ChevronRight, Search, BellDot } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const crumbs = useMemo(() => getBreadcrumbs(pathname || "/"), [pathname]);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-200">
      <div className="w-full px-2 sm:px-4">
        <div className="h-16 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 pr-2 border-r border-zinc-100 w-32 sm:w-40">
            <span className="font-semibold text-[#003781] text-base">Diapazon</span>
          </div>

          {/* Middle: Breadcrumbs + Search */}
          <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
            {/* Breadcrumbs (dynamic) */}
            <nav className="hidden md:flex items-center gap-2 text-sm flex-wrap min-w-0">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <div key={c.href} className="flex items-center gap-2 min-w-0">
                    {last ? (
                      <span className="truncate text-[#333e48]" title={c.label}>{c.label}</span>
                    ) : (
                      <Link href={c.href} className="truncate text-zinc-500 hover:text-zinc-700" title={c.label}>
                        {c.label}
                      </Link>
                    )}
                    {!last && (
                      <ChevronRight className="shrink-0 h-5 w-5 text-zinc-700" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 h-11 w-full max-w-md px-3 border-b border-zinc-200">
              <Search className="opacity-50 h-4 w-4 text-zinc-700" aria-hidden="true" />
              <input
                className="flex-1 bg-transparent outline-none text-sm text-[#333e48] placeholder:text-[#333e48]"
                placeholder="Placeholder"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <BellDot className="h-6 w-6 text-zinc-700" aria-hidden="true" />
            <div className="hidden sm:flex items-center justify-center w-px h-5 bg-zinc-200" />
            <div className="flex items-center gap-1 text-sm">
              <span>FR</span>
              <span aria-hidden className="text-xs">🇫🇷</span>
            </div>
            <div className="hidden sm:flex items-center justify-center w-px h-5 bg-zinc-200" />
            <div className="text-sm">2 juin 2025</div>
          </div>
        </div>
      </div>
    </header>
  );
}
