/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useEffect, useRef } from 'react';

export interface CandleBackgroundProps {
  candleCount?: number;
  baseOpacity?: number; // e.g. 0.08 (6-10%)
  glowOpacity?: number; // e.g. 0.42
  cycleDuration?: number; // total cycle in seconds (default 12)
  bullColor?: string; // default '#3DDC97'
  bearColor?: string; // default '#FF5C5C'
}

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  isBullish: boolean;
  index: number;
}

export const CandleBackground: React.FC<CandleBackgroundProps> = ({
  candleCount,
  baseOpacity = 0.08,
  glowOpacity = 0.42,
  cycleDuration = 12,
  bullColor = '#3DDC97',
  bearColor = '#FF5C5C',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = !document.hidden;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Determine responsive candle count
    const getResponsiveCount = () => {
      if (candleCount) return candleCount;
      const width = window.innerWidth;
      if (width >= 1024) return 60;
      if (width >= 768) return 40;
      return 26;
    };

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Generate random walk price series
    let candles: Candle[] = [];
    const generateCandles = () => {
      const count = getResponsiveCount();
      candles = [];
      let currentPrice = height * 0.5;
      const spacing = width / (count + 1);

      for (let i = 0; i < count; i++) {
        const x = spacing * (i + 1);
        const volatility = 18 + Math.random() * 22;
        const trend = -1.5; // slight upward drift in screen coordinates
        const delta = (Math.random() - 0.48) * volatility + trend;
        
        const open = currentPrice;
        const close = Math.max(80, Math.min(height - 80, open + delta));
        currentPrice = close;

        const bodyTop = Math.min(open, close);
        const bodyBottom = Math.max(open, close);
        // range not strictly needed for drawing body/wicks directly

        const high = Math.max(40, bodyTop - (Math.random() * 16 + 4));
        const low = Math.min(height - 40, bodyBottom + (Math.random() * 16 + 4));

        const isBullish = close < open;
        const forceBearish = i % 4 === 0;
        const finalIsBullish = forceBearish ? false : isBullish;

        candles.push({
          x,
          open,
          close,
          high,
          low,
          isBullish: finalIsBullish,
          index: i,
        });
      }
    };

    generateCandles();

    // Debounced resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        generateCandles();
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw faint grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const gridRows = 5;
      for (let r = 1; r < gridRows; r++) {
        const gy = (height / gridRows) * r;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      const elapsed = (now - startTime) / 1000;
      const cycleTime = elapsed % cycleDuration;

      if (prefersReducedMotion) {
        candles.forEach((c) => {
          drawCandle(c, baseOpacity, 0);
        });
        return;
      }

      // Animation Phases:
      // Phase 1: Sequential (0s - 6s)
      // Phase 2: Simultaneous (6s - 9s)
      // Phase 3: Rest (9s - 12s)

      const totalCandles = candles.length;
      const seqDuration = 6.0;
      const stagger = seqDuration / totalCandles;

      candles.forEach((c, idx) => {
        let opacity = baseOpacity;
        let blur = 0;

        if (cycleTime <= seqDuration) {
          const candleStart = idx * stagger;
          const candleEnd = candleStart + 1.2;

          if (cycleTime >= candleStart && cycleTime <= candleEnd) {
            const t = (cycleTime - candleStart) / (candleEnd - candleStart);
            const factor = Math.sin(t * Math.PI);
            opacity = baseOpacity + (glowOpacity - baseOpacity) * factor;
            blur = factor * 20;
          }
        } else if (cycleTime > seqDuration && cycleTime <= 9.0) {
          const simProgress = (cycleTime - seqDuration) / 3.0;
          let factor = 0;
          if (simProgress >= 0.1 && simProgress <= 0.85) {
            const t = (simProgress - 0.1) / 0.75;
            factor = Math.sin(t * Math.PI);
          }
          opacity = baseOpacity + (glowOpacity * 0.9 - baseOpacity) * factor;
          blur = factor * 18;
        } else {
          opacity = baseOpacity;
          blur = 0;
        }

        drawCandle(c, opacity, blur);
      });
    };

    const drawCandle = (c: Candle, opacity: number, blur: number) => {
      const color = c.isBullish ? bullColor : bearColor;
      const bodyTop = Math.min(c.open, c.close);
      const bodyHeight = Math.max(2, Math.abs(c.close - c.open));
      const candleWidth = Math.max(4, Math.min(10, width / candles.length * 0.5));

      ctx.save();
      ctx.globalAlpha = opacity;

      if (blur > 0) {
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
      }

      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;

      // Wick
      ctx.beginPath();
      ctx.moveTo(c.x, c.high);
      ctx.lineTo(c.x, c.low);
      ctx.stroke();

      // Body
      ctx.fillRect(c.x - candleWidth / 2, bodyTop, candleWidth, bodyHeight);

      ctx.restore();
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [candleCount, baseOpacity, glowOpacity, cycleDuration, bullColor, bearColor]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Radial vignette overlay fading to #0A0F0D at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(10, 15, 13, 0) 40%, rgba(10, 15, 13, 0.85) 95%, #0A0F0D 100%)',
        }}
      />
    </div>
  );
};
