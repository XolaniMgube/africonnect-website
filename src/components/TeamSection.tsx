"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { TEAM } from "@/lib/content";
import Reveal from "./Reveal";

export default function TeamSection() {
  const teamTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = teamTrackRef.current;
    if (!track) return;

    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    let intervalId: number | undefined;

    const stopRotation = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const showNextMember = () => {
      const cards = Array.from(track.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement,
      );
      if (cards.length < 2) return;

      const leftPadding = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
      const cardPositions = cards.map((card) => card.offsetLeft - leftPadding);
      const currentIndex = cardPositions.reduce((closestIndex, position, index) =>
        Math.abs(position - track.scrollLeft) <
        Math.abs(cardPositions[closestIndex] - track.scrollLeft)
          ? index
          : closestIndex,
      0);
      const nextIndex = (currentIndex + 1) % cards.length;

      track.scrollTo({
        left: cardPositions[nextIndex],
        behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      });
    };

    const syncRotation = () => {
      stopRotation();
      if (isVisible && mobileQuery.matches && document.visibilityState === "visible") {
        intervalId = window.setInterval(showNextMember, 3000);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncRotation();
      },
      { threshold: 0.35 },
    );

    observer.observe(track);
    mobileQuery.addEventListener("change", syncRotation);
    document.addEventListener("visibilitychange", syncRotation);

    return () => {
      stopRotation();
      observer.disconnect();
      mobileQuery.removeEventListener("change", syncRotation);
      document.removeEventListener("visibilitychange", syncRotation);
    };
  }, []);

  return (
    <section id="team" className="relative overflow-hidden border-t border-white/10 bg-char-2 py-20 text-white md:py-[130px]">
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute -right-32 -top-36 h-[480px] w-[480px] rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative z-[2] mx-auto max-w-site px-[30px]">
        <Reveal className="mb-10 grid gap-7 md:mb-14 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <i className="h-1.5 w-1.5 rounded-full bg-lime" />
              The team
            </span>
            <h2 className="max-w-[650px] font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
              Meet the talent.
            </h2>
          </div>
          {/* <p className="max-w-[490px] text-[16.5px] leading-relaxed text-white/55 lg:justify-self-end">
            A compact team working across creative, production, technology and
            operations—with every discipline connected from the start.
          </p> */}
        </Reveal>

        <p className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[1px] text-white/40 sm:hidden">
          Swipe to meet the team →
        </p>
        <div
          ref={teamTrackRef}
          aria-label="AfriConnect team members"
          className="relative -mx-[30px] flex snap-x snap-mandatory scroll-px-[30px] gap-4 overflow-x-auto px-[30px] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          {TEAM.map((member) => {
            const initials = member.name
              .split(" ")
              .map((name) => name[0])
              .join("");

            return (
              <Reveal key={member.name} className="w-[82vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <article className="group h-full overflow-hidden rounded-[20px] border border-white/10 bg-char transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_22px_50px_rgba(0,0,0,.24)]">
                  <div
                    className={`relative aspect-[6/5] overflow-hidden sm:aspect-[5/4] ${
                      member.photo ? "bg-white" : "bg-[#25282c]"
                    }`}
                  >
                    {member.photo ? (
                      member.photoLayout === "portrait" ? (
                        <Image
                          src={member.photo}
                          alt={member.photoAlt}
                          width={1086}
                          height={1448}
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 82vw"
                          className="absolute left-1/2 top-0 h-auto w-[85%] max-w-none -translate-x-1/2 transition-[width] duration-700 ease-out group-hover:w-[87%]"
                        />
                      ) : (
                        <div
                          className={
                            member.photoLayout === "inset"
                              ? "absolute -top-3 bottom-0 left-1/2 w-[90%] -translate-x-1/2"
                              : "absolute inset-0"
                          }
                        >
                          <Image
                            src={member.photo}
                            alt={member.photoAlt}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                          />
                        </div>
                      )
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${member.grad}`}
                        role="img"
                        aria-label={`${member.name} portrait placeholder`}
                      >
                        <div className="dot-tex-light absolute inset-0 opacity-45" />
                        <div className="absolute inset-x-0 bottom-0 mx-auto h-[62%] w-[68%] rounded-t-[48%] bg-black/16" />
                        <div className="absolute left-1/2 top-[20%] grid h-24 w-24 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-char/25 font-display text-[22px] font-extrabold text-white shadow-xl backdrop-blur-sm">
                          {initials}
                        </div>
                      </div>
                    )}

                    {/* <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-char/65 px-3 py-1.5 font-display text-[10px] font-semibold text-white/60 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}
                  </div>

                  <div className="p-5 sm:p-7">
                    <h3 className="font-display text-[20px] font-bold tracking-[-.4px] text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 font-display text-[11.5px] font-semibold uppercase tracking-[.8px] text-lime">
                      {member.role}
                    </p>
                    <p className="mt-4 hidden text-[14.5px] leading-relaxed text-white/55 sm:block">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 md:mt-14">
          <div className="flex flex-col gap-3 border-t border-white/10 pt-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>Working from Vosloorus, Gauteng</span>
            <span className="font-display font-semibold text-lime">
              Brand · Print · Web · Systems
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
