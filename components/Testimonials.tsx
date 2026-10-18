/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "MK",
    name: "Marcus K.",
    country: "Germany",
    payout: "$48,250",
    quote: "Nextrade changed my trading career. The lack of time limits meant I could trade calmly without stress. Payout arrived within 6 hours!",
    rating: 5,
  },
  {
    initials: "SL",
    name: "Sarah L.",
    country: "United Kingdom",
    payout: "$64,100",
    quote: "The platform speed and spreads are unmatched. Getting funded on the Elite program was straightforward and the support team is world-class.",
    rating: 5,
  },
  {
    initials: "JD",
    name: "Julian D.",
    country: "France",
    payout: "$32,500",
    quote: "Best prop firm I've used. Clear rules, great risk management tools, and bi-weekly payouts without any issues.",
    rating: 5,
  },
  {
    initials: "AP",
    name: "Alexey P.",
    country: "Switzerland",
    payout: "$92,800",
    quote: "Scaling up to $640k capital was seamless. Their mentoring sessions gave me the edge I needed to stay consistently profitable.",
    rating: 5,
  },
  {
    initials: "EM",
    name: "Elena M.",
    country: "Spain",
    payout: "$27,400",
    quote: "As a part-time swing trader, the no time limit rule is a lifesaver. I never felt rushed to force trades.",
    rating: 5,
  },
  {
    initials: "TK",
    name: "Taro K.",
    country: "Japan",
    payout: "$55,000",
    quote: "Superb execution on forex and crypto pairs. Highly recommended for any serious retail trader looking to go pro.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative bg-[#070D0A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-[#3DDC97]">
            Verified Success Stories
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by Funded Traders Worldwide
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
            Read authentic reviews from funded traders who have successfully scaled their capital and withdrawn profits.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E1813] p-6 transition-all hover:border-[#3DDC97]/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3DDC97]/10 font-bold text-[#3DDC97]">
                      {t.initials}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                        <CheckCircle className="h-3.5 w-3.5 text-[#3DDC97]" />
                      </div>
                      <p className="text-xs text-white/40">{t.country}</p>
                    </div>
                  </div>
                  <span className="rounded-lg bg-[#3DDC97]/10 px-3 py-1 text-xs font-bold text-[#3DDC97]">
                    {t.payout} Paid
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#00B67A]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#00B67A]" />
                  ))}
                </div>
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Verified Trader</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
