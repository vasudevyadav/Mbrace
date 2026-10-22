"use client";

import Image from "next/image";
import Heading from "./Heading";
import type { HomeData } from "@/lib/queries";
import type { DetailContent } from "./types";

type Props = {
  serviceGroups: HomeData["serviceGroups"];
  serviceTab: string;
  setServiceTab: (value: string) => void;
  showDetails: (detail: DetailContent) => void;
};

export default function ServicesSection({ serviceGroups, serviceTab, setServiceTab, showDetails }: Props) {
  const activeServices = serviceGroups[serviceTab] ?? [];

  return (
    <section id="services" className="mb-section mb-tinted mb-rounded rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] pb-12 pt-12 md:rounded-[28px] md:pb-15 md:pt-15 lg:pb-20 lg:pt-20">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="What We Offer" eyebrowClassName="text-care-purple!">Comprehensive <em>Mother<br className="mb-desktop-break hidden" /> and Child Care</em> Services</Heading>
          <p className="text-[16px] font-normal leading-[1.65]">End-to-end care across women&apos;s health, child care, pregnancy support and fertility treatment, backed by advanced technology like 4D Ultrasound and robotic surgery, and a full range of services under one team.</p>
        </div>
        <div className="mb-service-tabs flex gap-1 overflow-x-auto snap-x snap-mandatory rounded-[16px] bg-linear-to-r from-care-gold to-care-purple mb-7 pt-1 pr-1 pb-1 pl-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-[repeat(4,1fr)] md:overflow-visible [&_button]:min-h-12.5 [&_button]:shrink-0 [&_button]:snap-start [&_button]:whitespace-nowrap [&_button]:px-4 [&_button]:text-[12px] md:[&_button]:min-h-14 md:[&_button]:px-1 md:[&_button]:text-[14px] [&_button]:text-white [&_button]:font-semibold [&_button]:rounded-[12px] [&_button]:border-2 [&_button]:border-transparent [&_button]:[transition:background_.2s,_color_.2s,_border-color_.2s] [&_button:hover]:[background:rgba(255,255,255,0.12)] [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-care-purple [&_button[aria-pressed=true]]:font-bold [&_button[aria-pressed=true]]:border-care-gold [&_button[aria-pressed=true]:hover]:bg-white" aria-label="Service categories">{Object.keys(serviceGroups).map(x => <button key={x} type="button" aria-pressed={serviceTab === x} aria-controls="service-list" onClick={() => setServiceTab(x)}>{x}</button>)}</div>
        <div className="mb-service-grid grid grid-flow-col auto-cols-[100%] gap-3 overflow-x-auto overscroll-x-contain pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:thin] md:auto-cols-[calc(50%-9px)] md:gap-4.5 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-[repeat(4,1fr)] lg:gap-6 lg:overflow-visible lg:pb-0 [&>*]:min-w-0" id="service-list" key={serviceTab} role="region" aria-label={`${serviceTab} services`}>{activeServices.map(([name, description], index) => <article className="group flex min-h-67.5 flex-col rounded-[16px] border border-[#e5e7eb] bg-white p-4 shadow-[0_14px_14px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] transition-colors [scroll-snap-align:start] hover:border-care-purple hover:bg-care-purple hover:text-white md:min-h-[245px] md:p-5" key={name}>
          <Image className="mb-service-icon w-11 h-11 mb-3" src={`/images/figma/service-${index % 8}.svg`} width={44} height={44} alt="" />
          <h3 className="mb-3 text-[18px] font-bold leading-[1.45] text-care-navy transition-colors group-hover:text-white">{name}</h3>
          <p className="text-[14px] leading-[1.65] md:text-[13px]">{description}</p>
          <button className="mt-3 min-h-11 self-start text-[13px] text-care-purple transition-colors group-hover:text-care-gold" type="button" onClick={() => showDetails({
            title: name,
            body: description
          })}>Learn More <span aria-hidden="true">→</span>
          </button>
        </article>)}</div>
      </div>
    </section>
  );
}
