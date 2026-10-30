"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";
import { serviceHeroCopy } from "./serviceHeroCopy";

type Props = {
  categoryLabel: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  book: BookAppointment;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
  isGynecology?: boolean;
};

export default function ServiceHero({ categoryLabel, name, slug, description, heroImage, book, careCategories, hospital, isGynecology = false }: Props) {
  const heroCopy = serviceHeroCopy[slug];

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
   
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/75 to-transparent" />
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] px-5 pb-6 pt-26 lg:min-h-[625px] lg:px-[7%] lg:pb-7 lg:pt-8">
        <div className="relative z-10 flex max-w-[620px] flex-col justify-center py-8 lg:min-h-[520px] lg:w-[52%] lg:py-5">
          <span className="self-start rounded-[4px] bg-care-purple px-3 py-1 text-[11px] font-bold uppercase text-white">{isGynecology ? "Gynaecology in Hyderabad" : heroCopy?.pageTitle || <>{categoryLabel}&nbsp; / &nbsp;{name}</>}</span>
          <h1 className="mt-5 max-w-[680px] text-[34px] font-semibold leading-[1.08] tracking-[-1.2px] text-care-navy sm:text-[44px] xl:text-[52px]">{isGynecology ? <><span className="text-care-gold">Heavy Periods, Pelvic Pain</span><br /> Or Irregular Cycles?</> : heroCopy ? <><span className="text-care-gold">{heroCopy.highlight}</span>{heroCopy.rest && <><br /> <span className="text-[.72em] font-medium tracking-[-.5px]">{heroCopy.rest}</span></>}</> : <><span className="text-care-gold">Gynaecology</span> <span className="text-care-purple">Care</span><br /> <span className="text-[.72em] font-medium tracking-[-.5px]">for Every Stage of Life</span></>}</h1>
          {heroCopy?.tagline && <p className="mt-4 text-[15px] font-bold text-care-purple sm:text-[17px]">{heroCopy.tagline}</p>}
          <p className="mt-4 text-[12px] font-bold text-care-purple">LB Nagar | King Koti</p>
          <p className="mt-5 max-w-[590px] text-[13px] leading-[1.65] text-[#56516b]">{isGynecology ? "Fibroids, PCOS, ovarian cysts, endometriosis and infections can share similar symptoms. At M’Brace, gynaecologists confirm the diagnosis with examination, ultrasound and blood tests, then explain medical and surgical options in plain words." : heroCopy?.description || description}</p>
          <button
            type="button"
            onClick={() => book(name)}
            className="mt-6 inline-flex min-h-12 self-start items-center justify-center rounded-[6px] bg-care-purple px-7 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(45,28,70,.18)] hover:bg-[#603780]"
          >
            {isGynecology ? "Book a Gynaecology Consultation" : heroCopy ? heroCopy.cta : "Book Appointment"}
          </button>
        </div>
      </div>
    </section>
  );
}
