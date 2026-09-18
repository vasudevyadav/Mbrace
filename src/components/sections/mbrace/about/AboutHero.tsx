"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import { CalendarIcon } from "@/components/icons/icons";
import { locations } from "../content";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";
import { aboutHero } from "./content";

type Props = {
  book: BookAppointment;
  goToServices: (category: string) => void;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
  hero: HomeData["hero"];
  stats: HomeData["stats"];
  bookingService: string;
  setBookingService: (value: string) => void;
  bookingLocation: string;
  setBookingLocation: (value: string) => void;
  bookingDate: string;
  setBookingDate: (value: string) => void;
};

export default function AboutHero({ book, goToServices, careCategories, hospital, hero, stats, bookingService, setBookingService, bookingLocation, setBookingLocation, bookingDate, setBookingDate }: Props) {

  return (
    <section className="mb-hero max-[1001px]:mt-3 max-[1001px]:mr-3 max-[1001px]:mb-3 max-[1001px]:ml-3 min-[1001px]:mt-4.5 min-[1001px]:mb-0 min-[1001px]:min-h-180 min-[1001px]:max-[1600px]:mr-8 min-[1001px]:max-[1600px]:ml-8 min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-384 max-[601px]:min-h-auto max-[601px]:rounded-[20px] min-[601px]:max-[1001px]:min-h-185 relative overflow-hidden [background:var(--care-gradient)] min-[601px]:rounded-[30px] max-[601px]:[&_h1]:text-[29px] max-[601px]:[&_h1]:leading-[1.4] max-[601px]:[&_h1]:mt-5.5 min-[601px]:max-[1201px]:[&_h1]:text-[39px] min-[1201px]:[&_h1]:text-[46px] min-[601px]:[&_h1]:leading-[1.5] min-[601px]:[&_h1]:mt-6 [&_h1]:text-[#343333] [&_h1]:font-normal [&_h1]:tracking-[-1px] [&_h1_strong]:block [&_h1_strong]:font-extrabold [&_h1_strong]:text-[#734a99] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:top-auto min-[1201px]:[&_.mb-header]:right-auto min-[1201px]:[&_.mb-header]:bottom-auto min-[1201px]:[&_.mb-header]:left-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:pt-6 min-[1201px]:[&_.mb-header]:pr-10 min-[1201px]:[&_.mb-header]:pb-6 min-[1201px]:[&_.mb-header]:pl-10 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:[border:0] min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none" id="about-hero">
      <Image src="/images/about/hero-bg.png" alt="A mother cradling her newborn baby at M’Brace" fill priority sizes="100vw" className="mb-hero-photo object-cover z-[0] max-[601px]:object-[65%_center] max-[601px]:opacity-[.32] min-[601px]:max-[1001px]:object-[60%_center] min-[601px]:max-[1001px]:opacity-[.6] min-[1001px]:object-[center]" />
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />

      <div className="mb-hero-content relative z-[1] max-[601px]:pt-8 max-[601px]:pr-5.5 max-[601px]:pb-8 max-[601px]:pl-5.5 min-[601px]:max-[1001px]:pt-10.5 min-[601px]:max-[1001px]:pr-[5%] min-[601px]:max-[1001px]:pb-10.5 min-[601px]:max-[1001px]:pl-[5%] min-[1001px]:max-[1201px]:pt-16 min-[1201px]:pt-12.5 min-[1001px]:pr-[7%] min-[1001px]:pb-9.5 min-[1001px]:max-[1600px]:pl-[7%] min-[1600px]:pl-[8%]">
        <p className="mb-care-badge inline-block rounded-[4px] bg-care-purple text-white pt-[3px] pr-2 pb-[3px] pl-2 max-[601px]:text-[14px] min-[601px]:text-[20px]">{hero.badgePrefix} <strong>{stats.yearsOfCare.value} Years of Care</strong>
        </p>
        <h1>{aboutHero.headingPlain} <strong>{aboutHero.headingHighlight}</strong>
        </h1>
        <p className="mb-hero-description max-[1001px]:max-w-120 min-[1001px]:max-w-[565px] mt-6 text-[#565555] italic leading-[1.55] max-[601px]:text-[14px] min-[601px]:text-[16px]">{aboutHero.description}</p>
        <div className={"mb-quick-booking max-[601px]:mt-8 min-[601px]:mt-10.5 max-w-262.5 max-[601px]:[&_h3]:text-[20px] min-[601px]:[&_h3]:text-[23px] [&_h3]:font-bold [&_h3]:text-[#393939] [&_h3]:mb-4.5 [&>div]:grid max-[601px]:[&>div]:grid-cols-[1fr] max-[601px]:[&>div]:gap-2.5 min-[601px]:max-[1001px]:[&>div]:grid-cols-[1fr_1fr] min-[1001px]:[&>div]:grid-cols-[1fr_1fr_1fr_auto] min-[601px]:[&>div]:gap-4.5 [&_input]:bg-white [&_input]:[border:1px_solid_#d8d3dd] [&_input]:min-h-12 [&_input]:rounded-[4px] [&_input]:pt-2.5 [&_input]:pr-4 [&_input]:pb-2.5 [&_input]:pl-4 [&_input]:min-w-0 [&_input]:text-[#6a6969] max-[701px]:[&_input]:text-[16px] min-[701px]:[&_input]:text-[13px] [&_select]:bg-white [&_select]:[border:1px_solid_#d8d3dd] [&_select]:min-h-12 [&_select]:rounded-[4px] [&_select]:pt-2.5 [&_select]:pr-4 [&_select]:pb-2.5 [&_select]:pl-4 [&_select]:min-w-0 [&_select]:text-[#6a6969] max-[701px]:[&_select]:text-[16px] min-[701px]:[&_select]:text-[13px] [&_h3::before]:[content:\"\"] [&_h3::before]:block [&_h3::before]:h-[1px] [&_h3::before]:w-[255px] [&_h3::before]:mb-[5px] [&_h3::before]:bg-[#764b9e80]"}>
          <h3>Request Appointment <CalendarIcon className="mb-inline-icon w-6.5 h-6.5 inline-block ml-3 [vertical-align:middle]" />
          </h3>
          <div>
            <select aria-label="Select speciality" value={bookingService} onChange={e => setBookingService(e.target.value)}>
              <option value="" disabled>Select Speciality</option>{careCategories.map(x => <option key={x}>{x}</option>)}</select>
            <select aria-label="Select location" value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}>
              <option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select>
            <input aria-label="Appointment date" type="date" min={new Date().toISOString().split("T")[0]} value={bookingDate} onChange={e => setBookingDate(e.target.value)} />
            <button type="button" onClick={() => book()} className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] border border-care-gold">Get Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
