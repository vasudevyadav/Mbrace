"use client";

import { type RefObject, type FormEvent } from "react";
import Photo from "./Photo";
import Heading from "./Heading";
import { CheckIcon } from "@/components/icons/icons";
import { locations } from "./content";
import type { HomeData } from "@/lib/queries";
import type { AppointmentStatus } from "./types";

type Props = {
  status: AppointmentStatus;
  setStatus: (status: AppointmentStatus) => void;
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
};

export default function AppointmentSection({ status, setStatus, formRef, submitAppointment, bookingDoctor, bookingType, bookingEmail, setBookingEmail, bookingDate, setBookingDate, bookingService, setBookingService, careCategories, bookingLocation, setBookingLocation, hospital }: Props) {

  return (
    <section id="appointment" className="mb-section mb-tinted mb-rounded rounded-[20px] py-12 [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple [&_p]:leading-[1.65] min-[701px]:rounded-[26px] min-[701px]:max-[1001px]:py-10 min-[1001px]:py-20">
      <div className="mb-container mb-appointment mx-auto grid w-full items-center gap-8 px-5 min-[701px]:px-6 min-[701px]:grid-cols-2 min-[701px]:gap-9 min-[1001px]:max-w-6xl min-[1001px]:gap-26 min-[1001px]:px-8 [&_.mb-heading]:mb-4.5 [&>div>p]:text-[14px] [&>.mb-photo]:h-90 min-[701px]:[&>.mb-photo]:h-140">
        <Photo n={18} alt="A mother smiles at her baby" />
        <div>
          <Heading label="BOOK AN APPOINTMENT">
            <em className="not-italic text-care-gold font-extrabold">Book Appointment</em> Today!</Heading>
          <p>Complete the form and our care team will contact you to schedule a confidential consultation.</p>
          {status === "success" ? <div className="mb-form-result pt-7.5 pr-7.5 pb-7.5 pl-7.5 bg-white rounded-[15px] mt-5 [&_svg]:w-10 [&_svg]:text-care-purple [&_h3]:font-bold [&_h3]:text-[21px] [&_h3]:text-care-navy [&_h3]:mt-[15px] [&_h3]:mb-[15px] [&_.mb-button]:mt-5" role="status">
            <CheckIcon />
            <h3>Appointment request sent</h3>
            <p>Our care team will contact you to confirm availability.</p>
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => setStatus("idle")}>Request another appointment</button>
          </div> : <form className="mb-appointment-form mt-6 grid gap-2.5 [&_.mb-button]:mt-2 [&_.mb-button]:w-full [&_.mb-button]:[justify-self:start] [&_input]:min-h-[45px] [&_input]:w-full [&_input]:rounded-[6px] [&_input]:bg-white [&_input]:px-4 [&_input]:py-[11px] [&_input]:text-[16px] [&_input]:text-care-copy [&_input]:[border:1px_solid_#d9dee8] [&_select]:min-h-[45px] [&_select]:w-full [&_select]:rounded-[6px] [&_select]:bg-white [&_select]:px-4 [&_select]:py-[11px] [&_select]:text-[16px] [&_select]:text-care-copy [&_select]:[border:1px_solid_#d9dee8] min-[701px]:[&_.mb-button]:w-auto min-[701px]:[&_input]:text-[13px] min-[701px]:[&_select]:text-[13px]" ref={formRef} onSubmit={submitAppointment}>
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
            <label className="mb-date-label relative flex bg-white [border:1px_solid_#d9dee8] rounded-[6px] items-center text-[13px] [&>span]:pl-4 [&>span]:whitespace-nowrap [&_input]:[border:0] [&_input]:min-w-0 [&_input]:flex-1">
              <span>Preferred Date</span>
              <input name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} aria-label="Preferred date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} required />
            </label>
            <label>
              <span className="sr-only">Select Service</span>
              <select name="service" required value={bookingService} onChange={e => setBookingService(e.target.value)}>
                <option value="" disabled>Select Service</option>{careCategories.map(x => <option key={x}>{x}</option>)}</select>
            </label>
            <label>
              <span className="sr-only">Select Location</span>
              <select name="location" required value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}>
                <option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select>
            </label>
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-[15px] pr-7 pb-[15px] pl-7 bg-care-purple text-white rounded-[6px] [border:0] text-[14px] font-extrabold no-underline [&:hover]:bg-[#603780]" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Book Appointment"}</button>
            {status === "error" && <p className="mb-form-message text-[13px] bg-white pt-4 pr-4 pb-4 pl-4 [border:1px_solid_#bd7694] rounded-[8px] text-[#71394e] [&_a]:underline" role="alert">We couldn’t send your request. Please try again, or call <a href={hospital.phoneHref}>{hospital.phone}</a> to book.</p>}
          </form>}
        </div>
      </div>
    </section>
  );
}
