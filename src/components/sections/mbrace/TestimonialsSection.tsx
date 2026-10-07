"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Heading from "./Heading";
import { ChevronIcon } from "@/components/icons/icons";
import { asset } from "./content";
import type { HomeData } from "@/lib/queries";

type Props = {
  homeTestimonials: HomeData["homeTestimonials"];
};

export default function TestimonialsSection({ homeTestimonials }: Props) {
  const [requestedTestimonialIndex, setTestimonialIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const reviewTrackRef = useRef<HTMLDivElement>(null);
  const testimonialMaxIndex = Math.max(0, homeTestimonials.length - testimonialsPerView);
  const testimonialIndex = Math.min(requestedTestimonialIndex, testimonialMaxIndex);
  function goToTestimonial(i: number) {
    setTestimonialIndex(Math.max(0, Math.min(i, testimonialMaxIndex)));
  }
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia("(max-width: 1279px)");
    const update = () => setTestimonialsPerView(mobile.matches ? 1 : tablet.matches ? 2 : 3);
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);
  useEffect(() => {
    const track = reviewTrackRef.current;
    const slide = track?.children[testimonialIndex] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, [testimonialIndex, testimonialsPerView]);
  useEffect(() => {
    if (reviewsPaused || testimonialsPerView === 1 || testimonialMaxIndex === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setTestimonialIndex(i => (i + 1) % (testimonialMaxIndex + 1)), 5000);
    return () => clearInterval(timer);
  }, [reviewsPaused, testimonialMaxIndex, testimonialsPerView]);
  return (
    <section id="reviews" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-purple bg-care-purple text-white [&_.mb-heading_h2]:text-white mb-rounded rounded-[20px] md:rounded-[24px] lg:rounded-[26px]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="TESTIMONIALS">Heartfelt Stories Of<br />
            <em className="not-italic text-care-gold font-extrabold">Hope</em> &amp; <em className="not-italic text-care-gold font-extrabold">Success</em>
          </Heading>
          <div className="mb-rating [justify-self:start] text-[13px] md:[justify-self:end] flex items-center [background:var(--care-gradient)] rounded-[10px] pt-3.5 pr-4.5 pb-3.5 pl-4.5 text-[#423e3e] gap-2 flex-wrap lg:gap-3.5 lg:pt-[18px] lg:pr-6 lg:pb-[18px] lg:pl-6 lg:text-[16px] md:text-[12px] [&_strong]:text-care-purple [&_strong]:font-medium [&_strong]:text-[12px]">
            <Image src={asset(17)} alt="Google" width={23} height={23} />
            <span>Google Rating</span>
            <strong>4.9 <span aria-label="5 stars">★★★★★</span>
            </strong>
          </div>
        </div>
        <div className="mb-review-slider block gap-2.5 min-w-0 md:flex items-center mt-7 md:gap-3 lg:gap-5" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)}>
          <button type="button" className="mb-review-nav shrink-0 rounded-[50%] [background:rgba(255,255,255,0.15)] text-white items-center justify-center [transition:background_.2s] w-8.5 h-8.5 hidden md:w-11 md:h-11 md:flex [&:hover]:[background:rgba(255,255,255,0.28)] [&:disabled]:opacity-[.35] [&:disabled]:cursor-default [&:disabled:hover]:[background:rgba(255,255,255,0.15)] [&_svg]:w-4.5 [&_svg]:h-4.5 mb-review-prev" onClick={() => goToTestimonial(Math.round((reviewTrackRef.current?.scrollLeft || 0) / ((reviewTrackRef.current?.firstElementChild as HTMLElement)?.offsetWidth + 20 || 1)) - 1)} disabled={testimonialIndex === 0} aria-label="Previous testimonial">
            <ChevronIcon />
          </button>
          <div className="mb-review-track [--items-per-view:1] min-h-57.5 overflow-x-auto [scroll-snap-type:x_mandatory] overscroll-x-contain [scrollbar-width:thin] [scrollbar-color:#fbad31_#ffffff25] pb-3.5 md:[--items-per-view:3] md:min-h-[255px] relative flex gap-5 lg:gap-5.5 flex-1 overflow-hidden scroll-smooth motion-reduce:scroll-auto" role="region" aria-label="Patient stories — swipe to browse" tabIndex={0} ref={reviewTrackRef} style={{ "--items-per-view": testimonialsPerView } as CSSProperties} aria-live="polite">{homeTestimonials.map(t => <figure key={t.name} className="mb-review-slide [flex:0_0_calc((100%_-_(var(--items-per-view)_-_1)_*_20px)_/_var(--items-per-view))] [background:var(--care-gradient)] text-[#585454] rounded-xl flex flex-col pt-[25px] pr-[25px] pb-[25px] pl-[25px] min-h-52.5 [scroll-snap-align:start] md:pt-6 md:pr-5 md:pb-6 md:pl-5 lg:pt-6.25 lg:pr-6.5 lg:pb-6.25 lg:pl-6.5 [&_blockquote]:text-[14px] [&_blockquote]:flex-1 [&_blockquote]:leading-[1.7] [&_figcaption]:font-semibold [&_figcaption]:text-[15px] [&_figcaption]:mt-6.5">
            <p className="mb-stars text-care-purple tracking-[2px] text-[18px] mb-[17px]" aria-label="5 stars">★★★★★</p>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>{t.name}</figcaption>
          </figure>)}</div>
          <button type="button" className="mb-review-nav shrink-0 rounded-[50%] [background:rgba(255,255,255,0.15)] text-white items-center justify-center [transition:background_.2s] w-8.5 h-8.5 hidden md:w-11 md:h-11 md:flex [&:hover]:[background:rgba(255,255,255,0.28)] [&:disabled]:opacity-[.35] [&:disabled]:cursor-default [&:disabled:hover]:[background:rgba(255,255,255,0.15)] [&_svg]:w-4.5 [&_svg]:h-4.5 mb-review-next [&_svg]:[transform:rotate(180deg)]" onClick={() => goToTestimonial(Math.round((reviewTrackRef.current?.scrollLeft || 0) / ((reviewTrackRef.current?.firstElementChild as HTMLElement)?.offsetWidth + 20 || 1)) + 1)} disabled={testimonialIndex === testimonialMaxIndex} aria-label="Next testimonial">
            <ChevronIcon />
          </button>
        </div>{testimonialMaxIndex > 0 && <div className="mb-review-dots hidden md:flex justify-center gap-2 mt-5.5 [&_button]:w-[9px] [&_button]:h-[9px] [&_button]:rounded-[5px] [&_button]:[background:rgba(255,255,255,0.35)] [&_button]:pt-0 [&_button]:pr-0 [&_button]:pb-0 [&_button]:pl-0 [&_button]:[transition:background_.2s,_width_.2s] [&_button:hover]:[background:rgba(255,255,255,0.6)] [&_button.is-active]:bg-care-gold [&_button.is-active]:w-5.5" role="tablist" aria-label="Testimonial navigation">{Array.from({ length: testimonialMaxIndex + 1 }, (_, i) => <button key={i} type="button" role="tab" aria-selected={i === testimonialIndex} aria-label={`Show testimonials starting from slide ${i + 1}`} className={i === testimonialIndex ? "is-active" : ""} onClick={() => goToTestimonial(i)} />)}</div>}</div>
    </section>
  );
}
