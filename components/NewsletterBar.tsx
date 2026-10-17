/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export const NewsletterBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-16 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B17] border border-[#3DDC97]/30 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] shrink-0 mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-xl text-white uppercase">
                  JOIN OUR NEWSLETTER
                </h3>
                <p className="text-sm text-[#9AA8A1]">
                  Get trading insights, education content and exclusive updates.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#3DDC97]/20 border border-[#3DDC97] text-white">
                  <Check className="w-5 h-5 text-[#3DDC97]" />
                  <span className="text-sm font-semibold">Successfully subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-5 py-4 rounded-xl bg-[#0A0F0D] border border-[#3DDC97]/30 text-white placeholder-[#9AA8A1]/50 text-sm focus:outline-none focus:border-[#3DDC97]"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-[#FFD43B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffdf64] transition-all shadow-[0_0_20px_rgba(255,212,59,0.3)] whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
