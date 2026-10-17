/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundCandles } from './components/BackgroundCandles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { WhyNextrade } from './components/WhyNextrade';
import { Curriculum } from './components/Curriculum';
import { SocialProof } from './components/SocialProof';
import { PricingTeaser } from './components/PricingTeaser';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PricingModal } from './components/PricingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('Advanced');

  const handleOpenModal = (planName = 'Advanced') => {
    setSelectedPlanName(planName);
    setModalOpen(true);
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('curriculum');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white relative selection:bg-[#3DDC97] selection:text-black">
      {/* Signature Fixed Candlestick Background */}
      <BackgroundCandles />

      {/* 1. Sticky Transparent Navbar */}
      <Navbar onPickPlanClick={() => handleOpenModal('Advanced')} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onPickPlanClick={() => handleOpenModal('Advanced')}
          onSeeInsideClick={scrollToCurriculum}
        />

        {/* 3. Highlights Strip */}
        <HighlightsStrip />

        {/* 4. Why NEXTRADE (3x2 Feature Grid) */}
        <WhyNextrade />

        {/* 5. What's Inside (Curriculum) */}
        <Curriculum onPickPlanClick={() => handleOpenModal('Advanced')} />

        {/* 6. Social Proof (Empty array check renders nothing as required) */}
        <SocialProof />

        {/* 7. Choose Your Plan Teaser */}
        <PricingTeaser onSelectPlan={(plan) => handleOpenModal(plan)} />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. Final CTA Banner */}
        <FinalCTA onPickPlanClick={() => handleOpenModal('Advanced')} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Pricing / Checkout Modal */}
      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlanName}
      />
    </div>
  );
}
