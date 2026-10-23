"use client";

import { useEffect, useState, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { careCategories } from "@/lib/mbrace-home";
import { locations } from "./content";
import { ChevronDownIcon } from "@/components/icons/icons";
import { BOOKING_POPUP_EVENT, type BookingPopupDetail } from "@/lib/bookingPopup";

const SESSION_KEY = "mb-scroll-booking-popup-shown";

type Status = "idle" | "sending" | "error";

export default function ScrollBookingPopup() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [prefill, setPrefill] = useState<BookingPopupDetail>({});
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    if (isAdmin) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage unavailable (e.g. private mode) — fall through and still show once.
    }

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable < 0.4) return;
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore — popup just won't be remembered across pages this session.
      }
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAdmin, pathname]);

  useEffect(() => {
    if (isAdmin) return;
    const openBooking = (event: Event) => {
      const detail = (event as CustomEvent<BookingPopupDetail>).detail ?? {};
      setPrefill(detail);
      setStatus("idle");
      setOpen(true);
    };
    const interceptAppointmentLinks = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href="#appointment"], a[href="/#appointment"]');
      if (!link) return;
      event.preventDefault();
      openBooking(new CustomEvent<BookingPopupDetail>(BOOKING_POPUP_EVENT));
    };
    window.addEventListener(BOOKING_POPUP_EVENT, openBooking);
    document.addEventListener("click", interceptAppointmentLinks);
    return () => {
      window.removeEventListener(BOOKING_POPUP_EVENT, openBooking);
      document.removeEventListener("click", interceptAppointmentLinks);
    };
  }, [isAdmin]);

  if (isAdmin || !open) return null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.set("source", "scroll-popup");
    formData.set("doctor", prefill.doctor ?? "");
    formData.set("appointmentType", prefill.appointmentType ?? "");
    const result = await submitAppointmentRequestAction(formData);
    if (result.ok) {
      setOpen(false);
      router.push("/thank-you");
    } else {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#20113099] px-5 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scroll-booking-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative max-h-full w-[min(440px,100%)] overflow-auto rounded-[18px] bg-white px-7 py-8 text-center shadow-[0_20px_80px_#0004]">
        <button
          type="button"
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-care-soft text-[16px] font-bold text-care-purple"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>
        <p className="text-[13px] font-extrabold uppercase tracking-wide text-care-gold">Limited Slots Available</p>
        <h2 id="scroll-booking-title" className="mt-2 text-[21px] font-semibold leading-[1.3] text-care-navy">
          Book Your Appointment Today!
        </h2>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-care-copy">
          Complete the form and our care team will contact you to schedule a confidential consultation.
        </p>
        <form
          onSubmit={submit}
          className="mt-5 grid gap-2.5 text-left [&_input]:min-h-[45px] [&_input]:w-full [&_input]:rounded-[6px] [&_input]:bg-white [&_input]:px-4 [&_input]:py-[11px] [&_input]:text-[14px] [&_input]:text-care-copy [&_input]:[border:1px_solid_#d9dee8] [&_select]:min-h-[45px] [&_select]:w-full [&_select]:rounded-[6px] [&_select]:bg-white [&_select]:px-4 [&_select]:py-[11px] [&_select]:text-[14px] [&_select]:text-care-copy [&_select]:[border:1px_solid_#d9dee8]"
        >
          <label>
            <span className="sr-only">Full Name</span>
            <input name="name" autoComplete="name" placeholder="Full Name" required />
          </label>
          <label>
            <span className="sr-only">Email Address</span>
            <input name="email" type="email" autoComplete="email" placeholder="Email Address" required />
          </label>
          <label>
            <span className="sr-only">Phone Number</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" required pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number" />
          </label>
          <label>
            <span className="sr-only">Preferred Date</span>
            <input className="[color-scheme:light]" name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} aria-label="Preferred date" required />
          </label>
          <label className="relative block">
            <span className="sr-only">Select Service</span>
            <select className="appearance-none pr-12!" name="service" required defaultValue={prefill.service ?? ""} key={`service-${prefill.service ?? ""}`}>
              <option value="" disabled>Select Service</option>
              {prefill.service && !careCategories.some((category) => category === prefill.service) && <option value={prefill.service}>{prefill.service}</option>}
              {careCategories.map((x) => <option key={x}>{x}</option>)}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
          </label>
          <label className="relative block">
            <span className="sr-only">Select Location</span>
            <select className="appearance-none pr-12!" name="location" required defaultValue={prefill.location ?? ""} key={`location-${prefill.location ?? ""}`}>
              <option value="" disabled>Select Location</option>
              {locations.map((x) => <option key={x}>{x}</option>)}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex min-h-11.5 items-center justify-center rounded-[6px] bg-care-purple px-6 text-[14px] font-extrabold text-white [&:hover]:bg-[#603780]"
          >
            {status === "sending" ? "Sending…" : "Book Appointment"}
          </button>
          {status === "error" && (
            <p className="rounded-[8px] bg-[#fdf2f6] px-4 py-3 text-[12.5px] text-[#71394e]" role="alert">
              We couldn&rsquo;t send your request. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
