"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Tip = {
  id: number;
  title: string;
  doctorName: string;
  image: string;
  videoUrl: string;
};

export default function DoctorTipsSection({ tips }: { tips: Tip[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const nextProgress = max <= 0 ? 0 : track.scrollLeft / max;
    setProgress(nextProgress);
    setCanScrollBack(track.scrollLeft > 2);
    setCanScrollForward(track.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateProgress();
    const observer = new ResizeObserver(updateProgress);
    observer.observe(track);
    return () => observer.disconnect();
  }, [tips.length, updateProgress]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | undefined;
    const amount = (card?.offsetWidth ?? 300) + 35;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  if (tips.length === 0) return null;

  const figmaPosters: Record<string, string> = {
    "Mosquitoes Love Clean Water! Check Your Balcony Today": "/images/figma/doctor-tip-mosquito.png",
    "How to Check Fever in Children": "/images/figma/doctor-tip-fever-poster.png",
    "Why Couples Struggle to Conceive?": "/images/figma/doctor-tip-conceive.png",
  };

  return (
    <section id="doctors-talk" className="mb-section [font-family:var(--font-manrope)] max-[701px]:py-12 min-[701px]:max-[1001px]:py-15 min-[1001px]:pt-[70px] min-[1001px]:pb-[75px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
        <p className="mb-[6px] text-[14px] font-bold leading-normal text-care-purple">Doctors Talk</p>
        <h2 className="mb-[52px] font-bold tracking-[-.5px] text-[#1f2b70] max-[701px]:mb-8 max-[701px]:text-[28px] min-[701px]:text-[36px] min-[1001px]:text-[44px] leading-[1.2]">
          Our <span className="text-care-gold">Experts</span> Tips
        </h2>
        <div
          ref={trackRef}
          onScroll={updateProgress}
          className="flex gap-[35px] overflow-x-auto px-[5px] pb-3 -mx-[5px] scroll-smooth [overscroll-behavior-inline:contain] [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tips.map((tip, index) => (
            <article
              key={tip.id}
              className="group relative h-[467px] w-[min(85vw,350px)] shrink-0 overflow-hidden rounded-[22px] border-5 border-white bg-[#1e1e1e] shadow-[0_0_23.9px_-5px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-500 ease-out [scroll-snap-align:start] hover:-translate-y-1.5 hover:shadow-[0_18px_34px_-12px_rgba(31,43,112,.28)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <Image
                src={figmaPosters[tip.title] ?? tip.image}
                alt={`${tip.title} by ${tip.doctorName}`}
                fill
                sizes="(min-width: 1000px) 350px, 85vw"
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none ${index === 1 ? "opacity-[.37] transition-[transform,opacity] group-hover:opacity-50" : ""}`}
              />
              {index === 1 && (
                <a
                  href={tip.videoUrl || undefined}
                  target={tip.videoUrl ? "_blank" : undefined}
                  rel={tip.videoUrl ? "noreferrer" : undefined}
                  aria-label={`Watch: ${tip.title}`}
                  className="absolute left-1/2 top-1/2 flex size-[57px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-care-purple shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-[transform,background-color,color,box-shadow] duration-300 ease-out hover:scale-110 hover:bg-care-purple hover:text-white hover:shadow-[0_12px_28px_rgba(118,75,158,.35)] active:scale-95 motion-reduce:transition-none"
                  onClick={tip.videoUrl ? undefined : event => event.preventDefault()}
                >
                  <span className="ml-1 text-[22px] leading-none">▶</span>
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="mt-[37px] flex items-center gap-[44px]">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#b8b8b8]">
            <div className="h-full rounded-full bg-care-purple transition-[width] duration-500 ease-out" style={{ width: `${33.75 + progress * 66.25}%` }} />
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" onClick={() => scrollByCard(-1)} aria-disabled={!canScrollBack} aria-label="Previous tip" className="flex size-10 items-center justify-center rounded-full border border-care-navy bg-white text-[20px] font-semibold text-care-navy transition-[transform,background-color,color] duration-300 hover:-translate-x-0.5 hover:bg-care-navy hover:text-white active:scale-95">←</button>
            <button type="button" onClick={() => scrollByCard(1)} aria-disabled={!canScrollForward} aria-label="Next tip" className="flex size-10 items-center justify-center rounded-full border border-care-navy bg-white text-[20px] font-semibold text-care-navy transition-[transform,background-color,color] duration-300 hover:translate-x-0.5 hover:bg-care-navy hover:text-white active:scale-95">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
