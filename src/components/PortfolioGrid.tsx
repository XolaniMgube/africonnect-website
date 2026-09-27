"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  PORTFOLIO,
  SERVICE_GROUPS,
  deliverablesOf,
  type Project,
  type ServiceId,
} from "@/lib/content";
import Arrow from "./Arrow";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

// Same accent language as ServicesExplorer, so a service keeps its colour
// everywhere it appears on the site.
const ACCENTS = {
  lime: {
    icon: "bg-lime text-ink",
    line: "bg-lime-2",
  },
  orange: {
    icon: "bg-[#f0a35b] text-ink",
    line: "bg-[#f0a35b]",
  },
  brand: {
    icon: "bg-brand text-white",
    line: "bg-brand",
  },
  char: {
    icon: "bg-[#ece8ff] text-[#6555a3]",
    line: "bg-[#9d8cff]",
  },
} as const;

type Filter = ServiceId | "all";

// A client matches a service if any of the work we did for them falls under it.
const matches = (project: Project, filter: Filter) =>
  filter === "all" ||
  deliverablesOf(project).some((item) => item.service === filter);

// Only offer toggles for services that have published work.
const GROUPS = SERVICE_GROUPS.filter((group) =>
  PORTFOLIO.some((project) => matches(project, group.id)),
);

const groupFor = (id: ServiceId) =>
  SERVICE_GROUPS.find((group) => group.id === id);

// Counts clients, so a client with several services is never double-counted.
const countFor = (filter: Filter) =>
  PORTFOLIO.filter((project) => matches(project, filter)).length;

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("all");
  const filterRowRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  // Deep-link support: /portfolio?service=websites#selected-work
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (GROUPS.some((group) => group.id === service)) {
      setActive(service as ServiceId);
    }
  }, []);

  // On mobile the toggles scroll sideways; keep the active one in view
  // without moving the page itself. Re-measure once web fonts settle, since
  // they change the chip widths.
  useEffect(() => {
    const scrollToActive = () => {
      const row = filterRowRef.current;
      const chip = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (!row || !chip || row.scrollWidth <= row.clientWidth) return;
      const padding = Number.parseFloat(window.getComputedStyle(row).paddingLeft) || 0;
      row.scrollTo({
        left: chip.offsetLeft - padding,
        behavior: hasInteracted.current ? "smooth" : "auto",
      });
    };
    scrollToActive();
    document.fonts?.ready.then(scrollToActive);
  }, [active]);

  const select = (filter: Filter) => {
    hasInteracted.current = true;
    setActive(filter);
    const url = new URL(window.location.href);
    if (filter === "all") url.searchParams.delete("service");
    else url.searchParams.set("service", filter);
    window.history.replaceState(null, "", url);
  };

  const projects = PORTFOLIO.filter((project) => matches(project, active));
  const activeName =
    active === "all" ? "all services" : groupFor(active)?.name;

  const options: { id: Filter; name: string }[] = [
    { id: "all", name: "All work" },
    ...GROUPS.map((group) => ({ id: group.id, name: group.name })),
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-b border-char/10 pb-6 md:mb-10 lg:flex-row lg:items-center lg:justify-between">
        <div
          ref={filterRowRef}
          role="group"
          aria-label="Filter projects by service"
          className="relative -mx-[30px] flex gap-2.5 overflow-x-auto px-[30px] -mb-6 -mt-2 pb-6 pt-2 after:w-5 after:shrink-0 after:content-[''] lg:after:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-wrap lg:overflow-visible lg:my-0 lg:px-0 lg:py-0"
        >
          {options.map((option) => {
            const isActive = active === option.id;
            const group = option.id === "all" ? undefined : groupFor(option.id);
            const accent = group ? ACCENTS[group.accent] : undefined;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => select(option.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border py-1.5 font-display text-[12.5px] font-semibold outline-none transition-all duration-200 active:scale-[.97] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 ${
                  group ? "pl-1.5 pr-2" : "px-[17px]"
                } ${
                  isActive
                    ? "border-char bg-char text-white shadow-[0_8px_18px_rgba(52,55,59,.14)]"
                    : "border-char/10 bg-white text-char hover:border-char/25"
                }`}
              >
                {group && accent && (
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full transition-colors duration-200 ${
                      isActive ? accent.icon : "bg-char/[.055] text-char/45"
                    }`}
                  >
                    <ServiceIcon id={group.id} size={14} />
                  </span>
                )}
                <span className={option.id === "all" ? "py-[3px]" : ""}>
                  {option.name}
                </span>
                {group && (
                  <span
                    className={`min-w-[22px] rounded-full px-1.5 py-0.5 text-center text-[10.5px] font-bold ${
                      isActive ? "bg-white/15 text-white" : "bg-char/[.06] text-char/55"
                    }`}
                  >
                    {countFor(option.id)}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p
          aria-live="polite"
          className="shrink-0 font-display text-[11px] font-semibold uppercase tracking-[1px] text-muted"
        >
          Showing {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"}
          <span className="sr-only"> in {activeName}</span>
        </p>
      </div>

      {/* Keyed by filter so the cards replay their reveal on every switch.
          Cards stay deliberately quiet — the mock-ups are busy scenes, so the
          image is inset like a mounted print and the blurb, scope and year
          live on the project detail page. */}
      <div
        key={active}
        className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10"
      >
        {projects.map((project) => {
          // "All work" shows every piece of work we did for the client; a
          // service filter shows only the piece that fits it. Multi-service
          // clients get a wide card on "All work" so each piece keeps its
          // full-size frame — one image can't do justice to both.
          const items = deliverablesOf(project);
          const shown =
            active === "all"
              ? items
              : items.filter((item) => item.service === active).slice(0, 1);
          const wide = shown.length > 1;
          const services = Array.from(new Set(shown.map((item) => item.service)));
          return (
            <Reveal key={project.slug} className={wide ? "md:col-span-2" : ""}>
              <Link
                href={`/portfolio/${project.slug}`}
                aria-label={`View ${project.name} project`}
                className="group flex h-full flex-col rounded-[22px] border border-char/10 bg-white p-2 shadow-[0_10px_28px_rgba(52,55,59,.05)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(52,55,59,.11)] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
              >
                <div className={wide ? "grid gap-2 md:grid-cols-2" : ""}>
                  {shown.map((item) => (
                    <div
                      key={item.image}
                      className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-char"
                    >
                      {item.image && item.imageAlt && (
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      )}
                      {wide && (
                        <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[.9px] text-char shadow-[0_6px_16px_rgba(0,0,0,.12)] backdrop-blur-md">
                          <i className={`h-1.5 w-1.5 rounded-full ${ACCENTS[groupFor(item.service)?.accent ?? "lime"].line}`} />
                          {item.cat}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 items-end justify-between gap-4 px-4 pb-4 pt-5">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-display text-[10.5px] font-semibold uppercase tracking-[.9px] text-muted">
                      <span className="flex shrink-0 gap-1">
                        {services.map((service) => (
                          <i
                            key={service}
                            className={`h-1.5 w-1.5 rounded-full ${ACCENTS[groupFor(service)?.accent ?? "lime"].line}`}
                          />
                        ))}
                      </span>
                      {wide
                        ? `${shown.length} services`
                        : shown[0]?.cat}
                    </p>
                    <h3 className="mt-2 font-display text-[20px] font-bold leading-tight tracking-[-.5px] text-ink">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-char/10 text-char transition-all duration-300 group-hover:border-char group-hover:bg-char group-hover:text-white"
                  >
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
