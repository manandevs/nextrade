
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

type StatProps = (typeof STATS)[number] & {
  className?: string;
};

/* Count-up animation that runs once when the statistic enters view. */
const Stat: React.FC<StatProps> = ({
  prefix,
  value,
  suffix,
  label,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const startTime = performance.now();
      const duration = 1500;

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer?.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-2 px-4 py-2 text-center",
        className
      )}
    >
      <span className="text-3xl font-semibold tracking-tight text-[#3DDC97] sm:text-4xl">
        {prefix}
        {count}
        {suffix}
      </span>

      <span className="text-xs text-white/60 sm:text-[13px]">
        {label}
      </span>
    </div>
  );
};

export const FeaturedOn: React.FC = () => {
  return (
    <section
      className="relative py-12 sm:py-16"
      aria-label="Platform rating and statistics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rating pill */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Excellent
            </span>

            <span
              className="flex items-center gap-0.5"
              role="img"
              aria-label="Rated 4.5 out of 5"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <span
                  key={index}
                  className="relative flex h-[18px] w-[18px] items-center justify-center overflow-hidden rounded-[3px] bg-white/10"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-[#00B67A]"
                    style={{
                      width: index === 4 ? "50%" : "100%",
                    }}
                  />

                  <Star className="relative z-10 h-3 w-3 fill-white text-white" />
                </span>
              ))}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
              <Star className="h-3.5 w-3.5 fill-[#00B67A] text-[#00B67A]" />
              Trustpilot
            </span>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-5 md:gap-y-0">
          {STATS.map((stat, index) => (
            <Stat
              key={stat.label}
              {...stat}
              className={cn(
                "relative",
                index > 0 &&
                  index !== 2 &&
                  "md:border-l md:border-white/10",
                index === STATS.length - 1 &&
                  "col-span-2 md:col-span-1"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
