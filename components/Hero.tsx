/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import { Play, TrendingUp, Users, BookOpen, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Outlined Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3DDC97]/40 bg-[#3DDC97]/10 text-xs font-semibold text-[#3DDC97]">
              <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
              <span>Next-gen trading education</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05] text-white">
              TRADE SMARTER.<br />
              <span className="text-[#3DDC97]">GROW FASTER.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#9AA8A1] max-w-lg leading-relaxed font-sans">
              Proven strategies, real market insights and a supportive community to help you become a consistently profitable trader.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full bg-[#FFD43B] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#ffdf64] transition-all text-center shadow-[0_0_25px_rgba(255,212,59,0.3)] hover:scale-105"
              >
                Pick Plan →
              </a>
              <a
                href="#curriculum"
                className="px-8 py-4 rounded-full border border-[#3DDC97]/50 text-[#3DDC97] font-bold text-sm uppercase tracking-wider hover:bg-[#3DDC97]/10 transition-all text-center flex items-center justify-center gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-[#3DDC97]/20 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Find Your Next Step</span>
              </a>
            </div>

            {/* 4 Icon Items Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#3DDC97]/15">
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-[#3DDC97]" />
                <span className="text-xs font-medium text-[#9AA8A1]">Live Charts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#3DDC97]" />
                <span className="text-xs font-medium text-[#9AA8A1]">Expert Mentorship</span>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#3DDC97]" />
                <span className="text-xs font-medium text-[#9AA8A1]">Trading Community</span>
              </div>
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#3DDC97]" />
                <span className="text-xs font-medium text-[#9AA8A1]">Actionable Education</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dashboard Card Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none transform lg:rotate-1 lg:hover:rotate-0 transition-transform duration-500">
              
              {/* Outer Emerald Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3DDC97]/30 to-[#FFD43B]/20 rounded-2xl blur-xl opacity-75" />

              {/* Dashboard Container */}
              <div className="relative bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-6 shadow-2xl space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#3DDC97]/15 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#3DDC97]/20 flex items-center justify-center text-[#3DDC97]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-sm text-white tracking-wider">NEXTRADE</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-[#3DDC97]/10 text-[#3DDC97] border border-[#3DDC97]/20">
                    <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-ping" />
                    LIVE FEED
                  </div>
                </div>

                {/* Ticker & Chart Section */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#9AA8A1]">BTC/USDT</span>
                      <div className="font-heading text-2xl font-bold text-white font-mono mt-0.5">$68,430.12</div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#3DDC97]/20 text-[#3DDC97] font-semibold">
                      +2.45% (24h)
                    </span>
                  </div>

                  {/* SVG Candlestick Chart */}
                  <div className="h-44 w-full bg-[#0A0F0D] rounded-xl border border-[#3DDC97]/20 p-3 relative overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3DDC97_1px,transparent_1px)] [background-size:12px_12px]" />
                    <svg className="w-full h-28 overflow-visible" viewBox="0 0 400 120" fill="none">
                      <path
                        d="M 0 90 Q 60 70, 120 75 T 240 40 T 360 25 T 400 20"
                        stroke="#3DDC97"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <path
                        d="M 0 90 Q 60 70, 120 75 T 240 40 T 360 25 T 400 20 L 400 120 L 0 120 Z"
                        fill="url(#heroGrad)"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3DDC97" />
                          <stop offset="100%" stopColor="#3DDC97" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Timeframe buttons */}
                    <div className="flex items-center gap-1.5 pt-2 border-t border-[#3DDC97]/15">
                      {['1D', '1W', '1M', '1Y', 'All'].map((tf, idx) => (
                        <button
                          key={tf}
                          className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            idx === 2 ? 'bg-[#3DDC97] text-black font-bold' : 'bg-[#121B17] text-[#9AA8A1] hover:text-white'
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Watchlist & Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Watchlist */}
                  <div className="bg-[#0A0F0D] p-3.5 rounded-xl border border-[#3DDC97]/20 space-y-2">
                    <div className="text-[11px] font-mono text-[#9AA8A1] uppercase tracking-wider">Watchlist</div>
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between items-center"><span className="text-white">BTC</span><span className="text-[#3DDC97]">+2.48%</span></div>
                      <div className="flex justify-between items-center"><span className="text-white">ETH</span><span className="text-[#3DDC97]">+4.12%</span></div>
                      <div className="flex justify-between items-center"><span className="text-white">SOL</span><span className="text-[#FF5C5C]">-6.22%</span></div>
                      <div className="flex justify-between items-center"><span className="text-white">ADA</span><span className="text-[#3DDC97]">+1.87%</span></div>
                    </div>
                  </div>

                  {/* Portfolio */}
                  <div className="bg-[#0A0F0D] p-3.5 rounded-xl border border-[#3DDC97]/20 flex flex-col justify-between">
                    <div className="text-[11px] font-mono text-[#9AA8A1] uppercase tracking-wider">Portfolio</div>
                    <div>
                      <div className="font-heading text-lg font-bold text-white font-mono">$24,680.32</div>
                      <div className="text-xs font-mono text-[#3DDC97] mt-0.5">+12.8% (24h)</div>
                    </div>
                    <div className="w-full bg-[#121B17] h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-gradient-to-r from-[#3DDC97] to-[#FFD43B] h-full w-[78%]" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
