"use client";

import { useMemo, useState } from "react";
import { PORTFOLIO } from "@/lib/content";

const FILTERS = ["All", "Web", "Branding", "Print", "Consulting"] as const;
type Filter = (typeof FILTERS)[number];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(
    () =>
      active === "All"
        ? PORTFOLIO
        : PORTFOLIO.filter((p) => p.filter === active),
    [active]
  );

  return (
    <div>
      {/* filter chips */}
      <div className="mb-12 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => {
          const on = active === f;
          const count =
            f === "All"
              ? PORTFOLIO.length
              : PORTFOLIO.filter((p) => p.filter === f).length;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`inline-flex items-center gap-2 rounded-lg border px-[18px] py-2.5 font-display text-[14.5px] font-semibold transition-all duration-200 ${
                on
                  ? "border-char bg-char text-white"
                  : "border-[var(--line)] bg-paper text-char hover:border-char"
              }`}
            >
              {f}
              <span
                className={`text-[12.5px] font-bold ${
                  on ? "text-lime" : "text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((w) => (
          <div
            key={w.name}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-[var(--line)]"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${w.bg} transition-transform duration-500 group-hover:scale-105`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
            <div className="absolute inset-0 z-[1] grid place-items-center font-display text-[24px] font-extrabold tracking-[1px] text-white/20">
              {w.label}
            </div>

            {/* year badge */}
            <span className="absolute right-4 top-4 z-[3] rounded-full bg-black/25 px-3 py-1 font-display text-[12px] font-semibold text-white/80 backdrop-blur-sm">
              {w.year}
            </span>

            <div className="absolute inset-0 z-[2] flex flex-col justify-end bg-gradient-to-t from-[rgba(26,28,31,.92)] to-transparent to-65% p-[26px]">
              <span className="font-display text-[11.5px] font-semibold uppercase tracking-[1px] text-lime">
                {w.cat}
              </span>
              <h3 className="mt-1.5 font-display text-[21px] font-semibold text-white">
                {w.name}
              </h3>
              {/* blurb reveals on hover */}
              <p className="grid grid-rows-[0fr] text-[14px] leading-relaxed text-white/0 transition-all duration-300 group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:text-white/70">
                <span className="overflow-hidden">{w.blurb}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
