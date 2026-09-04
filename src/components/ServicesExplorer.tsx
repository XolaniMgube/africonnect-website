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
  const serviceNavRef = useRef<HTMLDivElement>(null);
  const active = SERVICE_GROUPS[selected];
  const theme = THEME[active.accent];

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const index = SERVICE_GROUPS.findIndex((group) => group.id === id);
    if (index >= 0) setSelected(index);
  }, []);

  useEffect(() => {
    const serviceNav = serviceNavRef.current;
    if (!serviceNav) return;

    const mobileQuery = window.matchMedia("(max-width: 639px)");
    let isVisible = false;
    let intervalId: number | undefined;

    const stopRotation = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const startRotation = () => {
      stopRotation();
      if (
        isVisible &&
        mobileQuery.matches &&
        document.visibilityState === "visible"
      ) {
        intervalId = window.setInterval(() => {
          const nextIndex = (selected + 1) % SERVICE_GROUPS.length;
          setSelected(nextIndex);
          window.history.replaceState(
            null,
            "",
            `#${SERVICE_GROUPS[nextIndex].id}`,
          );
        }, 10000);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        startRotation();
      },
      { threshold: 0.2 },
    );

    observer.observe(serviceNav);
    mobileQuery.addEventListener("change", startRotation);
    document.addEventListener("visibilitychange", startRotation);

    return () => {
      stopRotation();
      observer.disconnect();
      mobileQuery.removeEventListener("change", startRotation);
      document.removeEventListener("visibilitychange", startRotation);
    };
  }, [selected]);

  const select = (index: number) => {
    setSelected(index);
    window.history.replaceState(null, "", `#${SERVICE_GROUPS[index].id}`);
  };

  const moveFocus = (
    current: number,
    direction: 1 | -1,
    idPrefix = "",
  ) => {
    const next =
      (current + direction + SERVICE_GROUPS.length) % SERVICE_GROUPS.length;
    select(next);
    window.requestAnimationFrame(() => {
      document
        .getElementById(`${idPrefix}${SERVICE_GROUPS[next].id}`)
        ?.focus();
    });
  };

  return (
    <div className="grid min-w-0 gap-5 sm:gap-6 lg:grid-cols-[340px_1fr]">
      <div
        ref={serviceNavRef}
        className="min-w-0 self-start rounded-[22px] border border-char/10 bg-white/65 p-2 shadow-[0_14px_38px_rgba(52,55,59,.07)]"
      >
        <div className="px-2 pb-2 pt-2 text-center sm:hidden">
          <span className="font-display text-[9px] font-bold uppercase tracking-[1px] text-char/45">
            Current service
          </span>
          <p className="mt-1 font-display text-[16px] font-bold tracking-[-.3px] text-ink">
            {active.name}
          </p>
        </div>

        <div
          className="grid grid-cols-4 gap-1.5 sm:hidden"
          role="tablist"
          aria-label="Choose a service discipline"
        >
          {SERVICE_GROUPS.map((group, index) => {
            const itemTheme = THEME[group.accent];
            const isActive = selected === index;
            return (
              <button
                key={group.id}
                id={`mobile-${group.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="service-detail-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    moveFocus(index, 1, "mobile-");
                  }
                  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    moveFocus(index, -1, "mobile-");
                  }
                }}
                aria-label={group.name}
                className={`group flex min-w-0 flex-col items-center rounded-xl border px-1 py-2.5 outline-none transition-all duration-300 active:scale-[.97] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-char bg-char shadow-[0_8px_20px_rgba(26,28,31,.16)]"
                    : "border-char/[.08] bg-white/70"
                }`}
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-[11px] transition-colors duration-300 ${
                    isActive
                      ? itemTheme.icon
                      : "bg-char/[.055] text-char/45"
                  }`}
                >
                  <ServiceIcon id={group.id} size={19} />
                </span>
                <span
                  className={`mt-1.5 font-display text-[9px] font-bold ${
                    isActive ? "text-white/55" : "text-char/35"
                  }`}
                >
                  {group.num}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden items-center justify-between gap-3 px-2.5 pb-2 pt-1.5 sm:flex">
          <span className="font-display text-[11px] font-bold uppercase tracking-[1px] text-char/65">
            Choose a service
          </span>
          <span className="text-[11px] text-muted">Select to view</span>
        </div>

        <div
          className="hidden sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-1"
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
                className={`group cursor-pointer rounded-[15px] border p-3.5 text-left outline-none transition-all duration-300 active:scale-[.99] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 ${
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
      </div>

      <div
        key={active.id}
        id="service-detail-panel"
        role="tabpanel"
        className="service-panel-enter min-w-0 scroll-mt-24 overflow-hidden rounded-[24px] border border-char/10 bg-white shadow-[0_20px_55px_rgba(52,55,59,.08)]"
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
