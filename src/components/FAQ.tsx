/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10 bg-[#101714]/30 border-y border-[#3DDC97]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono tracking-wider text-[#3DDC97] uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Got Questions About <span className="text-[#3DDC97]">NEXTRADE</span>?
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3AD]">
            Clear answers regarding membership, curriculum, billing, and risk.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="next-card overflow-hidden bg-[#101714]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC97] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-[#0A0F0D] border border-[#3DDC97]/20 flex items-center justify-center text-[#3DDC97] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#A7B3AD] leading-relaxed border-t border-[#3DDC97]/10 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
