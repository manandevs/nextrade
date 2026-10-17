/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  lessonCount: string;
  duration: string;
  description: string;
  level: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPricePerMonth: number; // discounted per month when billed annually
  popular?: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'live-sessions',
    title: 'Live Sessions',
    description: 'Join real-time walkthroughs and strategy breakdowns as markets move.',
    iconName: 'Radio',
  },
  {
    id: 'structured-lessons',
    title: 'Structured Lessons',
    description: 'Master core concepts through step-by-step educational modules.',
    iconName: 'BookOpen',
  },
  {
    id: 'private-community',
    title: 'Private Community',
    description: 'Connect with disciplined retail traders in a focused, distraction-free space.',
    iconName: 'Users',
  },
  {
    id: 'market-breakdowns',
    title: 'Market Breakdowns',
    description: 'Examine high-probability setups and daily structural analysis.',
    iconName: 'LineChart',
  },
];

export const WHY_FEATURES: FeatureItem[] = [
  {
    id: 'live-trading',
    title: 'Live Trading & Analysis',
    description: 'Real-time chart walkthroughs and live strategy application during key market sessions.',
    iconName: 'Tv',
  },
  {
    id: 'structured-curriculum',
    title: 'Structured Curriculum',
    description: 'Step-by-step masterclasses designed specifically for retail traders looking for repeatable edge.',
    iconName: 'GraduationCap',
  },
  {
    id: 'private-community',
    title: 'Private Trader Community',
    description: 'Engage with a supportive peer group sharing trade notes, insights, and daily setups.',
    iconName: 'MessageSquareShare',
  },
  {
    id: 'market-breakdowns',
    title: 'Daily Market Breakdowns',
    description: 'In-depth analytical reviews covering key price levels, volume profiles, and trend shifts.',
    iconName: 'BarChart3',
  },
  {
    id: 'risk-management',
    title: 'Risk Management Frameworks',
    description: 'Learn professional position sizing and capital preservation rules to protect your downside.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'mentor-guidance',
    title: 'Direct Mentor Insights',
    description: 'Gain clarity on execution mechanics, emotional discipline, and trading routines.',
    iconName: 'Compass',
  },
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'mod-1',
    number: '01',
    title: 'Foundations of Price Action & Market Structure',
    lessonCount: '12 Lessons',
    duration: '3.5 Hours',
    description: 'Master swing highs, lows, break of structure, and liquidity sweeps without lagging indicators.',
    level: 'Beginner & Intermediate',
  },
  {
    id: 'mod-2',
    number: '02',
    title: 'Advanced Indicator Confluence & Timing',
    lessonCount: '10 Lessons',
    duration: '2.8 Hours',
    description: 'Learn how to combine volume profile, VWAP, and multi-timeframe alignment for precise entries.',
    level: 'Intermediate',
  },
  {
    id: 'mod-3',
    number: '03',
    title: 'Risk Engineering & Capital Preservation',
    lessonCount: '8 Lessons',
    duration: '2.0 Hours',
    description: 'Master expectancy formulas, maximum drawdown limits, and asymmetric risk-to-reward ratios.',
    level: 'All Levels',
  },
  {
    id: 'mod-4',
    number: '04',
    title: 'Live Execution Psychology & Routine',
    lessonCount: '14 Lessons',
    duration: '4.1 Hours',
    description: 'Build bulletproof trading plans, manage tilt, and cultivate the mental fortitude required for longevity.',
    level: 'All Levels',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Essential tools and core educational modules for emerging traders.',
    monthlyPrice: 99,
    yearlyPricePerMonth: 79,
    features: [
      'Core educational curriculum',
      'Standard community access',
      'Weekly market review notes',
      'Platform resource library',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    tagline: 'Comprehensive live sessions and deep analytical breakdowns.',
    monthlyPrice: 199.99,
    yearlyPricePerMonth: 159,
    popular: true,
    features: [
      'Everything in Standard',
      'Live trading room sessions',
      'Daily market breakdowns',
      'Advanced strategy workshops',
      'Priority community Q&A',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'The ultimate immersive trading experience with direct mentorship support.',
    monthlyPrice: 275,
    yearlyPricePerMonth: 219,
    features: [
      'Everything in Advanced',
      'Monthly 1-on-1 mentor check-in',
      'Advanced risk model calculators',
      'Exclusive strategy masterclasses',
      'Direct Discord VIP channel access',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is included in my NEXTRADE membership?",
    answer: "Your membership gives you full access to our comprehensive trading curriculum, live educational sessions, daily market breakdowns, and our private community of retail traders. The exact tier features depend on whether you select Standard, Advanced, or Premium."
  },
  {
    question: "Who is NEXTRADE designed for?",
    answer: "NEXTRADE is built specifically for beginner and intermediate retail traders who want to transition from guesswork to a disciplined, structured approach to market analysis and risk management."
  },
  {
    question: "Does NEXTRADE provide financial advice or trading signals?",
    answer: "No. NEXTRADE is strictly an educational and community platform. We do not provide personalized financial advice, portfolio management, or guaranteed trade signals. All content is for educational and informational purposes only."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time directly from your account settings. You will retain access to your membership benefits until the end of your current billing period."
  },
  {
    question: "How does billing work for monthly and yearly plans?",
    answer: "Subscriptions are billed in advance on either a monthly basis or annually at a discounted rate. Yearly plans offer significant savings compared to monthly renewals."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day satisfaction guarantee on initial membership purchases. If NEXTRADE does not meet your educational expectations within your first 7 days, you can request a full refund through support."
  },
];

export const RISK_DISCLAIMER_SHORT = "Trading involves substantial risk of loss and is not suitable for every investor. NEXTRADE provides educational content only and does not give financial advice. Past performance does not guarantee future results.";

export const RISK_DISCLAIMER_FULL = "Trading involves substantial risk of loss and is not suitable for every investor. Valuation of assets can fluctuate, and users can lose more than their initial investment. NEXTRADE provides educational content, community discussions, and analytical tools only and does not give personalized financial advice, portfolio management, or brokerage services. Past performance does not guarantee future results. Always evaluate your risk tolerance before engaging in financial markets.";
