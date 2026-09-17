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
    const mobile = window.matchMedia("(max-width: 700px)");
    const tablet = window.matchMedia("(max-width: 1200px)");
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
    <section id="reviews" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-purple bg-care-purple text-white [&_.mb-heading_h2]:text-white mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="TESTIMONIALS">Heartfelt Stories Of<br />
            <em>Hope</em> &amp; <em>Success</em>
          </Heading>
          <div className="mb-rating max-[701px]:[justify-self:start] max-[701px]:text-[13px] min-[701px]:[justify-self:end] flex items-center [background:var(--care-gradient)] rounded-[10px] pt-3.5 pr-4.5 pb-3.5 pl-4.5 text-[#423e3e] max-[1001px]:gap-2 max-[1001px]:flex-wrap min-[1001px]:gap-3 min-[1001px]:text-[14px] min-[701px]:max-[1001px]:text-[12px] [&_strong]:text-care-purple [&_strong]:font-medium max-[1001px]:[&_strong]:text-[12px]">
            <Image src={asset(17)} alt="Google" width={25} height={25} />
            <span>Google Rating</span>
            <strong>4.9 <span aria-label="5 stars">★★★★★</span>
            </strong>
          </div>
        </div>
        <div className="mb-review-slider max-[701px]:block max-[701px]:gap-2.5 max-[701px]:min-w-0 min-[701px]:flex items-center mt-7 min-[701px]:max-[1001px]:gap-3 min-[1001px]:gap-5" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)}>
          <button type="button" className="mb-review-nav shrink-0 rounded-[50%] [background:rgba(255,255,255,0.15)] text-white items-center justify-center [transition:background_.2s] max-[701px]:w-8.5 max-[701px]:h-8.5 max-[701px]:hidden min-[701px]:w-11 min-[701px]:h-11 min-[701px]:flex [&:hover]:[background:rgba(255,255,255,0.28)] [&:disabled]:opacity-[.35] [&:disabled]:cursor-default [&:disabled:hover]:[background:rgba(255,255,255,0.15)] [&_svg]:w-4.5 [&_svg]:h-4.5 mb-review-prev" onClick={() => goToTestimonial(Math.round((reviewTrackRef.current?.scrollLeft || 0) / ((reviewTrackRef.current?.firstElementChild as HTMLElement)?.offsetWidth + 20 || 1)) - 1)} disabled={testimonialIndex === 0} aria-label="Previous testimonial">
            <ChevronIcon />
          </button>
          <div className="mb-review-track max-[701px]:[--items-per-view:1] max-[701px]:min-h-57.5 max-[701px]:overflow-x-auto max-[701px]:[scroll-snap-type:x_mandatory] max-[701px]:overscroll-x-contain max-[701px]:[scrollbar-width:thin] max-[701px]:[scrollbar-color:#fbad31_#ffffff25] max-[701px]:pb-3.5 min-[701px]:[--items-per-view:3] min-[701px]:min-h-[255px] relative flex gap-5 flex-1 overflow-hidden scroll-smooth motion-reduce:scroll-auto" role="region" aria-label="Patient stories — swipe to browse" tabIndex={0} ref={reviewTrackRef} style={{ "--items-per-view": testimonialsPerView } as CSSProperties} aria-live="polite">{homeTestimonials.map(t => <figure key={t.name} className="mb-review-slide [flex:0_0_calc((100%_-_(var(--items-per-view)_-_1)_*_20px)_/_var(--items-per-view))] [background:var(--care-gradient)] text-[#585454] rounded-[13px] flex flex-col max-[701px]:pt-[25px] max-[701px]:pr-[25px] max-[701px]:pb-[25px] max-[701px]:pl-[25px] max-[701px]:min-h-52.5 max-[701px]:[scroll-snap-align:start] min-[701px]:max-[1001px]:pt-6 min-[701px]:max-[1001px]:pr-5 min-[701px]:max-[1001px]:pb-6 min-[701px]:max-[1001px]:pl-5 min-[1001px]:pt-7 min-[1001px]:pr-6.5 min-[1001px]:pb-7 min-[1001px]:pl-6.5 [&_blockquote]:text-[14px] [&_blockquote]:flex-1 [&_blockquote]:leading-[1.7] [&_figcaption]:font-semibold [&_figcaption]:text-[15px] [&_figcaption]:mt-6.5">
            <p className="mb-stars text-care-purple tracking-[2px] text-[18px] mb-[17px]" aria-label="5 stars">★★★★★</p>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>{t.name}</figcaption>
          </figure>)}</div>
          <button type="button" className="mb-review-nav shrink-0 rounded-[50%] [background:rgba(255,255,255,0.15)] text-white items-center justify-center [transition:background_.2s] max-[701px]:w-8.5 max-[701px]:h-8.5 max-[701px]:hidden min-[701px]:w-11 min-[701px]:h-11 min-[701px]:flex [&:hover]:[background:rgba(255,255,255,0.28)] [&:disabled]:opacity-[.35] [&:disabled]:cursor-default [&:disabled:hover]:[background:rgba(255,255,255,0.15)] [&_svg]:w-4.5 [&_svg]:h-4.5 mb-review-next [&_svg]:[transform:rotate(180deg)]" onClick={() => goToTestimonial(Math.round((reviewTrackRef.current?.scrollLeft || 0) / ((reviewTrackRef.current?.firstElementChild as HTMLElement)?.offsetWidth + 20 || 1)) + 1)} disabled={testimonialIndex === testimonialMaxIndex} aria-label="Next testimonial">
            <ChevronIcon />
          </button>
        </div>{testimonialMaxIndex > 0 && <div className="mb-review-dots max-[701px]:hidden min-[701px]:flex justify-center gap-2 mt-5.5 [&_button]:w-[9px] [&_button]:h-[9px] [&_button]:rounded-[5px] [&_button]:[background:rgba(255,255,255,0.35)] [&_button]:pt-0 [&_button]:pr-0 [&_button]:pb-0 [&_button]:pl-0 [&_button]:[transition:background_.2s,_width_.2s] [&_button:hover]:[background:rgba(255,255,255,0.6)] [&_button.is-active]:bg-care-gold [&_button.is-active]:w-5.5" role="tablist" aria-label="Testimonial navigation">{Array.from({ length: testimonialMaxIndex + 1 }, (_, i) => <button key={i} type="button" role="tab" aria-selected={i === testimonialIndex} aria-label={`Show testimonials starting from slide ${i + 1}`} className={i === testimonialIndex ? "is-active" : ""} onClick={() => goToTestimonial(i)} />)}</div>}</div>
    </section>
  );
}
