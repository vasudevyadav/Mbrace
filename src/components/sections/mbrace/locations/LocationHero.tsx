"use client";

import Image from "next/image";
import { useState } from "react";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";

type Props = {
  name: string;
  phone: string;
  phoneHref: string;
  heroImage: string;
  book: BookAppointment;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
};

function HeroSelect({ label, options }: { label: string; options: string[] }) {
  const [value, setValue] = useState("");

  return (
    <details className="group relative h-[47px]">
      <summary className="flex h-[47px] list-none items-center justify-between rounded-[6px] border border-[#bfc1c8] bg-white px-4 text-[13px] text-[#5e6178] shadow-[0_1px_3px_rgba(31,43,112,.08)] transition-[border-color,box-shadow] marker:hidden hover:border-care-purple group-open:border-care-navy group-open:ring-2 group-open:ring-care-navy/15 [&::-webkit-details-marker]:hidden">
        <span>{value || label}</span>
        <span className="ml-3 block size-2.5 rotate-45 border-b-2 border-r-2 border-care-navy transition-transform group-open:rotate-[225deg]" />
      </summary>
      <div className="absolute bottom-[calc(100%_+_8px)] left-0 z-30 w-full overflow-hidden rounded-[10px] border border-[#d9dee8] bg-white p-1.5 shadow-[0_16px_35px_rgba(31,43,112,.2)]">
        {options.map(option => (
          <button
            key={option}
            type="button"
            className={`block w-full rounded-[7px] px-3 py-2.5 text-left text-[13px] transition-colors ${value === option ? "bg-care-purple text-white" : "text-[#343333] hover:bg-[#f3e9fc] hover:text-care-purple"}`}
            onClick={event => {
              setValue(option);
              event.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </details>
  );
}

export default function LocationHero({ name, heroImage, book, careCategories, hospital }: Props) {
  const nameParts = name.split(" ");
  const locationPrefix = nameParts[0] === "LB" ? "L.B." : nameParts[0];
  const locationSuffix = nameParts.slice(1).join(" ");

  return (
    <section className="mb-hero relative m-3 overflow-hidden rounded-[20px] [background:var(--care-gradient)] sm:rounded-[30px] lg:mx-8 lg:mb-0 lg:mt-4 lg:min-h-[720px] 2xl:mx-auto 2xl:max-w-[1376px] lg:[&_.mb-header]:relative lg:[&_.mb-header]:inset-auto lg:[&_.mb-header]:h-30 lg:[&_.mb-header]:border-0 lg:[&_.mb-header]:bg-transparent lg:[&_.mb-header]:px-10 lg:[&_.mb-header]:py-6 lg:[&_.mb-header]:shadow-none lg:[&_.mb-header]:backdrop-blur-none">
      {heroImage && <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />}
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] px-5 pb-10 pt-28 sm:px-[7%] sm:pb-12 sm:pt-32 lg:absolute lg:inset-0 lg:p-0">
        <span className="inline-block rounded-[5px] bg-care-purple px-4 py-2 text-[16px] font-bold text-white lg:absolute lg:left-[7%] lg:top-[195px]">Hospital Location</span>
        <p className="mt-16 text-[24px] font-semibold text-[#343333] sm:text-[32px] lg:absolute lg:left-[7%] lg:top-[313px] lg:mt-0">Our Nearest Hospital</p>
        <h1 style={{ WebkitTextStroke: "1px #171717", paintOrder: "stroke fill" }} className="mt-3 max-w-4xl text-[44px] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-[64px] lg:absolute lg:left-[7%] lg:top-[375px] lg:mt-0 lg:text-[80px]">
          <span className="text-care-gold">{locationPrefix}</span>{" "}
          <span className="text-care-purple">{locationSuffix}</span>
        </h1>
        <div className="mt-10 w-full lg:absolute lg:bottom-8 lg:left-[7%] lg:right-[7%] lg:mt-0 lg:w-auto">
          <div className="relative mb-4 flex items-center gap-4 lg:ml-7">
            <span className="absolute -top-3 left-0 hidden h-px w-64 bg-care-purple md:block" />
            <p className="text-[20px] font-bold leading-none text-[#343333]">Request Appointment</p>
            <span className="flex size-8 items-center justify-center rounded-full bg-white/70 text-[18px] text-care-purple">✚</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:ml-7 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:gap-4 [&_input]:h-[47px] [&_input]:rounded-[6px] [&_input]:border [&_input]:border-[#bfc1c8] [&_input]:bg-white [&_input]:px-4 [&_input]:text-[13px]">
            <HeroSelect label="Select Speciality" options={careCategories} />
            <HeroSelect label="Select Location" options={[name]} />
            <input type="date" aria-label="Appointment date" />
            <button type="button" onClick={() => book()} className="min-h-[49px] rounded-[6px] border border-care-gold bg-care-purple px-6 text-[14px] font-semibold text-white hover:bg-[#603780]">Get Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
