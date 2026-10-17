/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalYellowBand: React.FC = () => {
  return (
    <section className="bg-[#FFD43B] py-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Ready to trade with an edge?
          </h2>

          <a
            href="#pricing"
            className="px-8 py-4 rounded-full bg-black text-[#FFD43B] font-extrabold text-sm uppercase tracking-wider hover:bg-neutral-900 transition-all shadow-xl flex items-center gap-3 whitespace-nowrap hover:scale-105"
          >
            <span>Pick Plan</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
};
