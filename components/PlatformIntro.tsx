/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { Video, TrendingUp, Headphones, FileText, BarChart3, Users, Calendar } from 'lucide-react';

export const PlatformIntro: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Videos');

  const tabs = [
    { name: 'Videos', icon: Video },
    { name: 'Top Opps', icon: TrendingUp },
    { name: 'AMAs', icon: Headphones },
    { name: 'Templates', icon: FileText },
    { name: 'Daily Report Cards', icon: BarChart3 },
    { name: 'Community', icon: Users },
    { name: 'Meetups', icon: Calendar },
  ];

  return (
    <section id="platform" className="py-20 bg-[#121B17]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="space-y-3">
          <span className="text-xs font-telegraf uppercase tracking-widest text-[#3DDC97]">
            THE NEXTRADE PLATFORM
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            NO GIMMICKS. NO FLUFF.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA8A1] max-w-xl mx-auto">
            Everything you need to trade, learn and grow — in one place.
          </p>
        </div>

        {/* Icon Tab Row */}
        <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto py-4 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#3DDC97]/15 border-[#3DDC97] text-[#3DDC97] shadow-[0_0_15px_rgba(61,220,151,0.2)]'
                    : 'bg-[#121B17] border-[#3DDC97]/20 text-[#9AA8A1] hover:text-white hover:border-[#3DDC97]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
