"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Figma asset icons (mapped in order to nav entries)
const iconProspection = "http://localhost:3845/assets/800b5d393b4db8d450089311370a01fa2ceb2e86.svg";
const iconEspaceClient = "http://localhost:3845/assets/9909ab871ef1e04f6f2266e8c844609a6e6c22b2.svg";
const iconNosOffres = "http://localhost:3845/assets/6e5e7e039beff277ca56cefba75efce7e4854a87.svg";
const iconSimulation = "http://localhost:3845/assets/520ce0461dd05c14c0494f006a875d7cc06f25d0.svg";
const iconContrats = "http://localhost:3845/assets/20ba13721eaf855c4f97bd874461bf41b0712479.svg";
const iconFaq = "http://localhost:3845/assets/f3640738f1daba3181042546a00eb88eea0c2971.svg";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
  children?: { label: string; href: string }[];
};

const nav: NavItem[] = [
  { label: "Prospection", href: "#", icon: iconProspection },
  { label: "Espace client", href: "#", icon: iconEspaceClient },
  {
    label: "Nos offres",
    href: "#",
    icon: iconNosOffres,
    children: [
      { label: "Fiches produit", href: "/offres/fiche-produit" },
      { label: "Formules/Avantages", href: "#" },
      { label: "Déclaration de sinistres", href: "/gestion-sinistre" },
    ],
  },
  { label: "Simulations/Souscription", href: "#", icon: iconSimulation },
  { label: "Contrats", href: "#", icon: iconContrats },
  { label: "FAQ", href: "#", icon: iconFaq },
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
              {item.icon && (
                <span className="inline-block size-[14px] opacity-90">
                  <img alt="" className="block max-w-none size-full" src={item.icon} />
                </span>
              )}
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
