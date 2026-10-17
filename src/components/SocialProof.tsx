/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const SocialProof: React.FC = () => {
  // Array is intentionally empty as required by prompt instructions (no invented testimonials)
  const testimonials: Testimonial[] = [];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials would render here if testimonials.length > 0 */}
      </div>
    </section>
  );
};
