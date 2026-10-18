/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { UserCheck, Award, ShieldCheck, Wallet } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Choose a plan",
    description:
      "Select the training program that matches your trading style and capital goals, from $10K up to $640,000.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Pass the evaluation",
    description:
      "Demonstrate your risk management and consistency with zero time limits. Trade at your own pace.",
    icon: Award,
  },
  {
    number: "03",
    title: "Get funded",
    description:
      "Receive your funded account credentials within 24 hours of passing and start trading live capital.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Withdraw profits",
    description:
      "Keep up to 90% of your profits with bi-weekly payouts via bank wire, crypto, or PayPal.",
    icon: Wallet,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative bg-[#070D0A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-[#3DDC97]">
            Simple 4-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            How Nextrade Works
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
            Your path to professional prop trading is transparent, structured, and designed for long-term profitability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-[#0E1813] p-6 transition-all hover:border-[#3DDC97]/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3DDC97]/10 text-[#3DDC97]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-2xl font-bold text-white/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
