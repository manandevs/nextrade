/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Tv, GraduationCap, MessageSquareShare, BarChart3, ShieldCheck, Compass } from 'lucide-react';
import { WHY_FEATURES } from '../data/content';

export const WhyNextrade: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-[#3DDC97]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#3DDC97]" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-6 h-6 text-[#3DDC97]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#3DDC97]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#3DDC97]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#3DDC97]" />;
      default:
        return <BarChart3 className="w-6 h-6 text-[#3DDC97]" />;
    }
  };

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-wider text-[#3DDC97] uppercase">
            Platform Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Why Retail Traders Choose <span className="text-[#3DDC97]">NEXTRADE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3AD]">
            Designed to cut through market noise with rigorous education, real-time sessions, and a focused peer community.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="next-card p-8 flex flex-col justify-between space-y-6 bg-[#101714]"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A0F0D] border border-[#3DDC97]/30 flex items-center justify-center">
                  {getIcon(feature.iconName)}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#A7B3AD] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3DDC97]/10 flex items-center justify-between text-xs text-[#3DDC97]">
                <span>Explore Module</span>
                <span className="font-mono">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
