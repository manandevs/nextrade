/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedOn } from '@/components/FeaturedOn';
import { TestimonialsGrid } from '@/components/TestimonialsGrid';
import { PlatformIntro } from '@/components/PlatformIntro';
import { VideoLibrary } from '@/components/VideoLibrary';
import { StatsStrip } from '@/components/StatsStrip';
import { WhyLearnWithUs } from '@/components/WhyLearnWithUs';
import { BookBanner } from '@/components/BookBanner';
import { WelcomeElite } from '@/components/WelcomeElite';
import { PricingSection } from '@/components/PricingSection';
import { CharityBanner } from '@/components/CharityBanner';
import { TopicsIncluded } from '@/components/TopicsIncluded';
import { HowMuchContent } from '@/components/HowMuchContent';
import { TradingForBetterWorld } from '@/components/TradingForBetterWorld';
import { CommunityImpact } from '@/components/CommunityImpact';
import { NewsletterBar } from '@/components/NewsletterBar';
import { FinalYellowBand } from '@/components/FinalYellowBand';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white flex flex-col selection:bg-[#3DDC97] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedOn />
        <TestimonialsGrid />
        <PlatformIntro />
        <VideoLibrary />
        <StatsStrip />
        <WhyLearnWithUs />
        <BookBanner />
        <WelcomeElite />
        <PricingSection />
        <CharityBanner />
        <TopicsIncluded />
        <HowMuchContent />
        <TradingForBetterWorld />
        <CommunityImpact />
        <NewsletterBar />
        <FinalYellowBand />
      </main>
      <Footer />
    </div>
  );
}
