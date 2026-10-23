"use client";

import Link from "next/link";
import MbraceHeader from "@/components/layout/MbraceHeader";
import HomeFooter from "./HomeFooter";
import type { HomeData } from "@/lib/queries";
import { CalendarIcon, CheckIcon, ClockIcon, PhoneIcon, ShieldIcon, SparkleIcon } from "@/components/icons/icons";
import { openBookingPopup } from "@/lib/bookingPopup";

const nextSteps = [
  { icon: PhoneIcon, title: "Confirmation call", description: "Our care coordinator will call you shortly to confirm your request." },
  { icon: CalendarIcon, title: "Appointment details", description: "We’ll help finalise your doctor, location and preferred time." },
  { icon: ShieldIcon, title: "Visit with confidence", description: "Arrive at your confirmed time and our team will guide you from there." },
];

export default function ThankYouPageClient({ data }: { data: HomeData }) {
  const { hospital, careCategories, serviceGroups } = data;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`M'Brace Kamineni Hospitals ${hospital.address}`)}`;

  return (
    <div className="mbrace-home min-h-screen bg-[#fffdf9] font-sans text-care-copy [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] [&_*]:box-border">
      <section className="relative overflow-hidden px-3 pb-10 pt-[calc(var(--care-header-height)+12px)] sm:px-5 sm:pb-14 xl:px-8 xl:pb-18 xl:pt-4.5">
        <div className="absolute left-[-120px] top-28 size-72 rounded-full bg-[#f8dba8]/45 blur-3xl" aria-hidden="true" />
        <div className="absolute right-[-100px] top-16 size-80 rounded-full bg-[#cdb4df]/35 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-384 overflow-hidden rounded-[24px] border border-white/70 bg-[linear-gradient(135deg,#fff8ec_0%,#f8effc_48%,#fff_100%)] shadow-[0_24px_80px_rgba(62,33,90,.10)] sm:rounded-[32px] xl:min-h-190 xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-6 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
          <MbraceHeader onBook={openBookingPopup} careCategories={careCategories} hospital={hospital} basePath="/" />

          <div className="relative z-10 mx-auto grid max-w-310 gap-10 px-5 pb-12 pt-10 sm:px-9 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14 lg:px-14 xl:px-10 xl:pb-20 xl:pt-13">
            <div className="text-center lg:text-left">
              <div className="mx-auto grid size-20 place-items-center rounded-full bg-white shadow-[0_14px_40px_rgba(118,75,158,.18)] ring-8 ring-white/45 lg:mx-0 sm:size-24">
                <span className="grid size-14 place-items-center rounded-full bg-care-purple text-white sm:size-17">
                  <CheckIcon className="size-7 sm:size-9" />
                </span>
              </div>

              <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-care-purple/15 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-care-purple shadow-sm">
                <SparkleIcon className="size-4 text-care-gold" /> Request received
              </p>
              <h1 className="mt-5 text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-care-navy sm:text-[50px] lg:text-[56px]">
                Thank you for choosing <span className="text-care-purple">M’Brace.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-155 text-[15px] leading-7 text-[#625d68] sm:text-[17px] lg:mx-0">
                Your appointment request has been submitted successfully. Our care team will contact you shortly to confirm the details.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-care-purple px-7 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(118,75,158,.22)] transition hover:-translate-y-0.5 hover:bg-[#603780]">Back to Home</Link>
                <Link href="/doctors" className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-care-purple/25 bg-white/75 px-7 text-[14px] font-bold text-care-purple transition hover:-translate-y-0.5 hover:border-care-purple/45 hover:bg-white">Meet Our Doctors</Link>
              </div>
            </div>

            <aside className="rounded-[22px] border border-white bg-white/82 p-5 shadow-[0_24px_65px_rgba(58,35,78,.10)] backdrop-blur-sm sm:p-7" aria-labelledby="next-steps-title">
              <div className="flex items-center justify-between gap-4 border-b border-[#eee7f1] pb-5">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[.15em] text-care-gold">What happens next</p>
                  <h2 id="next-steps-title" className="mt-1.5 text-[22px] font-bold text-care-navy">We’ll take it from here</h2>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-[#f5edf9] text-care-purple"><ClockIcon className="size-5" /></span>
              </div>

              <ol className="mt-1">
                {nextSteps.map((step, index) => (
                  <li className="relative flex gap-4 border-b border-[#f0ebf2] py-4.5 last:border-b-0" key={step.title}>
                    <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-[linear-gradient(145deg,#f7ecda,#f0e6f6)] text-care-purple"><step.icon className="size-5" /></span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#a390ac]">Step {index + 1}</p>
                      <h3 className="mt-0.5 text-[15px] font-bold text-care-navy">{step.title}</h3>
                      <p className="mt-1 text-[12px] leading-[1.6] text-[#716b75]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-3 rounded-[14px] bg-care-purple px-4 py-4 text-white sm:flex sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.14em] text-white/65">Need immediate assistance?</p>
                  <a href={hospital.phoneHref} className="mt-1 inline-flex items-center gap-2 text-[16px] font-extrabold hover:text-care-gold"><PhoneIcon className="size-4" /> {hospital.phone}</a>
                </div>
                <a href={hospital.phoneHref} className="mt-3 inline-flex min-h-10 items-center justify-center rounded-[7px] bg-white px-5 text-[12px] font-extrabold text-care-purple transition hover:bg-care-gold hover:text-care-navy sm:mt-0">Call now</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <HomeFooter hospital={hospital} serviceGroups={serviceGroups} setServiceTab={() => {}} setLocation={() => {}} mapUrl={mapUrl} basePath="/" />
    </div>
  );
}
