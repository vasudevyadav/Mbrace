"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Photo from "./Photo";
import Heading from "./Heading";
import type { HomeData } from "@/lib/queries";
import type { DetailContent } from "./types";

type Props = {
  homeBlogs: HomeData["homeBlogs"];
  showDetails: (detail: DetailContent) => void;
};

export default function BlogsSection({ homeBlogs, showDetails }: Props) {
  const [requestedBlogIndex, setBlogIndex] = useState(0);
  const [blogsPerView, setBlogsPerView] = useState(4);
  const blogTrackRef = useRef<HTMLDivElement>(null);
  const blogMaxIndex = Math.max(0, homeBlogs.length - blogsPerView);
  const blogIndex = Math.min(requestedBlogIndex, blogMaxIndex);
  function goToBlog(i: number) {
    setBlogIndex(Math.max(0, Math.min(i, blogMaxIndex)));
  }
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia("(max-width: 1023px)");
    const update = () =>
      setBlogsPerView(mobile.matches ? 1 : tablet.matches ? 2 : 4);
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);
  useEffect(() => {
    const track = blogTrackRef.current;
    const slide = track?.children[blogIndex] as HTMLElement | undefined;
    if (track && slide)
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, [blogIndex, blogsPerView]);

  return (
    <section
      id="blogs"
      className="mb-section pt-12 pb-12 lg:pt-12 lg:pb-12 [&_p]:leading-[1.65] mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]"
    >
      <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
        <Heading label="From Our Experts">
          About Women&apos;s Health,
          <br />
          Pregnancy &amp; Child Care
        </Heading>
        <div>
          <p>
            Real insights on women&apos;s health, pregnancy, child growth and
            fertility, from the doctors who treat you.
          </p>
          <a
            className="mb-button inline-flex items-center justify-center min-h-11.5 pt-[13px] pr-6 pb-[13px] pl-6 bg-care-purple text-white rounded-[6px] [border:0] text-[13px] font-extrabold no-underline [&:hover]:bg-[#603780] mb-blog-all [float:none] mt-4.5 md:[float:right] md:mt-[25px]"
            href="#blog-list"
          >
            View All Blog
          </a>
        </div>
      </div>
      <div className="mb-blog-slider min-w-0">
        <div
          id="blog-list"
          className="mb-blog-grid [--items-per-view:1] overflow-x-auto md:[--items-per-view:2] lg:[--items-per-view:4] [scroll-snap-type:x_mandatory] overscroll-x-contain [scrollbar-width:thin] pb-2 lg:pb-0 relative flex gap-[15px] overflow-hidden scroll-smooth motion-reduce:scroll-auto md:gap-5 [&>article]:[flex:0_0_calc((100%_-_(var(--items-per-view)_-_1)_*_15px)_/_var(--items-per-view))] [&>article]:[scroll-snap-align:start] [&>article]:flex [&>article]:flex-col [&>article]:min-w-0 [&_.mb-photo]:h-50 md:[&_.mb-photo]:h-55 lg:[&_.mb-photo]:h-42.5 [&_.mb-photo]:rounded-[10px] [&_h3]:text-care-navy [&_h3]:font-bold [&_h3]:leading-[1.6] [&_h3]:flex-1 [&_h3]:text-[16px] [&_h3]:mt-3.5 md:[&_h3]:text-[16px] md:[&_h3]:mt-4.5 lg:[&_h3]:mt-3 [&_.mb-blog-more]:lg:mt-3"
          role="region"
          aria-label="Health articles — swipe to browse"
          tabIndex={0}
          ref={blogTrackRef}
          style={{ "--items-per-view": blogsPerView } as CSSProperties}
        >
          {homeBlogs.map((b) => {
            const openDetails = () =>
              showDetails({
                title: b.title,
                image: b.image,
                body: "For personalised guidance on this topic, speak with our multidisciplinary care team.",
              });
            return (
              <article key={b.title}>
                {b.slug ? (
                  <Link
                    href={`/blog/${b.slug}`}
                    className="mb-blog-image block w-full"
                    aria-label={`Read ${b.title}`}
                  >
                    <Photo src={b.image} alt={b.title} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mb-blog-image block w-full"
                    onClick={openDetails}
                    aria-label={`Read ${b.title}`}
                  >
                    <Photo src={b.image} alt={b.title} />
                  </button>
                )}
                <h3>{b.title}</h3>
                {b.slug ? (
                  <Link
                    href={`/blog/${b.slug}`}
                    className="mb-blog-more text-[12px] leading-[1.8] min-h-11 md:text-[12px] text-care-gold font-semibold text-left mt-3.5 [&_span]:ml-[5px] [&_span]:mr-[5px]"
                  >
                    {b.date} <span aria-hidden="true">•</span> Read More
                  </Link>
                ) : (
                  <button
                    className="mb-blog-more text-[12px] leading-[1.8] min-h-11 md:text-[12px] text-care-gold font-semibold text-left mt-3.5 [&_span]:ml-[5px] [&_span]:mr-[5px]"
                    type="button"
                    onClick={openDetails}
                  >
                    {b.date} <span aria-hidden="true">•</span> Read More
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
      {blogMaxIndex > 0 && (
        <div
          className="mb-blog-dots flex justify-center gap-2 mt-5.5 [&_button]:w-[9px] [&_button]:h-[9px] [&_button]:rounded-[5px] [&_button]:bg-care-soft [&_button]:pt-0 [&_button]:pr-0 [&_button]:pb-0 [&_button]:pl-0 [&_button]:transition-[background,width] [&_button:hover]:bg-[#efe7f8] [&_button[aria-selected=true]]:bg-care-gold [&_button[aria-selected=true]]:w-5.5"
          role="tablist"
          aria-label="Blog slider navigation"
        >
          {Array.from({ length: blogMaxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === blogIndex}
              aria-label={`Show articles starting from slide ${i + 1}`}
              onClick={() => goToBlog(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
