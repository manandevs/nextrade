/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const TradingForBetterWorld: React.FC = () => {
  const partners = ['Save the Children', 'unicef', 'World Food Programme', 'GREENPEACE'];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-telegraf uppercase tracking-widest text-[#3DDC97]">
                TRADING FOR A BETTER WORLD
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                We support charities that help create a fairer, healthier and more sustainable world.
              </h2>
              <p className="text-sm sm:text-base text-[#9AA8A1] leading-relaxed">
                Every member subscription contributes directly to global environmental and humanitarian initiatives.
              </p>

              {/* Partner Logos Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#3DDC97]/15">
                {partners.map((p, idx) => (
                  <div key={idx} className="bg-[#0A0F0D] p-3 rounded-xl border border-[#3DDC97]/20 flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#9AA8A1]">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sapling Photo Placeholder / Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#0A0F0D] via-[#122219] to-[#0A0F0D] border border-[#3DDC97]/40 overflow-hidden flex items-center justify-center shadow-inner group">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3DDC97_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="text-center space-y-2 z-10 p-6">
                  <div className="w-16 h-16 rounded-full bg-[#3DDC97]/20 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] mx-auto mb-2 group-hover:scale-110 transition-transform">
                    🌱
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">Sustainable Impact</h3>
                  <p className="text-xs text-[#9AA8A1]">Planting a greener future together</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
