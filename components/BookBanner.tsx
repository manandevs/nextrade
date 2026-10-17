/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BookBanner: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-telegraf uppercase tracking-widest text-[#3DDC97]">
                FEATURED IN A BOOK
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                THE COMPLETE GUIDE TO MODERN TRADING
              </h2>
              <p className="text-sm sm:text-base text-[#9AA8A1] max-w-xl leading-relaxed">
                A deep dive into strategy, psychology and risk management. Available now in bookstores and online.
              </p>
              <div>
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD43B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffdf64] transition-all shadow-[0_0_20px_rgba(255,212,59,0.3)]"
                >
                  <span>Get Your Copy</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right 3D Book Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 h-72 rounded-xl bg-gradient-to-br from-[#0A0F0D] via-[#15231b] to-[#0A0F0D] border-2 border-[#3DDC97]/50 shadow-[0_20px_50px_rgba(61,220,151,0.25)] p-6 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-2">
                  <div className="text-[10px] font-telegraf text-[#3DDC97] uppercase">Bestseller</div>
                  <h3 className="font-heading font-black text-lg text-white leading-tight uppercase">
                    MODERN TRADING
                  </h3>
                </div>

                <svg className="w-full h-20 opacity-60" viewBox="0 0 200 80" fill="none">
                  <path d="M 0 60 Q 50 20, 100 40 T 200 15" stroke="#3DDC97" strokeWidth="2.5" fill="none" />
                </svg>

                <div className="flex justify-between items-end text-[10px] font-telegraf text-[#9AA8A1]">
                  <span>NEXTRADE</span>
                  <span>EDITION</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
