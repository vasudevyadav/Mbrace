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
    <section className="mb-hero mt-3 mr-3 mb-3 ml-3 lg:mt-4.5 lg:mb-0 lg:min-h-115 min-h-auto rounded-[20px] lg:mr-8 lg:ml-8 2xl:mr-auto 2xl:ml-auto 2xl:max-w-384 relative overflow-hidden [background:var(--care-gradient)] sm:rounded-[30px] xl:[&_.mb-header]:relative xl:[&_.mb-header]:top-auto xl:[&_.mb-header]:right-auto xl:[&_.mb-header]:bottom-auto xl:[&_.mb-header]:left-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:pt-6 xl:[&_.mb-header]:pr-10 xl:[&_.mb-header]:pb-6 xl:[&_.mb-header]:pl-10 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:[border:0] xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
      {backgroundImage && <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="object-cover transition-transform duration-1000 ease-out motion-reduce:transition-none lg:hover:scale-[1.008]" />}
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] text-center pt-28 pr-5.5 pb-10 pl-5.5 sm:pt-32 xl:pt-18 xl:pb-14 sm:pr-[7%] sm:pl-[7%]">
        <p className="[font-family:var(--font-manrope)] font-extrabold tracking-[-1.5px] text-[44px] sm:text-[64px] xl:text-[80px] text-care-gold leading-[1.05]">{titleTop}</p>
        <h1 className="mt-1 font-normal tracking-[-.5px] text-[24px] sm:text-[32px] xl:text-[38px] text-[#343333]">{titleBottom}</h1>
        <p className="mx-auto mt-5 max-w-162.5 italic leading-[1.6] text-[#565555] text-[14px] sm:text-[16px]">{description}</p>
        {sideImage && (
          <div className="relative mx-auto mt-8 h-45 w-full max-w-150 sm:h-55">
            <Image src={sideImage} alt="" fill className="object-contain object-bottom" />
          </div>
        )}
      </div>
    </section>
  );
}
