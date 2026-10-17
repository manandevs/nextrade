/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WelcomeElite: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-3 text-left">
            <span className="text-xs font-telegraf uppercase tracking-widest text-[#3DDC97]">
              WELCOME TO THE ELITE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Join a community of serious traders
            </h2>
            <p className="text-sm text-[#9AA8A1] max-w-xl leading-relaxed">
              Get the tools, training and support you need to reach the next level. Trading involves risk. You can lose money. Past performance is not a guarantee of future results.
            </p>
          </div>

          <div>
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full bg-[#FFD43B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffdf64] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,212,59,0.3)] whitespace-nowrap"
            >
              <span>Join Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
