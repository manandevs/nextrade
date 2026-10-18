/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Trophy, ArrowUpRight, ShieldCheck } from "lucide-react";

const TRADERS = [
  { rank: 1, name: "Alexander V.", country: "Germany", profit: "$248,500", program: "Elite Mentorship", date: "Today" },
  { rank: 2, name: "Jessica T.", country: "United States", profit: "$195,200", program: "Elite $640k", date: "Today" },
  { rank: 3, name: "Hiroshi S.", country: "Japan", profit: "$162,400", program: "Advanced", date: "Yesterday" },
  { rank: 4, name: "Matteo R.", country: "Italy", profit: "$141,900", program: "Elite $640k", date: "Yesterday" },
  { rank: 5, name: "Chloe D.", country: "Australia", profit: "$128,700", program: "Elite Mentorship", date: "2 days ago" },
];

export const PayoutsLeaderboard: React.FC = () => {
  return (
    <section id="payouts" className="relative bg-[#FFD43B] text-[#070D0A] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-[#070D0A]/20 bg-[#070D0A]/10 px-3.5 py-1 text-xs font-semibold text-[#070D0A]">
            Verified Payout Leaderboard
          </span>
          <h2 className="mt-4 text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
            $320M+ Paid Out
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-[#070D0A]/80 leading-relaxed">
            We celebrate our traders&apos; success with prompt, automated payouts sent directly to bank accounts and crypto wallets worldwide.
          </p>
        </div>

        {/* Live Payout Ticker */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#070D0A] text-white p-4 shadow-xl">
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#3DDC97]">
              <span className="h-2 w-2 rounded-full bg-[#3DDC97] animate-pulse" />
              LIVE PAYOUT:
            </span>
            <span>Lucas M. (FR) withdrew $14,250</span>
            <span className="text-white/30">•</span>
            <span>Anna K. (DE) withdrew $28,900</span>
            <span className="text-white/30">•</span>
            <span>David W. (US) withdrew $51,400</span>
            <span className="text-white/30">•</span>
            <span>Kenji O. (JP) withdrew $19,800</span>
            <span className="text-white/30">•</span>
            <span>Sophia B. (UK) withdrew $34,600</span>
          </div>
        </div>

        {/* Top 5 Traders Table */}
        <div className="mt-12 rounded-2xl border border-[#070D0A]/15 bg-white/40 backdrop-blur-md overflow-hidden shadow-lg">
          <div className="p-6 border-b border-[#070D0A]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-[#070D0A]" />
              <h3 className="text-lg font-semibold text-[#070D0A]">Top Funded Traders This Month</h3>
            </div>
            <span className="text-xs font-medium text-[#070D0A]/60 flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-[#00B67A]" /> Verified Audited Stats
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#070D0A]/10 text-xs text-[#070D0A]/60 uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Rank</th>
                  <th className="py-4 px-6 font-semibold">Trader</th>
                  <th className="py-4 px-6 font-semibold">Country</th>
                  <th className="py-4 px-6 font-semibold">Program</th>
                  <th className="py-4 px-6 font-semibold">Total Payout</th>
                  <th className="py-4 px-6 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#070D0A]/10 text-sm">
                {TRADERS.map((trader) => (
                  <tr key={trader.rank} className="hover:bg-[#070D0A]/5 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold">#{trader.rank}</td>
                    <td className="py-4 px-6 font-medium text-[#070D0A]">{trader.name}</td>
                    <td className="py-4 px-6 text-[#070D0A]/80">{trader.country}</td>
                    <td className="py-4 px-6">
                      <span className="rounded-md bg-[#070D0A]/10 px-2.5 py-1 text-xs font-medium">
                        {trader.program}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-[#070D0A]">{trader.profit}</td>
                    <td className="py-4 px-6 text-right font-medium text-[#00B67A] flex items-center justify-end gap-1">
                      Paid <ArrowUpRight className="h-4 w-4" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayoutsLeaderboard;
