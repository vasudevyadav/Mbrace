"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ href: "/admin", label: "Dashboard", icon: "▢" }],
  },
  {
    label: "Home Page",
    items: [
      { href: "/admin/hero", label: "Hero Section", icon: "★" },
      { href: "/admin/services", label: "Services", icon: "✚" },
      { href: "/admin/faqs", label: "FAQs", icon: "?" },
      { href: "/admin/testimonials", label: "Testimonials", icon: "❞" },
      { href: "/admin/blogs", label: "Blogs", icon: "▤" },
    ],
  },
  {
    label: "Common",
    items: [
      { href: "/admin/settings", label: "Site Settings", icon: "⚙" },
      { href: "/admin/stats", label: "Statistics", icon: "#" },
      { href: "/admin/doctors", label: "Doctors", icon: "◐" },
      { href: "/admin/doctor-tips", label: "Doctor Tips", icon: "▶" },
      { href: "/admin/locations", label: "Locations", icon: "⌖" },
      { href: "/admin/appointments", label: "Appointment Leads", icon: "☏" },
      { href: "/admin/subscribers", label: "Subscribers", icon: "✉" },
    ],
  },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin navigation" className="admin-nav flex gap-5 flex-row items-start pt-3 pr-4 pb-3 pl-4 overflow-x-auto [scrollbar-width:thin] md:flex-col md:pt-0 md:pr-3.5 md:pb-0 md:pl-3.5">
      {NAV_GROUPS.map(group => (
        <div key={group.label} className="admin-nav-group flex gap-[5px] flex-row items-center md:flex-col md:items-stretch">
          <p className="admin-nav-group-label hidden pt-2 pr-3 pb-2 pl-3 text-[10px] font-semibold uppercase tracking-[.14em] text-[#7d6f8a]">{group.label}</p>
          {group.items.map(item => {
            const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`admin-nav-link flex gap-3 items-center pr-3 pl-3 [border:1px_solid_transparent] rounded-[9px] text-[#c9bdcf] text-[12px] font-medium [transition:background_.2s,_color_.2s] pt-2.5 pb-2.5 whitespace-nowrap shrink-0 md:pt-3 md:pb-3 [&:hover]:bg-[#ffffff08] [&:hover]:text-white [&.is-active]:text-[#fff] [&.is-active]:bg-[#ffffff12] [&.is-active]:[border-color:#ffffff18] [&.is-active]:shadow-[inset_3px_0_#edc782] [&.is-active_.admin-nav-icon]:text-[#edc782] ${active ? "is-active" : ""}`}
              >
                <span className="admin-nav-icon w-5 text-center text-[17px] opacity-[.8] hidden" aria-hidden="true">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
