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
    <section id="blogs" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
      <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
        <Heading label="From Our Experts">About Women&apos;s Health,<br />Pregnancy &amp; Child Care</Heading>
        <div>
          <p>Real insights on women&apos;s health, pregnancy, child growth and fertility, from the doctors who treat you.</p>
          <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-[13px] pr-6 pb-[13px] pl-6 bg-care-purple text-white rounded-[6px] [border:0] text-[13px] font-extrabold no-underline [&:hover]:bg-[#603780] mb-blog-all [float:none] mt-4.5 md:[float:right] md:mt-[25px]" href="#blog-list">View All Blog</a>
        </div>
      </div>
      <div className="mb-blog-grid grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-10px)] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-[repeat(4,1fr)] lg:gap-5 gap-[25px_15px] md:gap-[30px_20px] overflow-x-auto lg:overflow-visible [scroll-snap-type:x_mandatory] overscroll-x-contain [scrollbar-width:thin] pb-2 lg:pb-0 [&_article]:flex [&_article]:flex-col [&_article]:[scroll-snap-align:start] [&_.mb-photo]:h-50 md:[&_.mb-photo]:h-55 lg:[&_.mb-photo]:h-42.5 [&_.mb-photo]:rounded-[10px] [&_h3]:text-care-navy [&_h3]:font-semibold [&_h3]:leading-[1.6] [&_h3]:flex-1 [&_h3]:text-[16px] [&_h3]:mt-3.5 md:[&_h3]:text-[16px] md:[&_h3]:mt-4.5 [&>*]:min-w-0" id="blog-list" role="region" aria-label="Health articles">{homeBlogs.map(b => <article key={b.title}>
        <button type="button" className="mb-blog-image block w-full" onClick={() => showDetails({
          title: b.title,
          image: b.image,
          body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
        })} aria-label={`Read ${b.title}`}>
          <Photo src={b.image} alt={b.title} />
        </button>
        <h3>{b.title}</h3>
        <button className="mb-blog-more text-[12px] leading-[1.8] min-h-11 md:text-[12px] text-care-gold font-semibold text-left mt-3.5 [&_span]:ml-[5px] [&_span]:mr-[5px]" type="button" onClick={() => showDetails({
          title: b.title,
          image: b.image,
          body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
        })}>{b.date} <span aria-hidden="true">•</span> Read More</button>
      </article>)}</div>
    </section>
  );
}
