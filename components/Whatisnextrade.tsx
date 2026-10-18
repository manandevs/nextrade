import React from "react";
import Image from "next/image";

export const WhatIsNextrade: React.FC = () => {
  return (
    <section id="what-is" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* ---------- Left: visual ---------- */}
        <div className="relative min-h-[360px] sm:min-h-[440px]">
          {/* soft emerald glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 50% 45% at 45% 40%, rgba(61,220,151,0.20), transparent 70%)",
            }}
          />

          {/* 3D phone illustration (add your image) */}
          <div className="absolute inset-x-0 top-0 h-[68%]">
            <Image
              src="/images/what-is/phone-3d.png"
              alt="3D trading app illustration"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-contain object-center"
            />
          </div>

          {/* Floating stats */}
          

          {/* Long on Sol pill */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-[56%] hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:flex"
          >
            Long on Sol
            <span className="text-[#3DDC97]">+203%</span>
          </span>

          {/* Big overlay text */}
          <div className="absolute bottom-0 left-0 leading-[1.05] tracking-tight">
            <p className="bg-gradient-to-b from-white/20 to-white/0 bg-clip-text text-5xl font-light text-transparent sm:text-6xl">
              Our Capital
            </p>
            <p
              className="-mt-1 bg-gradient-to-b from-white to-[#7DFFC0] bg-clip-text pl-4 text-4xl font-normal text-transparent sm:text-5xl lg:text-6xl"
              style={{ filter: "drop-shadow(0 0 22px rgba(61,220,151,0.55))" }}
            >
              Your Success
            </p>
          </div>
        </div>

        {/* ---------- Right: copy ---------- */}
        <div className="flex flex-col items-start lg:pl-8">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium text-white/85">
            What is Nextrade?
          </span>

          <h2 className="mt-6 max-w-md text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            Trade on Forex and other markets with capital up to 640,000 USD!
          </h2>

          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/70 sm:text-sm">
            We provide unique trading programs for Forex traders, based upon which
            we search for the best options to work together with. We provide you
            with Training accounts that you can use to trade and earn commission
            without the risk of losing your own funds!
          </p>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-white/35">
            You are presented with a choice of the widest variety of training
            programs on the market – it is up to you to choose based on your
            experience and preference. Whether you are a rookie, advanced or
            experienced trader, we are certain that you will find the most
            perfectly suited program.
          </p>
        </div>
      </div>
    </section>
  );
};