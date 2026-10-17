# NEXTRADE — DESIGN.md

Premium, modern, fully responsive fintech website. Dark, confident, data-driven.
Layout and rhythm are inspired by the structure of theonelanceb.com (hero → social proof → feature tabs → stats → testimonials → pricing tiers → footer). Visuals, copy and assets are original to NEXTRADE.

Stack target: Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · HTML Canvas for the background.

---

## 1. Design Principles

1. **Dark, calm, precise.** Black canvas, emerald for "growth/primary", yellow for "action/attention".
2. **One loud thing per screen.** Yellow is reserved for CTAs and key highlights only.
3. **Data as decoration.** The candlestick background is subtle, never competing with content.
4. **Trust first.** Verified stats, testimonials, clear pricing, risk disclaimer.
5. **Mobile-first.** Every section designed at 360px, then enhanced.

---

## 2. Color Tokens

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0A0F0D` | Page background |
| `--bg-elevated` | `#0F1613` | Cards, nav on scroll |
| `--bg-card` | `#121B17` | Pricing/feature cards |
| `--border` | `rgba(255,255,255,0.08)` | Hairlines, card borders |
| `--emerald` | `#3DDC97` | Primary brand, bullish candles, links, icons |
| `--emerald-dim` | `rgba(61,220,151,0.15)` | Glows, badges, hover fills |
| `--yellow` | `#FFD43B` | Primary CTA, highlights, "Recommended" badge |
| `--yellow-hover` | `#FFE066` | CTA hover |
| `--red-candle` | `#FF5C5C` | Bearish candles only (at ≤ 12% opacity in bg) |
| `--text` | `#F4F7F5` | Headings |
| `--text-muted` | `#9AA8A1` | Body, captions |
| `--text-faint` | `#5F6D66` | Disclaimers |

```css
:root {
  --bg: #0A0F0D;
  --bg-elevated: #0F1613;
  --bg-card: #121B17;
  --border: rgba(255,255,255,0.08);
  --emerald: #3DDC97;
  --emerald-dim: rgba(61,220,151,0.15);
  --yellow: #FFD43B;
  --yellow-hover: #FFE066;
  --red-candle: #FF5C5C;
  --text: #F4F7F5;
  --text-muted: #9AA8A1;
  --text-faint: #5F6D66;
}
```

**Contrast:** `#0A0F0D` text on `#FFD43B` = ~14:1 (AAA). Emerald on bg = ~10:1.

---

## 3. Typography

- **Headings:** `Sora` (or `Plus Jakarta Sans`) — 600/700
- **Body/UI:** `Inter` — 400/500/600
- **Numbers/tickers:** `JetBrains Mono` — 500 (stats, prices)

| Role | Mobile | Desktop | Weight | Line-height |
|---|---|---|---|---|
| H1 (hero) | 36px | 64–72px | 700 | 1.05 |
| H2 | 28px | 44px | 700 | 1.15 |
| H3 | 20px | 24px | 600 | 1.3 |
| Body | 16px | 18px | 400 | 1.6 |
| Small | 13px | 14px | 400 | 1.5 |
| Eyebrow | 12px | 13px | 600, uppercase, +0.12em tracking | — |

Hero H1 may highlight one keyword in `--emerald`.

---

## 4. Layout & Spacing

- Container: `max-width: 1200px`, side padding `20px` (mobile) / `32px` (desktop)
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section vertical padding: `64px` mobile / `112px` desktop
- Grid: 4-col mobile → 8-col tablet → 12-col desktop
- Radius: `12px` (inputs), `20px` (cards), `999px` (pills/buttons)
- Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280`

---

## 5. Background: Animated Candlestick Chart (fixed)

A single full-viewport `<canvas>` behind all content.

```
position: fixed; inset: 0; z-index: 0; pointer-events: none;
content wrapper: position: relative; z-index: 1;
```

**Look**
- Rows of candlesticks (body + wick) spanning the full width, drawn in a gentle random-walk trend.
- Bullish = `--emerald`, bearish = `--red-candle`, both at **6–10% base opacity**.
- Faint horizontal grid lines at 4% white. Optional vignette: radial gradient fading to `--bg` at edges so text stays readable.
- ~28 candles on mobile, ~60 on desktop.

**Animation loop (repeats forever, ~12s cycle)**
1. **Sequential glow (0–6s):** a glow travels left → right; each candle brightens in turn (opacity → ~45%, soft `shadowBlur` 16–24px in its own color), staggered ~90ms, then eases back down.
2. **Simultaneous glow (6–9s):** all candles pulse together up to ~40% opacity, hold 0.6s, ease out.
3. **Rest (9–12s):** return to base opacity, then restart.

**Rules**
- Use `requestAnimationFrame`; cap at 30–45 fps on mobile.
- Pause when the tab is hidden (`visibilitychange`).
- Respect `prefers-reduced-motion`: render static candles at base opacity, no glow.
- Re-seed/resize on `resize` with debounce; scale for `devicePixelRatio` (max 2).
- Text always sits over a `--bg` overlay with ≥ 85% effective darkness behind copy.

---

## 6. Components

### Navbar
- Fixed top, transparent → `--bg-elevated` + `backdrop-blur(12px)` + bottom border after 24px scroll.
- Left: NEXTRADE wordmark (emerald "N" mark + white text). Center/right links: Platform, Features, Pricing, Learn (dropdown), Login.
- Right CTA: small yellow pill **"Pick Plan"**.
- Mobile: hamburger → full-screen slide-in menu, CTA pinned at the bottom.

### Buttons
| Type | Style |
|---|---|
| **Primary** | bg `--yellow`, text `#0A0F0D`, 600 weight, radius 999px, padding 14×28; hover `--yellow-hover` + `translateY(-1px)` + yellow glow `0 8px 30px rgba(255,212,59,.25)` |
| **Secondary** | transparent, 1px `--emerald` border, emerald text; hover fill `--emerald-dim` |
| **Ghost/link** | muted text, emerald on hover, arrow icon shifts 4px |

Min tap target 44×44px. Visible focus ring: `2px --emerald` offset 2px.

### Cards
`--bg-card`, 1px `--border`, radius 20px, padding 24–32px. Hover: border → `rgba(61,220,151,.4)`, subtle emerald glow.

### Badges / Pills
Eyebrow pill: `--emerald-dim` bg, emerald text, 999px radius. "Recommended": solid yellow, dark text.

### Inputs
`--bg-elevated`, 1px `--border`, radius 12px, 48px height; focus border `--emerald` + 3px `--emerald-dim` ring.

---

## 7. Page Structure — Landing Page

1. **Hero**
   - Eyebrow: "Next-gen trading platform"
   - H1: "Trade smarter. **Grow** faster." (keyword in emerald)
   - Sub: one sentence on speed, insight and security.
   - CTAs: primary **Pick Plan**, secondary **See How It Works**.
   - Small risk line beneath in `--text-faint`.
   - Min-height 90vh, content left-aligned on desktop, centered on mobile.
2. **Trusted-by / featured logos** — greyscale logo row, 40% opacity, hover to 80%.
3. **Social proof quotes** — 2 large testimonial cards with name + role.
4. **Feature tabs** ("Everything you need") — tabs: Live Charts · Signals · Portfolio · Risk Tools · Community · Education. Each tab shows a short UI mock (video/Lottie/screenshot) + 3 bullets. Tabs become an accordion on mobile.
5. **Stats strip** — count-up numbers in JetBrains Mono (e.g., Active traders, Volume traded, Uptime, Countries). Counts animate once on scroll into view.
6. **Why NEXTRADE** — 3×2 grid of icon cards (emerald line icons).
7. **Testimonials carousel** — 5 cards, auto-advance 6s, pause on hover, swipeable.
8. **Pricing** — 3 tier cards: **Starter / Pro (Recommended) / Elite**. Pro card has emerald border, glow and yellow "Recommended" badge. Each card: price, highlights, "What's included" list, yellow-outline "Join Now" button (Pro = solid yellow). Billing note below.
9. **FAQ** — accordion, 6–8 items.
10. **Final CTA (full-width yellow band)** — see §8.
11. **Footer** — logo, quick links, legal, socials, app-store badges, newsletter field, risk disclaimer.

---

## 8. Bottom CTA — Full-Width Yellow "Pick Plan"

- Full-bleed band, bg `--yellow`, text `#0A0F0D`, padding `72px` (mobile 48px).
- Headline (H2, dark): "Ready to trade with an edge?"
- Subtext: one short line.
- Button: large dark pill (`#0A0F0D` bg, yellow text) labeled **"Pick Plan"**, with arrow icon; hover: invert-lift + shadow.
- Alternate (if the whole bar should be the button): entire band is a link, 96px tall, centered label **"Pick Plan →"** in 700 weight, hover darkens to `#F2C500`.
- Sits directly above the footer with no gap; candle background fades out behind it (solid fill).
- Optionally make a slim sticky version on mobile that appears after the hero scrolls out.

---

## 9. Motion

| Element | Behavior |
|---|---|
| Section reveal | fade + translateY(24px → 0), 600ms, `cubic-bezier(.22,1,.36,1)`, once |
| Cards | stagger 80ms |
| Stats | count-up 1.5s, ease-out |
| Buttons | 200ms transform/shadow |
| Hero H1 | word-by-word fade in, 40ms stagger |

All motion disabled/reduced under `prefers-reduced-motion`.

---

## 10. Imagery & Iconography

- Icons: Lucide, 1.5px stroke, emerald.
- Product visuals: dark UI screenshots with a thin emerald border and soft glow; avoid stock photos of people at screens.
- Charts inside the UI use emerald (up), red (down), yellow for the highlighted metric.

---

## 11. Responsive Rules

- **≤ 640px:** single column, hero CTAs stack full-width, tabs → accordion, pricing cards stack with Pro first, footer collapses into accordions.
- **768–1023px:** 2-column feature grid, pricing scrolls horizontally with snap or stacks.
- **≥ 1024px:** full 3-column pricing, side-by-side hero/feature layouts.
- No horizontal scroll at any width. Test 360, 390, 768, 1024, 1440.

---

## 12. Accessibility & Performance

- WCAG AA minimum; focus states on all interactives; semantic landmarks; `aria-label` on icon buttons.
- Canvas is `aria-hidden="true"`.
- Fonts via `next/font` with `display: swap`; images via `next/image`; videos `muted loop playsinline` with `preload="none"` below fold.
- Target Lighthouse: Performance ≥ 90, Accessibility ≥ 95.

---

## 13. Compliance Copy (required)

Footer and near pricing:
> Trading involves risk and past performance does not guarantee future results. NEXTRADE provides tools and education only and does not offer financial advice.

Include Terms, Privacy, and Refund/Billing policy links.

---

## 14. Tailwind Config Snippet

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        bg: "#0A0F0D",
        elevated: "#0F1613",
        card: "#121B17",
        emerald: { DEFAULT: "#3DDC97", dim: "rgba(61,220,151,0.15)" },
        brandyellow: { DEFAULT: "#FFD43B", hover: "#FFE066" },
        muted: "#9AA8A1",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: { card: "20px" },
      boxShadow: {
        glowYellow: "0 8px 30px rgba(255,212,59,.25)",
        glowEmerald: "0 0 40px rgba(61,220,151,.18)",
      },
    },
  },
};
```

---

## 15. Build Checklist

- [ ] Tokens + fonts configured
- [ ] `CandleBackground` canvas component (fixed, sequential → simultaneous loop, reduced-motion safe)
- [ ] Navbar with scroll state + mobile menu
- [ ] Hero + CTAs
- [ ] Logos, quotes, feature tabs, stats, grid, carousel
- [ ] Pricing (3 tiers, Pro highlighted)
- [ ] FAQ, footer, compliance copy
- [ ] **Full-width yellow "Pick Plan" CTA band**
- [ ] Responsive QA at 5 breakpoints
- [ ] Lighthouse pass