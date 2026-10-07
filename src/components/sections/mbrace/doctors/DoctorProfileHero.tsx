"use client";

import type { Doctor } from "@prisma/client";
import Photo from "../Photo";
import MbraceHeader from "@/components/layout/MbraceHeader";
import { MapPinIcon, PhoneIcon, CalendarIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";

type Props = {
  doctor: Doctor;
  hospital: HomeData["hospital"];
  careCategories: HomeData["careCategories"];
  book: BookAppointment;
  goToServices: (category: string) => void;
};

export default function DoctorProfileHero({ doctor, hospital, careCategories, book, goToServices }: Props) {
  const phone = doctor.phone || hospital.phone;
  const phoneHref = doctor.phone ? `tel:${doctor.phone.replace(/[^+0-9]/g, "")}` : hospital.phoneHref;
  const email = doctor.email || hospital.email;
  const address = doctor.fullAddress || (doctor.location === "King Koti" ? hospital.kingKotiAddress : hospital.address);
  const bioParagraphs = (doctor.bio || "").split(/\n{2,}/).filter(Boolean);

  return (
    <section className="mb-hero relative overflow-hidden [background:var(--care-gradient)] max-[601px]:min-h-auto max-[601px]:rounded-[20px] max-[1001px]:m-3 min-[601px]:rounded-[30px] min-[1001px]:mx-8 min-[1001px]:mt-4.5 min-[1001px]:mb-0 min-[1600px]:mx-auto min-[1600px]:max-w-[1376px] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:inset-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:border-0 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:px-10 min-[1201px]:[&_.mb-header]:py-6 min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none">
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] grid gap-8 px-5.5 pb-10 pt-28 min-[701px]:px-10 max-[1200px]:mx-auto max-[1200px]:max-w-[820px] min-[1201px]:grid-cols-[minmax(340px,440px)_minmax(0,1fr)] min-[1201px]:items-start min-[1201px]:gap-[clamp(32px,3.33vw,48px)] min-[1201px]:px-[clamp(32px,5vw,72px)] min-[1201px]:pb-16 min-[1201px]:pt-7">
        <article className="w-full overflow-hidden rounded-[24px] bg-white shadow-[0_8px_16px_rgba(118,75,158,0.2)] max-[1200px]:mx-auto max-[1200px]:max-w-[560px] min-[1201px]:min-h-[886px]">
          <div className="flex h-80 items-end justify-center bg-care-purple min-[1201px]:h-[480px]">
            <Photo src={doctor.image} alt={doctor.name} priority className="!rounded-none h-[300px] w-[calc(100%_-_40px)] max-w-[380px] [&_img]:!object-contain [&_img]:object-bottom min-[1201px]:h-[460px]" />
          </div>
          <div className="flex flex-col items-start gap-4 p-7 min-[1201px]:min-h-[406px] min-[1201px]:px-8 min-[1201px]:pb-8 min-[1201px]:pt-7">
            <span className="inline-flex w-fit rounded-[5px] bg-care-purple px-3.5 py-1 text-[13px] font-bold text-white">Our Experts</span>
            <h1 className="!m-0 !text-[28px] font-extrabold leading-[1.2] text-care-purple [font-family:var(--font-manrope)]">{doctor.name}</h1>
            <p className="!m-0 text-[13px] font-medium leading-[1.5] text-[#363435]/80 [font-family:var(--font-manrope)]">{doctor.designation || doctor.role}</p>
            <p className="!m-0 text-[13px] font-medium text-[#363435]/65 [font-family:var(--font-manrope)]">Qualifications: {doctor.qualifications}</p>
            <div className="grid w-full gap-2.5 border-t border-[#e9e2ef] pt-4 text-[13px] font-semibold text-[#363435] [font-family:var(--font-manrope)]">
              <div className="flex flex-wrap items-center gap-6">
                <span>{doctor.yearsExperience}</span>
                <span>{doctor.languages}</span>
              </div>
              <span className="flex items-center gap-2"><MapPinIcon className="h-4.5 w-4.5 text-care-purple" />{doctor.location}</span>
            </div>
            <div className="flex w-full flex-wrap gap-3 border-t border-[#e9e2ef] pt-4">
              <button type="button" onClick={() => book("", doctor.name, "Online consultation")} className="shrink-0 rounded-[4px] bg-care-gold px-[22px] py-3 text-[13px] font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#e99c26]">Book Consultation</button>
              <button type="button" onClick={() => book("", doctor.name, "Hospital visit")} className="shrink-0 rounded-[4px] bg-care-purple px-[22px] py-3 text-[13px] font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#603780]">Visit Hospital</button>
            </div>
          </div>
        </article>

        <div className="grid min-w-0 content-start gap-8">
          <div className="rounded-[20px] bg-white px-7 py-9 shadow-[0_4px_10px_rgba(0,0,0,0.05)] sm:px-12 sm:py-10">
            <p className="text-[13px] font-bold text-care-gold">About Doctor</p>
            <h2 className="mt-2 text-[28px] font-semibold leading-tight text-[#1f2b70] sm:text-[36px]">About Specialist</h2>
            <p className="mt-3 text-[18px] font-semibold text-[#373535]">{doctor.designation || doctor.role}</p>
            {bioParagraphs.length > 0 ? bioParagraphs.map((paragraph, i) => (
              <p key={i} className="mt-3 text-[14px] leading-[1.7] text-[#5d6078]">{paragraph}</p>
            )) : (
              <p className="mt-3 text-[14px] leading-[1.7] text-[#5d6078]">{doctor.role}</p>
            )}
          </div>

          <div className="overflow-hidden rounded-[20px] bg-gradient-to-r from-care-gold to-care-purple text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            {doctor.timing && (
              <div className="flex items-center gap-3.5 border-b border-white/25 px-7 py-[22px] sm:px-8">
                <CalendarIcon className="h-7 w-7 shrink-0" />
                <p className="text-[16px]"><strong className="font-bold">Timing: </strong>{doctor.timing}</p>
              </div>
            )}
            <div className="flex items-center gap-4 border-b border-white/25 px-7 py-[22px] sm:px-8">
              <PhoneIcon className="h-6 w-6 shrink-0" />
              <p className="text-[16px]"><strong className="font-bold">Phone: </strong><a href={phoneHref}>{phone}</a></p>
            </div>
            <div className="flex items-center gap-3 border-b border-white/25 px-7 py-[22px] sm:px-8">
              <span className="shrink-0 text-[20px]">✉</span>
              <p className="text-[16px]"><strong className="font-bold">Email: </strong><a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="flex items-center gap-3 px-7 py-[22px] sm:px-8">
              <MapPinIcon className="h-6 w-6 shrink-0" />
              <p className="text-[16px]"><strong className="font-bold">Location: </strong>{address}</p>
            </div>
            <div className="px-7 pb-8 pt-2 sm:px-8">
              <a href={phoneHref} className="inline-flex items-center justify-center rounded-[6px] border border-care-gold bg-care-purple px-7 py-3.5 text-[14px] font-semibold text-white">Contact Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
