/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, TrendingUp } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F0D]/90 backdrop-blur-md border-b border-[#3DDC97]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] group-hover:bg-[#3DDC97]/25 transition-colors shadow-[0_0_15px_rgba(61,220,151,0.2)]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-wider text-white uppercase">
            NEXT<span className="text-[#3DDC97]">RADE</span>
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9AA8A1]">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#mentorship" className="hover:text-white transition-colors">Mentorship</a>
          <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            <span>Content</span>
            <ChevronDown className="w-4 h-4 text-[#3DDC97]" />
          </div>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#login" className="text-sm font-medium text-[#9AA8A1] hover:text-white transition-colors">
            Login
          </a>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-full bg-[#FFD43B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ffdf64] transition-all shadow-[0_0_20px_rgba(255,212,59,0.25)] hover:scale-105"
          >
            Pick Plan →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#9AA8A1] hover:text-white hover:bg-[#121B17]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F0D] border-b border-[#3DDC97]/20 px-6 py-6 space-y-4">
          <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#9AA8A1] hover:text-white py-2">Platform</a>
          <a href="#mentorship" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#9AA8A1] hover:text-white py-2">Mentorship</a>
          <a href="#newsletter" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#9AA8A1] hover:text-white py-2">Newsletter</a>
          <a href="#content" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#9AA8A1] hover:text-white py-2">Content</a>
          <div className="pt-4 border-t border-[#3DDC97]/15 flex flex-col gap-3">
            <a href="#login" className="text-center py-2 text-[#9AA8A1]">Login</a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#FFD43B] text-black font-bold text-xs uppercase text-center tracking-wider"
            >
              Pick Plan →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
