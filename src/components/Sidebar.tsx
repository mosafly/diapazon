"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calculator, FileText, HelpCircle, Search, Tags, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  children?: { label: string; href: string }[];
};

const nav: NavItem[] = [
  { label: "Prospection", href: "#", icon: Search },
  { label: "Espace client", href: "#", icon: User },
  {
    label: "Nos offres",
    href: "#",
    icon: Tags,
    children: [
      { label: "Fiches produit", href: "/offres/fiche-produit" },
      { label: "Formules/Avantages", href: "#" },
      { label: "Déclaration de sinistres", href: "/gestion-sinistre" },
    ],
  },
  { label: "Simulations/Souscription", href: "#", icon: Calculator },
  { label: "Contrats", href: "#", icon: FileText },
  { label: "FAQ", href: "#", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  const isGroupActive = (item: NavItem) =>
    (item.href !== "#" && pathname === item.href) ||
    (item.children?.some((c) => pathname?.startsWith(c.href)) ?? false);

  return (
    <aside className="hidden md:flex w-60 shrink-0 bg-white text-slate-700 flex-col p-4 border-r border-border">
      <nav className="space-y-1.5 pt-1">
        {nav.map((item) => {
          const active = isGroupActive(item);
          const ItemContent = (
            <div
              className={cn(
                "flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13px]",
                active ? "bg-[#F2F8FC] text-[#003781]" : "hover:bg-slate-50 text-slate-600"
              )}
            >
              {item.icon ? <item.icon className="size-4 opacity-90" /> : null}
              <span className="leading-none">{item.label}</span>
            </div>
          );

          return (
            <div key={item.label}>
              <Link href={item.href === "#" ? "/offres/fiche-produit" : item.href} className="block">
                {ItemContent}
              </Link>
              {item.children && (
                <div className="mt-1 ml-6 space-y-1 w-[175px]">
                  {item.children.map((c) => {
                    const subActive = pathname?.startsWith(c.href);
                    return (
                      <Link key={c.label} href={c.href} className="block">
                        <div
                          className={cn(
                            "rounded px-2.5 py-1.5 text-[12px]",
                            subActive
                              ? "bg-[#EAF4FE] text-[#003781]"
                              : "text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          {c.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
