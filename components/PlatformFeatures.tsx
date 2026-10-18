/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle2, BarChart2, Zap, Shield, Smartphone, Activity } from "lucide-react";

const FEATURES = [
  {
    title: "Advanced Charting",
    description: "Multi-timeframe analysis with 80+ technical indicators and drawing tools.",
    icon: BarChart2,
  },
  {
    title: "One-Click Trading",
    description: "Execute orders instantly directly from charts with zero latency.",
    icon: Zap,
  },
  {
    title: "Risk Management Tools",
    description: "Built-in stop loss, take profit, and drawdown limit calculators.",
    icon: Shield,
  },
  {
    title: "Lightning-Fast Execution",
    description: "Average execution speed under 12ms with deep tier-1 liquidity.",
    icon: Activity,
  },
  {
    title: "Mobile App Access",
    description: "Monitor and manage your trades on the go with iOS and Android apps.",
    icon: Smartphone,
  },
  {
    title: "Advanced Analytics",
    description: "Detailed performance reports tracking win rate, profit factor, and trading psychology.",
    icon: CheckCircle2,
  },
];

export const PlatformFeatures: React.FC = () => {
  return (
    <section id="features" className="relative bg-[#F6FBF8] text-[#070D0A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy and features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="rounded-full border border-[#070D0A]/10 bg-[#FFD43B]/20 px-3.5 py-1 text-xs font-semibold text-[#070D0A]">
              Next-Gen Technology
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Built by Traders, for Professional Traders
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#070D0A]/70 leading-relaxed">
              Our custom-built platform combines institutional execution power with an intuitive, clutter-free interface designed for maximum precision and profitability.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex flex-col items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD43B] text-[#070D0A] font-bold shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#070D0A]">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#070D0A]/60 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[#070D0A]/10 bg-[#070D0A] p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FFD43B]" />
                  <span className="h-3 w-3 rounded-full bg-[#3DDC97]" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <span className="text-xs font-mono text-white/50">Nextrade Pro Terminal v4.2</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-xs text-white/50">Total Equity</p>
                  <p className="text-xl font-bold text-[#3DDC97] mt-1">$642,850.40</p>
                  <span className="text-[10px] text-[#3DDC97] bg-[#3DDC97]/10 px-1.5 py-0.5 rounded mt-2 inline-block">+14.2% this month</span>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-xs text-white/50">Win Rate</p>
                  <p className="text-xl font-bold text-[#FFD43B] mt-1">78.4%</p>
                  <span className="text-[10px] text-white/50 mt-2 inline-block">Over 240 trades</span>
                </div>
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-xs text-white/50">Profit Factor</p>
                  <p className="text-xl font-bold text-white mt-1">3.12</p>
                  <span className="text-[10px] text-[#3DDC97] mt-2 inline-block">Excellent</span>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="mt-6 rounded-xl bg-white/[0.02] p-4 border border-white/10 h-64 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>EUR/USD · 1H · Candlestick</span>
                  <span className="text-[#3DDC97]">1.08745 +0.34%</span>
                </div>
                <div className="relative h-36 w-full flex items-end gap-1.5 pt-4">
                  {[30, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 110, 105, 125, 120, 140].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#3DDC97]/20 to-[#3DDC97]"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/40 pt-2 border-t border-white/5">
                  <span>09:00</span>
                  <span>12:00</span>
                  <span>15:00</span>
                  <span>18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
