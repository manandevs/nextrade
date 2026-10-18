/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TrendingUp, Globe, BarChart3, Coins, Building2 } from "lucide-react";

const MARKETS = [
  {
    title: "Forex",
    description: "Trade 50+ currency pairs with ultra-tight spreads from 0.0 pips and lightning-fast execution.",
    icon: Globe,
    pairs: "EUR/USD, GBP/USD, USD/JPY",
    spread: "From 0.0 pips",
    leverage: "1:100",
  },
  {
    title: "Crypto",
    description: "Access major digital assets including BTC, ETH, SOL, and BNB with deep institutional liquidity.",
    icon: Coins,
    pairs: "BTC/USDT, ETH/USDT, SOL/USDT",
    spread: "From 0.1 pips",
    leverage: "1:20",
  },
  {
    title: "Indices",
    description: "Speculate on global stock indices like US30, NAS100, and GER40 with zero commission.",
    icon: TrendingUp,
    pairs: "NAS100, US30, SPX500",
    spread: "From 0.4 pips",
    leverage: "1:50",
  },
  {
    title: "Commodities",
    description: "Diversify your portfolio with gold, silver, oil, and natural gas spot contracts.",
    icon: BarChart3,
    pairs: "XAU/USD, XAG/USD, WTI/USD",
    spread: "From 0.02 pips",
    leverage: "1:50",
  },
  {
    title: "Stocks",
    description: "Trade fractional and whole shares of leading US and European tech giants and blue chips.",
    icon: Building2,
    pairs: "AAPL, TSLA, NVDA, MSFT",
    spread: "Market spread",
    leverage: "1:10",
  },
];

export const MarketsWeOffer: React.FC = () => {
  return (
    <section id="markets" className="relative bg-[#070D0A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-[#3DDC97]">
            Global Asset Classes
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Markets We Offer
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
            Trade across multiple financial markets with institutional-grade liquidity and unmatched execution speed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((market) => {
            const Icon = market.icon;
            return (
              <div
                key={market.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E1813] p-6 transition-all duration-300 hover:border-[#3DDC97]/50 hover:shadow-[0_0_30px_rgba(61,220,151,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#3DDC97] group-hover:bg-[#3DDC97] group-hover:text-[#070D0A] transition-colors">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-md bg-[#3DDC97]/10 px-2.5 py-1 text-xs font-semibold text-[#3DDC97]">
                      {market.spread}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {market.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {market.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Top Pairs: <strong className="text-white font-medium">{market.pairs}</strong></span>
                  <span>Lev: {market.leverage}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketsWeOffer;
