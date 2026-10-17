"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { prefix: "", value: 130, suffix: "+", label: "Countries" },
  { prefix: "", value: 34, suffix: "K+", label: "Qualified Analysis" },
  { prefix: "", value: 320, suffix: "+", label: "Traders" },
  { prefix: "", value: 17, suffix: "K", label: "Virtual Strategies" },
  { prefix: "$", value: 320, suffix: "M+", label: "Performance Fee" },
];

/* Count-up that runs once when scrolled into view */
const Stat: React.FC<(typeof STATS)[number] & { className?: string }> = ({
  prefix,
  value,
  suffix,
  label,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? value
      : 0
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-2 px-4 py-2", className)}>
      <span className="text-3xl font-semibold text-[#3DDC97] sm:text-4xl">
        {prefix}
        {n}
        {suffix}
      </span>
      <span className="text-xs text-white/60 sm:text-[13px]">{label}</span>
    </div>
  );
};

export const FeaturedOn: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rating pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">Excellent</span>

            <span className="flex items-center gap-0.5" aria-label="Rated 4.5 out of 5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="relative flex h-[18px] w-[18px] items-center justify-center overflow-hidden rounded-[3px] bg-white/10"
                >
                  {/* filled portion (last star is half) */}
                  <span
                    className="absolute inset-y-0 left-0 bg-[#00B67A]"
                    style={{ width: i === 4 ? "50%" : "100%" }}
                  />
                  <Star className="relative h-3 w-3 fill-white text-white" />
                </span>
              ))}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
              <Star className="h-3.5 w-3.5 fill-[#00B67A] text-[#00B67A]" />
              Trustpilot
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-5 md:gap-y-0">
          {STATS.map((s, idx) => (
            <Stat
              key={s.label}
              {...s}
              className={cn(
                idx > 0 && "md:border-l md:border-white/10",
                idx === STATS.length - 1 && "col-span-2 md:col-span-1"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};