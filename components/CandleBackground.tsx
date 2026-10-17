"use client";

import React, { useMemo } from "react";
import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Data (deterministic -> no hydration mismatch)                       */
/* ------------------------------------------------------------------ */
type Candle = {
  i: number;
  open: number;
  close: number;
  high: number;
  low: number;
  range: [number, number]; // [low, high] drives the wick bar
  trend: number; // curve value
};

function buildData(count: number): Candle[] {
  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const center = 30 + t * 42 + Math.sin(i * 0.85) * 7 + Math.cos(i * 2.1) * 3;
    const body =
      4 + Math.abs(Math.sin(i * 1.7)) * 9 + (i === Math.round(count / 2) ? 10 : 0);
    const bull = Math.sin(i * 1.3 + 0.5) > -0.35; // ~70% bullish
    const open = bull ? center - body / 2 : center + body / 2;
    const close = bull ? center + body / 2 : center - body / 2;
    const high = Math.max(open, close) + 3 + Math.abs(Math.sin(i * 3.1)) * 5;
    const low = Math.min(open, close) - 3 - Math.abs(Math.cos(i * 2.3)) * 5;
    return {
      i,
      open,
      close,
      high,
      low,
      range: [low, high],
      trend: center + Math.sin(i * 0.35) * 8 - 4,
    };
  });
}

/* ------------------------------------------------------------------ */
/* Custom candle (wick + body) drawn inside a Recharts <Bar>           */
/* ------------------------------------------------------------------ */
interface ShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: Candle;
  index?: number;
}

const CandleShape = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
  index = 0,
}: ShapeProps) => {
  if (!payload) return null;
  const { open, close, high, low } = payload;
  const bull = close >= open;
  const h = Math.abs(height);
  const unit = h / Math.max(high - low, 0.0001);
  const bodyTop = y + (high - Math.max(open, close)) * unit;
  const bodyH = Math.max(Math.abs(close - open) * unit, 2);
  const cx = x + width / 2;
  const bw = Math.min(width, 9);

  return (
    <g
      className="cb-candle"
      style={{ animationDelay: `${(index * 0.12).toFixed(2)}s` }}
    >
      <line
        x1={cx}
        x2={cx}
        y1={y}
        y2={y + h}
        stroke={bull ? "#3DDC97" : "#FF5C5C"}
        strokeOpacity={bull ? 0.45 : 0.3}
        strokeWidth={1.2}
      />
      <rect
        x={cx - bw / 2}
        y={bodyTop}
        width={bw}
        height={bodyH}
        rx={2.5}
        fill={bull ? "url(#cb-bull)" : "url(#cb-bear)"}
      />
    </g>
  );
};

/* Glowing dot on selected points of the curve */
const makeDot =
  (marks: number[]) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (p: any) => {
    const { cx, cy, index } = p as { cx: number; cy: number; index: number };
    if (!marks.includes(index)) return <g key={`d-${index}`} />;
    return (
      <g key={`d-${index}`}>
        <circle
          className="cb-halo"
          cx={cx}
          cy={cy}
          r={20}
          fill="url(#cb-halo)"
          style={{ animationDelay: `${marks.indexOf(index) * 0.7}s` }}
        />
        <circle cx={cx} cy={cy} r={3.6} fill="#B8FFDD" />
      </g>
    );
  };

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
interface CandleBackgroundProps {
  /** Number of candles (default 44) */
  count?: number;
  className?: string;
}

export const CandleBackground: React.FC<CandleBackgroundProps> = ({
  count = 44,
  className,
}) => {
  const data = useMemo(() => buildData(count), [count]);
  const marks = useMemo(
    () => [0.35, 0.5, 0.7].map((r) => Math.round((count - 1) * r)),
    [count]
  );
  const dot = useMemo(() => makeDot(marks), [marks]);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative w-full select-none", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
      }}
    >
      <style>{`
        @keyframes cb-wave {
          0%   { opacity: .55; filter: none; }
          3%   { opacity: 1;   filter: drop-shadow(0 0 7px rgba(61,220,151,.9)); }
          8%   { opacity: .55; filter: none; }
          100% { opacity: .55; filter: none; }
        }
        @keyframes cb-all {
          0%, 52%   { filter: brightness(1); }
          58%, 64%  { filter: brightness(1.8) drop-shadow(0 0 14px rgba(61,220,151,.5)); }
          72%, 100% { filter: brightness(1); }
        }
        @keyframes cb-halo {
          0%, 100% { opacity: .35; transform: scale(.8); }
          50%      { opacity: .95; transform: scale(1.15); }
        }
        .cb-candle { animation: cb-wave 12s ease-in-out infinite; }
        .cb-all    { animation: cb-all 12s ease-in-out infinite; }
        .cb-halo   { transform-box: fill-box; transform-origin: center; animation: cb-halo 3.6s ease-in-out infinite; }
        .cb-curve  { filter: drop-shadow(0 0 6px rgba(61,220,151,.75)); }
        @media (prefers-reduced-motion: reduce) {
          .cb-candle, .cb-all, .cb-halo { animation: none; }
          .cb-candle { opacity: .75; }
        }
      `}</style>

      {/* Shared gradients (referenced by url(#id)) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cb-bull" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7DFFC0" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#2FBF7F" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0E3B28" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="cb-bear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5C5C" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3B1212" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="cb-halo">
            <stop offset="0%" stopColor="#3DDC97" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3DDC97" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="cb-all h-[220px] w-full md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
            barCategoryGap={0}
          >
            <XAxis dataKey="i" hide />
            <YAxis hide domain={[10, 90]} />

            <Bar
              dataKey="range"
              barSize={10}
              isAnimationActive={false}
              shape={(p: ShapeProps) => <CandleShape {...p} />}
            />

            <Line
              className="cb-curve"
              type="monotone"
              dataKey="trend"
              stroke="#5BF0AE"
              strokeWidth={1.6}
              dot={dot}
              activeDot={false}
              isAnimationActive
              animationDuration={2800}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};