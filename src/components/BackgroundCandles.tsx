/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from 'react';

interface CandleData {
  id: number;
  x: number;
  y: number;
  height: number;
  wickTop: number;
  wickBottom: number;
  isBullish: boolean;
  delay: number; // in seconds
}

export const BackgroundCandles: React.FC = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Check prefers-reduced-motion and visibility
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Generate 42 deterministic candlesticks (fixed seed pattern)
  const candles: CandleData[] = useMemo(() => {
    const list: CandleData[] = [];
    const count = 42;
    let currentY = 600;

    for (let i = 0; i < count; i++) {
      // Create an overall upward trend with gentle random oscillations
      const stepX = (1440 / (count + 1)) * (i + 1);
      const trendBias = i * 6;
      const noise = Math.sin(i * 1.5) * 80 + Math.cos(i * 0.7) * 40;
      const y = Math.max(100, Math.min(800, 700 - trendBias + noise));
      
      const isBullish = (i % 3 !== 0); // ~66% bullish for uptrend
      const bodyHeight = 24 + ((i * 13) % 36);
      const wickTop = 8 + ((i * 7) % 20);
      const wickBottom = 8 + ((i * 11) % 22);

      list.push({
        id: i,
        x: Math.round(stepX),
        y: Math.round(y),
        height: bodyHeight,
        wickTop,
        wickBottom,
        isBullish,
        delay: Number((i * 0.08).toFixed(2)), // 80ms stagger
      });
    }
    return list;
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: -10, opacity: 0.16 }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bullishGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3DDC97" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3DDC97" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="bearishGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD43B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFD43B" stopOpacity="0.25" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle background grid lines */}
        <g stroke="#3DDC97" strokeOpacity="0.04" strokeWidth="1">
          <line x1="0" y1="180" x2="1440" y2="180" />
          <line x1="0" y1="360" x2="1440" y2="360" />
          <line x1="0" y1="540" x2="1440" y2="540" />
          <line x1="0" y1="720" x2="1440" y2="720" />
        </g>

        {/* Candlesticks */}
        {candles.map((c) => {
          const color = c.isBullish ? 'url(#bullishGrad)' : 'url(#bearishGrad)';
          const strokeColor = c.isBullish ? '#3DDC97' : '#FFD43B';
          const animationClass = (!isReducedMotion && isVisible) ? 'animate-candle-glow' : '';

          return (
            <g key={c.id} className={animationClass} style={{ animationDelay: `${c.delay}s` }}>
              {/* Wick */}
              <line
                x1={c.x}
                y1={c.y - c.wickTop}
                x2={c.x}
                y2={c.y + c.height + c.wickBottom}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {/* Body */}
              <rect
                x={c.x - 5}
                y={c.y}
                width="10"
                height={c.height}
                rx="2"
                fill={color}
                stroke={strokeColor}
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </g>
          );
        })}
      </svg>

      <style>{`
        @keyframes candleGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          /* Sequential phase */
          30% {
            opacity: 0.95;
            transform: scale(1.03);
          }
          /* Simultaneous pulse phase */
          65% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        .animate-candle-glow {
          animation: candleGlow 9s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};
