/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#FFD43B] via-[#98F5D0] to-[#3DDC97] text-[#070D0A] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
          Ready to Start Your Funded Journey?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#070D0A]/80 leading-relaxed">
          Join thousands of successful traders worldwide who trust Nextrade with their capital. Sign up today and get funded in as little as 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ variant: "default", size: "lg", shape: "rounded" }),
              "h-12 bg-[#070D0A] text-white hover:bg-[#070D0A]/90 px-8 text-sm font-semibold"
            )}
          >
            Get Started Now
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </a>
          <a
            href="#how-it-works"
            className={cn(
              buttonVariants({ variant: "light", size: "lg", shape: "rounded" }),
              "h-12 border border-[#070D0A]/30 bg-transparent text-[#070D0A] hover:bg-black/5 px-8 text-sm font-semibold"
            )}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
