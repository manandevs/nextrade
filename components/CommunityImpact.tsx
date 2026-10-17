/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

export const CommunityImpact: React.FC = () => {
  const impacts = [
    { title: '$100K+', subtitle: 'Donated', icon: Heart },
    { title: '10+', subtitle: 'Non-profits supported', icon: Users },
    { title: '$25K', subtitle: 'Monthly goal', icon: Target },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121B17] border border-[#3DDC97]/25 rounded-2xl p-6 flex items-center gap-6 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] shrink-0">
                  <Icon className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="font-heading font-black text-3xl font-mono text-white tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-xs font-medium text-[#9AA8A1] uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
