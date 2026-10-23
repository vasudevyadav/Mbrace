"use client";

import { type RefObject, type FormEvent } from "react";
import Heading from "./Heading";
import { ChevronDownIcon } from "@/components/icons/icons";
import MbraceReelVideo, { mbraceInstagramUrl } from "./MbraceReelVideo";
import { locations } from "./content";
import type { HomeData } from "@/lib/queries";
import type { AppointmentStatus } from "./types";

type Props = {
  status: AppointmentStatus;
  formRef: RefObject<HTMLFormElement | null>;
  submitAppointment: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  bookingDoctor: string;
  bookingType: string;
  bookingEmail: string;
  setBookingEmail: (value: string) => void;
  bookingDate: string;
  setBookingDate: (value: string) => void;
  bookingService: string;
  setBookingService: (value: string) => void;
  careCategories: HomeData["careCategories"];
  bookingLocation: string;
  setBookingLocation: (value: string) => void;
  hospital: HomeData["hospital"];
  label?: string;
  heading?: string;
  description?: string;
};

export default function AppointmentSection({ status, formRef, submitAppointment, bookingDoctor, bookingType, bookingEmail, setBookingEmail, bookingDate, setBookingDate, bookingService, setBookingService, careCategories, bookingLocation, setBookingLocation, hospital, label = "BOOK AN APPOINTMENT", heading = "Book Appointment Today!", description = "Complete the form and our care team will contact you to schedule a confidential consultation." }: Props) {
  const serviceOptions = bookingService && !careCategories.includes(bookingService)
    ? [bookingService, ...careCategories]
    : careCategories;

  const emphasisPrefix = "Book Appointment";
  const headingContent = heading.startsWith(emphasisPrefix)
    ? <><em>{emphasisPrefix}</em>{heading.slice(emphasisPrefix.length)}</>
    : heading;

  return (
    <section id="appointment" className="mb-section mb-tinted mb-rounded rounded-[20px] py-12 [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple [&_h2_em]:not-italic [&_h2_em]:font-extrabold [&_h2_em]:text-care-gold [&_p]:leading-[1.65] md:rounded-[26px] md:py-10 lg:py-20">
      <div className="mb-container mb-appointment mx-auto grid w-full items-center gap-8 px-5 md:px-6 md:grid-cols-2 md:gap-9 lg:max-w-6xl lg:gap-26 lg:px-8 [&_.mb-heading]:mb-4.5 [&>div>p]:text-[14px] [&>.mb-photo-frame]:h-90 md:[&>.mb-photo-frame]:h-140">
        <div className="mb-photo-frame relative">
          <MbraceReelVideo className="h-full w-full rounded-[18px] bg-[#21172b] object-cover object-center shadow-[0_18px_45px_rgba(46,27,60,.16)]" />
          <a href={mbraceInstagramUrl} target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-sm hover:bg-care-purple" aria-label="Visit M’Brace on Instagram">@mbrace.care</a>
        </div>
        <div className="text-center md:text-left">
          <Heading label={label}>{headingContent}</Heading>
          <p className="mx-auto max-w-[560px] text-care-copy md:mx-0">{description}</p>
          <form className="mb-appointment-form mt-6 grid gap-2.5 text-left [&_.mb-button]:mt-2 [&_.mb-button]:w-full [&_.mb-button]:justify-self-center [&_input]:min-h-[45px] [&_input]:w-full [&_input]:rounded-[6px] [&_input]:bg-white [&_input]:px-4 [&_input]:py-[11px] [&_input]:text-[16px] [&_input]:text-care-copy [&_input]:[border:1px_solid_#d9dee8] [&_select]:min-h-[45px] [&_select]:w-full [&_select]:rounded-[6px] [&_select]:bg-white [&_select]:px-4 [&_select]:py-[11px] [&_select]:text-[16px] [&_select]:text-care-copy [&_select]:[border:1px_solid_#d9dee8] md:[&_.mb-button]:w-auto md:[&_.mb-button]:justify-self-start md:[&_input]:text-[13px] md:[&_select]:text-[13px]" ref={formRef} onSubmit={submitAppointment}>
            {(bookingDoctor || bookingType) && <p className="mb-booking-selection text-[12px]! text-care-purple bg-[#fff9] pt-2.5 pr-2.5 pb-2.5 pl-2.5 rounded-[5px]">{[bookingDoctor, bookingType].filter(Boolean).join(" · ")}</p>}
            <label>
              <span className="sr-only">Full Name</span>
              <input name="name" autoComplete="name" placeholder="Full Name" required />
            </label>
            <label>
              <span className="sr-only">Email Address</span>
              <input name="email" type="email" autoComplete="email" placeholder="Email Address" value={bookingEmail} onChange={e => setBookingEmail(e.target.value)} required />
            </label>
            <label>
              <span className="sr-only">Phone Number</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" required pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number" />
            </label>
            <label>
              <span className="sr-only">Preferred Date</span>
              <input className="pr-12! [color-scheme:light]" name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} aria-label="Preferred date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} required />
            </label>
            <label className="relative block">
              <span className="sr-only">Select Service</span>
              <select className="appearance-none pr-12!" name="service" required value={bookingService} onChange={e => setBookingService(e.target.value)}>
                <option value="" disabled>Select Service</option>{serviceOptions.map(x => <option key={x}>{x}</option>)}</select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
            </label>
            <label className="relative block">
              <span className="sr-only">Select Location</span>
              <select className="appearance-none pr-12!" name="location" required value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}>
                <option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
            </label>
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-[15px] pr-7 pb-[15px] pl-7 bg-care-purple text-white rounded-[6px] [border:0] text-[14px] font-extrabold no-underline [&:hover]:bg-[#603780]" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Book Appointment"}</button>
            {status === "error" && <p className="mb-form-message text-[13px] bg-white pt-4 pr-4 pb-4 pl-4 [border:1px_solid_#bd7694] rounded-[8px] text-[#71394e] [&_a]:underline" role="alert">We couldn’t send your request. Please try again, or call <a href={hospital.phoneHref}>{hospital.phone}</a> to book.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
