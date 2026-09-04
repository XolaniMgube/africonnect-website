"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/content";
import Arrow from "./Arrow";
import ServiceIcon from "./ServiceIcon";

const THEME = {
  lime: {
    icon: "bg-lime text-ink",
    text: "text-lime-2",
    activeTab: "border-lime bg-lime text-ink",
    soft: "bg-[#f1f7e5]",
    dot: "bg-lime-2",
  },
  orange: {
    icon: "bg-[#f0a35b] text-ink",
    text: "text-[#bd641f]",
    activeTab: "border-[#f0a35b] bg-[#f0a35b] text-ink",
    soft: "bg-[#fff4e7]",
    dot: "bg-[#f0a35b]",
  },
  brand: {
    icon: "bg-brand text-white",
    text: "text-brand",
    activeTab: "border-brand bg-brand text-white",
    soft: "bg-[#eaf4fc]",
    dot: "bg-brand",
  },
  char: {
    icon: "bg-[#ece8ff] text-[#6555a3]",
    text: "text-[#6555a3]",
    activeTab: "border-[#8b78df] bg-[#8b78df] text-white",
    soft: "bg-[#f1effb]",
    dot: "bg-[#8b78df]",
  },
} as const;

export default function PricingExplorer() {
  const [selected, setSelected] = useState(0);
  const active = SERVICE_GROUPS[selected];
  const theme = THEME[active.accent];

  const moveFocus = (current: number, direction: 1 | -1) => {
    const next =
      (current + direction + SERVICE_GROUPS.length) % SERVICE_GROUPS.length;
    setSelected(next);
    window.requestAnimationFrame(() => {
      document.getElementById(`pricing-tab-${SERVICE_GROUPS[next].id}`)?.focus();
    });
  };

  return (
    <div>
      <div
        className="flex snap-x gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Pricing categories"
      >
        {SERVICE_GROUPS.map((group, index) => {
          const itemTheme = THEME[group.accent];
          const isActive = selected === index;

          return (
            <button
              key={group.id}
              id={`pricing-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="pricing-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  moveFocus(index, 1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  moveFocus(index, -1);
                }
              }}
              className={`inline-flex min-h-11 shrink-0 snap-start cursor-pointer items-center gap-2 rounded-full border px-4 font-display text-[12.5px] font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-char-2 ${
                isActive
                  ? `${itemTheme.activeTab} shadow-[0_10px_25px_rgba(0,0,0,.18)]`
                  : "border-white/12 bg-white/[.055] text-white/70 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
              }`}
            >
              <ServiceIcon id={group.id} size={16} />
              {group.name}
            </button>
          );
        })}
      </div>

      <div
        id="pricing-panel"
        role="tabpanel"
        aria-labelledby={`pricing-tab-${active.id}`}
        className="mt-4 overflow-hidden rounded-[24px] border border-white/12 bg-white text-ink shadow-[0_28px_70px_rgba(0,0,0,.2)]"
      >
        <div className={`relative overflow-hidden border-b border-char/10 p-7 md:p-9 ${theme.soft}`}>
          <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative z-[2] flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${theme.icon}`}>
                  <ServiceIcon id={active.id} size={21} />
                </span>
                <span className={`font-display text-[10.5px] font-bold uppercase tracking-[1px] ${theme.text}`}>
                  Pricing guide · {active.num}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[clamp(29px,4vw,42px)] font-extrabold leading-[1.04] tracking-[-1.2px]">
                {active.name}
              </h3>
              <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-muted">
                {active.tagline}
              </p>
            </div>
            <div className="shrink-0 rounded-xl border border-char/10 bg-white/70 px-4 py-3">
              <span className="block font-display text-[10px] font-semibold uppercase tracking-[.9px] text-muted">
                Available options
              </span>
              <span className="mt-1 block font-display text-[20px] font-extrabold">
                {active.items.length} services
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {active.items.map((item, index) => (
            <article
              key={item.name}
              className={`group p-6 transition-colors duration-200 hover:bg-paper md:p-7 ${
                index > 0 ? "border-t border-char/10 md:border-t-0" : ""
              } ${index % 2 === 1 ? "md:border-l md:border-char/10" : ""} ${
                index >= 2 ? "md:border-t md:border-char/10" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${theme.dot}`} />
                    <h4 className="font-display text-[16px] font-bold tracking-[-.25px]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="mt-2.5 pl-[18px] text-[13.5px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
                <span className={`shrink-0 rounded-full ${theme.soft} px-3 py-1.5 font-display text-[11.5px] font-bold ${theme.text}`}>
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-char/10 bg-paper px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
          <p className="max-w-[580px] text-[12px] leading-relaxed text-muted">
            Placeholder ranges for planning only. Final pricing depends on scope,
            quantity, materials and turnaround time.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={`/services/pricing/${active.id}`}
              className={`group inline-flex items-center gap-2 font-display text-[13px] font-semibold ${theme.text}`}
            >
              Full pricing details
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact#project-brief"
              className="group inline-flex items-center gap-2 rounded-lg bg-char px-4 py-2.5 font-display text-[12.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Request a quote
              <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
