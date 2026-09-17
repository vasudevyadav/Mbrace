"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import type { HomeData } from "@/lib/queries";
import type { DetailContent } from "./types";

type Props = {
  homeBlogs: HomeData["homeBlogs"];
  showDetails: (detail: DetailContent) => void;
};

export default function BlogsSection({ homeBlogs, showDetails }: Props) {

  return (
    <section id="blogs" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
      <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:gap-[75px] [&_.mb-heading]:mb-0">
        <Heading label="From Our Experts">About Women&apos;s Health,<br />Pregnancy &amp; Child Care</Heading>
        <div>
          <p>Real insights on women&apos;s health, pregnancy, child growth and fertility, from the doctors who treat you.</p>
          <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-blog-all max-[701px]:[float:none] max-[701px]:mt-4.5 min-[701px]:[float:right] min-[701px]:mt-[25px]" href="#blog-list">View All Blog</a>
        </div>
      </div>
      <div className="mb-blog-grid grid max-[1001px]:grid-cols-[repeat(2,1fr)] min-[1001px]:grid-cols-[repeat(4,1fr)] min-[1001px]:gap-5.5 max-[701px]:gap-[25px_15px] min-[701px]:max-[1001px]:gap-[30px_20px] [&_article]:flex [&_article]:flex-col max-[701px]:[&_.mb-photo]:h-50 min-[701px]:max-[1001px]:[&_.mb-photo]:h-55 min-[1001px]:[&_.mb-photo]:h-45 [&_.mb-photo]:rounded-[10px] [&_h3]:text-care-navy [&_h3]:font-semibold [&_h3]:leading-[1.6] [&_h3]:flex-1 max-[701px]:[&_h3]:text-[16px] max-[701px]:[&_h3]:mt-3.5 min-[701px]:[&_h3]:text-[15px] min-[701px]:[&_h3]:mt-4.5 mb-mobile-scroll max-[701px]:[&.mb-mobile-scroll]:grid max-[701px]:[&.mb-mobile-scroll]:grid-cols-[none] max-[701px]:[&.mb-mobile-scroll]:[grid-auto-flow:column] max-[701px]:[&.mb-mobile-scroll]:auto-cols-[min(84%,_320px)] max-[701px]:[&.mb-mobile-scroll]:gap-4 max-[701px]:[&.mb-mobile-scroll]:max-w-full max-[701px]:[&.mb-mobile-scroll]:overflow-x-auto max-[701px]:[&.mb-mobile-scroll]:overscroll-x-contain max-[701px]:[&.mb-mobile-scroll]:[scroll-snap-type:x_mandatory] max-[701px]:[&.mb-mobile-scroll]:[scroll-padding-inline:2px] max-[701px]:[&.mb-mobile-scroll]:pt-1 max-[701px]:[&.mb-mobile-scroll]:pr-0.5 max-[701px]:[&.mb-mobile-scroll]:pb-4.5 max-[701px]:[&.mb-mobile-scroll]:pl-0.5 max-[701px]:[&.mb-mobile-scroll]:[scrollbar-width:thin] max-[701px]:[&.mb-mobile-scroll]:[scrollbar-color:#b59bcf_#eee7f5] max-[701px]:[&>*]:min-w-0 max-[701px]:[&>*]:[scroll-snap-align:start] max-[701px]:[&>:last-child]:[scroll-snap-align:end]" id="blog-list" role="region" aria-label="Health articles — swipe to browse" tabIndex={0}>{homeBlogs.map(b => <article key={b.title}>
        <button type="button" className="mb-blog-image block w-full" onClick={() => showDetails({
          title: b.title,
          image: b.image,
          body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
        })} aria-label={`Read ${b.title}`}>
          <Photo src={b.image} alt={b.title} />
        </button>
        <h3>{b.title}</h3>
        <button className="mb-blog-more max-[701px]:text-[12px] max-[701px]:leading-[1.8] max-[701px]:min-h-11 min-[701px]:text-[11px] text-[#d99a36] text-left mt-3.5 [&_span]:ml-[5px] [&_span]:mr-[5px]" type="button" onClick={() => showDetails({
          title: b.title,
          image: b.image,
          body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
        })}>{b.date} <span aria-hidden="true">•</span> Read More</button>
      </article>)}</div>
    </section>
  );
}
