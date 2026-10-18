
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeftRight, Share2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number | null;
};

const COINS = [
  {
    id: "ethereum",
    name: "Ethereum",
    sub: "ETH",
    glyph: "Ξ",
    color: "from-[#7C8CFF] to-[#4A5BDB]",
  },
  {
    id: "binancecoin",
    name: "BNB Chain",
    sub: "BNB",
    glyph: "B",
    color: "from-[#FFD43B] to-[#E0A800]",
  },
  {
    id: "matic-network",
    name: "Polygon",
    sub: "POL / MATIC",
    glyph: "M",
    color: "from-[#A06BFF] to-[#6A35D9]",
  },
  {
    id: "solana",
    name: "Solana",
    sub: "SOL",
    glyph: "S",
    color: "from-[#3DDC97] to-[#16A36A]",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: price < 1 ? 6 : 2,
  }).format(price);

const formatChange = (change: number | null) => {
  if (change === null || !Number.isFinite(change)) return "N/A";

  return `${change > 0 ? "+" : ""}${change.toFixed(2)}%`;
};

const TradeCard: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchMarketData = async () => {
      try {
        const response = await fetch("/api/crypto");

        if (!response.ok) {
          throw new Error("Failed to fetch market data");
        }

        const data: Coin[] = await response.json();

        if (active) {
          setCoins(data);
          setError(false);
        }
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchMarketData();

    const interval = window.setInterval(fetchMarketData, 60_000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const bitcoin = coins.find((coin) => coin.id === "bitcoin");

  return (
    <div className="relative w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#0F1613]/80 p-4 shadow-[0_0_80px_rgba(61,220,151,0.14)] backdrop-blur-xl sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5BF0AE] to-[#1FA36B] text-lg font-extrabold text-[#0A0F0D]">
          N
        </span>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">BTC/USDT</p>
          <p className="truncate text-xs text-white/45">
            Bitcoin · Live market data
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[ArrowLeftRight, Star, Share2].map((Icon, i) => (
            <span
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60"
            >
              <Icon
                className={cn(
                  "h-3.5 w-3.5",
                  i === 1 && "fill-[#FFD43B] text-[#FFD43B]"
                )}
              />
            </span>
          ))}
        </div>

        <span className="rounded-lg border border-white/20 px-4 py-1.5 text-xs font-medium text-white">
          Market
        </span>
      </div>

      {/* Bitcoin Price */}
      <p className="mt-5 break-all text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {loading && !bitcoin
          ? "Loading..."
          : bitcoin
            ? formatPrice(bitcoin.price)
            : "Unavailable"}
      </p>

      <div className="mt-2 flex items-center justify-between gap-2 text-xs text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#7C8CFF]" />
          Bitcoin (BTC)
        </span>

        <span
          className={cn(
            "flex items-center gap-1.5",
            (bitcoin?.change24h ?? 0) >= 0
              ? "text-[#3DDC97]"
              : "text-[#FF5C5C]"
          )}
        >
          24H: {bitcoin ? formatChange(bitcoin.change24h) : "--"}
        </span>
      </div>

      {/* Market Data Grid */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {COINS.map((coinInfo) => {
          const coin = coins.find((item) => item.id === coinInfo.id);
          const change = coin?.change24h ?? null;
          const up = change !== null && change >= 0;

          return (
            <div
              key={coinInfo.id}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[#3DDC97]/30"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                    coinInfo.color
                  )}
                >
                  {coinInfo.glyph}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-md font-medium text-white">
                    {coinInfo.name}
                  </p>
                  <p className="text-sm text-white/40">
                    {coinInfo.sub}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm text-white/40">
                Market Price
              </p>

              <p className="mt-0.5 truncate text-sm font-semibold text-white">
                {coin
                  ? formatPrice(coin.price)
                  : loading
                    ? "Loading..."
                    : "Unavailable"}
              </p>

              <span
                className={cn(
                  "mt-1 inline-block rounded px-1 py-0.5 text-xs font-semibold",
                  change === null
                    ? "bg-white/10 text-white/50"
                    : up
                      ? "bg-[#3DDC97]/15 text-[#3DDC97]"
                      : "bg-[#FF5C5C]/15 text-[#FF5C5C]"
                )}
              >
                {formatChange(change)} (24h)
              </span>
            </div>
          );
        })}
      </div>

      {/* Attribution and Error State */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="text-sm text-white/35">
          Market data via CoinGecko
        </p>

        {error && (
          <p role="status" className="text-sm text-[#FF5C5C]">
            Update failed
          </p>
        )}
      </div>
    </div>
  );
};

export default TradeCard;
