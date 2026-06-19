import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";
import {
  ABOUT,
  STATS,
  VALUES,
  TEAM,
  COMPANY_PROFILE,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About — AfriConnect",
  description:
    "One team in Vosloorus building brands, websites and systems for South African businesses since 2018.",
};

const STAT_ACCENT = [
  { num: "text-olive", bar: "bg-lime-2" },
  { num: "text-brand", bar: "bg-brand" },
  { num: "text-olive", bar: "bg-lime-2" },
  { num: "text-brand", bar: "bg-brand" },
];

const PURPOSE = [
  {
    tag: "Our mission",
    body: ABOUT.mission,
    tile: "from-lime-2 to-olive",
    eyebrow: "text-lime",
    glow: "rgba(163,217,85,.22)",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="#fff" stroke="none" />
      </>
    ),
  },
  {
    tag: "Our vision",
    body: ABOUT.vision,
    tile: "from-brand to-[#2c6fa0]",
    eyebrow: "text-brand",
    glow: "rgba(59,159,224,.22)",
    icon: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        tone="about"
        eyebrow="About AfriConnect"
        title="One team. One roof. Everything your business needs."
        intro="Design, web, print and IT — delivered by one team in Vosloorus since 2018."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      {/* story + stats */}
      <section className="relative overflow-hidden py-[120px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute -right-24 top-6 h-[440px] w-[440px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(163,217,85,.18), transparent 70%)",
          }}
        />
        <div className="relative z-[2] mx-auto grid max-w-site gap-16 px-[30px] lg:grid-cols-[1.25fr_.9fr] lg:items-center">
          <Reveal>
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Who we are
            </span>
            <h2 className="mb-7 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.06] tracking-[-1.4px] text-ink">
              We{" "}
              <span className="relative whitespace-nowrap text-olive">
                connect the dots
                <span
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-lime opacity-25"
                  aria-hidden
                />
              </span>{" "}
              most businesses are left to join themselves.
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              {ABOUT.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              {/* soft glow behind the stat cluster */}
              <div className="pointer-events-none absolute -inset-5 rounded-[32px] bg-gradient-to-br from-lime/20 via-transparent to-brand/15 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {STATS.map((s, i) => {
                  const a = STAT_ACCENT[i % STAT_ACCENT.length];
                  return (
                    <div
                      key={s.l}
                      className="group relative overflow-hidden rounded-2xl border border-black/[.07] bg-white p-7 shadow-[0_4px_18px_rgba(26,28,31,.06)] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span
                        className={`absolute left-0 top-0 h-1 w-full ${a.bar}`}
                      />
                      <div
                        className={`font-display text-[42px] font-extrabold leading-none tracking-[-1.5px] ${a.num}`}
                      >
                        {s.n}
                      </div>
                      <div className="mt-2.5 text-[14.5px] text-muted">
                        {s.l}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* floating badge */}
              <div className="pulse-tag absolute -bottom-4 left-5 shadow-xl">
                <i />
                Since 2018 · Vosloorus
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* mission & vision */}
      <section className="relative overflow-hidden bg-char-2 py-[120px] text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[440px] w-[440px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(163,217,85,.16), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,159,224,.16), transparent 70%)",
          }}
        />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-12 max-w-[620px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <i className="h-1.5 w-1.5 rounded-full bg-lime" />
              Why we exist
            </span>
            <h2 className="font-display text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.04] tracking-[-1.4px] text-white">
              What drives us every day.
            </h2>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2">
            {PURPOSE.map((b) => (
              <Reveal key={b.tag}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-char p-10">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: b.glow }}
                  />
                  <div className="dot-tex-light absolute inset-0 opacity-40" />
                  <div className="relative z-[2]">
                    <div
                      className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${b.tile} shadow-lg`}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {b.icon}
                      </svg>
                    </div>
                    <span
                      className={`mb-3 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] ${b.eyebrow}`}
                    >
                      {b.tag}
                    </span>
                    <p className="font-display text-[24px] font-semibold leading-[1.3] tracking-[-0.6px] text-white">
                      {b.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="bg-paper-2 py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-16 max-w-[660px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              The team
            </span>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
              The people under the roof.
            </h2>
            <p className="mt-5 text-[17.5px] text-muted">
              A small, senior team — so the people who pitch your project are the
              people who deliver it.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => {
              const initials = m.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              return (
                <Reveal key={m.name}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-[var(--line)] bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(52,55,59,.10)]">
                    <div
                      className={`relative grid aspect-[5/3] place-items-center bg-gradient-to-br ${m.grad}`}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      <span className="relative font-display text-[40px] font-extrabold tracking-[1px] text-white/85">
                        {initials}
                      </span>
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-[20px] font-bold tracking-[-0.4px] text-ink">
                        {m.name}
                      </h3>
                      <div className="mt-1 font-display text-[13.5px] font-semibold uppercase tracking-[0.5px] text-olive">
                        {m.role}
                      </div>
                      <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-16 max-w-[660px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              What we stand for
            </span>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
              The values behind every project.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title}>
                <div className="group h-full rounded-2xl border border-[var(--line)] bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-[0_18px_40px_rgba(52,55,59,.08)]">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-paper-2 font-display text-[15px] font-bold text-olive transition-colors group-hover:bg-lime group-hover:text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2.5 font-display text-[20px] font-bold tracking-[-0.4px] text-ink">
                    {v.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* company profile */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                Business profile
              </span>
              <h2 className="mb-5 font-display text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.06] tracking-[-1.4px] text-ink">
                The formal details, for the record.
              </h2>
              <p className="mb-8 text-[17px] leading-relaxed text-muted">
                Everything you need for tenders, vendor onboarding and supplier
                vetting. Need a signed company profile or B-BBEE affidavit? Just
                ask and we&apos;ll send it over.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-char px-[26px] py-[14px] font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,55,59,.25)]"
              >
                Request company profile
                <Arrow stroke="#fff" />
              </a>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
                {COMPANY_PROFILE.map((row, i) => (
                  <div
                    key={row.k}
                    className={`grid grid-cols-1 gap-1 px-7 py-5 sm:grid-cols-[180px_1fr] sm:gap-4 ${
                      i % 2 ? "bg-paper" : "bg-paper-2"
                    }`}
                  >
                    <dt className="font-display text-[13.5px] font-semibold uppercase tracking-[0.5px] text-muted">
                      {row.k}
                    </dt>
                    <dd className="text-[16px] font-medium text-ink">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Want to work with a team that owns the whole picture?"
        text="Tell us about your business. We'll show you exactly how we can help — brand, web, print and IT, under one roof."
        buttonLabel="Start a conversation"
      />
    </main>
  );
}
