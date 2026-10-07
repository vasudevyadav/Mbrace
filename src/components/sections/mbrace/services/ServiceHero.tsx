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
  goToServices: (category: string) => void;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
};

export default function ServiceHero({ categoryLabel, name, description, heroImage, book, goToServices, careCategories, hospital }: Props) {

  return (
    <section className="mb-hero mt-3 mr-3 mb-3 ml-3 lg:mt-4.5 lg:mb-0 min-h-auto rounded-[20px] lg:mr-8 lg:ml-8 2xl:mr-auto 2xl:ml-auto 2xl:max-w-384 relative overflow-hidden [background:var(--care-gradient)] sm:rounded-[30px] xl:[&_.mb-header]:relative xl:[&_.mb-header]:top-auto xl:[&_.mb-header]:right-auto xl:[&_.mb-header]:bottom-auto xl:[&_.mb-header]:left-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:pt-6 xl:[&_.mb-header]:pr-10 xl:[&_.mb-header]:pb-6 xl:[&_.mb-header]:pl-10 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:[border:0] xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] grid gap-10 pt-28 pb-10 px-5.5 lg:pt-32 lg:pb-16 lg:px-[7%] lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="inline-block rounded-[4px] bg-care-purple px-3.5 py-1 text-[13px] font-bold text-white">{categoryLabel}</span>
          <h1 className="mt-5 font-normal tracking-[-1px] text-[#343333] text-[29px] sm:text-[39px] xl:text-[46px] leading-[1.3]">{name}</h1>
          <p className="mt-5 max-w-150 italic leading-[1.6] text-[#565555] text-[14px] sm:text-[16px]">{description}</p>
          <button type="button" onClick={() => book(name)} className="mb-button mt-7 inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] border-0 text-[13px] font-semibold no-underline hover:bg-[#603780]">Book a Consultation</button>
        </div>
        {heroImage && (
          <div className="relative h-67.5 lg:h-95 overflow-hidden rounded-[20px]">
            <Image src={heroImage} alt={name} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
