import Link from "next/link";
import { PhoneIcon, ToothIcon } from "@/components/icons/icons";
import { clinic, nav } from "@/lib/content";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
            <ToothIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink-900">
            {clinic.shortName}
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-700 hover:bg-mist-100 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={clinic.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-ink-900 sm:flex"
          >
            <PhoneIcon className="h-4 w-4 text-brand-700" />
            {clinic.phone}
          </a>
          <Link
            href="#appointment"
            className="inline-flex rounded-lg bg-accent-500 px-3.5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-accent-600 sm:px-4"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
