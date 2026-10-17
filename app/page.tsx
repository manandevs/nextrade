/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedOn } from '@/components/FeaturedOn';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';
import { TrustedBy } from '@/components/trustedby';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white flex flex-col selection:bg-[#3DDC97] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedOn />
        <TrustedBy />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
