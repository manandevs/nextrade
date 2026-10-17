/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

export const WhyLearnWithUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "NEXTRADE&apos;s education is top tier. I finally have a clear plan and it works.",
      name: "Chris P.",
      role: "Swing Trader",
    },
    {
      quote: "The mentorship and support are incredible. I&apos;ve grown 3x in 6 months.",
      name: "Morgan S.",
      role: "Day Trader",
    },
    {
      quote: "The community is like nothing else. Always helpful and motivated.",
      name: "Jamie L.",
      role: "Position Trader",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3DDC97]">
              WHY LEARN WITH US?
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Real strategies. Real results.
            </h2>
            <p className="text-base sm:text-lg text-[#9AA8A1]">
              Join thousands of successful traders who&apos;ve transformed their skills and their portfolios.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-3 rounded-full bg-[#121B17] border border-[#3DDC97]/30 text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-full bg-[#121B17] border border-[#3DDC97]/30 text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Video Card */}
          <div className="lg:col-span-6 bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="relative h-64 bg-gradient-to-br from-[#0A0F0D] via-[#101c16] to-[#0A0F0D] rounded-xl flex items-center justify-center border border-[#3DDC97]/20">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3DDC97_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="w-16 h-16 rounded-full bg-[#3DDC97] text-black flex items-center justify-center shadow-[0_0_25px_rgba(61,220,151,0.5)] group-hover:scale-110 transition-transform z-10">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-[#9AA8A1]">
                <span className="text-white font-semibold">Strategy. Discipline. Results.</span>
                <span>12:48</span>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                <div className="text-[#3DDC97]">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <p className="text-white text-lg sm:text-xl leading-relaxed font-sans">
                  &ldquo;{testimonials[currentSlide].quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-[#3DDC97]/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3DDC97] to-[#121B17] flex items-center justify-center font-bold text-black text-sm">
                    {testimonials[currentSlide].name[0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base">{testimonials[currentSlide].name}</h4>
                    <p className="text-xs text-[#9AA8A1]">{testimonials[currentSlide].role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#3DDC97] text-[#3DDC97]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 pt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-[#3DDC97]' : 'w-2 bg-[#121B17] border border-[#3DDC97]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
