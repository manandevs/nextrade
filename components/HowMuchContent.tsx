/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export const HowMuchContent: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-3xl p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-telegraf uppercase tracking-widest text-[#3DDC97]">
                HOW MUCH CONTENT?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Hundreds of hours of on-demand video
              </h2>
              <p className="text-sm sm:text-base text-[#9AA8A1] leading-relaxed">
                Plus live sessions, templates, market breakdowns, and a supportive community of serious traders.
              </p>
              <div>
                <a
                  href="#content"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD43B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffdf64] transition-all shadow-[0_0_20px_rgba(255,212,59,0.3)]"
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Live Analysis Video Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#0A0F0D] border border-[#3DDC97]/30 rounded-2xl p-6 relative overflow-hidden shadow-xl space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C5C] animate-pulse" />
                    <span className="text-xs font-telegraf text-white">Live Analysis</span>
                  </div>
                  <span className="text-xs font-telegraf text-[#9AA8A1]">BTC/USDT • 1H</span>
                </div>

                {/* Candlestick Downtrend Chart with Red Arrow */}
                <div className="h-44 w-full bg-[#121B17] rounded-xl border border-[#3DDC97]/20 p-4 relative overflow-hidden flex flex-col justify-end">
                  <svg className="w-full h-28 overflow-visible" viewBox="0 0 400 120" fill="none">
                    <path
                      d="M 0 30 Q 100 60, 200 75 T 400 100"
                      stroke="#FF5C5C"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    {/* Red downward trend arrow */}
                    <path d="M 280 85 L 310 95 L 300 70 Z" fill="#FF5C5C" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#3DDC97] text-black flex items-center justify-center shadow-[0_0_25px_rgba(61,220,151,0.5)] cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-telegraf text-[#9AA8A1]">
                  <span>Technical Breakdown</span>
                  <span>12:34</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
