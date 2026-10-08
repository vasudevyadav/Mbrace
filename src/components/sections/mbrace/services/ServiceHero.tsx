"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";

type Props = {
  categoryLabel: string;
  name: string;
  description: string;
  heroImage: string;
  book: BookAppointment;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
};

export default function ServiceHero({ categoryLabel, name, description, heroImage, book, careCategories, hospital }: Props) {

  return (
    <section className="mb-hero relative mx-3 mt-3 overflow-hidden rounded-[20px] [background:linear-gradient(105deg,#fff4df,#f2e9fb)] sm:rounded-[24px] lg:mx-8 lg:mt-4.5 2xl:mx-auto 2xl:max-w-384 xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-25 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-5 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
      {heroImage && (
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="(max-width: 1536px) 100vw, 1536px"
          className="object-cover object-[62%_center] sm:object-center"
        />
      )}
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] px-5 pb-6 pt-26 lg:min-h-[625px] lg:px-[7%] lg:pb-7 lg:pt-8">
        <div className="relative z-10 flex max-w-[620px] flex-col justify-center py-8 lg:min-h-[520px] lg:w-[52%] lg:py-5">
          <span className="self-start rounded-[4px] bg-care-purple px-3 py-1 text-[11px] font-bold uppercase text-white">{categoryLabel}&nbsp; / &nbsp;{name}</span>
          <h1 className="mt-5 max-w-[620px] text-[34px] font-semibold leading-[1.08] tracking-[-1.2px] text-[#343333] sm:text-[44px] xl:text-[52px]"><span className="text-care-gold">Gynaecology</span> <span className="text-care-purple">Care</span><br /><span className="text-[.72em] font-medium tracking-[-.5px]">for Every Stage of Life</span></h1>
          <p className="mt-5 max-w-[540px] text-[13px] leading-[1.65] text-[#56516b]">{description}</p>
          <button type="button" onClick={() => book(name)} className="mt-6 self-start text-[13px] font-bold text-[#211d49] underline decoration-care-gold decoration-2 underline-offset-8">Request Appointment&nbsp; ↗</button>
        </div>
      </div>
      <div className="relative z-20 mx-5 mb-6 grid gap-2 rounded-[10px] bg-white p-3 shadow-[0_8px_24px_rgba(45,28,70,.1)] sm:grid-cols-[1fr_1fr_1fr_auto] lg:absolute lg:bottom-6 lg:left-[7%] lg:mx-0 lg:mb-0 lg:w-[58%]">
        <label><span className="sr-only">Select specialty</span><select defaultValue="" className="h-11 w-full rounded-[5px] border border-[#e5ddec] bg-white px-3 text-[11px] text-[#726c7c]"><option value="" disabled>Select Specialty</option><option>{name}</option></select></label>
        <label><span className="sr-only">Select location</span><select defaultValue="" className="h-11 w-full rounded-[5px] border border-[#e5ddec] bg-white px-3 text-[11px] text-[#726c7c]"><option value="" disabled>Select Location</option><option>LB Nagar</option><option>King Koti</option></select></label>
        <label><span className="sr-only">Appointment date</span><input type="date" className="h-11 w-full rounded-[5px] border border-[#e5ddec] bg-white px-3 text-[11px] text-[#726c7c]" /></label>
        <button type="button" onClick={() => book(name)} className="h-11 rounded-[5px] bg-care-purple px-6 text-[11px] font-bold text-white hover:bg-[#603780]">Book Appointment</button>
      </div>
    </section>
  );
}
