"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  function updateProgress() {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max <= 0 ? 0 : track.scrollLeft / max);
  }

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | undefined;
    const amount = (card?.offsetWidth ?? 300) + 24;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
    setTimeout(updateProgress, 350);
  }

  if (tips.length === 0) return null;

  return (
    <section id="doctors-talk" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
        <p className="mb-eyebrow text-[14px] font-bold text-care-purple mb-3">Doctors Talk</p>
        <h2 className="mb-7 font-bold text-[#1f2b70] max-[701px]:text-[28px] min-[701px]:text-[36px] min-[1001px]:text-[44px] leading-[1.2]">
          Our <span className="text-care-gold">Experts</span> Tips
        </h2>
        <div
          ref={trackRef}
          onScroll={updateProgress}
          className="flex gap-6 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:thin]"
        >
          {tips.map(tip => (
            <article
              key={tip.id}
              className="relative shrink-0 w-[min(85vw,350px)] h-116.5 rounded-[22px] overflow-hidden border-5 border-white shadow-[0_0_24px_-5px_rgba(0,0,0,0.1)] [scroll-snap-align:start]"
            >
              <Image src={tip.image} alt={tip.title} fill className="object-cover" />
              {tip.videoUrl && (
                <Link
                  href={tip.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch: ${tip.title}`}
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-care-purple shadow-lg"
                >
                  ▶
                </Link>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-white">
                <p className="text-[13px] font-medium leading-snug">{tip.title}</p>
                <span className="mt-2 inline-block rounded-[4px] bg-care-purple px-3 py-1 text-[11px] font-bold">{tip.doctorName}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex items-center gap-4">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#b8b8b8]">
            <div className="h-full rounded-full bg-care-purple transition-[width]" style={{ width: `${Math.max(8, progress * 100)}%` }} />
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous tip" className="flex h-10 w-10 items-center justify-center rounded-full border border-care-navy text-care-navy">←</button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Next tip" className="flex h-10 w-10 items-center justify-center rounded-full border border-care-navy text-care-navy">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
