import { AlertTriangleIcon } from "@/components/icons/icons";
import { slugifyHeading, type BlogBlock } from "./blog/blogContent";

export default function DynamicPageSections({
  blocks,
}: {
  blocks: BlogBlock[];
}) {
  return (
    <section className="px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        {blocks.map((block, index) => {
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
