"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MbraceReelVideo from "../MbraceReelVideo";

type Tip = {
  id: number;
  title: string;
  doctorName: string;
  image: string;
  videoUrl: string;
};

const instagramReels = [
  { audioSrc: "/videos/mbrace-postpartum-recovery-audio.mp4", id: "DevqUErDwt6", src: "/videos/mbrace-postpartum-recovery.mp4", title: "Postpartum recovery and body changes" },
  { audioSrc: "/videos/mbrace-motherhood-strength-audio.mp4", id: "Desw7O4jjiD", src: "/videos/mbrace-motherhood-strength.mp4", title: "Celebrating strength through motherhood" },
  { audioSrc: "/videos/mbrace-labour-care-audio.mp4", id: "Den762iCqYH", src: "/videos/mbrace-labour-care.mp4", title: "Understanding real labour pain" },
  { audioSrc: "/videos/mbrace-baby-movements-audio.mp4", id: "Dejic1bDj7N", src: "/videos/mbrace-baby-movements.mp4", title: "Reduced baby movements during pregnancy" },
  { audioSrc: "/videos/mbrace-morning-sickness-audio.mp4", id: "DeeR749j1hb", src: "/videos/mbrace-morning-sickness.mp4", title: "Morning sickness during pregnancy" },
];

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
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const amount = (card?.offsetWidth ?? 300) + gap;
    const max = track.scrollWidth - track.clientWidth;
    const nextLeft = Math.min(max, Math.max(0, track.scrollLeft + amount * direction));
    track.scrollTo({ left: nextLeft, behavior: "smooth" });
  }

  return (
    <section id="doctors-talk" className="mb-section [font-family:var(--font-manrope)] py-12 md:py-15 lg:pt-[70px] lg:pb-[75px]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
        <p className="mb-[6px] text-[14px] font-bold leading-normal text-care-purple">Doctors Talk</p>
        <h2 className="mb-[52px] font-bold tracking-[-.5px] text-[#1f2b70] mb-8 text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2]">
          Our <span className="text-care-gold">Experts</span> Tips
        </h2>
        <div
          ref={trackRef}
          onScroll={updateProgress}
          className="flex gap-[35px] overflow-x-auto px-[5px] pb-3 -mx-[5px] scroll-smooth [overscroll-behavior-inline:contain] [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {instagramReels.map(reel => (
            <article
              key={reel.id}
              className="group relative h-[570px] w-[min(85vw,350px)] shrink-0 overflow-hidden rounded-[22px] border-5 border-white bg-white shadow-[0_0_23.9px_-5px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-500 ease-out [scroll-snap-align:start] lg:w-[380px] hover:-translate-y-1.5 hover:shadow-[0_18px_34px_-12px_rgba(31,43,112,.28)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <MbraceReelVideo
                src={reel.src}
                audioSrc={reel.audioSrc}
                ariaLabel={reel.title}
                autoPlay={false}
                clickToPlay
                className="h-full w-full bg-[#21172b] object-cover object-center"
              />
              <a href={`https://www.instagram.com/mbrace.care/reel/${reel.id}/`} target="_blank" rel="noreferrer" className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-sm hover:bg-care-purple">View on Instagram</a>
            </article>
          ))}
        </div>
        <div className="mt-[37px] flex items-center gap-[44px]">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#b8b8b8]">
            <div className="h-full rounded-full bg-care-purple transition-[width] duration-500 ease-out" style={{ width: `${33.75 + progress * 66.25}%` }} />
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={!canScrollBack} aria-label="Previous tip" className="flex size-10 items-center justify-center rounded-full border border-care-navy bg-white text-[20px] font-semibold text-care-navy transition-[transform,background-color,color,opacity] duration-300 enabled:hover:-translate-x-0.5 enabled:hover:bg-care-navy enabled:hover:text-white enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-35">←</button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={!canScrollForward} aria-label="Next tip" className="flex size-10 items-center justify-center rounded-full border border-care-navy bg-white text-[20px] font-semibold text-care-navy transition-[transform,background-color,color,opacity] duration-300 enabled:hover:translate-x-0.5 enabled:hover:bg-care-navy enabled:hover:text-white enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-35">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
