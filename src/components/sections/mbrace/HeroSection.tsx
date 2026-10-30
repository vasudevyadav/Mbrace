"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import { asset } from "./content";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  book: BookAppointment;
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

export default function HeroSection({ book, careCategories, hospital, hero, stats }: Props) {

  return (
    <section className="mb-hero relative m-3 min-h-auto overflow-hidden rounded-[20px] bg-[var(--care-gradient)] sm:min-h-185 sm:rounded-[30px] lg:mb-0 lg:ml-8 lg:mr-8 lg:mt-4.5 lg:min-h-180 2xl:ml-auto 2xl:mr-auto 2xl:max-w-384 xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-6 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none" id="home">
      <Image src={asset(0)} alt="A mother cradles her newborn baby" fill priority sizes="calc(100vw - 24px)" className="mb-hero-photo object-cover z-[0] object-[65%_center] opacity-[.32] sm:object-[60%_center] sm:opacity-[.6] lg:hidden" />
      <Image src="/images/figma/home-hero-bg-alt.png" alt="A mother cradles her newborn baby" fill priority sizes="(min-width: 1600px) 1475px, calc(100vw - 64px)" className="mb-hero-photo hidden lg:block object-cover z-[0] object-center opacity-100" />
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} />

      <div className="mb-hero-content relative z-[1] pt-8 pr-5.5 pb-8 pl-5.5 sm:pt-10.5 sm:pr-[5%] sm:pb-10.5 sm:pl-[5%] lg:pt-16 xl:pt-12.5 lg:pr-[7%] lg:pb-9.5 lg:pl-[7%] 2xl:pl-[8%]">
        <p className="mb-care-badge inline-block rounded-[5px] bg-care-purple text-white pt-[3px] pr-2 pb-[3px] pl-2 font-bold [font-family:var(--font-manrope)] text-[14px] sm:text-[20px]">{hero.badgePrefix} <strong>{stats.yearsOfCare.value} Years of Care</strong>
        </p>
        <h1 className="mt-5.5 text-[29px] font-normal leading-[1.4] text-[#343333] sm:mt-6 sm:text-[39px] sm:leading-[1.5] xl:text-[48px] [&_strong]:block [&_strong]:font-extrabold [&_strong]:text-[#734a99]">{hero.headingPlain} <strong>{hero.headingHighlight}</strong>
        </h1>
        <h2 className="mt-3.5 text-[23px] font-extrabold leading-[1.35] text-[#ffa20f] sm:text-[28px] sm:leading-[1.52] xl:text-[35px]">{hero.subheading}</h2>
        <p className="mb-hero-description max-w-120 lg:max-w-155 mt-6 text-[#565555] italic font-medium opacity-85 leading-[1.55] text-[14px] sm:text-[17px]">{hero.description}</p>
        <button type="button" onClick={() => book()} className="mb-button mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-care-gold bg-care-purple px-7 py-3 font-[var(--font-manrope)] text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(45,28,70,.18)] hover:bg-[#603780] sm:mt-10.5">Get Appointment</button>
      </div>
    </section>
  );
}
