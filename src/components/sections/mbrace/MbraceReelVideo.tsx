"use client";

import { useEffect, useId, useRef, useState } from "react";

export const mbraceInstagramUrl = "https://www.instagram.com/mbrace.care/";
export const mbraceReelUrl = "https://www.instagram.com/mbrace.care/reel/DevqUErDwt6/";

type MbraceReelVideoProps = {
  ariaLabel?: string;
  audioSrc?: string;
  autoPlay?: boolean;
  className?: string;
  clickToPlay?: boolean;
  src?: string;
};

export default function MbraceReelVideo({ ariaLabel = "Health guidance from M’Brace", audioSrc, autoPlay = true, className = "", clickToPlay = false, src = "/videos/mbrace-postpartum-recovery.mp4" }: MbraceReelVideoProps) {
  const playerId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!clickToPlay) return;

    function pauseWhenAnotherVideoStarts(event: Event) {
      const playingId = (event as CustomEvent<string>).detail;
      if (playingId === playerId) return;
      videoRef.current?.pause();
      audioRef.current?.pause();
    }

    window.addEventListener("mbrace-video-play", pauseWhenAnotherVideoStarts);
    return () => window.removeEventListener("mbrace-video-play", pauseWhenAnotherVideoStarts);
  }, [clickToPlay, playerId]);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      window.dispatchEvent(new CustomEvent("mbrace-video-play", { detail: playerId }));
      if (audioRef.current) {
        audioRef.current.currentTime = video.currentTime;
        await Promise.all([video.play(), audioRef.current.play()]);
      } else {
        await video.play();
      }
    } else {
      video.pause();
      audioRef.current?.pause();
    }
  }

  function syncAudio() {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio || Math.abs(audio.currentTime - video.currentTime) < 0.3) return;
    audio.currentTime = video.currentTime;
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className={className}
        src={src}
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        aria-label={ariaLabel}
        onClick={clickToPlay ? togglePlayback : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false);
          audioRef.current?.pause();
        }}
        onSeeked={syncAudio}
        onTimeUpdate={syncAudio}
      />
      {audioSrc && <audio ref={audioRef} src={audioSrc} loop preload="metadata" />}
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
