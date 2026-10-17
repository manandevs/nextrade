/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onPickPlanClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPickPlanClick }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FFD43B] to-[#e6be2f] p-8 sm:p-14 overflow-hidden text-black shadow-2xl">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A0F0D_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 text-black text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Start Your Journey Today</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Ready to Build Your Trading Edge with NEXTRADE?
            </h2>

            <p className="text-base sm:text-lg text-black/80 font-sans max-w-2xl mx-auto">
              Join retail traders worldwide accessing live sessions, structured lessons, and daily market breakdowns.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onPickPlanClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black text-white font-semibold text-base hover:bg-neutral-900 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Pick Plan</span>
                <ArrowRight className="w-4 h-4 text-[#FFD43B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
