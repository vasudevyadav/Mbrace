"use client";

import { useId, useState } from "react";

export type LeadsTrendPoint = { label: string; fullLabel: string; count: number };

const WIDTH = 600;
const HEIGHT = 220;
const PAD_LEFT = 28;
const PAD_RIGHT = 12;
const PAD_TOP = 20;
const PAD_BOTTOM = 30;

export default function LeadsTrendChart({ data }: { data: LeadsTrendPoint[] }) {
  const gradientId = useId();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const innerWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
  const innerHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const maxCount = Math.max(1, ...data.map(d => d.count));
  const step = data.length > 1 ? innerWidth / (data.length - 1) : 0;

  const points = data.map((d, i) => ({
    ...d,
    x: PAD_LEFT + step * i,
    y: PAD_TOP + innerHeight - (d.count / maxCount) * innerHeight,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1]?.x.toFixed(1)},${PAD_TOP + innerHeight} L${points[0]?.x.toFixed(1)},${PAD_TOP + innerHeight} Z`;

  const gridY = [0, 0.5, 1].map(t => PAD_TOP + innerHeight * t);
  const activePoint = hoverIndex !== null ? points[hoverIndex] : null;

  function handleMove(event: React.PointerEvent<SVGRectElement>) {
    if (points.length === 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (points.length - 1));
    setHoverIndex(Math.min(points.length - 1, Math.max(0, index)));
  }

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Appointment leads received per day over the last 14 days">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9c6cbb" stopOpacity="0.32" />
            <stop offset="72%" stopColor="#d9c2e7" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridY.map(y => (
          <line key={y} x1={PAD_LEFT} x2={WIDTH - PAD_RIGHT} y1={y} y2={y} stroke="#eee8f1" strokeWidth="1" strokeDasharray="3 5" />
        ))}

        {points.length > 0 && (
          <>
            <path d={areaPath} fill={`url(#${gradientId})`} stroke="none" />
            <path className="admin-chart-line" d={linePath} fill="none" stroke="#76508f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {points.map((p, i) => (
          <g key={p.fullLabel}>
            {i % 2 === 0 && (
              <text x={p.x} y={HEIGHT - 8} textAnchor="middle" fontSize="9" fontWeight="600" fill="#a39aa8">
                {p.label}
              </text>
            )}
            {hoverIndex === i && (
              <>
                <line x1={p.x} x2={p.x} y1={PAD_TOP} y2={PAD_TOP + innerHeight} stroke="#9d78b6" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx={p.x} cy={p.y} r="5" fill="#76508f" stroke="white" strokeWidth="2.5" />
              </>
            )}
          </g>
        ))}

        <rect
          x={PAD_LEFT}
          y={PAD_TOP}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          onPointerMove={handleMove}
          onPointerLeave={() => setHoverIndex(null)}
        />
      </svg>

      {activePoint && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-lg bg-[#291e34] px-2.5 py-1.5 text-[11px] font-medium text-white shadow-lg"
          style={{ left: `${(activePoint.x / WIDTH) * 100}%`, top: `${(activePoint.y / HEIGHT) * 100 - 4}%` }}
        >
          <span className="block font-semibold">{activePoint.count} {activePoint.count === 1 ? "lead" : "leads"}</span>
          <span className="text-[#c9bdcf]">{activePoint.fullLabel}</span>
        </div>
      )}
    </div>
  );
}
