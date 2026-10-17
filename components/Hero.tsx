/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import { ArrowLeftRight, ArrowUpRight, BadgeCheck, Share2, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REWARDS = [
  { name: "Ethereum (ETH)", sub: "Proof of Stake", rate: "13.65%", change: "+31.6%", up: true, glyph: "Ξ", color: "from-[#7C8CFF] to-[#4A5BDB]" },
  { name: "BNB Chain (BNB)", sub: "Proof of Stake", rate: "15.25%", change: "+31.6%", up: true, glyph: "B", color: "from-[#FFD43B] to-[#E0A800]" },
  { name: "Polygon (Matic)", sub: "Proof of Stake", rate: "11.45%", change: "-7.5%", up: false, glyph: "M", color: "from-[#A06BFF] to-[#6A35D9]" },
  { name: "Solana (SOL)", sub: "Proof of Stake", rate: "14.54%", change: "+31.6%", up: true, glyph: "S", color: "from-[#3DDC97] to-[#16A36A]" },
];

const TradeCard: React.FC = () => (
  <div className="relative w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#0F1613]/80 p-4 shadow-[0_0_80px_rgba(61,220,151,0.14)] backdrop-blur-xl sm:p-5">
    {/* Header */}
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5BF0AE] to-[#1FA36B] text-lg font-extrabold text-[#0A0F0D]">
        N
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white">BTC/USDT</p>
        <p className="truncate text-[10px] text-white/45">Bitcoin Token · 0×23A … 4F2Td</p>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {[ArrowLeftRight, Star, Share2].map((Icon, i) => (
          <span
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60"
          >
            <Icon className={cn("h-3.5 w-3.5", i === 1 && "fill-[#FFD43B] text-[#FFD43B]")} />
          </span>
        ))}
      </div>
      <span className="rounded-lg border border-white/20 px-4 py-1.5 text-xs font-medium text-white">
        Trade
      </span>
    </div>

    {/* Price */}
    <p className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      68,430.12$
    </p>
    <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
      <span className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#7C8CFF]" />
        0.2498488
      </span>
      <span className="flex items-center gap-1.5">
        24H: <span className="text-[#3DDC97]">+5.74</span>
        <span className="h-3 w-3 rounded-full bg-[#3DDC97]" />
      </span>
    </div>

    {/* Rewards grid */}
    <div className="mt-4 grid grid-cols-2 gap-2.5">
      {REWARDS.map((r) => (
        <div
          key={r.name}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[#3DDC97]/30"
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white",
                r.color
              )}
            >
              {r.glyph}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-white">{r.name}</p>
              <p className="text-[9px] text-white/40">{r.sub}</p>
            </div>
          </div>
          <p className="mt-3 text-[9px] text-white/40">Reward Rate</p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="text-lg font-semibold text-white">{r.rate}</span>
            <span
              className={cn(
                "rounded px-1 py-0.5 text-[8px] font-semibold",
                r.up ? "bg-[#3DDC97]/15 text-[#3DDC97]" : "bg-[#FF5C5C]/15 text-[#FF5C5C]"
              )}
            >
              {r.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-16 lg:py-24"
      style={{
        backgroundImage: "url('/images/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay + soft emerald glow */}
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
          {/* Left column */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-3.5 pr-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
              <span>Next-gen trading education</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-white">
                <BadgeCheck className="h-3 w-3 text-[#3DDC97]" />
                Success
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trade smarter.
              <br />
              Grow faster.
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Proven strategies, real market insights and a supportive community
              to help you become a consistently profitable trader.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants({ variant: "light", size: "lg", shape: "rounded" }),
                  "h-11 gap-2 px-6 text-[13px]"
                )}
              >
                Pick Plan
                <ArrowUpRight />
              </a>
              <a
                href="#curriculum"
                className={cn(
                  buttonVariants({ variant: "emerald", size: "lg", shape: "rounded" }),
                  "h-11 bg-gradient-to-b from-[#5BF0AE] to-[#2BB87A] px-6 text-[13px] shadow-[0_8px_30px_rgba(61,220,151,0.35)]"
                )}
              >
                Find Your Next Step
              </a>
            </div>
          </div>

          {/* Right column: trade card */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <TradeCard />
          </div>
        </div>
      </div>
    </section>
  );
};