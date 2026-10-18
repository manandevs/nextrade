/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Image from "next/image";

/* Put your images in /public/images/why/ (transparent PNG/WebP, ~800x440) */
const ITEMS = [
  {
    image: "/images/why/no-time-limit.png",
    alt: "Clock illustration",
    title: "No time Limit Prop firm",
    text: "Here, traders have the freedom to reach their funding goals without the pressure of strict time constraints. Trade at your own pace and implement your strategies with flexibility.",
  },
  {
    image: "/images/why/fast-progress.png",
    alt: "Growth curve illustration",
    title: "Fast progress",
    text: "Prove to us you have the ability, and we will return up to 200% of your fee, raise your trading account, raise your provision level, or give you the opportunity to repeat a training phase for free!",
  },
  {
    image: "/images/why/unique-programs.png",
    alt: "Lightning icon illustration",
    title: "Unique programs",
    text: "You are guaranteed satisfaction with us – we want our traders to succeed and be one step ahead – that's why we offer the widest range of training programs and benefits available.",
  },
  {
    image: "/images/why/modern-platform.png",
    alt: "Trading platform on a phone illustration",
    title: "A modern platform",
    text: "We offer a new, modern platform ALL in one, based on professional charts and connected directly to the liquidity providers. This way your trading will always be simple and clear.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* soft emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(61,220,151,0.14), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium text-white/80">
            Why Nextrade?
          </span>
          <h2 className="mt-5 max-w-xl text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl">
            Why choose our Prop trading company?
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {ITEMS.map((item) => (
            <article key={item.title} className="group">
              <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-white/[0.02] sm:h-[220px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="mt-6 text-lg font-medium text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/50 sm:text-sm">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};