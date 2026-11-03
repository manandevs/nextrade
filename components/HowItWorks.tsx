/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { UserCheck, Award, ShieldCheck, Wallet, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Choose a plan",
    description:
      "Select the training program that matches your trading style and capital goals.",
    highlight: "$10K – $640K accounts",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Pass the evaluation",
    description:
      "Demonstrate your risk management and consistency. Trade at your own pace.",
    highlight: "No time limits",
    icon: Award,
  },
  {
    number: "03",
    title: "Get funded",
    description:
      "Receive your funded account credentials after passing and start trading live capital.",
    highlight: "Within 24 hours",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Withdraw profits",
    description:
      "Request payouts every two weeks via bank wire, crypto, or PayPal.",
    highlight: "Up to 90% profit split",
    icon: Wallet,
  },
];

const STATS = [
  { value: "90%", label: "Profit split" },
  { value: "24h", label: "Funding time" },
  { value: "$640K", label: "Max account" },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#070C0A] py-20 sm:py-28"
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3DDC97]/20 bg-[#3DDC97]/[0.06] px-3.5 py-1 text-xs font-medium text-[#3DDC97]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC97]" />
                Simple 4-Step Process
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                How Nextrade{" "}
                <span className="text-[#3DDC97]">works</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Your path to professional prop trading is transparent,
                structured, and designed for long-term profitability.
              </p>

              <dl className="mt-10 grid max-w-md grid-cols-3">
                {STATS.map((s) => (
                  <div key={s.label} className="py-5 px-3  border border-white/10">
                    <dt className="text-xs text-white/50">{s.label}</dt>
                    <dd className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="#plans"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#3DDC97] px-6 py-3 text-sm font-semibold text-[#06110C] transition hover:bg-[#5BE8AB]"
              >
                Start your evaluation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: timeline */}
          <ol className="relative lg:col-span-7">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === STEPS.length - 1;
              return (
                <li key={step.number} className="group relative pl-20 pb-14 last:pb-0">
                  {/* Connector line */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-[#3DDC97]/50 via-[#3DDC97]/15 to-transparent"
                    />
                  )}

                  {/* Node */}
                  <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#3DDC97]/30 bg-[#0B1511] text-[#3DDC97] shadow-[0_0_0_6px_#070C0A] transition group-hover:border-[#3DDC97] group-hover:shadow-[0_0_0_6px_#070C0A,0_0_24px_rgba(61,220,151,0.25)]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>

                  {/* Content */}
                  <div className="border-b border-white/[0.06] pb-10 group-last:border-transparent group-last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-widest text-[#3DDC97]">
                        STEP {step.number}
                      </span>
                      <span className="h-px flex-1 bg-white/[0.06]" />
                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                      {step.description}
                    </p>

                    <span className="mt-4 inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/80">
                      {step.highlight}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;