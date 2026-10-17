/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Clock, BookOpen } from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/content';

interface CurriculumProps {
  onPickPlanClick: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onPickPlanClick }) => {
  return (
    <section id="curriculum" className="py-24 relative z-10 bg-[#101714]/30 border-y border-[#3DDC97]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-wider text-[#3DDC97] uppercase">
            Structured Learning
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            What's Inside <span className="text-[#3DDC97]">NEXTRADE</span> Curriculum
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3AD]">
            Step-by-step masterclasses designed for beginner and intermediate retail traders.
          </p>
        </div>

        {/* Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURRICULUM_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="next-card overflow-hidden flex flex-col justify-between bg-[#101714] group"
            >
              {/* Video Thumbnail Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#0A0F0D] via-[#15231b] to-[#0A0F0D] p-6 flex flex-col justify-between border-b border-[#3DDC97]/15">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#3DDC97]/10 border border-[#3DDC97]/30 text-[#3DDC97]">
                    MODULE {mod.number}
                  </span>
                  <span className="font-mono text-xs text-[#A7B3AD]">
                    {mod.level}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#3DDC97] text-black flex items-center justify-center shadow-lg shadow-[#3DDC97]/30 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#A7B3AD] z-10">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#3DDC97]" /> {mod.lessonCount}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#3DDC97]" /> {mod.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#3DDC97] transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#A7B3AD] leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3DDC97]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#A7B3AD]">Included in membership</span>
                  <button
                    onClick={onPickPlanClick}
                    className="text-xs font-semibold text-[#3DDC97] hover:underline cursor-pointer"
                  >
                    Unlock Access →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
