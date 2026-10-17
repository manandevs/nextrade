/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';

interface VideoItem {
  title: string;
  duration: string;
  level: string;
}

export const VideoLibrary: React.FC = () => {
  const favoriteStrategies: VideoItem[] = [
    { title: 'Smart Money Concepts', duration: '12:34', level: 'Beginner' },
    { title: 'Price Action Mastery', duration: '22:51', level: 'Intermediate' },
    { title: 'Trend Following', duration: '15:09', level: 'Intermediate' },
    { title: 'Risk to Reward', duration: '14:46', level: 'All Levels' },
  ];

  const riskManagement: VideoItem[] = [
    { title: 'Position Sizing', duration: '10:22', level: 'Beginner' },
    { title: 'Stop Loss Strategies', duration: '14:32', level: 'Intermediate' },
    { title: 'Portfolio Diversification', duration: '12:56', level: 'Intermediate' },
    { title: 'Psychology & Discipline', duration: '15:46', level: 'All Levels' },
  ];

  const renderCardRow = (title: string, items: VideoItem[]) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg text-white">{title}</h3>
        <a href="#all" className="text-xs font-mono text-[#3DDC97] hover:underline flex items-center gap-1">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0A0F0D] border border-[#3DDC97]/25 rounded-xl overflow-hidden group hover:border-[#3DDC97]/60 transition-all shadow-lg flex flex-col justify-between"
          >
            {/* Thumbnail Header */}
            <div className="relative h-36 bg-gradient-to-br from-[#121B17] via-[#0d1712] to-[#0A0F0D] p-4 flex flex-col justify-between border-b border-[#3DDC97]/15">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#9AA8A1]">
                <span>{item.duration}</span>
                <span className="px-2 py-0.5 rounded bg-[#3DDC97]/15 text-[#3DDC97]">{item.level}</span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#3DDC97] text-black flex items-center justify-center shadow-[0_0_20px_rgba(61,220,151,0.4)] group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Miniature Chart in Thumbnail */}
              <svg className="w-full h-10 opacity-40" viewBox="0 0 200 50" fill="none">
                <path d="M 0 40 Q 50 20, 100 30 T 200 10" stroke="#3DDC97" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Card Footer Title */}
            <div className="p-4">
              <h4 className="font-heading font-bold text-sm text-white group-hover:text-[#3DDC97] transition-colors">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bordered Panel Container */}
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-12">
          
          <div className="border-b border-[#3DDC97]/20 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3DDC97]">
              VIDEO LIBRARY
            </span>
          </div>

          {renderCardRow('My Favorite Strategies', favoriteStrategies)}
          {renderCardRow('Risk Management', riskManagement)}

        </div>

      </div>
    </section>
  );
};
