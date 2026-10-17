/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart } from 'lucide-react';

export const CharityBanner: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl py-6 px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-lg">
          <div className="w-10 h-10 rounded-full bg-[#3DDC97]/20 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] shrink-0">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
            <span className="text-white font-medium">A significant portion of all proceeds is donated to charity</span>
            <span className="hidden sm:inline text-[#3DDC97]">•</span>
            <span className="text-[#3DDC97] font-semibold font-mono">Better traders. A brighter future.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
