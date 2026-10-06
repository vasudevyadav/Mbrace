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
    <section className="mb-hero max-[1001px]:mt-3 max-[1001px]:mr-3 max-[1001px]:mb-3 max-[1001px]:ml-3 min-[1001px]:mt-4.5 min-[1001px]:mb-0 max-[601px]:min-h-auto max-[601px]:rounded-[20px] min-[1001px]:max-[1600px]:mr-8 min-[1001px]:max-[1600px]:ml-8 min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-384 relative overflow-hidden [background:var(--care-gradient)] min-[601px]:rounded-[30px] min-[1201px]:[&_.mb-header]:relative min-[1201px]:[&_.mb-header]:top-auto min-[1201px]:[&_.mb-header]:right-auto min-[1201px]:[&_.mb-header]:bottom-auto min-[1201px]:[&_.mb-header]:left-auto min-[1201px]:[&_.mb-header]:h-30 min-[1201px]:[&_.mb-header]:pt-6 min-[1201px]:[&_.mb-header]:pr-10 min-[1201px]:[&_.mb-header]:pb-6 min-[1201px]:[&_.mb-header]:pl-10 min-[1201px]:[&_.mb-header]:bg-transparent min-[1201px]:[&_.mb-header]:[border:0] min-[1201px]:[&_.mb-header]:shadow-none min-[1201px]:[&_.mb-header]:backdrop-blur-none">
      <MbraceHeader onBook={() => book()} onService={goToServices} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] grid gap-8 max-[1001px]:pt-28 max-[1001px]:pb-10 max-[1001px]:px-5.5 min-[1001px]:pt-32 min-[1001px]:pb-14 min-[1001px]:px-[7%] min-[1001px]:grid-cols-[400px_1fr] min-[1001px]:items-start">
        <article className="rounded-[24px] bg-white shadow-[0_8px_16px_rgba(118,75,158,0.2)] overflow-hidden">
          <div className="flex h-70 items-end justify-center bg-care-purple">
            <Photo src={doctor.image} alt={doctor.name} className="!rounded-none h-64 w-82.5" />
          </div>
          <div className="p-7">
            <span className="inline-block rounded-[5px] bg-care-purple px-3.5 py-1 text-[13px] font-bold text-white">Our Experts</span>
            <h1 className="mt-4 text-[26px] font-extrabold leading-tight text-care-purple">{doctor.name}</h1>
            <p className="mt-2 text-[13px] leading-snug text-[#363435]/80">{doctor.designation || doctor.role}</p>
            <p className="mt-2 text-[13px] text-[#363435]/65">Qualifications: {doctor.qualifications}</p>
            <div className="mt-4 grid gap-2.5 border-t border-[#e9e2ef] pt-4 text-[13px] font-semibold text-[#363435]">
              <div className="flex flex-wrap items-center gap-6">
                <span>{doctor.yearsExperience}</span>
                <span>{doctor.languages}</span>
              </div>
              <span className="flex items-center gap-2"><MapPinIcon className="h-4.5 w-4.5 text-care-purple" />{doctor.location}</span>
            </div>
            <div className="mt-5 flex gap-3 border-t border-[#e9e2ef] pt-5">
              <button type="button" onClick={() => book("", doctor.name, "Online consultation")} className="flex-1 rounded-[4px] bg-care-gold px-4 py-3 text-[13px] font-extrabold text-white">Book Consultation</button>
              <button type="button" onClick={() => book("", doctor.name, "Hospital visit")} className="flex-1 rounded-[4px] bg-care-purple px-4 py-3 text-[13px] font-extrabold text-white">Visit Hospital</button>
            </div>
          </div>
        </article>

        <div className="grid gap-8">
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

          <div className="overflow-hidden rounded-[20px] bg-gradient-to-r from-care-gold to-care-purple shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-white">
            {doctor.timing && (
              <div className="flex items-center gap-3.5 border-b border-white/25 px-7 py-5 sm:px-8">
                <CalendarIcon className="h-7 w-7 shrink-0" />
                <p className="text-[15px]"><strong className="font-bold">Timing: </strong>{doctor.timing}</p>
              </div>
            )}
            <div className="flex items-center gap-3.5 border-b border-white/25 px-7 py-5 sm:px-8">
              <PhoneIcon className="h-6 w-6 shrink-0" />
              <p className="text-[15px]"><strong className="font-bold">Phone: </strong><a href={phoneHref}>{phone}</a></p>
            </div>
            <div className="flex items-center gap-3.5 border-b border-white/25 px-7 py-5 sm:px-8">
              <span className="shrink-0 text-[20px]">✉</span>
              <p className="text-[15px]"><strong className="font-bold">Email: </strong><a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="flex items-center gap-3.5 px-7 py-5 sm:px-8">
              <MapPinIcon className="h-6 w-6 shrink-0" />
              <p className="text-[15px]"><strong className="font-bold">Location: </strong>{address}</p>
            </div>
            <div className="px-7 pb-7 sm:px-8">
              <a href={phoneHref} className="inline-flex items-center justify-center rounded-[6px] border border-care-gold bg-care-purple px-7 py-3.5 text-[14px] font-semibold text-white">Contact Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
