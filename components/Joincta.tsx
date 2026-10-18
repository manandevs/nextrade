/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const JoinCTA: React.FC = () => {
  return (
    <section
      id="join"
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col">
        {/* Logo tile */}
        <div className="inline-flex rounded-4xl overflow-hidden w-16">
          <Image
            src="/brand/icon.svg"
            alt="NEXTRADE"
            width={340}
            height={340}
            className="object-contain"
          />
        </div>

        <h2 className="mt-6 text-3xl font-normal leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Join us today and start making money with us!
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Our biggest priority is for you to achieve your best! That&apos;s why
          we have the widest offer and best terms possible for mutual success in
          prop trading.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#free-trial"
            className={cn(
              buttonVariants({
                variant: "default",
                shape: "rounded",
              }),
            )}
          >
            Try for free
          </a>
          <a
            href="#pricing"
            className={cn(
              buttonVariants({
                variant: "light",
                shape: "rounded",
              }),
            )}
          >
            I want to join
          </a>
        </div>
      </div>
    </section>
  );
};
