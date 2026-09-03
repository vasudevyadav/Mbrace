import Link from "next/link";
import Container from "@/components/ui/Container";
import { ClockIcon, CalendarIcon, PhoneIcon } from "@/components/icons/icons";
import { clinic } from "@/lib/content";

export default function QuickInfoBar() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl bg-brand-800 p-6 text-white shadow-lg shadow-brand-900/10 sm:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-200">
                Studio hours
              </p>
              <p className="mt-1 text-base font-medium">
                {clinic.hours[0].day}: {clinic.hours[0].time}
              </p>
              <Link href="#location" className="mt-1 inline-block text-sm text-brand-200 hover:text-white">
                See full hours →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-accent-500 p-6 text-ink-900 shadow-lg shadow-accent-900/10 sm:flex-row sm:items-center sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/40">
                <CalendarIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-900/60">
                  Ready to visit?
                </p>
                <p className="mt-1 text-base font-medium">Same-day slots often available</p>
              </div>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              <Link
                href="#appointment"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-900/85 sm:flex-none"
              >
                Book now
              </Link>
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center rounded-lg bg-white/50 px-3 py-2.5 text-sm font-medium text-ink-900 hover:bg-white/70"
                aria-label={`Call ${clinic.phone}`}
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
