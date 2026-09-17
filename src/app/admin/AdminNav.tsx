"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "▢" },
  { href: "/admin/settings", label: "Site settings", icon: "⚙" },
  { href: "/admin/stats", label: "Statistics", icon: "#" },
  { href: "/admin/doctors", label: "Doctors", icon: "◐" },
  { href: "/admin/services", label: "Services", icon: "✚" },
  { href: "/admin/faqs", label: "FAQs", icon: "?" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "❞" },
  { href: "/admin/blogs", label: "Blogs", icon: "▤" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin navigation" className="admin-nav flex gap-[5px] max-[801px]:flex-row max-[801px]:pt-3 max-[801px]:pr-4 max-[801px]:pb-3 max-[801px]:pl-4 max-[801px]:overflow-x-auto max-[801px]:[scrollbar-width:thin] min-[801px]:flex-col min-[801px]:pt-0 min-[801px]:pr-3.5 min-[801px]:pb-0 min-[801px]:pl-3.5">
      {NAV.map(item => {
        const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`admin-nav-link flex gap-3 items-center pr-3 pl-3 [border:1px_solid_transparent] rounded-[9px] text-[#c9bdcf] text-[12px] font-medium [transition:background_.2s,_color_.2s] max-[801px]:pt-2.5 max-[801px]:pb-2.5 max-[801px]:whitespace-nowrap max-[801px]:shrink-0 min-[801px]:pt-3 min-[801px]:pb-3 [&:hover]:bg-[#ffffff08] [&:hover]:text-white [&.is-active]:text-[#fff] [&.is-active]:bg-[#ffffff12] [&.is-active]:[border-color:#ffffff18] [&.is-active]:shadow-[inset_3px_0_#edc782] [&.is-active_.admin-nav-icon]:text-[#edc782] ${active ? "is-active" : ""}`}
          >
            <span className="admin-nav-icon w-5 text-center text-[17px] opacity-[.8] max-[801px]:hidden" aria-hidden="true">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
