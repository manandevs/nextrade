/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trophy, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    { title: '#1 TRADER', icon: Trophy, subtitle: 'Industry Recognition' },
    { title: '$100M+ PROFITS', icon: TrendingUp, subtitle: 'Community Track Record' },
    { title: '10+ YEARS MENTORING', icon: Users, subtitle: 'Elite Experience' },
    { title: 'VERIFIED TRUSTED', icon: ShieldCheck, subtitle: 'Secure Platform' },
  ];

  return (
    <section className="py-12 border-y border-[#3DDC97]/20 bg-[#121B17]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#3DDC97]/20">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 lg:px-6 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-heading font-black text-xl sm:text-2xl font-neue text-[#3DDC97] tracking-tight">
                  {s.title}
                </div>
                <div className="text-xs font-medium text-[#9AA8A1]">
                  {s.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
