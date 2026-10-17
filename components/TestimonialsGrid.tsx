/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsGrid: React.FC = () => {
  const testimonials = [
    {
      quote: "NEXTRADE completely changed the way I trade. The education, tools and community are unmatched. I've grown my account consistently for over a year now.",
      name: "Alex R.",
      role: "Verified Trader",
      avatarBg: "from-[#3DDC97] to-[#121B17]",
    },
    {
      quote: "The strategies are practical and easy to follow. I've improved my consistency and confidence since switching to NEXTRADE.",
      name: "Taylor M.",
      role: "Long-term Investor",
      avatarBg: "from-[#FFD43B] to-[#121B17]",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121B17] border border-[#3DDC97]/25 rounded-2xl p-8 relative flex flex-col justify-between shadow-xl hover:border-[#3DDC97]/50 transition-colors"
            >
              {/* Large Quote Mark */}
              <div className="text-[#3DDC97] opacity-60 mb-4">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed font-sans mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#3DDC97]/15">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-black text-sm`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm">{t.name}</h3>
                    <p className="text-xs text-[#9AA8A1]">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3DDC97] text-[#3DDC97]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
