"use client";

import type { Doctor } from "@prisma/client";
import Image from "next/image";
import Photo from "../Photo";
import MbraceHeader from "@/components/layout/MbraceHeader";
import { MapPinIcon, PhoneIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "../types";

type Props = {
  doctor: Doctor;
  hospital: HomeData["hospital"];
  careCategories: HomeData["careCategories"];
  book: BookAppointment;
};

export default function DoctorProfileHero({ doctor, hospital, careCategories, book }: Props) {
  const phone = doctor.phone || hospital.phone;
  const phoneHref = doctor.phone ? `tel:${doctor.phone.replace(/[^+0-9]/g, "")}` : hospital.phoneHref;
  const email = doctor.email || hospital.email;
  const address = doctor.fullAddress || (doctor.location === "King Koti" ? hospital.kingKotiAddress : hospital.address);
  const bioParagraphs = (doctor.bio || "").split(/\n{2,}/).filter(Boolean);

  return (
    <section className="mb-hero relative m-3 mb-4 min-h-auto overflow-hidden rounded-[20px] [background:var(--care-gradient)] sm:mb-5 sm:rounded-[30px] lg:mx-8 lg:mb-6 lg:mt-4.5 2xl:mx-auto 2xl:max-w-[1480px] xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-6 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
      <Image src="/images/figma/doctors-hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-top z-[0]" />
      <MbraceHeader onBook={() => book()} careCategories={careCategories} hospital={hospital} basePath="/" />
      <div className="relative z-[1] mx-auto grid max-w-[1280px] gap-8 px-5.5 pb-10 pt-28 md:px-10 xl:grid-cols-[474px_minmax(0,1fr)] xl:items-start xl:gap-[50px] xl:px-5 xl:pb-12 xl:pt-[25px]">
        <article className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white shadow-[0_8px_16px_rgba(118,75,158,0.2)] xl:max-w-none">
          <div className="flex h-80 items-end justify-center bg-care-purple xl:h-[516px]">
            <Photo src={doctor.image} alt={doctor.name} priority className="!rounded-none h-[300px] w-[calc(100%_-_40px)] max-w-[410px] [&_img]:!object-contain [&_img]:object-bottom xl:h-[495px]" />
          </div>
          <div className="flex flex-col items-start gap-4 p-7 xl:px-[34px] xl:pb-8 xl:pt-[29px]">
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

        <div className="grid min-w-0 content-start gap-[34px]">
          <div className="rounded-[20px] bg-white px-7 py-9 shadow-[0_4px_10px_rgba(0,0,0,0.05)] sm:px-12 sm:py-10 xl:px-[52px] xl:py-[46px]">
            <p className="text-[13px] font-bold text-care-gold">About Doctor</p>
            <h2 className="mt-2 text-[28px] font-semibold leading-tight text-[#1f2b70] sm:text-[36px]">About Specialist</h2>
            <p className="mt-3 text-[18px] font-semibold text-[#373535]">{doctor.designation || doctor.role}</p>
            {bioParagraphs.length > 0 ? bioParagraphs.map((paragraph, i) => (
              <p key={i} className="mt-3 text-[14px] leading-[1.7] text-[#5d6078]">{paragraph}</p>
            )) : (
              <p className="mt-3 text-[14px] leading-[1.7] text-[#5d6078]">{doctor.role}</p>
            )}
          </div>

          <div className="min-h-[440px] overflow-hidden rounded-[20px] bg-gradient-to-r from-care-gold to-care-purple text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            {doctor.timing && (
              <div className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3.5 border-b border-white/25 px-7 py-[22px] sm:px-8">
                <Image src="/Vector.png" alt="" width={31} height={32} className="brightness-0 invert" />
                <p className="flex flex-wrap gap-x-1 text-[16px]"><strong className="font-bold">Timing:</strong><span>{doctor.timing}</span></p>
              </div>
            )}
            <div className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3.5 border-b border-white/25 px-7 py-[22px] sm:px-8">
              <PhoneIcon className="h-6 w-6 shrink-0" />
              <p className="flex flex-wrap gap-x-1 text-[16px]"><strong className="font-bold">Phone:</strong><a href={phoneHref}>{phone}</a></p>
            </div>
            <div className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3.5 border-b border-white/25 px-7 py-[22px] sm:px-8">
              <Image src="/dashicons_email.png" alt="" width={27} height={30} />
              <p className="flex min-w-0 flex-wrap gap-x-1 text-[16px]"><strong className="font-bold">Email:</strong><a className="break-all" href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="grid grid-cols-[32px_minmax(0,1fr)] items-start gap-3.5 px-7 py-[22px] sm:px-8">
              <Image src="/clarity_map-marker-solid-badged.png" alt="" width={27} height={31} />
              <p className="flex min-w-0 flex-wrap gap-x-1 text-[16px] leading-[1.55]"><strong className="font-bold">Location:</strong><span>{address}</span></p>
            </div>
            <div className="px-7 pt-2 sm:px-8">
              <a href={phoneHref} className="inline-flex items-center justify-center rounded-[6px] border border-care-gold bg-care-purple px-7 py-3.5 text-[14px] font-semibold text-white">Contact Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
