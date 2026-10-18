/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import Link from "next/link";
import { Send, Globe, MessageSquare, Share2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070D0A] text-white pt-20 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & newsletter */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5BF0AE] to-[#1FA36B] font-extrabold text-[#0A0F0D]">
                N
              </span>
              <span className="text-xl font-bold tracking-tight text-white">NEXTRADE</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              A premium subscription trading-education and prop trading platform empowering retail traders worldwide with capital and advanced tools.
            </p>

            <div className="mt-6 w-full max-w-sm">
              <p className="text-xs font-semibold text-white/80 mb-2">Subscribe to market insights</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#3DDC97] focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3DDC97] text-[#070D0A] hover:bg-[#3DDC97]/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Careers <span className="text-[10px] bg-[#3DDC97]/20 text-[#3DDC97] px-1.5 py-0.5 rounded ml-1">We&apos;re hiring</span></Link></li>
              <li><Link href="#press" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Programs</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="#pricing" className="hover:text-white transition-colors">Advanced Program</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Elite $640k</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Elite + Mentorship</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">Evaluation Rules</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#risk" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
              <li><Link href="#refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom row: disclaimer & copyright */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-[11px] leading-relaxed text-white/40 max-w-3xl text-center lg:text-left">
            <strong>Risk Disclaimer:</strong> Trading financial instruments carries a high level of risk and may not be suitable for all investors. Content provided on Nextrade is for educational and training purposes only and does not constitute financial advice. Past performance is not indicative of future results.
          </p>

          <div className="flex items-center gap-4 text-white/60">
            <a href="https://globe.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><MessageSquare className="h-5 w-5" /></a>
            <a href="https://share.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Share2 className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p>© 2026 Nextrade Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for professional retail traders worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
