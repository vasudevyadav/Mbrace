"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { MenuIcon, CloseIcon } from "@/components/icons/icons";
import { clinic, nav } from "@/lib/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 hover:bg-mist-100"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-mist-200 bg-white shadow-lg"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-900 hover:bg-mist-100"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={clinic.phoneHref}
                className="mt-2 rounded-lg px-3 py-2.5 text-base font-medium text-brand-700"
              >
                Call {clinic.phone}
              </a>
              <Link
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-brand-700 px-3 py-2.5 text-center text-base font-medium text-white hover:bg-brand-800"
              >
                Book Appointment
              </Link>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
