/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, TrendingUp, MessageSquare, Share2, Video, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0F0D] border-t border-[#3DDC97]/20 pt-20 pb-12 text-[#9AA8A1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Trustpilot */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-extrabold tracking-wider text-white uppercase">
                NEXT<span className="text-[#3DDC97]">RADE</span>
              </span>
            </div>

            <p className="text-sm font-medium text-white">
              Better Traders. A Brighter Future.
            </p>

            {/* Trustpilot-style row */}
            <div className="p-4 rounded-xl bg-[#121B17] border border-[#3DDC97]/20 inline-flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#3DDC97] text-[#3DDC97]" />
                ))}
              </div>
              <div className="text-xs font-mono text-white">
                <strong className="text-[#3DDC97]">4.8/5</strong> from 12,000+ traders
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#discord" className="w-10 h-10 rounded-full bg-[#121B17] border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors" aria-label="Discord">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#social" className="w-10 h-10 rounded-full bg-[#121B17] border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#video" className="w-10 h-10 rounded-full bg-[#121B17] border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors" aria-label="Video">
                <Video className="w-4 h-4" />
              </a>
              <a href="#globe" className="w-10 h-10 rounded-full bg-[#121B17] border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] hover:bg-[#3DDC97]/20 transition-colors" aria-label="Global">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#platform" className="hover:text-[#3DDC97] transition-colors">Platform</a></li>
              <li><a href="#mentorship" className="hover:text-[#3DDC97] transition-colors">Mentorship</a></li>
              <li><a href="#newsletter" className="hover:text-[#3DDC97] transition-colors">Newsletter</a></li>
              <li><a href="#content" className="hover:text-[#3DDC97] transition-colors">Content</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#help" className="hover:text-[#3DDC97] transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-[#3DDC97] transition-colors">Contact</a></li>
              <li><a href="#terms" className="hover:text-[#3DDC97] transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-[#3DDC97] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Get the App */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Get the App</h4>
            <div className="space-y-3">
              <a href="#apple" className="block px-4 py-3 rounded-xl bg-[#121B17] border border-[#3DDC97]/30 text-white font-mono text-xs text-center hover:border-[#3DDC97] transition-colors">
                 App Store
              </a>
              <a href="#google" className="block px-4 py-3 rounded-xl bg-[#121B17] border border-[#3DDC97]/30 text-white font-mono text-xs text-center hover:border-[#3DDC97] transition-colors">
                Google Play
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Bar */}
        <div className="pt-12 border-t border-[#3DDC97]/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#9AA8A1]/70">
          <p className="max-w-2xl leading-relaxed">
            Trading involves risk. You can lose money. Past performance is not a guarantee of future results.
          </p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
