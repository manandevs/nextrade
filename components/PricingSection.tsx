/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, Sparkles, Shield, Crown } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Advanced',
      tagline: 'Build your skills. Trade with confidence.',
      price: '$3,497',
      buttonText: 'Join Now',
      icon: Shield,
      popular: false,
      highlights: [
        '12 video courses',
        'Live market analysis',
        'Trading journal templates',
        'Community access',
      ],
      included: [
        'Lifetime access',
        'Mobile friendly',
        'Email support',
      ],
    },
    {
      name: 'Elite',
      tagline: 'Master your edge. Trade like a pro.',
      price: '$5,497',
      buttonText: 'Join Now',
      icon: Crown,
      popular: true,
      highlights: [
        '24 video courses',
        'Live trading room access',
        'Advanced strategies',
        '1-on-1 Q&A sessions',
      ],
      included: [
        'Lifetime access',
        'Mobile friendly',
        'Priority support',
        'Exclusive community',
      ],
    },
    {
      name: 'Elite + Mentorship',
      tagline: 'Personal guidance. Faster results.',
      price: '$12,000',
      buttonText: 'Apply Now',
      icon: Sparkles,
      popular: false,
      highlights: [
        '36 video courses',
        '1-on-1 mentorship (4 months)',
        'Custom trading plan',
        'Advanced market insights',
      ],
      included: [
        'Lifetime access',
        'Mobile friendly',
        'Priority support',
        'Private mentor calls',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-neue uppercase tracking-widest text-[#3DDC97]">
            MEMBERSHIP TIERS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Choose Your Path to Profitability
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`bg-[#121B17] rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl transition-all ${
                  p.popular
                    ? 'border-2 border-[#3DDC97] shadow-[0_0_40px_rgba(61,220,151,0.25)] lg:-translate-y-4'
                    : 'border border-[#3DDC97]/25 hover:border-[#3DDC97]/50'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FFD43B] text-black text-xs font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> RECOMMENDED
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3DDC97]/15 border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl text-white uppercase">{p.name}</h3>
                      <p className="text-xs text-[#9AA8A1] mt-1">{p.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-2 border-t border-[#3DDC97]/15">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-white font-neue">{p.price}</span>
                    <span className="text-xs font-neue text-[#9AA8A1]">/one-time</span>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-neue text-[#3DDC97] uppercase tracking-wider">Highlights:</div>
                    <ul className="space-y-2.5">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-white">
                          <Check className="w-4 h-4 text-[#3DDC97] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included Checklist */}
                  <div className="space-y-3 pt-2 border-t border-[#3DDC97]/15">
                    <div className="text-xs font-neue text-[#9AA8A1] uppercase tracking-wider">What&apos;s included:</div>
                    <ul className="space-y-2.5">
                      {p.included.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-[#9AA8A1]">
                          <Check className="w-4 h-4 text-[#3DDC97] shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-8">
                  <a
                    href="#checkout"
                    className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center shadow-lg ${
                      p.popular
                        ? 'bg-[#FFD43B] text-black hover:bg-[#ffdf64] shadow-[0_0_20px_rgba(255,212,59,0.3)]'
                        : 'bg-[#FFD43B] text-black hover:bg-[#ffdf64]'
                    }`}
                  >
                    {p.buttonText}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
