/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const TopicsIncluded: React.FC = () => {
  const topics = [
    'Price Action',
    'Risk Management',
    'Options',
    'Crypto',
    'Technical Analysis',
    'Trading Psychology',
    'Market News',
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3DDC97]">
          TOPICS INCLUDED
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full border border-[#3DDC97]/30 bg-[#121B17] text-xs font-bold text-white uppercase tracking-wider hover:border-[#3DDC97] transition-colors cursor-pointer"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
