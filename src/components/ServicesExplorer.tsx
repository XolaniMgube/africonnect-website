"use client";

import { useEffect, useRef, useState } from "react";
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
  const tabTrackRef = useRef<HTMLDivElement>(null);
  const active = SERVICE_GROUPS[selected];
  const theme = THEME[active.accent];
  const previousIndex =
    (selected - 1 + SERVICE_GROUPS.length) % SERVICE_GROUPS.length;
  const nextIndex = (selected + 1) % SERVICE_GROUPS.length;

  const scrollTabIntoView = (
    index: number,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const track = tabTrackRef.current;
    const tab = track?.children[index];
    if (!(track instanceof HTMLElement) || !(tab instanceof HTMLElement)) return;
    if (!window.matchMedia("(max-width: 639px)").matches) return;

    const leftPadding = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: tab.offsetLeft - leftPadding, behavior });
  };

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const index = SERVICE_GROUPS.findIndex((group) => group.id === id);
    if (index >= 0) {
      setSelected(index);
      window.requestAnimationFrame(() => scrollTabIntoView(index, "auto"));
    }
  }, []);

  const select = (index: number, revealPanel = false) => {
    setSelected(index);
    window.history.replaceState(null, "", `#${SERVICE_GROUPS[index].id}`);
    window.requestAnimationFrame(() => {
      scrollTabIntoView(index);
      if (revealPanel) {
        document.getElementById("service-detail-panel")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
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
    <div className="grid min-w-0 gap-5 sm:gap-6 lg:grid-cols-[340px_1fr]">
      <div className="min-w-0 self-start rounded-[22px] border border-char/10 bg-white/65 p-2 shadow-[0_14px_38px_rgba(52,55,59,.07)]">
        <div className="flex items-center justify-between gap-3 px-2.5 pb-2 pt-1.5">
          <span className="font-display text-[11px] font-bold uppercase tracking-[1px] text-char/65">
            Choose a service
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[.8px] text-olive sm:hidden">
            {SERVICE_GROUPS.length} service areas
          </span>
          <span className="hidden text-[11px] text-muted sm:inline">Select to view</span>
        </div>

        <div
          ref={tabTrackRef}
          className="relative flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-1"
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
                className={`group min-w-[225px] snap-start cursor-pointer scroll-mt-28 rounded-[15px] border p-3.5 text-left outline-none transition-all duration-300 active:scale-[.99] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 sm:min-w-0 ${
                  isActive
                    ? "border-char bg-char text-white shadow-[0_12px_28px_rgba(26,28,31,.16)]"
                    : "border-char/10 bg-white text-ink hover:-translate-y-0.5 hover:border-char/30 hover:bg-paper hover:shadow-[0_9px_22px_rgba(52,55,59,.09)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-[11px] ${itemTheme.icon}`}
                  >
                    <ServiceIcon id={group.id} size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-display text-[9px] font-bold ${
                        isActive ? "text-white/40" : itemTheme.number
                      }`}
                    >
                      {group.num}
                    </span>
                    <span className="mt-0.5 block font-display text-[14px] font-bold tracking-[-.2px]">
                      {group.name}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[15px] transition-all duration-300 ${
                      isActive
                        ? "border-lime/35 bg-lime/10 text-lime"
                        : "border-char/15 text-char/45 group-hover:translate-x-0.5 group-hover:border-char group-hover:bg-char group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 px-1 pb-1 pt-2 sm:hidden">
          <button
            type="button"
            onClick={() => select(previousIndex)}
            aria-label={`Previous service: ${SERVICE_GROUPS[previousIndex].name}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-char/15 bg-white font-display text-[17px] text-char transition-colors active:bg-paper"
          >
            ←
          </button>
          <div className="min-w-0 flex-1 px-1 text-center">
            <p className="font-display text-[10px] font-bold uppercase tracking-[.8px] text-char/60">
              Service {selected + 1} of {SERVICE_GROUPS.length}
            </p>
            <div className="mt-1.5 flex justify-center gap-1.5" aria-hidden="true">
              {SERVICE_GROUPS.map((group, index) => (
                <span
                  key={group.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selected === index ? "w-6 bg-char" : "w-1.5 bg-char/20"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => select(nextIndex)}
            aria-label={`Next service: ${SERVICE_GROUPS[nextIndex].name}`}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-char px-3.5 font-display text-[11px] font-semibold text-white transition-colors active:bg-ink"
          >
            Next <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        id="service-detail-panel"
        role="tabpanel"
        className="min-w-0 scroll-mt-24 overflow-hidden rounded-[24px] border border-char/10 bg-white shadow-[0_20px_55px_rgba(52,55,59,.08)]"
      >
        <div className={`relative overflow-hidden p-6 md:p-10 ${theme.soft}`}>
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
              href="/contact#project-brief"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-char px-5 py-3 font-display text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink sm:w-fit"
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
              className={`group relative border-char/10 p-6 md:min-h-[170px] md:p-8 ${
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

        <div className="border-t border-char/10 bg-white p-5 sm:hidden">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-display text-[10px] font-bold uppercase tracking-[.8px] text-char/50">
              Keep exploring
            </span>
            <span className="text-[11px] text-muted">
              {selected + 1} of {SERVICE_GROUPS.length}
            </span>
          </div>
          <button
            type="button"
            onClick={() => select(nextIndex, true)}
            className="flex w-full items-center justify-between gap-4 rounded-xl bg-char px-4 py-3.5 text-left text-white transition-colors active:bg-ink"
          >
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[.8px] text-white/45">
                Next service
              </span>
              <span className="mt-0.5 block truncate font-display text-[14px] font-bold">
                {SERVICE_GROUPS[nextIndex].name}
              </span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-lime">
              →
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-char/10 bg-paper px-7 py-5 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span className="hidden sm:inline">Every project is scoped and quoted around what you actually need.</span>
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
