import Link from "next/link";
import { PhoneIcon, MapPinIcon, ToothIcon } from "@/components/icons/icons";
import { clinic, nav, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
              Ready to love your smile?
            </h2>
            <p className="mt-2 max-w-md text-sm text-brand-200">
              Book your first visit today — most new patients are seen
              within the week.
            </p>
          </div>
          <Link
            href="#appointment"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:bg-accent-400"
          >
            Schedule your consultation
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <ToothIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-medium text-white">
                {clinic.shortName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {clinic.description}
            </p>
            <div className="mt-5 flex gap-4">
              {clinic.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-brand-200 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Treatments</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-brand-200 hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-brand-200">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={clinic.phoneHref} className="hover:text-white">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-brand-200">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
