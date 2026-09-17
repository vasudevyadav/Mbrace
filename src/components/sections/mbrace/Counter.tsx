"use client";

import { useEffect, useRef, useState } from "react";

function parseCounterValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseFloat(numStr.replace(/,/g, "")), suffix };
}

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { prefix, target, suffix } = parseCounterValue(value);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || done) return;
        done = true;
        const duration = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${Math.round(target * eased).toLocaleString("en-US")}${suffix}`);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      });
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefix, target, suffix]);
  return <strong ref={ref}>{display}</strong>;
}
