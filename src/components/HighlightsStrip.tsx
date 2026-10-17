/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Radio, BookOpen, Users, LineChart } from 'lucide-react';
import { HIGHLIGHTS } from '../data/content';

export const HighlightsStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#3DDC97]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#3DDC97]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#3DDC97]" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-[#3DDC97]" />;
      default:
        return <LineChart className="w-6 h-6 text-[#3DDC97]" />;
    }
  };

  return (
    <section className="py-12 border-y border-[#3DDC97]/15 bg-[#101714]/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="next-card p-6 flex items-start gap-4 bg-[#101714]"
            >
              <div className="p-3 rounded-xl bg-[#0A0F0D] border border-[#3DDC97]/20 shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A7B3AD] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
