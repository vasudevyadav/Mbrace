"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  book: BookAppointment;
  goToServices: (category: string) => void;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
  titleTop: string;
  titleBottom: string;
  description: string;
  backgroundImage?: string;
  sideImage?: string;
};

export default function SimplePageHero({ book, goToServices, careCategories, hospital, titleTop, titleBottom, description, backgroundImage, sideImage }: Props) {

  return (
    <section className="mb-hero max-[1001px]:mt-3 max-[1001px]:mr-3 max-[1001px]:mb-3 max-[1001px]:ml-3 min-[1001px]:mt-4.5 min-[1001px]:mb-0 min-[1001px]:min-h-115 max-[601px]:min-h-auto max-[601px]:rounded-[20px] min-[1001px]:max-[1600px]:mr-8 min-[1001px]:max-[1600px]:ml-8 min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-384 relative overflow-hidden [background:var(--care-gradient)] min-[601px]:rounded-[30px] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:top-auto min-[1201px]:[&_.mb-header]:right-auto min-[1201px]:[&_.mb-header]:bottom-auto min-[1201px]:[&_.mb-header]:left-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:pt-6 min-[1201px]:[&_.mb-header]:pr-10 min-[1201px]:[&_.mb-header]:pb-6 min-[1201px]:[&_.mb-header]:pl-10 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:[border:0] min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none">
      {backgroundImage && <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />}
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] text-center max-[601px]:pt-28 max-[601px]:pr-5.5 max-[601px]:pb-10 max-[601px]:pl-5.5 min-[601px]:max-[1201px]:pt-32 min-[1201px]:pt-18 min-[1201px]:pb-14 min-[601px]:pr-[7%] min-[601px]:pl-[7%]">
        <p className="font-extrabold tracking-[-1.5px] max-[601px]:text-[44px] min-[601px]:max-[1201px]:text-[64px] min-[1201px]:text-[80px] text-care-gold leading-[1.05]">{titleTop}</p>
        <h1 className="mt-1 font-normal tracking-[-.5px] max-[601px]:text-[24px] min-[601px]:max-[1201px]:text-[32px] min-[1201px]:text-[38px] text-[#343333]">{titleBottom}</h1>
        <p className="mx-auto mt-5 max-w-162.5 italic leading-[1.6] text-[#565555] max-[601px]:text-[14px] min-[601px]:text-[16px]">{description}</p>
        {sideImage && (
          <div className="relative mx-auto mt-8 h-45 w-full max-w-150 min-[601px]:h-55">
            <Image src={sideImage} alt="" fill className="object-contain object-bottom" />
          </div>
        )}
      </div>
    </section>
  );
}
