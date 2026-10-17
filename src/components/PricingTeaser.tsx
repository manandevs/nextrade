/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingTeaserProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingTeaser: React.FC<PricingTeaserProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="plans" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono tracking-wider text-[#3DDC97] uppercase">
            Membership Options
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Choose Your <span className="text-[#3DDC97]">NEXTRADE</span> Plan
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3AD]">
            Select the tier that fits your trading journey. Upgrade or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex items-center p-1.5 rounded-xl bg-[#101714] border border-[#3DDC97]/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#3DDC97] text-black shadow-md'
                    : 'text-[#A7B3AD] hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[#3DDC97] text-black shadow-md'
                    : 'text-[#A7B3AD] hover:text-white'
                }`}
              >
                <span>Yearly Billing</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#FFD43B] text-black font-mono">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPricePerMonth;

            return (
              <div
                key={plan.id}
                className={`next-card p-8 flex flex-col justify-between relative bg-[#101714] ${
                  plan.popular ? 'border-[#3DDC97] ring-1 ring-[#3DDC97]/50 shadow-xl shadow-[#3DDC97]/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFD43B] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-sm text-[#A7B3AD] mt-2 min-h-[40px]">{plan.tagline}</p>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 pt-2 border-t border-[#3DDC97]/15">
                    <span className="text-xs text-[#A7B3AD]">from</span>
                    <span className="font-heading text-4xl font-bold text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-[#A7B3AD]">
                      /{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 pt-4">
                    <div className="text-xs font-mono text-[#3DDC97]">WHAT'S INCLUDED:</div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#A7B3AD]">
                          <Check className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer ${
                      plan.popular
                        ? 'bg-[#FFD43B] text-black hover:bg-[#ffdf64] shadow-[#FFD43B]/20'
                        : 'border border-[#3DDC97] text-[#3DDC97] hover:bg-[#3DDC97]/10'
                    }`}
                  >
                    Pick Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
