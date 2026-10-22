"use client";

import Image from "next/image";
import type { Location, LocationHighlight } from "@prisma/client";
import { EmergencyIcon } from "@/components/icons/icons";
import type { ApprovedLocationContent } from "./locationContent";
import type { HomeData } from "@/lib/queries";
import Photo from "../Photo";
import WhyPatientsChoose from "./WhyPatientsChoose";
import ServicesAtLocation from "./ServicesAtLocation";
import WhatToExpect from "./WhatToExpect";
import OurCarePromise from "./OurCarePromise";
import TestimonialsSection from "../TestimonialsSection";
import FaqSection from "../FaqSection";

type LocationWithHighlights = Location & { highlights: LocationHighlight[] };

export default function LocationSheetSections({ content, location, hospital, homeTestimonials, onBook }: {
  content: ApprovedLocationContent;
  location: LocationWithHighlights;
  hospital: HomeData["hospital"];
  homeTestimonials: HomeData["homeTestimonials"];
  onBook: () => void;
}) {
  const bysection = (section: string) => location.highlights.filter(h => h.section === section);

  return (
    <>
      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-care-gold">{content.about.eyebrow}</p>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.25] text-care-navy md:text-[36px] lg:text-[40px]">{content.about.heading}</h2>
            {content.about.paragraphs.map(paragraph => <p key={paragraph} className="mt-5 text-[15px] leading-[1.75] text-[#656078] lg:text-[16px]">{paragraph}</p>)}
            <p className="mt-6 font-bold text-care-purple">{content.about.question}</p>
            <button type="button" onClick={onBook} className="mt-7 min-h-[50px] rounded-[6px] bg-care-purple px-7 py-3 text-[14px] font-bold text-white hover:bg-[#603780]">Book Appointment</button>
          </div>
          <div className="relative h-[350px] overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(66,37,91,.12)] lg:h-[470px]">
            <Image src={location.clinicImage || location.heroImage} alt={`M’Brace ${content.name}`} fill sizes="(max-width:1023px) 100vw, 500px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-3 rounded-[24px] bg-care-purple px-5 py-12 text-white md:mx-5 md:px-8 lg:mx-8 lg:py-16 [&_dt]:mt-4 [&_dt]:text-[13px] [&_dt]:font-bold [&_dt]:text-care-gold [&_dd]:mt-1 [&_dd]:text-[15px] [&_dd]:leading-[1.5] [&_dd]:[overflow-wrap:anywhere]">
        <div className="mx-auto grid max-w-[1180px] gap-9 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-care-gold">{content.contact.eyebrow}</p>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.25] md:text-[36px] lg:text-[40px]">{content.contact.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-white/85">{content.contact.body}</p>
            <dl className="mt-6">
              <dt>Address:</dt>
              <dd>{location.address}</dd>
              <dt>Contact No:</dt>
              <dd><a className="text-care-gold underline" href={content.phoneHref}>{content.phone}</a></dd>
              <dt>Email:</dt>
              <dd className="break-all"><a className="text-care-gold underline" href={`mailto:${location.email}`}>{location.email}</a></dd>
            </dl>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5 md:justify-start">
              <button type="button" onClick={onBook} className="inline-flex min-h-[49px] items-center justify-center rounded-[6px] bg-care-gold px-6 py-3 text-[14px] font-bold text-[#2d2037] hover:bg-[#df9726]">Book An Appointment</button>
              <a className="inline-flex min-h-[49px] items-center justify-center rounded-[6px] border-2 border-white px-6 py-3 text-[14px] font-bold text-white hover:bg-white/10" href={location.mapUrl} target="_blank" rel="noreferrer">View on Map</a>
            </div>
          </div>
          <a href={location.mapUrl} target="_blank" rel="noreferrer" className="mb-map block min-w-0 overflow-hidden rounded-[18px] shadow-[0_14px_35px_rgba(31,16,56,.2)] [&>.mb-photo]:h-[280px] md:[&>.mb-photo]:h-[350px] lg:[&>.mb-photo]:h-[400px] [&>.mb-photo]:rounded-[18px]" aria-label={`Open directions to M’Brace ${content.name} on Google Maps`}>
            <Photo n={6} alt={`Map of Hyderabad showing M’Brace ${content.name}`} />
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-[1180px] border-t border-white/15 pt-12 lg:mt-16 lg:pt-14">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-[13px] font-bold text-care-gold">{content.reach.eyebrow}</p>
            <h2 className="mt-4 text-[24px] font-semibold leading-[1.25] text-white md:text-[36px] lg:text-[40px]">{content.reach.heading}</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-white/85">{content.reach.body}</p>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:items-stretch md:overflow-visible lg:grid-cols-3">
            {content.reach.items.map((item, index) => <article key={item.title} className="group flex w-[82%] shrink-0 flex-col snap-start rounded-[18px] bg-white p-6 text-[#45405a] shadow-[0_10px_26px_rgba(31,16,56,.15)] transition-colors duration-200 hover:bg-care-gold hover:text-[#2d2037] md:w-auto md:shrink">
              <span className="grid size-10 place-items-center rounded-full bg-care-purple text-[14px] font-extrabold text-white">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[17px] font-bold text-care-navy transition-colors duration-200 group-hover:text-[#2d2037]">{item.title}</h3>
              <p className="mt-3 whitespace-pre-line text-[14px] leading-[1.65] text-[#656078] transition-colors duration-200 group-hover:text-[#2d2037]/85">{item.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <WhyPatientsChoose
        locationName={content.name}
        intro={content.whyChoose.body}
        stats={content.whyChoose.stats}
        features={content.whyChoose.items}
      />

      <ServicesAtLocation
        locationName={content.name}
        intro={content.services.body}
        image={location.servicesImage || location.heroImage}
        items={content.services.items}
      />

      <WhatToExpect
        locationName={content.name}
        intro={location.whatToExpectIntro}
        steps={bysection("step")}
        phone={hospital.phone}
        phoneHref={hospital.phoneHref}
      />

      <OurCarePromise
        locationName={content.name}
        intro={location.carePromiseIntro}
        cards={bysection("promise")}
      />

      <TestimonialsSection homeTestimonials={homeTestimonials} />

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[24px] bg-[linear-gradient(115deg,#fff3df,#f3e9fc)] p-6 shadow-[0_16px_38px_rgba(66,37,91,.1)] md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="text-center lg:text-left"><span className="mx-auto grid size-14 place-items-center rounded-full bg-care-purple text-care-gold lg:mx-0"><EmergencyIcon className="size-7" /></span><p className="mt-5 text-[13px] font-bold text-care-gold">{content.emergency.eyebrow}</p><h2 className="mt-4 text-[24px] font-semibold leading-[1.25] text-care-navy md:text-[36px]">{content.emergency.heading}</h2><p className="mt-5 text-[15px] leading-[1.7] text-[#656078]">{content.emergency.body}</p></div>
            <div className="grid gap-4"><article className="rounded-[16px] bg-care-purple p-6 text-white"><h3 className="text-[17px] font-bold text-care-gold">{content.emergency.urgentTitle}</h3><p className="mt-3 text-[14px] leading-[1.65] text-white/85">{content.emergency.urgentBody}</p></article><article className="rounded-[16px] bg-white p-6"><h3 className="text-[17px] font-bold text-care-purple">{content.emergency.plannedTitle}</h3><p className="mt-3 text-[14px] leading-[1.65] text-[#656078]">{content.emergency.plannedBody}</p></article></div>
          </div>
        </div>
      </section>

      <FaqSection
        careCategories={content.faqs.map(group => group.label)}
        homeFaqs={Object.fromEntries(content.faqs.map(group => [group.label, group.items]))}
      />
    </>
  );
}
