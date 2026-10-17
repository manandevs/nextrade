import React from "react";

/* ------------------------------------------------------------------ */
/* Placeholder logo marks (swap for real partner logos later)          */
/* ------------------------------------------------------------------ */
const MarkLayered = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M16 2 30 16 16 30 2 16Z" />
    <path d="M16 8 24 16 16 24 8 16Z" />
    <path d="M6 16h20M16 6v20" strokeOpacity=".5" />
  </svg>
);

const MarkDotted = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
    {[
      [16, 3], [12, 7], [20, 7], [8, 11], [16, 11], [24, 11],
      [4, 16], [12, 16], [20, 16], [28, 16], [8, 21], [16, 21],
      [24, 21], [12, 25], [20, 25], [16, 29],
    ].map(([cx, cy]) => (
      <rect key={`${cx}-${cy}`} x={cx - 1.8} y={cy - 1.8} width="3.6" height="3.6" rx="0.6" />
    ))}
  </svg>
);

const MarkBurst = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M16 3v26M3 16h26M7 7l18 18M25 7 7 25" />
    <path d="M12 3l4 4 4-4M12 29l4-4 4 4M3 12l4 4-4 4M29 12l-4 4 4 4" />
  </svg>
);

const MarkSlash = () => (
  <svg viewBox="0 0 36 32" className="h-7 w-8" fill="currentColor" aria-hidden="true">
    <path d="M10 4h24L26 16H2Z" opacity=".95" />
    <path d="M2 18h24l-8 10H-6Z" transform="translate(8 0)" opacity=".7" />
  </svg>
);

const LOGOS: { key: string; node: React.ReactNode }[] = [
  {
    key: "bold-italic",
    node: <span className="text-2xl font-extrabold italic tracking-tight">Logoipsum&apos;</span>,
  },
  {
    key: "layered",
    node: (
      <>
        <MarkLayered />
        <span className="text-xl font-medium tracking-tight">Logoipsum</span>
      </>
    ),
  },
  {
    key: "dotted",
    node: (
      <>
        <MarkDotted />
        <span className="text-xl font-bold uppercase tracking-[0.12em]">Logoipsum</span>
      </>
    ),
  },
  {
    key: "burst",
    node: (
      <>
        <MarkBurst />
        <span className="text-xl font-medium tracking-tight">Logoipsum</span>
      </>
    ),
  },
  {
    key: "slash",
    node: (
      <>
        <MarkSlash />
        <span className="text-xl font-bold italic tracking-tight">Logoipsum</span>
      </>
    ),
  },
];

const Group: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul
    className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
    aria-hidden={hidden || undefined}
  >
    {LOGOS.map((l) => (
      <li key={l.key} className="flex items-center gap-2.5 whitespace-nowrap text-white/70">
        {l.node}
      </li>
    ))}
  </ul>
);

export const TrustedBy: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16">
      <style>{`
        @keyframes tb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tb-track { animation: tb-scroll 35s linear infinite; }
        .tb-wrap:hover .tb-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .tb-track { animation: none; } }
      `}</style>

      <p className="text-center text-[11px] font-medium text-white/80">
        Trusted by 240+ Companies
      </p>

      <div
        className="tb-wrap mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="tb-track flex w-max">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
};