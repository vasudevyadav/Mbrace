"use client";

import Image from "next/image";
import { useState } from "react";
import { EmergencyIcon, MapPinIcon } from "@/components/icons/icons";
import type { ApprovedLocationContent } from "./locationContent";

type LocationDetails = {
  address: string;
  email: string;
  mapUrl: string;
  clinicImage: string;
  servicesImage: string;
  heroImage: string;
};

export default function LocationSheetSections({ content, location, onBook }: {
  content: ApprovedLocationContent;
  location: LocationDetails;
  onBook: () => void;
}) {
  const [faqGroup, setFaqGroup] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const activeFaqs = content.faqs[faqGroup]?.items ?? [];

  function selectFaqGroup(index: number) {
    setFaqGroup(index);
    setOpenFaq(0);
  }

  return (
    <>
      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-care-gold">{content.about.eyebrow}</p>
            <h2 className="mt-4 text-[31px] font-semibold leading-[1.2] text-care-navy md:text-[36px] lg:text-[40px]">{content.about.heading}</h2>
            {content.about.paragraphs.map(paragraph => <p key={paragraph} className="mt-5 text-[15px] leading-[1.75] text-[#656078] lg:text-[16px]">{paragraph}</p>)}
            <p className="mt-6 font-bold text-care-purple">{content.about.question}</p>
            <button type="button" onClick={onBook} className="mt-7 min-h-[50px] rounded-[6px] bg-care-purple px-7 py-3 text-[14px] font-bold text-white hover:bg-[#603780]">Book Appointment</button>
          </div>
          <div className="relative h-[350px] overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(66,37,91,.12)] lg:h-[470px]">
            <Image src={location.clinicImage || location.heroImage} alt={`M’Brace ${content.name}`} fill sizes="(max-width:1023px) 100vw, 500px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-3 rounded-[24px] bg-care-purple px-5 py-12 text-white md:mx-5 md:px-8 lg:mx-8 lg:py-16">
        <div className="mx-auto grid max-w-[1180px] gap-9 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-care-gold">{content.contact.eyebrow}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.2] md:text-[36px] lg:text-[40px]">{content.contact.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-white/85">{content.contact.body}</p>
          </div>
          <div className="rounded-[18px] bg-white p-6 text-[#45405a] shadow-[0_14px_35px_rgba(31,16,56,.2)] md:p-8">
            <p className="flex items-start gap-3 text-[15px] leading-[1.65]"><MapPinIcon className="mt-1 size-5 shrink-0 text-care-purple" /><span>{location.address}</span></p>
            <p className="mt-4 text-[15px]"><strong className="text-care-navy">Phone:</strong> <a className="text-care-purple" href={content.phoneHref}>{content.phone}</a></p>
            <p className="mt-2 break-all text-[15px]"><strong className="text-care-navy">Email:</strong> <a className="text-care-purple" href={`mailto:${location.email}`}>{location.email}</a></p>
            <a href={location.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[46px] items-center rounded-[6px] bg-care-gold px-6 py-3 text-[14px] font-bold text-[#2d2037]">View on Map</a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-[13px] font-bold text-care-gold">{content.reach.eyebrow}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.2] text-care-navy md:text-[36px] lg:text-[40px]">{content.reach.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#656078]">{content.reach.body}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.reach.items.map((item, index) => <article key={item.title} className={`rounded-[18px] border border-[#eadff0] p-6 shadow-[0_10px_26px_rgba(66,37,91,.07)] ${index % 3 === 1 ? "bg-care-purple text-white" : "bg-[linear-gradient(135deg,#fff8ed,#f7effd)]"}`}>
              <span className={`grid size-10 place-items-center rounded-full text-[14px] font-extrabold ${index % 3 === 1 ? "bg-care-gold text-[#2d2037]" : "bg-care-purple text-white"}`}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={`mt-4 text-[17px] font-bold ${index % 3 === 1 ? "text-white" : "text-care-navy"}`}>{item.title}</h3>
              <p className={`mt-3 whitespace-pre-line text-[14px] leading-[1.65] ${index % 3 === 1 ? "text-white/85" : "text-[#656078]"}`}>{item.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="rounded-[26px] bg-[linear-gradient(110deg,#fff3df_0%,#f8edf1_52%,#f2e8fc_100%)] px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-6 text-center lg:grid-cols-[1fr_1fr] lg:items-center lg:text-left">
            <div><p className="text-[13px] font-bold text-care-gold">{content.whyChoose.eyebrow}</p><h2 className="mt-4 text-[30px] font-semibold leading-[1.2] text-care-navy md:text-[36px] lg:text-[40px]">{content.whyChoose.heading}</h2></div>
            <p className="text-[15px] leading-[1.7] text-[#656078]">{content.whyChoose.body}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-[18px] bg-white p-5 shadow-[0_10px_30px_rgba(66,37,91,.08)] lg:grid-cols-4 lg:p-7">
            {content.whyChoose.stats.map(stat => <div key={stat.label} className="px-2 py-3 text-center"><p className="text-[28px] font-extrabold text-care-purple md:text-[34px]">{stat.value}</p><p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#656078] md:text-[13px]">{stat.label}</p></div>)}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.whyChoose.items.map((item, index) => <article key={item.title} className={`rounded-[18px] p-6 ${index === 1 ? "bg-care-purple text-white" : "bg-white"}`}><h3 className={`text-[17px] font-bold ${index === 1 ? "text-white" : "text-care-navy"}`}>{item.title}</h3><p className={`mt-3 text-[14px] leading-[1.65] ${index === 1 ? "text-white/85" : "text-[#656078]"}`}>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_500px] lg:items-center lg:gap-16">
          <div>
            <p className="text-[13px] font-bold text-care-gold">{content.services.eyebrow}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.2] text-care-navy md:text-[36px] lg:text-[40px]">{content.services.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#656078]">{content.services.body}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.services.items.map(item => <article key={item.title} className="rounded-[16px] border border-[#eadff0] bg-white p-5 shadow-[0_9px_24px_rgba(66,37,91,.06)]"><h3 className="text-[16px] font-bold text-care-purple">{item.title}</h3><p className="mt-2 text-[13px] leading-[1.6] text-[#656078]">{item.description}</p></article>)}
            </div>
          </div>
          <div className="relative h-[380px] overflow-hidden rounded-[24px] lg:h-[560px]">
            <Image src={location.servicesImage || location.heroImage} alt={`Services at M’Brace ${content.name}`} fill sizes="(max-width:1023px) 100vw, 500px" className="object-cover" />
            <div className="absolute bottom-0 left-6 rounded-t-[14px] bg-care-gold px-7 py-5 text-center text-[#2d2037]"><strong className="block text-[26px]">{content.services.statValue}</strong><span className="text-[12px] font-semibold">{content.services.statLabel}</span></div>
          </div>
        </div>
      </section>

      <section className="rounded-[26px] bg-care-purple px-5 py-14 text-white lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[850px] text-center"><p className="text-[13px] font-bold text-care-gold">{content.visit.eyebrow}</p><h2 className="mt-4 text-[30px] font-semibold leading-[1.2] md:text-[36px] lg:text-[40px]">{content.visit.heading}</h2><p className="mt-5 text-[15px] leading-[1.7] text-white/85">{content.visit.body}</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.visit.items.map((item, index) => <article key={item.title} className="grid grid-cols-[42px_1fr] gap-4 rounded-[16px] border border-white/15 bg-white/10 p-5"><span className="grid size-[42px] place-items-center rounded-full bg-care-gold font-extrabold text-[#2d2037]">{index + 1}</span><div><h3 className="text-[16px] font-bold">{item.title}</h3><p className="mt-2 text-[14px] leading-[1.6] text-white/80">{item.description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[24px] bg-[linear-gradient(115deg,#fff3df,#f3e9fc)] p-6 shadow-[0_16px_38px_rgba(66,37,91,.1)] md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="text-center lg:text-left"><span className="mx-auto grid size-14 place-items-center rounded-full bg-care-purple text-care-gold lg:mx-0"><EmergencyIcon className="size-7" /></span><p className="mt-5 text-[13px] font-bold text-care-gold">{content.emergency.eyebrow}</p><h2 className="mt-4 text-[30px] font-semibold leading-[1.2] text-care-navy md:text-[36px]">{content.emergency.heading}</h2><p className="mt-5 text-[15px] leading-[1.7] text-[#656078]">{content.emergency.body}</p></div>
            <div className="grid gap-4"><article className="rounded-[16px] bg-care-purple p-6 text-white"><h3 className="text-[17px] font-bold text-care-gold">{content.emergency.urgentTitle}</h3><p className="mt-3 text-[14px] leading-[1.65] text-white/85">{content.emergency.urgentBody}</p></article><article className="rounded-[16px] bg-white p-6"><h3 className="text-[17px] font-bold text-care-purple">{content.emergency.plannedTitle}</h3><p className="mt-3 text-[14px] leading-[1.65] text-[#656078]">{content.emergency.plannedBody}</p></article></div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[330px_1fr] lg:gap-14">
          <div className="text-center lg:text-left"><p className="text-[13px] font-bold text-care-gold">Frequently Asked Questions</p><h2 className="mt-4 text-[31px] font-semibold leading-[1.2] text-care-navy md:text-[36px]">Your Queries, <span className="text-care-gold">Answered Simply!</span></h2><div className="mt-8 grid gap-2" role="tablist" aria-label="Location FAQ categories">{content.faqs.map((group, index) => <button key={group.label} type="button" role="tab" aria-selected={faqGroup === index} onClick={() => selectFaqGroup(index)} className={`min-h-[48px] rounded-[8px] px-5 text-left text-[13px] font-extrabold transition-colors duration-200 ${faqGroup === index ? "bg-care-gold text-white" : "bg-care-soft text-care-navy hover:bg-[#efe7f8]"}`}>{group.label}</button>)}</div></div>
          <div className="space-y-3" role="tabpanel" aria-label={`${content.faqs[faqGroup]?.label} questions`}>{activeFaqs.map((faq, index) => <article key={faq.question} className={`overflow-hidden rounded-[8px] transition-colors duration-200 ${openFaq === index ? "bg-[linear-gradient(105deg,var(--color-care-gold),var(--color-care-purple))] text-white" : "bg-care-soft text-care-navy hover:bg-[#efe7f8]"}`}><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex min-h-[58px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-bold"><span>{faq.question}</span><span aria-hidden="true">{openFaq === index ? "−" : "+"}</span></button></h3>{openFaq === index && <p className="px-5 py-5 text-[13px] leading-[1.7] text-white">{faq.answer}</p>}</article>)}</div>
        </div>
      </section>
    </>
  );
}
