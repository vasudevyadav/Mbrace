import Image from "next/image";
import { AlertTriangleIcon } from "@/components/icons/icons";
import { slugifyHeading, type BlogBlock } from "./blog/blogContent";
import type { DynamicPageSection } from "./dynamicPageContent";

export default function DynamicPageSections({
  blocks,
}: {
  blocks: Array<BlogBlock | DynamicPageSection>;
}) {
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
                  <div>
                    {block.eyebrow && <p className="text-xs font-bold uppercase tracking-[.12em] text-care-gold">{block.eyebrow}</p>}
                    {block.heading && <h2 className="mt-3 text-[28px] font-bold leading-tight text-care-navy sm:text-[36px]">{block.heading}</h2>}
                    {block.body && <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.8] text-[#656078]">{block.body}</p>}
                    {block.ctaLabel && <a href={block.ctaHref || "/#appointment"} className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-care-purple px-6 py-3 text-sm font-bold text-white">{block.ctaLabel}</a>}
                  </div>
                  {hasImage && block.layout === "image-right" && <div className="relative min-h-[300px] overflow-hidden rounded-[20px]"><Image src={block.image} alt={block.imageAlt || block.heading} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>}
                </div>
                {block.items.length > 0 && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.items.map((item, itemIndex) => <div key={itemIndex} className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(66,37,91,.08)]">{item.image && <div className="relative h-44"><Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" /></div>}<div className="p-5"><h3 className="text-lg font-bold text-care-purple">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#656078]">{item.description}</p></div></div>)}</div>}
              </article>
            );
          }
          if (block.kind === "section") {
            return (
              <article
                key={`${block.heading}-${index}`}
                id={slugifyHeading(block.heading)}
                className="mb-8 rounded-[22px] border border-[#eadff0] bg-white p-6 shadow-[0_14px_40px_rgba(66,37,91,.07)] sm:p-8 lg:p-10"
              >
                <h2 className="text-[26px] font-bold leading-tight text-care-navy sm:text-[32px]">
                  {block.heading}
                </h2>
                {block.lead && <p className="mt-4 text-[15px] leading-[1.8] text-[#656078]">{block.lead}</p>}
                {block.bullets?.length ? (
                  <ul className="mt-5 grid gap-3 pl-5 text-[15px] leading-[1.7] text-[#56516b] marker:text-care-gold [&>li]:list-disc">
                    {block.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
                  </ul>
                ) : null}
                {block.trailing && <p className="mt-5 text-[15px] leading-[1.8] text-[#656078]">{block.trailing}</p>}
              </article>
            );
          }

          if (block.kind === "alert") {
            return (
              <aside key={index} className="mb-8 rounded-[20px] border border-[#f3cf8f] bg-[#fff8ec] p-6 sm:p-8">
                <h2 className="flex items-center gap-3 text-[19px] font-bold text-[#a9681c]">
                  <AlertTriangleIcon className="size-6 shrink-0" />{block.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#71572f]">{block.body}</p>
              </aside>
            );
          }

          return (
            <aside key={index} className="mb-8 rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] p-6 sm:p-8">
              <p className="text-[16px] font-semibold leading-[1.8] text-[#45405a]">{block.body}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-care-purple">Key takeaway</p>
            </aside>
          );
        })}
      </div>
    </section>
  );
}
