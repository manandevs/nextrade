
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TradeCard from "@/components/TradeCard";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "url('/images/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability Overlay + Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,15,13,0.85) 0%, rgba(10,15,13,0.35) 55%, rgba(10,15,13,0.1) 100%), radial-gradient(ellipse 45% 55% at 78% 40%, rgba(61,220,151,0.20), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-3.5 pr-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
              <span>Next-gen trading platform</span>

              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-white">
                <BadgeCheck className="h-3 w-3 text-[#3DDC97]" />
                NEXTRADE
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trade with clarity.
              <br />
              Grow with confidence.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Unlock smarter trading with NEXTRADE. Explore market insights,
              sharpen your trading strategies, and discover new opportunities
              with the tools and knowledge you need to make more informed
              decisions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({
                    variant: "light",
                    size: "lg",
                    shape: "rounded",
                  }),
                  "h-11 gap-2 px-6 text-[13px]"
                )}
              >
                Pick Your Plan
                <ArrowUpRight />
              </a>

              <a
                href="#curriculum"
                className={cn(
                  buttonVariants({
                    variant: "emerald",
                    size: "lg",
                    shape: "rounded",
                  }),
                  "h-11 bg-gradient-to-b from-[#5BF0AE] to-[#2BB87A] px-6 text-[13px] shadow-[0_8px_30px_rgba(61,220,151,0.35)]"
                )}
              >
                Explore the Platform
              </a>
            </div>
          </div>

          {/* Right Column: Separate TradeCard Component */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <TradeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
