"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/content";
import Arrow from "./Arrow";
import ServiceIcon from "./ServiceIcon";

const THEME = {
  lime: {
    icon: "bg-lime text-ink",
    number: "text-lime-2",
    line: "bg-lime-2",
    soft: "bg-[#eef6dd]",
  },
  orange: {
    icon: "bg-[#f0a35b] text-ink",
    number: "text-[#d77c31]",
    line: "bg-[#f0a35b]",
    soft: "bg-[#fff1df]",
  },
  brand: {
    icon: "bg-brand text-white",
    number: "text-brand",
    line: "bg-brand",
    soft: "bg-[#e6f1fb]",
  },
  char: {
    icon: "bg-[#ece8ff] text-[#6555a3]",
    number: "text-[#6555a3]",
    line: "bg-[#9d8cff]",
    soft: "bg-[#f0edff]",
  },
} as const;

export default function ServicesExplorer() {
  const [selected, setSelected] = useState(0);
  const active = SERVICE_GROUPS[selected];
  const theme = THEME[active.accent];

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const index = SERVICE_GROUPS.findIndex((group) => group.id === id);
    if (index >= 0) setSelected(index);
  }, []);

  const select = (index: number) => {
    setSelected(index);
    window.history.replaceState(null, "", `#${SERVICE_GROUPS[index].id}`);
  };

  const moveFocus = (current: number, direction: 1 | -1) => {
    const next =
      (current + direction + SERVICE_GROUPS.length) % SERVICE_GROUPS.length;
    select(next);
    window.requestAnimationFrame(() => {
      document.getElementById(SERVICE_GROUPS[next].id)?.focus();
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        role="tablist"
        aria-label="Service disciplines"
      >
        {SERVICE_GROUPS.map((group, index) => {
          const itemTheme = THEME[group.accent];
          const isActive = selected === index;
          return (
            <button
              key={group.id}
              id={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="service-detail-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index)}
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
              className={`group scroll-mt-28 rounded-[18px] border p-5 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 ${
                isActive
                  ? "border-char bg-char text-white shadow-[0_18px_42px_rgba(26,28,31,.18)]"
                  : "border-char/10 bg-white text-ink hover:-translate-y-0.5 hover:border-char/20 hover:shadow-[0_12px_30px_rgba(52,55,59,.08)]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${itemTheme.icon}`}
                >
                  <ServiceIcon id={group.id} size={21} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-display text-[10px] font-bold ${
                      isActive ? "text-white/35" : itemTheme.number
                    }`}
                  >
                    {group.num}
                  </span>
                  <span className="mt-1 block font-display text-[15px] font-bold tracking-[-.25px]">
                    {group.name}
                  </span>
                </span>
                <span
                  className={`text-[16px] transition-transform duration-300 ${
                    isActive ? "translate-x-0 text-lime" : "-translate-x-1 text-char/25"
                  }`}
                >
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div
        id="service-detail-panel"
        role="tabpanel"
        className="overflow-hidden rounded-[24px] border border-char/10 bg-white shadow-[0_20px_55px_rgba(52,55,59,.08)]"
      >
        <div className={`relative overflow-hidden p-7 md:p-10 ${theme.soft}`}>
          <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative z-[2] flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[610px]">
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${theme.icon}`}>
                  <ServiceIcon id={active.id} size={23} />
                </span>
                <span className={`font-display text-[11px] font-bold ${theme.number}`}>
                  DISCIPLINE {active.num}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.04] tracking-[-1.25px] text-ink">
                {active.name}
              </h3>
              <p className="mt-4 max-w-[590px] text-[16px] leading-relaxed text-char/70">
                {active.tagline}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-char px-5 py-3 font-display text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Discuss this service
              <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {active.items.map((item, index) => (
            <article
              key={item.name}
              className={`group relative min-h-[170px] border-char/10 p-7 md:p-8 ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index % 2 === 1 ? "md:border-l" : ""} ${
                index >= 2 ? "md:border-t" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${theme.line}`} />
                <div>
                  <h4 className="font-display text-[16.5px] font-bold tracking-[-.3px] text-ink">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-char/10 bg-paper px-7 py-5 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>Every project is scoped and quoted around what you actually need.</span>
          <Link
            href="/portfolio"
            className={`group inline-flex items-center gap-2 font-display font-semibold ${theme.number}`}
          >
            See related work
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
