/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, Share2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  sub: string;
  price: number;
  change24h: number | null;
  marketCap: string;
  volume24h: string;
  sparkline: number[];
  image: string;
  color: string;
};

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

const Sparkline: React.FC<{ data: number[]; positive: boolean }> = ({
  data,
  positive,
}) => {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 72;
  const height = 22;

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        fill="none"
        stroke={positive ? "#3DDC97" : "#FF5C5C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
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
  const gridCoins = coins.filter((coin) => coin.id !== "bitcoin");

  return (
    <div className="relative w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#0F1613]/80 p-4 shadow-[0_0_80px_rgba(61,220,151,0.14)] backdrop-blur-xl sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#5BF0AE] to-[#1FA36B]">
          <Image
            src="/images/coins/bitcoin.jpg"
            alt="Bitcoin"
            fill
            sizes="44px"
            referrerPolicy="no-referrer"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">BTC/USDT</p>
          <p className="truncate text-xs text-white/45">
            {bitcoin ? bitcoin.sub : "Bitcoin Token"} · MCAP: {bitcoin?.marketCap ?? "$1.34T"}
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
          Trade
        </span>
      </div>

      {/* Bitcoin Price & Sparkline */}
      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="break-all text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {loading && !bitcoin
              ? "Loading..."
              : bitcoin
                ? formatPrice(bitcoin.price)
                : "Unavailable"}
          </p>
        </div>
        {bitcoin && (
          <div className="pb-1">
            <Sparkline
              data={bitcoin.sparkline}
              positive={(bitcoin.change24h ?? 0) >= 0}
            />
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2 text-xs text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#7C8CFF]" />
          Vol: {bitcoin?.volume24h ?? "$34.2B"}
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
        {gridCoins.map((coin) => {
          const change = coin.change24h ?? null;
          const up = change !== null && change >= 0;

          return (
            <div
              key={coin.id}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[#3DDC97]/30"
            >
              <div className="flex items-center gap-2">
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    fill
                    sizes="24px"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-white">
                    {coin.name}
                  </p>
                  <p className="text-[9px] text-white/40">{coin.symbol}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-white/40">Price</p>
                  <p className="mt-0.5 truncate text-xs font-semibold text-white">
                    {formatPrice(coin.price)}
                  </p>
                </div>
                <Sparkline data={coin.sparkline} positive={up} />
              </div>

              <div className="mt-2 flex items-center justify-between pt-1 border-t border-white/5">
                <span className="text-[9px] text-white/40">
                  Cap: {coin.marketCap}
                </span>
                <span
                  className={cn(
                    "rounded px-1 py-0.5 text-[8px] font-semibold",
                    up
                      ? "bg-[#3DDC97]/15 text-[#3DDC97]"
                      : "bg-[#FF5C5C]/15 text-[#FF5C5C]"
                  )}
                >
                  {formatChange(change)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Attribution and Error State */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="text-xs text-white/35">Market data via CoinGecko</p>

        {error && (
          <p role="status" className="text-xs text-[#FF5C5C]">
            Update failed
          </p>
        )}
      </div>
    </div>
  );
};

export default TradeCard;
