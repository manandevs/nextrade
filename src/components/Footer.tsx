/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TrendingUp, ShieldAlert } from 'lucide-react';
import { RISK_DISCLAIMER_FULL } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0F0D] border-t border-[#3DDC97]/15 py-16 relative z-10 text-[#A7B3AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#3DDC97]/10 border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                NEXT<span className="text-[#3DDC97]">RADE</span>
              </span>
            </div>
            <p className="text-sm text-[#A7B3AD] max-w-md leading-relaxed">
              A subscription trading-education and community platform with live sessions, structured lessons, and daily market breakdowns for retail traders.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-[#3DDC97] transition-colors">Features</a></li>
              <li><a href="#curriculum" className="hover:text-[#3DDC97] transition-colors">Curriculum</a></li>
              <li><a href="#plans" className="hover:text-[#3DDC97] transition-colors">Plans</a></li>
              <li><a href="#faq" className="hover:text-[#3DDC97] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal / Placeholder Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#3DDC97] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#3DDC97] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#3DDC97] transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-[#3DDC97] transition-colors">Support Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Risk Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-[#101714] border border-[#3DDC97]/15 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3DDC97] uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Mandatory Risk & Compliance Notice</span>
          </div>
          <p className="text-xs text-[#A7B3AD]/80 leading-relaxed">
            {RISK_DISCLAIMER_FULL}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#3DDC97]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7B3AD]/60">
          <p>© {new Date().getFullYear()} NEXTRADE Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">NEXTRADE // EDUCATIONAL PLATFORM</p>
        </div>

      </div>
    </footer>
  );
};
