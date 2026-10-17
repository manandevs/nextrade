/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

interface NavbarProps {
  onPickPlanClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPickPlanClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Plans', href: '#plans' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F0D]/85 backdrop-blur-md border-b border-[#3DDC97]/15 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#3DDC97]/10 border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97] group-hover:bg-[#3DDC97]/20 transition-colors">
            <TrendingUp className="w-5 h-5" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            NEXT<span className="text-[#3DDC97]">RADE</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A7B3AD]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3DDC97] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onPickPlanClick}
            className="px-5 py-2.5 rounded-xl bg-[#FFD43B] text-black font-semibold text-sm hover:bg-[#ffdf64] transition-all duration-200 shadow-md shadow-[#FFD43B]/10 hover:shadow-[#FFD43B]/25 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            Pick Plan
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#A7B3AD] hover:text-white hover:bg-[#101714] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0F0D]/95 backdrop-blur-xl border-b border-[#3DDC97]/20 px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#A7B3AD] hover:text-[#3DDC97] py-2 transition-colors border-b border-[#101714]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPickPlanClick();
                }}
                className="w-full py-3 rounded-xl bg-[#FFD43B] text-black font-semibold text-sm text-center shadow-lg hover:bg-[#ffdf64] transition-colors"
              >
                Pick Plan
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
