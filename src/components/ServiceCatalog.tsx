"use client";

import { useState } from "react";
import { SERVICE_GROUPS } from "@/lib/content";
import Reveal from "./Reveal";

/* per-division colour theming */
const ACCENT = {
  lime: {
    eyebrow: "text-olive",
    dot: "bg-lime-2",
    panel: "bg-[#eef6dd]",
    panelDots: "rgba(94,115,39,.16)",
    numTile: "from-lime-2 to-olive",
    chip: "bg-lime/20 text-olive",
    iconStroke: "#5E7327",
    cardHover:
      "hover:border-lime-2 hover:shadow-[0_20px_44px_rgba(143,201,58,.20)]",
    glow: "rgba(163,217,85,.22)",
    bar: "bg-lime-2",
    price: "bg-olive/10 text-olive",
  },
  brand: {
    eyebrow: "text-brand",
    dot: "bg-brand",
    panel: "bg-[#e6f1fb]",
    panelDots: "rgba(44,111,160,.16)",
    numTile: "from-brand to-[#2c6fa0]",
    chip: "bg-brand/15 text-brand",
    iconStroke: "#2c6fa0",
    cardHover:
      "hover:border-brand hover:shadow-[0_20px_44px_rgba(59,159,224,.20)]",
    glow: "rgba(59,159,224,.20)",
    bar: "bg-brand",
    price: "bg-brand/10 text-brand",
  },
} as const;

/* one icon per division */
function DivisionIcon({ id, stroke }: { id: string; stroke: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "brand":
      return (
        <svg {...common}>
          <path d="M13 3l2.2 5.8L21 11l-5.8 2.2L13 19l-2.2-5.8L5 11l5.8-2.2L13 3z" />
          <path d="M5 3v3M3.5 4.5h3M6 18v2.5M4.75 19.25h2.5" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M8.5 8L6.5 10l2 2M15.5 8l2 2-2 2" />
        </svg>
      );
    case "print":
      return (
        <svg {...common}>
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
      );
    default: // consult
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
        </svg>
      );
  }
}

export default function ServiceCatalog() {
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setShown((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="space-y-[90px]">
      {SERVICE_GROUPS.map((g) => {
        const open = !!shown[g.id];
        const a = ACCENT[g.accent];
        return (
          <div key={g.id} id={g.id} className="scroll-mt-28">
            {/* textured, tinted header panel */}
            <Reveal>
              <div
                className={`relative mb-7 overflow-hidden rounded-3xl border border-black/[.06] ${a.panel} p-8 md:p-9`}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(${a.panelDots} 1.2px, transparent 1.2px)`,
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative z-[2] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <div
                      className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${a.numTile} font-display text-[22px] font-extrabold text-white shadow-lg`}
                    >
                      {g.num}
                    </div>
                    <div className="max-w-[560px]">
                      <span
                        className={`mb-1.5 inline-flex items-center gap-2 font-display text-[12.5px] font-bold uppercase tracking-[1.5px] ${a.eyebrow}`}
                      >
                        <DivisionIcon id={g.id} stroke={a.iconStroke} />
                        Division {g.num}
                      </span>
                      <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.04] tracking-[-1.2px] text-ink">
                        {g.name}
                      </h2>
                      <p className="mt-2.5 text-[16.5px] leading-relaxed text-char/70">
                        {g.tagline}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggle(g.id)}
                    aria-expanded={open}
                    className={`group inline-flex shrink-0 items-center gap-2.5 rounded-lg border px-[22px] py-3 font-display text-[14.5px] font-semibold shadow-sm transition-all duration-200 ${
                      open
                        ? "border-char bg-char text-white"
                        : "border-black/10 bg-white text-char hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    {open ? "Hide pricing" : "Show pricing"}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* item cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {g.items.map((item) => (
                <Reveal key={item.name}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border border-black/[.07] bg-white p-6 shadow-[0_2px_12px_rgba(26,28,31,.05)] transition-all duration-300 hover:-translate-y-1 ${a.cardHover}`}
                  >
                    {/* accent corner glow on hover */}
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: a.glow }}
                    />
                    {/* accent left bar grows on hover */}
                    <span
                      className={`absolute left-0 top-6 h-0 w-1 rounded-r ${a.bar} transition-all duration-300 group-hover:h-[calc(100%-3rem)]`}
                    />

                    <div className="relative z-[2] flex items-start gap-4">
                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.chip} transition-transform duration-300 group-hover:scale-105`}
                      >
                        <DivisionIcon id={g.id} stroke={a.iconStroke} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-[18.5px] font-bold tracking-[-0.3px] text-ink">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                          {item.desc}
                        </p>

                        {/* price reveals inline */}
                        <div
                          className={`grid transition-all duration-300 ${
                            open
                              ? "mt-4 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <span
                              className={`inline-flex items-center rounded-md px-3 py-1.5 font-display text-[14px] font-bold ${a.price}`}
                            >
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
