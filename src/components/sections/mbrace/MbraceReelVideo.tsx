"use client";

import { useRef, useState } from "react";

export const mbraceInstagramUrl = "https://www.instagram.com/mbrace.care/";
export const mbraceReelUrl = "https://www.instagram.com/mbrace.care/reel/DevqUErDwt6/";

type MbraceReelVideoProps = {
  autoPlay?: boolean;
  className?: string;
  clickToPlay?: boolean;
};

export default function MbraceReelVideo({ autoPlay = true, className = "", clickToPlay = false }: MbraceReelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className={className}
        src="/videos/mbrace-postpartum-recovery.mp4"
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        aria-label="Postpartum recovery guidance from M’Brace"
        onClick={clickToPlay ? togglePlayback : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {clickToPlay && !isPlaying && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label="Play doctor video"
          className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-care-purple shadow-[0_10px_30px_rgba(0,0,0,.28)] transition-transform hover:scale-110 active:scale-95"
        >
          <span className="ml-1 text-[25px] leading-none">▶</span>
        </button>
      )}
    </div>
  );
}
