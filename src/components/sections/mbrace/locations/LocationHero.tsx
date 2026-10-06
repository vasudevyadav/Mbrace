"use client";

import Image from "next/image";
import MbraceHeader from "@/components/layout/MbraceHeader";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";

type Props = {
  name: string;
  phone: string;
  phoneHref: string;
  heroImage: string;
  book: BookAppointment;
  goToServices: (category: string) => void;
  careCategories: HomeData["careCategories"];
  hospital: HomeData["hospital"];
};

export default function LocationHero({ name, phone, phoneHref, heroImage, book, goToServices, careCategories, hospital }: Props) {

  return (
    <section className="mb-hero max-[1001px]:mt-3 max-[1001px]:mr-3 max-[1001px]:mb-3 max-[1001px]:ml-3 min-[1001px]:mt-4.5 min-[1001px]:mb-0 max-[601px]:min-h-auto max-[601px]:rounded-[20px] min-[1001px]:min-h-[720px] min-[1001px]:max-[1600px]:mr-8 min-[1001px]:max-[1600px]:ml-8 min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-[1376px] relative overflow-hidden [background:var(--care-gradient)] min-[601px]:rounded-[30px] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:top-auto min-[1201px]:[&_.mb-header]:right-auto min-[1201px]:[&_.mb-header]:bottom-auto min-[1201px]:[&_.mb-header]:left-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:pt-6 min-[1201px]:[&_.mb-header]:pr-10 min-[1201px]:[&_.mb-header]:pb-6 min-[1201px]:[&_.mb-header]:pl-10 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:[border:0] min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none">
      {heroImage && <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />}
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] max-[601px]:pt-28 max-[601px]:pr-5.5 max-[601px]:pb-10 max-[601px]:pl-5.5 min-[601px]:max-[1201px]:pt-32 min-[1201px]:pt-[75px] min-[1201px]:pb-12 min-[601px]:pr-[7%] min-[601px]:pl-[7%]">
        <span className="inline-block rounded-[5px] bg-care-purple px-4 py-2 text-[16px] font-bold text-white">Hospital Location</span>
        <p className="mt-6 font-normal text-[#343333] max-[601px]:text-[24px] min-[601px]:text-[32px]">Our Nearest Hospital</p>
        <h1 className="mt-1 font-extrabold tracking-[-1.5px] leading-[1.05] max-[601px]:text-[44px] min-[601px]:max-[1201px]:text-[64px] min-[1201px]:!text-[80px]">
          <span className="text-care-gold">{name.split(" ")[0]}</span>{" "}
          <span className="text-care-purple">{name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <div className="mt-8 max-w-[1120px]">
          <p className="mb-3 text-[20px] font-bold text-[#343333]">Request Appointment</p>
          <div className="grid gap-4 min-[701px]:grid-cols-[1fr_1fr_1fr_auto] [&_input]:h-[47px] [&_input]:rounded-[6px] [&_input]:border [&_input]:border-[#d9dee8] [&_input]:bg-white [&_input]:px-4 [&_input]:text-[13px] [&_select]:h-[47px] [&_select]:rounded-[6px] [&_select]:border [&_select]:border-[#d9dee8] [&_select]:bg-white [&_select]:px-4 [&_select]:text-[13px]">
            <select aria-label="Select speciality" defaultValue=""><option value="" disabled>Select Speciality</option>{careCategories.map(category => <option key={category}>{category}</option>)}</select>
            <select aria-label="Select location" defaultValue={name}><option>{name}</option></select>
            <input type="date" aria-label="Appointment date" />
            <button type="button" onClick={() => book()} className="min-h-[47px] rounded-[6px] border border-care-gold bg-care-purple px-7 text-[14px] font-semibold text-white hover:bg-[#603780]">Get Appointment</button>
          </div>
          <a href={phoneHref} className="mt-3 inline-block text-[13px] font-semibold text-[#343333]">Call {phone}</a>
        </div>
      </div>
    </section>
  );
}
