/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TrendingUp, Play, ShieldAlert, CheckCircle2, ArrowUpRight, BarChart2 } from 'lucide-react';
import { RISK_DISCLAIMER_SHORT } from '../data/content';

interface HeroProps {
  onPickPlanClick: () => void;
  onSeeInsideClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPickPlanClick, onSeeInsideClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3DDC97]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101714] border border-[#3DDC97]/30 text-xs font-medium text-[#3DDC97]">
              <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
              <span>Next-Gen Trading Education & Community Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-wrap balance">
              Master the Markets with <span className="text-[#3DDC97]">Discipline & Edge</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#A7B3AD] font-sans max-w-2xl leading-relaxed">
              A subscription trading-education and community platform built for retail traders. Access live sessions, structured lessons, and daily market breakdowns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onPickPlanClick}
                className="px-8 py-4 rounded-xl bg-[#FFD43B] text-black font-semibold text-base hover:bg-[#ffdf64] transition-all duration-200 shadow-lg shadow-[#FFD43B]/15 hover:shadow-[#FFD43B]/30 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Pick Plan
              </button>
              <button
                onClick={onSeeInsideClick}
                className="px-8 py-4 rounded-xl border border-[#3DDC97] text-[#3DDC97] font-semibold text-base hover:bg-[#3DDC97]/10 transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See what's inside</span>
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Risk Note */}
            <div className="flex items-start gap-2 pt-4 text-xs text-[#A7B3AD]/70 max-w-xl">
              <ShieldAlert className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
              <p>{RISK_DISCLAIMER_SHORT}</p>
            </div>

          </div>

          {/* Right Column: Polished Trading Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow border wrapper */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3DDC97]/30 to-[#FFD43B]/20 rounded-2xl blur-md opacity-75" />

              {/* Dashboard Container */}
              <div className="relative next-card p-6 space-y-6 bg-[#101714]/90 backdrop-blur-xl">
                
                {/* Header of Mockup */}
                <div className="flex items-center justify-between border-b border-[#3DDC97]/15 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-[#3DDC97]" />
                    <span className="text-xs font-mono text-[#A7B3AD] ml-2">NEXTRADE // LIVE TERMINAL</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#3DDC97]/10 text-[#3DDC97]">
                    ACTIVE SESSION
                  </span>
                </div>

                {/* Chart Preview Widget */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-white">SP500 / INDEX // 1H</span>
                    <span className="text-[#3DDC97] font-mono flex items-center gap-1">
                      <ArrowUpRight className="w-3.5 h-3.5" /> +1.42%
                    </span>
                  </div>
                  
                  {/* SVG Chart Preview */}
                  <div className="h-40 w-full bg-[#0A0F0D] rounded-xl border border-[#3DDC97]/10 p-3 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3DDC97_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <svg className="w-full h-28 overflow-visible" viewBox="0 0 300 100" fill="none">
                      <path
                        d="M 0 80 Q 50 60, 100 65 T 200 30 T 300 15"
                        stroke="#3DDC97"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <path
                        d="M 0 80 Q 50 60, 100 65 T 200 30 T 300 15 L 300 100 L 0 100 Z"
                        fill="url(#chartGrad)"
                        opacity="0.25"
                      />
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3DDC97" />
                          <stop offset="100%" stopColor="#3DDC97" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Watchlist & Lesson Card Mini Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0A0F0D] p-3.5 rounded-xl border border-[#3DDC97]/10">
                    <div className="text-[11px] text-[#A7B3AD]">TODAY'S SETUP</div>
                    <div className="text-sm font-semibold text-white mt-1">Breakout Retest</div>
                    <div className="text-xs text-[#3DDC97] font-mono mt-1">High Confluence</div>
                  </div>
                  <div className="bg-[#0A0F0D] p-3.5 rounded-xl border border-[#3DDC97]/10">
                    <div className="text-[11px] text-[#A7B3AD]">LESSON MODULE</div>
                    <div className="text-sm font-semibold text-white mt-1">Risk Engineering</div>
                    <div className="text-xs text-[#FFD43B] font-mono mt-1">8 Lessons • 2h</div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-[#A7B3AD] pt-2 border-t border-[#3DDC97]/15">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" /> Members online
                  </span>
                  <span className="font-mono text-[#3DDC97]">1,420+ traders</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
