"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import { CalendarIcon, ChevronDownIcon } from "@/components/icons/icons";
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
    <section className="mb-hero mt-3 mr-3 mb-3 ml-3 lg:mt-4.5 lg:mb-0 lg:min-h-180 lg:mr-8 lg:ml-8 2xl:mr-auto 2xl:ml-auto 2xl:max-w-384 min-h-auto rounded-[20px] sm:min-h-185 relative overflow-hidden [background:var(--care-gradient)] sm:rounded-[30px] [&_h1]:text-[29px] [&_h1]:leading-[1.4] [&_h1]:mt-5.5 sm:[&_h1]:text-[39px] xl:[&_h1]:text-[46px] sm:[&_h1]:leading-[1.5] sm:[&_h1]:mt-6 [&_h1]:text-[#343333] [&_h1]:font-normal [&_h1]:tracking-[-1px] [&_h1_strong]:block [&_h1_strong]:font-extrabold [&_h1_strong]:text-[#734a99] xl:[&_.mb-header]:relative xl:[&_.mb-header]:top-auto xl:[&_.mb-header]:right-auto xl:[&_.mb-header]:bottom-auto xl:[&_.mb-header]:left-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:pt-6 xl:[&_.mb-header]:pr-10 xl:[&_.mb-header]:pb-6 xl:[&_.mb-header]:pl-10 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:[border:0] xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none" id="about-hero">
      <Image src="/images/figma/asset-0.webp" alt="A mother cradling her newborn baby at M’Brace" fill priority sizes="100vw" className="mb-hero-photo object-cover z-[0] object-[65%_center] opacity-[.32] sm:object-[60%_center] sm:opacity-[.6] lg:object-[center]" />
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />

      <div className="mb-hero-content relative z-[1] pt-8 pr-5.5 pb-8 pl-5.5 sm:pt-10.5 sm:pr-[5%] sm:pb-10.5 sm:pl-[5%] lg:pt-16 xl:pt-12.5 lg:pr-[7%] lg:pb-9.5 lg:pl-[7%] 2xl:pl-[8%]">
        <p className="mb-care-badge inline-block rounded-[4px] bg-care-purple text-white pt-[3px] pr-2 pb-[3px] pl-2 text-[14px] sm:text-[20px]">{hero.badgePrefix} <strong>{stats.yearsOfCare.value} Years of Care</strong>
        </p>
        <h1>{aboutHero.headingPlain} <strong>{aboutHero.headingHighlight}</strong>
        </h1>
        <p className="mb-hero-description max-w-120 lg:max-w-[565px] mt-6 text-[#565555] italic leading-[1.55] text-[14px] sm:text-[16px]">{aboutHero.description}</p>
        <div className={"mb-quick-booking mt-8 sm:mt-10.5 max-w-262.5 [&_h3]:text-[20px] sm:[&_h3]:text-[23px] [&_h3]:font-bold [&_h3]:text-[#393939] [&_h3]:mb-4.5 [&>div]:grid [&>div]:grid-cols-[1fr] [&>div]:gap-2.5 sm:[&>div]:grid-cols-[1fr_1fr] lg:[&>div]:grid-cols-[1fr_1fr_1fr_auto] sm:[&>div]:gap-4.5 [&_input]:bg-white [&_input]:[border:1px_solid_#d8d3dd] [&_input]:min-h-12 [&_input]:rounded-[4px] [&_input]:pt-2.5 [&_input]:pr-4 [&_input]:pb-2.5 [&_input]:pl-4 [&_input]:min-w-0 [&_input]:text-[#6a6969] [&_input]:text-[16px] md:[&_input]:text-[13px] [&_select]:bg-white [&_select]:[border:1px_solid_#d8d3dd] [&_select]:min-h-12 [&_select]:rounded-[4px] [&_select]:pt-2.5 [&_select]:pr-4 [&_select]:pb-2.5 [&_select]:pl-4 [&_select]:min-w-0 [&_select]:text-[#6a6969] [&_select]:text-[16px] md:[&_select]:text-[13px] [&_h3::before]:[content:\"\"] [&_h3::before]:block [&_h3::before]:h-[1px] [&_h3::before]:w-[255px] [&_h3::before]:mb-[5px] [&_h3::before]:bg-[#764b9e80]"}>
          <h3>Request Appointment <CalendarIcon className="mb-inline-icon w-6.5 h-6.5 inline-block ml-3 [vertical-align:middle]" />
          </h3>
          <div>
            <div className="relative">
              <select className="w-full appearance-none pr-12!" aria-label="Select speciality" value={bookingService} onChange={e => setBookingService(e.target.value)}>
                <option value="" disabled>Select Speciality</option>{careCategories.map(x => <option key={x}>{x}</option>)}</select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
            </div>
            <div className="relative">
              <select className="w-full appearance-none pr-12!" aria-label="Select location" value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}>
                <option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-care-copy" />
            </div>
            <input className="pr-12! [color-scheme:light]" aria-label="Appointment date" type="date" min={new Date().toISOString().split("T")[0]} value={bookingDate} onChange={e => setBookingDate(e.target.value)} />
            <button type="button" onClick={() => book()} className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] border border-care-gold">Get Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
