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
    <section id="services" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple mb-rounded rounded-[20px] md:rounded-[28px]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="What We Offer">Comprehensive <em>Mother<br className="mb-desktop-break hidden" /> and Child Care</em> Services</Heading>
          <p className="text-[16px] font-semibold">End-to-end care across women&apos;s health, child care, pregnancy support and fertility treatment, backed by advanced technology like 4D Ultrasound and robotic surgery, and a full range of services under one team.</p>
        </div>
        <div className="mb-service-tabs grid grid-cols-[repeat(4,1fr)] rounded-[16px] overflow-hidden [background:linear-gradient(90deg,_#fbad31,_#764b9e)] mb-7 pt-1 pr-1 pb-1 pl-1 [&_button]:min-h-12.5 [&_button]:px-1 [&_button]:text-[11px] md:[&_button]:min-h-14 md:[&_button]:text-[14px] [&_button]:text-white [&_button]:font-semibold [&_button]:rounded-[12px] [&_button]:[transition:background_.2s,_color_.2s,_box-shadow_.2s] [&_button:hover]:[background:rgba(255,255,255,0.12)] [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-care-purple [&_button[aria-pressed=true]]:font-bold [&_button[aria-pressed=true]]:shadow-[inset_0_0_0_2px_#fbad31] [&_button[aria-pressed=true]:hover]:bg-white" aria-label="Service categories">{Object.keys(serviceGroups).map(x => <button key={x} type="button" aria-pressed={serviceTab === x} aria-controls="service-list" onClick={() => setServiceTab(x)}>{x}</button>)}</div>
        <div className="mb-service-grid grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-9px)] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-[repeat(4,1fr)] gap-3 md:gap-4.5 lg:gap-6 overflow-x-auto lg:overflow-visible [scroll-snap-type:x_mandatory] overscroll-x-contain [scrollbar-width:thin] pb-2 lg:pb-0 [&_article]:flex [&_article]:flex-col [&_article]:bg-[#fff] [&_article]:[border:1px_solid_#e5e7eb] [&_article]:rounded-[16px] [&_article]:[transition:background_.2s,_color_.2s] [&_article]:shadow-[0_14px_14px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] [&_article]:min-h-67.5 [&_article]:pt-4 [&_article]:pr-4 [&_article]:pb-4 [&_article]:pl-4 [&_article]:[scroll-snap-align:start] md:[&_article]:min-h-[245px] md:[&_article]:pt-5 md:[&_article]:pr-5 md:[&_article]:pb-5 md:[&_article]:pl-5 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-care-navy [&_h3]:leading-[1.45] [&_h3]:mb-3 [&_h3]:[transition:color_.2s] [&_p]:text-[14px] md:[&_p]:text-[13px] [&_p]:[flex:initial] [&_button]:[align-self:start] [&_button]:text-care-purple [&_button]:text-[13px] [&_button]:mt-3 [&_button]:[transition:color_.2s] [&_button]:min-h-11 [&_article:hover]:bg-care-purple [&_article:hover]:text-white [&_article:hover]:[border-color:var(--color-care-purple)] [&_article:hover_h3]:text-white [&_article:hover_button]:text-care-gold [&>*]:min-w-0" id="service-list" key={serviceTab} role="region" aria-label={`${serviceTab} services`}>{activeServices.map(([name, description], index) => <article key={name}>
          <Image className="mb-service-icon w-11 h-11 mb-3.5" src={`/images/figma/service-${index % 8}.svg`} width={44} height={44} alt="" />
          <h3>{name}</h3>
          <p>{description}</p>
          <button type="button" onClick={() => showDetails({
            title: name,
            body: description
          })}>Learn More <span aria-hidden="true">→</span>
          </button>
        </article>)}</div>
      </div>
    </section>
  );
}
