/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const FeaturedOn: React.FC = () => {
  const partners = ['Bloomberg', 'Forbes', 'yahoo!finance', 'CoinDesk', 'BUSINESS INSIDER'];

  return (
    <section className="py-12 border-y border-[#3DDC97]/15 bg-[#121B17]/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-xs font-neue uppercase tracking-widest text-[#9AA8A1]">
          Featured On
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, idx) => (
            <React.Fragment key={partner}>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-wider text-white uppercase font-neue">
                {partner}
              </span>
              {idx < partners.length - 1 && (
                <span className="hidden md:inline-block w-px h-6 bg-[#3DDC97]/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
