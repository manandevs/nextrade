/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedOn } from '@/components/FeaturedOn';
import { HowItWorks } from '@/components/HowItWorks';
import { TrustedBy } from '@/components/trustedby';
import { MarketsWeOffer } from '@/components/MarketsWeOffer';
import { WhyChooseUs } from '@/components/Whychooseus';
import { PlatformFeatures } from '@/components/PlatformFeatures';
import { WhatIsNextrade } from '@/components/Whatisnextrade';
import { Testimonials } from '@/components/Testimonials';
import { JoinCTA } from '@/components/Joincta';
import { PayoutsLeaderboard } from '@/components/PayoutsLeaderboard';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070D0A] text-white flex flex-col selection:bg-[#3DDC97] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedOn />
        <HowItWorks />
        <TrustedBy />
        <MarketsWeOffer />
        <WhyChooseUs />
        <PlatformFeatures />
        <WhatIsNextrade />
        <Testimonials />
        <JoinCTA />
        <PayoutsLeaderboard />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
