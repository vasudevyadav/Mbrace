"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

const noopSubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export type AdminNavChild = { id: number; label: string; href: string; meta?: string; level?: "parent" | "child" };
export type AdminNavEntity = {
  key: string;
  label: string;
  listHref: string;
  // Omit both when the set of children is fixed and nothing new can be added
  // (e.g. the four care-category pages).
  addHref?: string;
  addLabel?: string;
  children: AdminNavChild[];
  activePrefixes?: string[];
};
export type AdminNavLink = { key: string; label: string; href: string };
export type AdminNavEntry = { section: string } & ({ type: "link"; link: AdminNavLink } | { type: "entity"; entity: AdminNavEntity });

function iconProps(className = "h-[18px] w-[18px]") {
  return { className, viewBox: "0 0 24 24", fill: "none" as const, "aria-hidden": true as const };
}

const NAV_ICONS: Record<string, ReactNode> = {
  dashboard: (
    <svg {...iconProps()}>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  pages: (
    <svg {...iconProps()}>
      <path d="M6 3.5h9l3 3v14H6v-17Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 3.5v3h3M9 11h6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "home-page": (
    <svg {...iconProps()}><path d="m4 11 8-7 8 7v9H4v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  "about-page": (
    <svg {...iconProps()}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 10.5v6M12 7.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  hero: (
    <svg {...iconProps()}>
      <path d="M12 3.5c.4 2.9 1.1 4.8 2.2 6 1.2 1.1 3.1 1.8 6 2.2-2.9.4-4.8 1.1-6 2.2-1.1 1.2-1.8 3.1-2.2 6-.4-2.9-1.1-4.8-2.2-6-1.2-1.1-3.1-1.8-6-2.2 2.9-.4 4.8-1.1 6-2.2 1.1-1.2 1.8-3.1 2.2-6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  ),
  "care-pages": (
    <svg {...iconProps()}>
      <path d="M12 20.3S4 15.3 4 9.8A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.8c0 5.5-8 10.5-8 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  services: (
    <svg {...iconProps()}>
      <path d="M4 7.5 12 3.5l8 4v9L12 20.5l-8-4v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 7.5 12 11.5l8-4M12 11.5v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  faqs: (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.6 9.6c.2-1.3 1.3-2.2 2.6-2.1 1.3.1 2.3 1.1 2.3 2.3 0 1.9-2.3 1.7-2.4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="16.3" r="1" fill="currentColor" />
    </svg>
  ),
  testimonials: (
    <svg {...iconProps()}>
      <path d="M6.5 7.5h5v5.3c0 2-1.2 3.3-3.3 3.7l-.4-1.3c1.2-.3 1.8-1 1.9-1.9H6.5v-5.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M13.5 7.5h5v5.3c0 2-1.2 3.3-3.3 3.7l-.4-1.3c1.2-.3 1.8-1 1.9-1.9h-3.2v-5.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  blogs: (
    <svg {...iconProps()}>
      <rect x="4.5" y="4" width="15" height="16" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  settings: (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4M17.7 17.7l-1.4-1.4M7.7 7.7 6.3 6.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  stats: (
    <svg {...iconProps()}>
      <path d="M5 19.5V11M12 19.5V4.5M19 19.5v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  doctors: (
    <svg {...iconProps()}>
      <circle cx="12" cy="8" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 20c.6-3.6 3.3-6 7-6s6.4 2.4 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "doctor-tips": (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9l5 3-5 3V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  locations: (
    <svg {...iconProps()}>
      <path d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  appointments: (
    <svg {...iconProps()}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  subscribers: (
    <svg {...iconProps()}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`h-3.5 w-3.5 shrink-0 text-[#8a7c96] transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}>
      <path d="m6.5 9 5.5 5.5L17.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// A custom flyout tooltip (not the native `title` attribute, which renders as
// an unstyled OS tooltip) for nav item labels long enough to be truncated.
// Rendered through a portal so it can escape the sidebar's scroll clipping.
function useFlyoutTooltip() {
  const [tooltip, setTooltip] = useState<{ text: string; top: number; left: number } | null>(null);
  const mounted = useIsClient();

  function show(event: { currentTarget: HTMLElement }, text: string) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({ text, top: rect.top + rect.height / 2, left: rect.right + 10 });
  }
  function hide() {
    setTooltip(null);
  }

  const node = mounted && tooltip
    ? createPortal(
        <div
          role="tooltip"
          className="pointer-events-none fixed z-50 max-w-64 -translate-y-1/2 rounded-lg bg-[#1b1424] px-3 py-2 text-[12px] font-medium leading-snug text-white shadow-[0_8px_24px_rgba(0,0,0,.25)]"
          style={{ top: tooltip.top, left: tooltip.left }}
        >
          {tooltip.text}
        </div>,
        document.body
      )
    : null;

  return { show, hide, node };
}

export default function AdminNav({ entries }: { entries: AdminNavEntry[] }) {
  const pathname = usePathname();
  // Only records explicit user toggles; the section matching the current
  // page is open by default unless the user has explicitly collapsed it.
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const tooltip = useFlyoutTooltip();

  const autoOpenKey = entries.find((entry): entry is Extract<AdminNavEntry, { type: "entity" }> => entry.type === "entity" && (entry.entity.activePrefixes ?? [entry.entity.listHref]).some(prefix => pathname.startsWith(prefix)))?.entity.key;

  function isOpen(key: string) {
    return key in overrides ? overrides[key] : key === autoOpenKey;
  }

  function toggle(key: string) {
    setOverrides(prev => ({ ...prev, [key]: !isOpen(key) }));
  }

  const entryRows = entries.reduce<{ entry: AdminNavEntry; isNewSection: boolean; isFirstSection: boolean }[]>((rows, entry) => {
    const previousSection = rows.length > 0 ? rows[rows.length - 1].entry.section : null;
    rows.push({ entry, isNewSection: entry.section !== previousSection, isFirstSection: rows.length === 0 });
    return rows;
  }, []);

  return (
    <nav aria-label="Admin navigation" className="admin-nav flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
      {entryRows.map(({ entry, isNewSection, isFirstSection }) => {
        const key = entry.type === "link" ? entry.link.key : entry.entity.key;
        const sectionHeader = isNewSection && (
          <p key={`${entry.section}-label`} className={`px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#786a85] ${isFirstSection ? "mt-1" : "mt-4"}`}>
            {entry.section}
          </p>
        );

        if (entry.type === "link") {
          const { href, label } = entry.link;
          const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <div key={key} className="flex flex-col">
              {sectionHeader}
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#c9bdcf] transition-colors duration-150 hover:bg-white/[.06] hover:text-white ${active ? "bg-white/10 text-white shadow-[inset_3px_0_0_#edc782]" : ""}`}
              >
                <span className={`shrink-0 transition-colors duration-150 ${active ? "text-[#edc782]" : "text-[#8a7c96] group-hover:text-[#c9bdcf]"}`}>{NAV_ICONS[key]}</span>
                {label}
              </Link>
            </div>
          );
        }

        const { entity } = entry;
        const open = isOpen(entity.key);
        const sectionActive = (entity.activePrefixes ?? [entity.listHref]).some(prefix => pathname.startsWith(prefix));
        const count = entity.children.length;

        return (
          <div key={key} className="flex flex-col">
            {sectionHeader}
            <button
              type="button"
              onClick={() => toggle(entity.key)}
              aria-expanded={open}
              className={`group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-[#c9bdcf] transition-colors duration-150 hover:bg-white/[.06] hover:text-white ${sectionActive ? "text-white" : ""}`}
            >
              <span className={`shrink-0 transition-colors duration-150 ${sectionActive ? "text-[#edc782]" : "text-[#8a7c96] group-hover:text-[#c9bdcf]"}`}>{NAV_ICONS[key]}</span>
              <span className="flex-1 truncate">{entity.label}</span>
              {count > 0 && <span className="rounded-full bg-white/[.07] px-1.5 py-0.5 text-[10px] font-semibold text-[#9a85a9]">{count}</span>}
              <ChevronIcon open={open} />
            </button>

            {open && (
              <div className="ml-[26px] mb-1.5 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                <Link href={entity.listHref} className="rounded-md px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#8a7c96] hover:text-white">
                  View all →
                </Link>

                <div className="flex flex-col gap-0.5">
                  {entity.children.length === 0 ? (
                    <p className="px-2.5 py-1.5 text-[11px] text-[#7d6f8a]">Nothing yet.</p>
                  ) : (
                    entity.children.map(child => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.id}
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          onMouseEnter={event => tooltip.show(event, child.label)}
                          onFocus={event => tooltip.show(event, child.label)}
                          onMouseLeave={tooltip.hide}
                          onBlur={tooltip.hide}
                          className={`truncate rounded-md px-2.5 py-1.5 text-[12px] transition-colors duration-150 hover:bg-white/[.06] hover:text-white ${child.level === "parent" ? "mt-1 font-semibold text-[#edc782]" : "pl-5 text-[#c9bdcf]"} ${childActive ? "bg-white/10 text-white" : ""}`}
                        >
                          {child.level === "child" && <span aria-hidden="true" className="mr-1.5 text-[#766682]">↳</span>}
                          {child.label}
                          {child.meta && <span className="ml-1.5 text-[10px] text-[#8a7c96]">· {child.meta}</span>}
                        </Link>
                      );
                    })
                  )}
                </div>

                {entity.addHref && (
                  <Link href={entity.addHref} className="mt-1.5 flex items-center gap-1.5 rounded-md border border-dashed border-white/15 px-2.5 py-1.5 text-[12px] font-semibold text-[#edc782] transition-colors duration-150 hover:border-[#edc782]/40 hover:bg-white/[.04]">
                    <span aria-hidden="true">+</span> {entity.addLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
      {tooltip.node}
    </nav>
  );
}
