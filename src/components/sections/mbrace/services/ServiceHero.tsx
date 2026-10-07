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
    <section className="mb-hero max-[1001px]:mt-3 max-[1001px]:mr-3 max-[1001px]:mb-3 max-[1001px]:ml-3 min-[1001px]:mt-4.5 min-[1001px]:mb-0 max-[601px]:min-h-auto max-[601px]:rounded-[20px] min-[1001px]:max-[1600px]:mr-8 min-[1001px]:max-[1600px]:ml-8 min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-384 relative overflow-hidden [background:var(--care-gradient)] min-[601px]:rounded-[30px] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:top-auto min-[1201px]:[&_.mb-header]:right-auto min-[1201px]:[&_.mb-header]:bottom-auto min-[1201px]:[&_.mb-header]:left-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:pt-6 min-[1201px]:[&_.mb-header]:pr-10 min-[1201px]:[&_.mb-header]:pb-6 min-[1201px]:[&_.mb-header]:pl-10 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:[border:0] min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none">
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] grid gap-10 max-[1001px]:pt-28 max-[1001px]:pb-10 max-[1001px]:px-5.5 min-[1001px]:pt-32 min-[1001px]:pb-16 min-[1001px]:px-[7%] min-[1001px]:grid-cols-[1.1fr_1fr] min-[1001px]:items-center">
        <div>
          <span className="inline-block rounded-[4px] bg-care-purple px-3.5 py-1 text-[13px] font-bold text-white">{categoryLabel}</span>
          <h1 className="mt-5 font-normal tracking-[-1px] text-[#343333] max-[601px]:text-[29px] min-[601px]:max-[1201px]:text-[39px] min-[1201px]:text-[46px] leading-[1.3]">{name}</h1>
          <p className="mt-5 max-w-150 italic leading-[1.6] text-[#565555] max-[601px]:text-[14px] min-[601px]:text-[16px]">{description}</p>
          <button type="button" onClick={() => book(name)} className="mb-button mt-7 inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] border-0 text-[13px] font-semibold no-underline hover:bg-[#603780]">Book a Consultation</button>
        </div>
        {heroImage && (
          <div className="relative h-67.5 min-[1001px]:h-95 overflow-hidden rounded-[20px]">
            <Image src={heroImage} alt={name} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
