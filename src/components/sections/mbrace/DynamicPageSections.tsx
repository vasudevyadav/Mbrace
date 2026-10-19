"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertTriangleIcon } from "@/components/icons/icons";
import { slugifyHeading, type BlogBlock } from "./blog/blogContent";
import type { DynamicPageSection } from "./dynamicPageContent";

type PathwayBlock = Extract<BlogBlock, { kind: "section" }>;

const processIcons = ["/icon-3.png", "/healthicons_medical-records-outline.png", "/gridicons_lo.png", "/Icon BG.png"];
const concernIcons = ["/Vector.png", "/healthicons_doctor-female.png", "/healthicons_medical-records-outline.png", "/healthicons_medical-records-o.png", "/Icon BG.png", "/healthicons_syringe.png", "/healthicons_child-care.png", "/gridicons_lo.png"];
const toolImages = ["/images/figma/asset-21.webp", "/images/figma/asset-19.webp", "/images/figma/asset-20.webp", "/images/figma/location-services-alt.png"];

function splitBody(body: string) {
  const [intro = "", ...notes] = body.split(/\n+/).filter(Boolean);
  return { intro, notes: notes.flatMap((line) => line.split("•")).map((line) => line.trim()).filter(Boolean) };
}

function pathwayLabel(bullet: string, index: number) {
  const label = bullet.split("—", 1)[0]?.trim();
  return label || `Stage ${index + 1}`;
}

function pathwayStages(bullet: string) {
  const detail = bullet.includes("—") ? bullet.split("—").slice(1).join("—").trim() : bullet.trim();
  const firstSeparator = detail.indexOf(":");
  if (firstSeparator < 0) return [{ title: "", description: detail }];

  const firstTitle = detail.slice(0, firstSeparator).trim();
  const remainder = detail.slice(firstSeparator + 1).trim();
  const secondStage = remainder.match(/^(.*?)\.\s+([A-Z][^:.]{2,60}):\s+([\s\S]+)$/);
  if (!secondStage) return [{ title: firstTitle, description: remainder }];

  return [
    { title: firstTitle, description: `${secondStage[1].trim()}.` },
    { title: secondStage[2].trim(), description: secondStage[3].trim() },
  ];
}

function pathwayDetails(bullet: string) {
  const ctaMatch = bullet.match(/\nCTA:\s*(.+)$/);
  const withoutCta = ctaMatch ? bullet.slice(0, ctaMatch.index).trim() : bullet;
  const detail = withoutCta.includes("—") ? withoutCta.split("—").slice(1).join("—").trim() : withoutCta.trim();
  const lines = detail.split("\n").map((line) => line.trim()).filter(Boolean);

  if (lines.length >= 5 && lines[1].startsWith("Stage 01:") && lines[3].startsWith("Stage 02:")) {
    return {
      intro: lines[0],
      cta: ctaMatch?.[1]?.trim() ?? "",
      stages: [
        { title: lines[1].replace(/^Stage 01:\s*/, ""), description: lines[2] },
        { title: lines[3].replace(/^Stage 02:\s*/, ""), description: lines.slice(4).join(" ") },
      ],
    };
  }

  return { intro: "", cta: ctaMatch?.[1]?.trim() ?? "", stages: pathwayStages(withoutCta) };
}

function toolCopy(description: string) {
  const match = description.match(/\s*\(([^()]+)\)\s*$/);
  return {
    category: match?.[1] ?? "Care Support",
    description: match ? description.slice(0, match.index).trim() : description,
  };
}

function HighlightServiceName({ heading, serviceName }: { heading: string; serviceName: string }) {
  const start = heading.toLocaleLowerCase().indexOf(serviceName.toLocaleLowerCase());
  if (start < 0) return heading;
  return <>{heading.slice(0, start)}<span className="text-care-gold">{heading.slice(start, start + serviceName.length)}</span>{heading.slice(start + serviceName.length)}</>;
}

function LegacyDynamicBlocks({ blocks }: { blocks: Array<BlogBlock | DynamicPageSection> }) {
  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        {blocks.map((block, index) => {
          if (block.kind === "content") {
            const hasImage = Boolean(block.image) && block.layout !== "text" && block.layout !== "cards";
            return (
              <article key={index} id={slugifyHeading(block.heading)} className="mb-8 overflow-hidden rounded-[24px] bg-[linear-gradient(110deg,#fff8ed,#f7effd)] p-6 sm:p-8 lg:p-12">
                <div className={`grid items-center gap-8 ${hasImage ? "lg:grid-cols-2" : ""}`}>
                  {hasImage && block.layout === "image-left" && <div className="relative min-h-[300px] overflow-hidden rounded-[20px]"><Image src={block.image} alt={block.imageAlt || block.heading} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>}
                  <div>{block.eyebrow && <p className="text-xs font-bold uppercase tracking-[.12em] text-care-gold">{block.eyebrow}</p>}{block.heading && <h2 className="mt-3 text-[28px] font-bold leading-tight text-care-navy sm:text-[36px]">{block.heading}</h2>}{block.body && <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.8] text-[#656078]">{block.body}</p>}{block.ctaLabel && <a href={block.ctaHref || "/#appointment"} className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-care-purple px-6 py-3 text-sm font-bold text-white">{block.ctaLabel}</a>}</div>
                  {hasImage && block.layout === "image-right" && <div className="relative min-h-[300px] overflow-hidden rounded-[20px]"><Image src={block.image} alt={block.imageAlt || block.heading} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>}
                </div>
                {block.items.length > 0 && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.items.map((item, itemIndex) => <div key={itemIndex} className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(66,37,91,.08)]">{item.image && <div className="relative h-44"><Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" /></div>}<div className="p-5"><h3 className="text-lg font-bold text-care-purple">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#656078]">{item.description}</p></div></div>)}</div>}
              </article>
            );
          }
          if (block.kind === "section") return <article key={`${block.heading}-${index}`} id={slugifyHeading(block.heading)} className="mb-8 rounded-[22px] border border-[#eadff0] bg-white p-6 shadow-[0_14px_40px_rgba(66,37,91,.07)] sm:p-8 lg:p-10"><h2 className="text-[26px] font-bold leading-tight text-care-navy sm:text-[32px]">{block.heading}</h2>{block.lead && <p className="mt-4 text-[15px] leading-[1.8] text-[#656078]">{block.lead}</p>}{block.bullets?.length ? <ul className="mt-5 grid gap-3 pl-5 text-[15px] leading-[1.7] text-[#56516b] marker:text-care-gold [&>li]:list-disc">{block.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul> : null}{block.trailing && <p className="mt-5 text-[15px] leading-[1.8] text-[#656078]">{block.trailing}</p>}</article>;
          if (block.kind === "alert") return <aside key={index} className="mb-8 rounded-[20px] border border-[#f3cf8f] bg-[#fff8ec] p-6 sm:p-8"><h2 className="flex items-center gap-3 text-[19px] font-bold text-[#a9681c]"><AlertTriangleIcon className="size-6 shrink-0" />{block.heading}</h2><p className="mt-3 text-[15px] leading-[1.75] text-[#71572f]">{block.body}</p></aside>;
          return <aside key={index} className="mb-8 rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] p-6 sm:p-8"><p className="text-[16px] font-semibold leading-[1.8] text-[#45405a]">{block.body}</p><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-care-purple">Key takeaway</p></aside>;
        })}
      </div>
    </section>
  );
}

export default function DynamicPageSections({ blocks, heroImage = "", serviceName = "", ctaLabel = "Book Appointment", onBook = () => {} }: {
  blocks: Array<BlogBlock | DynamicPageSection>;
  heroImage?: string;
  serviceName?: string;
  ctaLabel?: string;
  onBook?: () => void;
}) {
  const [activePathway, setActivePathway] = useState(0);
  const contentBlocks = blocks.filter((block): block is DynamicPageSection => block.kind === "content");
  const pathway = blocks.find((block): block is PathwayBlock => block.kind === "section");
  const [process, whyChoose, concerns, tools] = contentBlocks;
  const pathwayItems = pathway?.bullets ?? [];
  const activePathwayText = pathwayItems[activePathway] ?? "";
  const activePathwayDetails = pathwayDetails(activePathwayText);
  const activeStages = activePathwayDetails.stages;
  const concernBody = concerns ? splitBody(concerns.body) : { intro: "", notes: [] };
  const concernColumns = concerns
    ? [concerns.items.filter((_, index) => index % 2 === 0), concerns.items.filter((_, index) => index % 2 === 1)]
    : [];

  if (!serviceName) return <LegacyDynamicBlocks blocks={blocks} />;

  return (
    <>
      {process && (
        <section id={slugifyHeading(process.heading)} className="relative mx-3 mt-8 rounded-[24px] bg-care-purple px-5 pb-6 pt-10 text-white md:mx-5 md:px-8 md:pb-8 md:pt-12 lg:mx-8 lg:min-h-[410px] lg:px-[8%] lg:pb-20 lg:pt-16">
          <div className="mx-auto grid max-w-[1320px] gap-8 text-center lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20 lg:text-left">
            <div><p className="text-[12px] font-bold text-care-gold lg:text-[13px]">{process.eyebrow}</p><h2 className="mt-5 whitespace-pre-line text-[28px] font-semibold leading-[1.3] md:text-[32px] lg:text-[38px]">{process.heading}</h2></div>
            {process.body && <p className="mx-auto max-w-[520px] whitespace-pre-line text-[14px] leading-[1.75] text-white/90 lg:mx-0 lg:text-[16px]">{process.body}</p>}
          </div>
          <div className="relative z-10 mx-auto mt-8 flex max-w-[1305px] snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:absolute lg:inset-x-[2.5%] lg:top-[calc(100%-135px)] lg:mt-0 lg:grid-cols-4 lg:gap-[18px]">
            {process.items.map((item, index) => (
              <div key={item.title} className={`min-h-[225px] w-[86%] shrink-0 snap-start p-[2px] shadow-[0_14px_30px_rgba(41,28,70,.12)] [background:linear-gradient(180deg,#fbad31_0%,#b16c7d_42%,#764b9e_100%)] sm:w-auto lg:min-h-[350px] ${index === 0 ? "rounded-[16px] lg:rounded-r-none" : index === process.items.length - 1 ? "rounded-[16px] lg:rounded-l-none" : "rounded-[16px] lg:rounded-none"}`}>
                <article className={`h-full bg-white p-5 text-left text-[#343238] lg:p-8 ${index === 0 ? "rounded-[14px] lg:rounded-r-none" : index === process.items.length - 1 ? "rounded-[14px] lg:rounded-l-none" : "rounded-[14px] lg:rounded-none"}`}>
                  <span className="grid size-12 place-items-center rounded-[10px] bg-[#fff1d9] lg:size-[52px]"><Image src={processIcons[index % processIcons.length]} width={28} height={28} alt="" className="size-7 object-contain" /></span>
                  <p className="mt-6 text-[12px] font-bold leading-none text-care-purple lg:text-[14px]">0{index + 1}</p>
                  <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] lg:text-[20px]">{item.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.58] text-[#605d65] lg:text-[16px]">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </section>
      )}

      {whyChoose && (
        <section id={slugifyHeading(whyChoose.heading)} className="px-5 py-16 lg:px-8 lg:pb-[92px] lg:pt-[300px]">
          <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-[72px]">
            <div className="text-center lg:text-left">
              <p className="text-[13px] font-semibold text-care-gold">{whyChoose.eyebrow}</p>
              <h2 className="mt-4 text-[31px] font-semibold leading-[1.22] text-care-navy md:text-[36px] lg:text-[40px]"><HighlightServiceName heading={whyChoose.heading} serviceName={serviceName} /></h2>
              <p className="mx-auto mt-7 max-w-[620px] whitespace-pre-line text-[15px] leading-[1.78] text-[#656078] lg:mx-0 lg:text-[16px]">{whyChoose.body}</p>
              <button onClick={onBook} className="mt-7 min-h-[52px] w-full rounded-[6px] bg-care-purple px-7 py-3.5 text-[14px] font-bold text-white hover:bg-[#603780] sm:w-auto sm:min-w-[220px]">{ctaLabel}</button>
            </div>
            <div className="relative h-[350px] overflow-visible rounded-[20px] lg:h-[455px]">
              <div className="absolute inset-0 overflow-hidden rounded-[24px]"><Image src={heroImage || "/services-details-banner.png"} alt={`${serviceName} consultation at M'Brace`} fill sizes="(max-width:1023px) 100vw, 520px" className="object-cover object-center" /></div>
              <span className="absolute -bottom-4 left-3 flex size-24 flex-col items-center justify-center rounded-full border-[5px] border-[#eee7f5] bg-care-gold text-center text-[22px] font-extrabold leading-none text-[#28262c] shadow-lg lg:-bottom-6 lg:-left-12 lg:size-[132px] lg:text-[34px]">34+<small className="mt-2 block text-[10px] font-medium leading-[1.25] lg:text-[12px]">YEARS OF<br />CARE</small></span>
            </div>
          </div>
        </section>
      )}

      {concerns && (
        <section id={slugifyHeading(concerns.heading)} className="rounded-[26px] bg-[linear-gradient(110deg,#fff3df_0%,#f8edf1_52%,#f2e8fc_100%)] px-5 py-14 lg:px-8 lg:py-[96px]">
          <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[370px_1fr] lg:gap-[76px]">
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[3px] text-care-gold">{concerns.eyebrow}</p>
              <h2 className="mt-5 text-[32px] font-semibold leading-tight text-care-navy md:text-[36px] lg:text-4xl">{concerns.heading}</h2>
              <p className="mx-auto mt-8 max-w-[520px] text-[15px] leading-[1.72] text-[#57535d] lg:mx-0 lg:text-[16px]">{concernBody.intro}</p>
              {concernBody.notes.length > 0 && <ul className="mx-auto mt-7 max-w-[420px] space-y-4 text-left text-[14px] font-medium text-[#56515c] lg:mx-0">{concernBody.notes.map((note) => <li key={note} className="flex items-start gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-care-purple" />{note}</li>)}</ul>}
              <button onClick={onBook} className="mt-8 min-h-[52px] w-full rounded-[6px] bg-care-purple px-6 py-3.5 text-[14px] font-bold text-white sm:w-auto sm:min-w-[245px]">{pathway?.trailing || ctaLabel}&nbsp;&nbsp;→</button>
            </div>
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
              {concerns.items.map((item, index) => <article key={item.title} className="flex min-h-[154px] w-[86%] shrink-0 snap-start items-center rounded-[18px] border border-[#d8ddd8] bg-white px-6 py-5 shadow-[0_8px_22px_rgba(41,28,70,.06)]"><div><span className={`grid size-[42px] place-items-center rounded-[11px] ${index % 2 ? "bg-[#fff1d9]" : "bg-[#f1e5fc]"}`}><Image src={concernIcons[index % concernIcons.length]} width={28} height={28} alt="" className="size-6 object-contain" /></span><h3 className="mt-3 text-[17px] font-bold leading-[1.3] text-care-purple">{item.title}</h3><p className="mt-2 text-[13px] leading-[1.55] text-[#5f5b63]">{item.description}</p></div></article>)}
            </div>
            <div className="hidden gap-5 sm:grid sm:grid-cols-2">
              {concernColumns.map((column, columnIndex) => <div key={columnIndex} className={`space-y-5 ${columnIndex === 0 ? "sm:pt-[86px]" : ""}`}>{column.map((item) => { const index = concerns.items.findIndex((entry) => entry.title === item.title); return <article key={item.title} className="flex min-h-[154px] items-center rounded-[18px] border border-[#d8ddd8] bg-white px-7 py-6 shadow-[0_8px_22px_rgba(41,28,70,.06)]"><div><span className={`grid size-[42px] place-items-center rounded-[11px] ${index % 2 ? "bg-[#fff1d9]" : "bg-[#f1e5fc]"}`}><Image src={concernIcons[index % concernIcons.length]} width={28} height={28} alt="" className="size-6 object-contain" /></span><h3 className="mt-3 text-[17px] font-bold leading-[1.3] text-care-purple lg:text-[18px]">{item.title}</h3><p className="mt-2 text-[13px] leading-[1.55] text-[#5f5b63] lg:text-[14px]">{item.description}</p></div></article>; })}</div>)}
            </div>
          </div>
        </section>
      )}

      {pathway && pathwayItems.length > 0 && (
        <section id={slugifyHeading(pathway.heading)} className="overflow-hidden rounded-b-[28px] bg-[#45156d] text-white">
          <div className="bg-care-purple px-5 pb-[74px] pt-14 lg:px-8 lg:pb-[98px] lg:pt-[72px]">
            <div className="mx-auto grid max-w-[1250px] gap-8 text-center lg:grid-cols-[1fr_420px] lg:items-start lg:gap-24 lg:text-left">
              <div><p className="text-[13px] font-bold text-care-gold">{serviceName}</p><h2 className="mt-7 text-[30px] font-semibold leading-[1.25] md:text-[36px] lg:text-[40px]">{pathway.heading}</h2></div>
              <div><p className="mx-auto max-w-[560px] text-[16px] leading-[1.55] text-white/90 lg:mx-0 lg:text-[17px]">{pathway.lead}</p><button onClick={onBook} className="mt-5 min-h-[52px] w-full rounded-[6px] bg-care-gold px-7 py-3.5 text-[14px] font-bold text-[#21172b] sm:w-auto sm:min-w-[220px]">{pathway.trailing || ctaLabel}</button></div>
            </div>
          </div>
          <div className="relative mx-auto max-w-[1180px] px-5 lg:px-0"><div className="-mt-[38px] flex gap-[10px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{pathwayItems.map((bullet, index) => <button key={index} type="button" onClick={() => setActivePathway(index)} aria-pressed={activePathway === index} className={`flex min-h-[64px] shrink-0 items-center justify-center gap-3 rounded-[8px] px-5 text-[13px] font-semibold transition-colors lg:flex-1 lg:px-4 ${activePathway === index ? "bg-care-purple text-white" : "bg-[#f4f1ed] text-[#555157] hover:bg-white"}`}><Image src={processIcons[index % processIcons.length]} width={28} height={28} alt="" className="size-6 object-contain" />{pathwayLabel(bullet, index)}</button>)}</div></div>
          <div className="mx-auto grid max-w-[1250px] gap-12 px-5 pb-14 pt-14 lg:grid-cols-[1fr_500px] lg:gap-[88px] lg:px-0 lg:pb-[58px] lg:pt-9">
            <div>
              <div className="flex items-center gap-3 text-[13px] font-bold text-care-gold"><span className="grid size-9 place-items-center rounded-full bg-white/10"><Image src={processIcons[activePathway % processIcons.length]} width={24} height={24} alt="" className="size-6 object-contain" /></span>{pathwayLabel(activePathwayText, activePathway)}</div>
              {activePathwayDetails.intro && <h3 className="mt-5 text-[20px] font-bold leading-[1.35] text-white lg:text-[22px]">{activePathwayDetails.intro}</h3>}
              <div className="relative mt-8 space-y-9 pl-14 before:absolute before:bottom-7 before:left-[17px] before:top-[14px] before:w-px before:bg-white/15">
                {activeStages.map((stage, index) => <div key={`${stage.title}-${index}`} className="relative"><span className="absolute -left-14 top-0 grid size-6 place-items-center rounded-full border-[3px] border-care-gold bg-[#5b267e]"><span className="size-1.5 rounded-full bg-care-gold" /></span><p className="text-[11px] font-bold uppercase tracking-[1.5px] text-care-gold">Stage {String(index + 1).padStart(2, "0")}</p>{stage.title && <h3 className="mt-3 text-[18px] font-bold lg:text-[20px]">{stage.title}</h3>}<p className="mt-3 max-w-[610px] text-[14px] leading-[1.65] text-white/70">{stage.description}</p></div>)}
              </div>
              <button onClick={onBook} className="mt-9 min-h-[50px] w-full rounded-[6px] border-2 border-care-gold bg-white px-5 py-3 text-[13px] font-bold text-[#261631] sm:w-auto sm:min-w-[280px] sm:px-6 sm:text-[14px]">{activePathwayDetails.cta || pathway.trailing || ctaLabel}&nbsp;&nbsp;→</button>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-[16px] sm:h-[410px] lg:h-[465px]"><Image src={heroImage || "/services-details-banner.png"} alt={`${serviceName} treatment discussion`} fill sizes="(max-width:1023px) 100vw, 500px" className="object-cover object-center" /><div className="absolute bottom-8 left-8 right-8 rounded-[12px] bg-[#27143e]/90 px-7 py-6 backdrop-blur-[2px]"><h3 className="text-[16px] font-bold text-care-gold">{pathwayLabel(activePathwayText, activePathway)}</h3>{pathway.trailing && <p className="mt-3 text-[14px] text-white/75">{pathway.trailing}</p>}</div></div>
          </div>
        </section>
      )}

      {tools && (
        <section id={slugifyHeading(tools.heading)} className="px-5 py-12 lg:px-8 lg:pb-[88px] lg:pt-[86px]">
          <div className="mx-auto max-w-[1250px]">
            <div className="grid gap-5 text-center lg:grid-cols-[1fr_1.15fr_auto] lg:items-center lg:gap-16 lg:text-left"><div><p className="text-[13px] font-bold uppercase text-care-gold">{tools.eyebrow}</p><h2 className="mt-4 text-[32px] font-semibold leading-[1.18] text-care-navy md:text-[36px] lg:text-[40px]">{tools.heading}</h2></div><p className="mx-auto max-w-[510px] text-[15px] leading-[1.55] text-[#343238] lg:mx-0 lg:text-[16px]">{tools.body}</p><button onClick={onBook} className="min-h-12 w-full justify-self-center rounded-full bg-care-gold px-7 py-3 text-[14px] font-semibold text-[#21172b] sm:w-auto sm:min-w-[190px] lg:justify-self-auto lg:font-bold">{ctaLabel}</button></div>
            <div className="mt-8 h-px bg-[#d7c2e8]" />
            <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6">
              {tools.items.map((item, index) => { const copy = toolCopy(item.description); return <article key={item.title} className="group relative h-[270px] w-[86%] shrink-0 snap-start overflow-hidden rounded-[18px] sm:w-auto lg:h-[350px]"><Image src={item.image || toolImages[index % toolImages.length]} alt={item.title} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 25vw" className="object-cover transition duration-300 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#170228] via-[#26113e]/35 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-[11px] font-medium uppercase tracking-[2px] text-care-gold">{copy.category}</p><h3 className="mt-3 text-[21px] font-bold leading-[1.2]">{item.title}</h3><p className="mt-3 text-[14px] leading-[1.5] text-white/85">{copy.description}</p></div></article>; })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
