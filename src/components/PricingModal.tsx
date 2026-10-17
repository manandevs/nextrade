/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Check, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { RISK_DISCLAIMER_SHORT } from '../data/content';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, initialPlan = 'Advanced' }) => {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const getPrice = (plan: string) => {
    if (plan === 'Standard') return billing === 'monthly' ? '$99/mo' : '$79/mo (billed yearly)';
    if (plan === 'Advanced') return billing === 'monthly' ? '$199.99/mo' : '$159/mo (billed yearly)';
    if (plan === 'Premium') return billing === 'monthly' ? '$275/mo' : '$219/mo (billed yearly)';
    return '$199.99/mo';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg next-card bg-[#101714] border border-[#3DDC97]/30 p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A7B3AD] hover:text-white hover:bg-[#0A0F0D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#3DDC97]/20 border border-[#3DDC97] text-[#3DDC97] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Application Received</h3>
            <p className="text-sm text-[#A7B3AD]">
              We have reserved your spot for the <span className="text-white font-semibold">{selectedPlan}</span> plan. Check your inbox at <span className="text-white font-mono">{email}</span> for secure access setup.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-3 rounded-xl bg-[#FFD43B] text-black font-semibold text-sm hover:bg-[#ffdf64] transition-colors cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3DDC97]/10 text-[#3DDC97] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Secure Membership Checkout</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Join NEXTRADE — {selectedPlan}
              </h3>
              <p className="text-xs text-[#A7B3AD]">
                Selected pricing: <span className="text-[#3DDC97] font-semibold">{getPrice(selectedPlan)}</span>
              </p>
            </div>

            {/* Plan switcher */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#A7B3AD]">SELECT TIER:</label>
              <div className="grid grid-cols-3 gap-2">
                {['Standard', 'Advanced', 'Premium'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setSelectedPlan(p)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedPlan === p
                        ? 'bg-[#3DDC97] text-black shadow-md'
                        : 'bg-[#0A0F0D] text-[#A7B3AD] border border-[#3DDC97]/20 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Billing switcher */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#A7B3AD]">BILLING CYCLE:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    billing === 'monthly'
                      ? 'bg-[#3DDC97] text-black shadow-md'
                      : 'bg-[#0A0F0D] text-[#A7B3AD] border border-[#3DDC97]/20 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    billing === 'yearly'
                      ? 'bg-[#3DDC97] text-black shadow-md'
                      : 'bg-[#0A0F0D] text-[#A7B3AD] border border-[#3DDC97]/20 hover:text-white'
                  }`}
                >
                  Yearly (Save 20%)
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#A7B3AD]">EMAIL ADDRESS:</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trader@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0F0D] border border-[#3DDC97]/30 text-white placeholder-[#A7B3AD]/40 text-sm focus:outline-none focus:border-[#3DDC97]"
                />
              </div>

              {/* Risk reminder */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-[#0A0F0D] border border-[#3DDC97]/15 text-[11px] text-[#A7B3AD]/80">
                <ShieldAlert className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                <p>{RISK_DISCLAIMER_SHORT}</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FFD43B] text-black font-semibold text-sm hover:bg-[#ffdf64] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed with {selectedPlan}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
