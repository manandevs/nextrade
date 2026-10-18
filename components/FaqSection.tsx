/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How does the evaluation process work?",
    answer: "Our evaluation is designed to prove your trading skills and risk management without any strict time limits. Reach your profit target while respecting drawdown rules to qualify for a funded account.",
  },
  {
    question: "Are there any time limits to pass the evaluation?",
    answer: "No! We believe professional trading cannot be rushed. Take as many days or weeks as you need to achieve your profit target at your own comfortable pace.",
  },
  {
    question: "What is the maximum drawdown limit?",
    answer: "The maximum daily drawdown is set at 5% of your initial balance, and the total trailing drawdown is capped at 10%. These rules protect both you and our capital.",
  },
  {
    question: "How and when do I get paid?",
    answer: "Payouts are processed bi-weekly. Once you request a withdrawal, funds are sent directly to your bank account, crypto wallet, or PayPal within 24 hours.",
  },
  {
    question: "What trading platforms can I use?",
    answer: "You can trade using our proprietary Nextrade Pro Terminal, MetaTrader 5 (MT5), cTrader, or TradingView integration with direct liquidity feed.",
  },
  {
    question: "Can I trade news and hold trades overnight / weekends?",
    answer: "Yes, news trading, holding trades overnight, and weekend holding are fully permitted on all funded accounts and evaluations.",
  },
  {
    question: "Is there a refund on the evaluation fee?",
    answer: "Yes! Your evaluation fee is 100% refunded with your very first profit split withdrawal once you become a funded trader.",
  },
  {
    question: "What instruments and leverage are available?",
    answer: "Trade 50+ Forex pairs with up to 1:100 leverage, cryptocurrencies with 1:20 leverage, indices, commodities, and stocks with zero hidden commissions.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-r from-[#C2FBE2] to-[#7BF0BE] text-[#070D0A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-[#070D0A]/20 bg-[#070D0A]/10 px-3.5 py-1 text-xs font-semibold text-[#070D0A]">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#070D0A]/80">
            Everything you need to know about our prop trading programs, rules, and payouts.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#070D0A]/15 bg-white/45 backdrop-blur-sm overflow-hidden transition-all"
              >
                <h3>
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-6 text-left font-semibold text-[#070D0A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#070D0A]"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#070D0A]/80 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
