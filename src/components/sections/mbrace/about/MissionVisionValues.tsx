"use client";

import { useState } from "react";
import Image from "next/image";
import Heading from "../Heading";
import { ShieldIcon, StarIcon, StethoscopeIcon } from "@/components/icons/icons";
import { missionTabs } from "./content";

const tabIcons = { vision: StethoscopeIcon, mission: ShieldIcon, values: StarIcon };

export default function MissionVisionValues() {
  const [activeKey, setActiveKey] = useState(missionTabs[0].key);
  const active = missionTabs.find(tab => tab.key === activeKey) ?? missionTabs[0];
  const ActiveIcon = tabIcons[active.key as keyof typeof tabIcons];

  return (
    <section id="mission" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple mb-rounded rounded-[20px] md:rounded-[28px]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="What We Are">What Our <em>Mission, Vision</em><br />And <em>Values</em></Heading>
          <p>End-to-end care across women&apos;s health, child care, pregnancy support and fertility treatment, backed by advanced technology like 4D Ultrasound and robotic surgery, and a full range of services under one team.</p>
        </div>
        <div className="mb-service-tabs grid grid-cols-[repeat(3,1fr)] rounded-[16px] overflow-hidden [background:linear-gradient(90deg,_#fbad31,_#764b9e)] mb-7 pt-1 pr-1 pb-1 pl-1 [&_button]:min-h-12.5 [&_button]:text-[13px] md:[&_button]:min-h-14 md:[&_button]:text-[16px] [&_button]:text-white [&_button]:rounded-[12px] [&_button]:[transition:background_.2s,_color_.2s,_box-shadow_.2s] [&_button:hover]:[background:rgba(255,255,255,0.12)] [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-care-purple [&_button[aria-pressed=true]]:shadow-[inset_0_0_0_2px_#fbad31] [&_button[aria-pressed=true]:hover]:bg-white" aria-label="Mission, vision and values">{missionTabs.map(tab => <button key={tab.key} type="button" aria-pressed={activeKey === tab.key} aria-controls="mission-panel" onClick={() => setActiveKey(tab.key)}>{tab.tabLabel}</button>)}</div>
        <div id="mission-panel" key={active.key} className="mb-mission-panel grid items-stretch grid-cols-[1fr] gap-6 lg:grid-cols-[1fr_1fr] lg:gap-6" role="region" aria-label={`${active.tabLabel} details`}>
          <div className="flex flex-col gap-3 bg-white border border-[#e5e7eb] rounded-[16px] shadow-[0_14px_14px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] p-5 md:p-7">
            <div className="grid place-items-center rounded-[12px] size-11 bg-[rgba(251,173,49,0.1)] text-care-gold [&_svg]:size-5.5">
              <ActiveIcon />
            </div>
            <p className="text-care-purple text-[26px] lg:text-[32px] font-bold leading-[1.2]">{active.title}</p>
            <p className="text-[#373535] text-[18px] font-bold">{active.subtitle}</p>
            <p className="text-[#5d6078] text-[14px] leading-[1.6]">{active.body}</p>
          </div>
          <div className="relative min-h-60 md:min-h-full rounded-[16px] overflow-hidden">
            <Image src={active.image} alt={active.imageAlt ?? active.title} fill sizes="(max-width: 1000px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
