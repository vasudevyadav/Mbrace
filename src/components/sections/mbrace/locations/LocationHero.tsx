"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";
import type { ApprovedLocationContent } from "./locationContent";

type Props = {
  name: string;
  phone: string;
  phoneHref: string;
  heroImage: string;
  book: BookAppointment;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
  content?: ApprovedLocationContent | null;
};

export default function LocationHero({ name, heroImage, book, careCategories, hospital, content }: Props) {
  const nameParts = name.split(" ");
  const locationPrefix = nameParts[0] === "LB" ? "L.B." : nameParts[0];
  const locationSuffix = nameParts.slice(1).join(" ");

  return (
    <section className="mb-hero relative m-3 overflow-hidden rounded-[20px] [background:var(--care-gradient)] sm:rounded-[30px] lg:mx-8 lg:mb-0 lg:mt-4 lg:min-h-[720px] 2xl:mx-auto 2xl:max-w-[1376px] lg:[&_.mb-header]:relative lg:[&_.mb-header]:inset-auto lg:[&_.mb-header]:h-30 lg:[&_.mb-header]:border-0 lg:[&_.mb-header]:bg-transparent lg:[&_.mb-header]:px-10 lg:[&_.mb-header]:py-6 lg:[&_.mb-header]:shadow-none lg:[&_.mb-header]:backdrop-blur-none">
      {heroImage && <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />}
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] px-5 pb-10 pt-28 sm:px-[7%] sm:pb-12 sm:pt-32 lg:absolute lg:inset-0 lg:p-0">
        <span className="inline-block rounded-[5px] bg-care-purple px-4 py-2 text-[14px] font-bold text-white sm:text-[16px] lg:absolute lg:left-[7%] lg:top-[195px]">{content?.heroLabel ?? "Hospital Location"}</span>
        {content ? <h1 className="mt-16 max-w-[820px] text-[36px] font-extrabold leading-[1.08] tracking-[-1px] text-care-navy sm:text-[52px] lg:absolute lg:left-[7%] lg:top-[310px] lg:mt-0 lg:text-[64px]">{content.heroHeading}</h1> : <>
          <p className="mt-16 text-[24px] font-semibold text-[#343333] sm:text-[32px] lg:absolute lg:left-[7%] lg:top-[313px] lg:mt-0">Our Nearest Hospital</p>
          <h1 style={{ WebkitTextStroke: "1px #171717", paintOrder: "stroke fill" }} className="mt-3 max-w-4xl text-[44px] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-[64px] lg:absolute lg:left-[7%] lg:top-[375px] lg:mt-0 lg:text-[80px]">
            <span className="text-care-gold">{locationPrefix}</span>{" "}
            <span className="text-care-purple">{locationSuffix}</span>
          </h1>
        </>}
        <div className="mt-10 w-full lg:absolute lg:bottom-8 lg:left-[7%] lg:right-[7%] lg:mt-0 lg:w-auto">
          <div className="relative mb-4 flex items-center gap-4 lg:ml-7">
            <span className="absolute -top-3 left-0 hidden h-px w-64 bg-care-purple md:block" />
            <p className="text-[20px] font-bold leading-none text-[#343333]">Request Appointment</p>
            <span className="flex size-8 items-center justify-center rounded-full bg-white/70 text-[18px] text-care-purple">✚</span>
          </div>
          <button type="button" onClick={() => book()} className="min-h-[49px] rounded-[6px] border border-care-gold bg-care-purple px-7 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(45,28,70,.18)] hover:bg-[#603780] lg:ml-7">Get Appointment</button>
        </div>
      </div>
    </section>
  );
}
