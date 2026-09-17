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

  return (
    <section id="services" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="What We Offer">Comprehensive <em>Mother</em> and<br className="mb-desktop-break max-[701px]:hidden" /> <em>Child Care</em> Services</Heading>
          <p>End-to-end care across women&apos;s health, child care, pregnancy support and fertility treatment, backed by advanced technology like 4D Ultrasound and robotic surgery, and a full range of services under one team.</p>
        </div>
        <div className="mb-service-tabs grid grid-cols-[repeat(3,1fr)] rounded-[16px] overflow-hidden [background:linear-gradient(90deg,_#fbad31,_#764b9e)] mb-7 pt-1 pr-1 pb-1 pl-1 max-[701px]:[&_button]:min-h-12.5 max-[701px]:[&_button]:text-[13px] min-[701px]:[&_button]:min-h-14 min-[701px]:[&_button]:text-[16px] [&_button]:text-white [&_button]:rounded-[12px] [&_button]:[transition:background_.2s,_color_.2s,_box-shadow_.2s] [&_button:hover]:[background:rgba(255,255,255,0.12)] [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-care-purple [&_button[aria-pressed=true]]:shadow-[inset_0_0_0_2px_#fbad31] [&_button[aria-pressed=true]:hover]:bg-white" aria-label="Service categories">{Object.keys(serviceGroups).map(x => <button key={x} type="button" aria-pressed={serviceTab === x} aria-controls="service-list" onClick={() => setServiceTab(x)}>{x}</button>)}</div>
        <div className="mb-service-grid grid max-[1001px]:grid-cols-[repeat(2,1fr)] min-[1001px]:grid-cols-[repeat(4,1fr)] max-[701px]:gap-3 min-[701px]:gap-4.5 [&_article]:flex [&_article]:flex-col [&_article]:bg-[#fff] [&_article]:[border:1px_solid_#e9e4f0] [&_article]:rounded-[16px] [&_article]:[transition:background_.2s,_color_.2s] [&_article]:shadow-[0_10px_18px_#33214c12] max-[701px]:[&_article]:min-h-67.5 max-[701px]:[&_article]:pt-4 max-[701px]:[&_article]:pr-4 max-[701px]:[&_article]:pb-4 max-[701px]:[&_article]:pl-4 min-[701px]:[&_article]:min-h-[245px] min-[701px]:[&_article]:pt-5 min-[701px]:[&_article]:pr-5 min-[701px]:[&_article]:pb-5 min-[701px]:[&_article]:pl-5 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-care-navy [&_h3]:leading-[1.45] [&_h3]:mb-3 [&_h3]:[transition:color_.2s] max-[701px]:[&_p]:text-[14px] min-[701px]:[&_p]:text-[13px] [&_p]:[flex:initial] [&_button]:[align-self:start] [&_button]:text-care-purple [&_button]:text-[13px] [&_button]:mt-3 [&_button]:[transition:color_.2s] max-[701px]:[&_button]:min-h-11 [&_article:hover]:bg-care-purple [&_article:hover]:text-white [&_article:hover]:[border-color:var(--color-care-purple)] [&_article:hover_h3]:text-white [&_article:hover_button]:text-care-gold mb-mobile-scroll max-[701px]:[&.mb-mobile-scroll]:grid max-[701px]:[&.mb-mobile-scroll]:grid-cols-[none] max-[701px]:[&.mb-mobile-scroll]:[grid-auto-flow:column] max-[701px]:[&.mb-mobile-scroll]:auto-cols-[min(84%,_320px)] max-[701px]:[&.mb-mobile-scroll]:gap-4 max-[701px]:[&.mb-mobile-scroll]:max-w-full max-[701px]:[&.mb-mobile-scroll]:overflow-x-auto max-[701px]:[&.mb-mobile-scroll]:overscroll-x-contain max-[701px]:[&.mb-mobile-scroll]:[scroll-snap-type:x_mandatory] max-[701px]:[&.mb-mobile-scroll]:[scroll-padding-inline:2px] max-[701px]:[&.mb-mobile-scroll]:pt-1 max-[701px]:[&.mb-mobile-scroll]:pr-0.5 max-[701px]:[&.mb-mobile-scroll]:pb-4.5 max-[701px]:[&.mb-mobile-scroll]:pl-0.5 max-[701px]:[&.mb-mobile-scroll]:[scrollbar-width:thin] max-[701px]:[&.mb-mobile-scroll]:[scrollbar-color:#b59bcf_#eee7f5] max-[701px]:[&>*]:min-w-0 max-[701px]:[&>*]:[scroll-snap-align:start] max-[701px]:[&>:last-child]:[scroll-snap-align:end]" id="service-list" key={serviceTab} role="region" tabIndex={0} aria-label={`${serviceTab} services`}>{serviceGroups[serviceTab].map(([name, description], index) => <article key={name}>
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
