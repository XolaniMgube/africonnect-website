import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICE_GROUPS } from "@/lib/content";

const THEME = {
  lime: {
    icon: "bg-lime text-ink",
    text: "text-lime-2",
    soft: "bg-[#f1f7e5]",
    line: "bg-lime-2",
  },
  orange: {
    icon: "bg-[#f0a35b] text-ink",
    text: "text-[#bd641f]",
    soft: "bg-[#fff4e7]",
    line: "bg-[#f0a35b]",
  },
  brand: {
    icon: "bg-brand text-white",
    text: "text-brand",
    soft: "bg-[#eaf4fc]",
    line: "bg-brand",
  },
  char: {
    icon: "bg-[#ece8ff] text-[#6555a3]",
    text: "text-[#6555a3]",
    soft: "bg-[#f1effb]",
    line: "bg-[#8b78df]",
  },
} as const;

export function generateStaticParams() {
  return SERVICE_GROUPS.map((group) => ({ slug: group.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = SERVICE_GROUPS.find((item) => item.id === slug);

  if (!group) return { title: "Pricing — AfriConnect" };

  return {
    title: `${group.name} Pricing — AfriConnect`,
    description: `Indicative pricing ranges for AfriConnect's ${group.name.toLowerCase()} services.`,
  };
}

export default async function ServicePricingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = SERVICE_GROUPS.find((item) => item.id === slug);
  if (!group) notFound();

  const theme = THEME[group.accent];

  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-28 -top-36 h-[600px] w-[600px] rounded-full bg-lime/10 blur-[140px]" />

        <div className="relative z-[3] border-y border-white/10 bg-black/10">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto flex h-14 max-w-site items-center gap-2.5 overflow-hidden px-[30px] font-display text-[11px] font-semibold"
          >
            <Link href="/" className="shrink-0 text-white/35 transition-colors hover:text-lime">
              Home
            </Link>
            <span className="text-white/18">/</span>
            <Link href="/services" className="shrink-0 text-white/55 transition-colors hover:text-lime">
              Services
            </Link>
            <span className="text-white/18">/</span>
            <Link href="/services#pricing" className="shrink-0 text-white/55 transition-colors hover:text-lime">
              Pricing
            </Link>
            <span className="text-white/18">/</span>
            <span className="truncate text-lime">{group.name}</span>
          </nav>
        </div>

        <div className="relative z-[2] mx-auto grid max-w-site items-end gap-10 px-[30px] py-12 sm:py-[76px] lg:min-h-[480px] lg:grid-cols-[1fr_.65fr] lg:gap-12 lg:py-[90px]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${theme.icon}`}>
                <ServiceIcon id={group.id} size={23} />
              </span>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">
                Pricing guide · {group.num}
              </span>
            </div>
            <h1 className="mt-7 max-w-[760px] font-display text-[clamp(38px,10.5vw,68px)] font-extrabold leading-[.98] tracking-[-2px] sm:tracking-[-2.4px]">
              {group.name} pricing.
            </h1>
            <p className="mt-6 max-w-[670px] text-[17px] leading-relaxed text-white/60">
              {group.tagline}
            </p>
          </Reveal>

          <Reveal className="hidden md:block lg:justify-self-end">
            <div className="max-w-[390px] rounded-[18px] border border-white/12 bg-white/[.055] p-6 backdrop-blur-sm">
              <span className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-lime">
                Before you compare
              </span>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                These are placeholder planning ranges. Your final quote will reflect
                the exact scope, quantity, materials and turnaround time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-2 py-20 md:py-[125px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className={`font-display text-[11px] font-semibold uppercase tracking-[1.1px] ${theme.text}`}>
                {group.items.length} service options
              </span>
              <h2 className="mt-3 font-display text-[clamp(32px,4vw,46px)] font-extrabold tracking-[-1.35px] text-ink">
                What each service may cost.
              </h2>
            </div>
            <Link
              href="/contact#project-brief"
              className="group inline-flex w-fit items-center gap-2 rounded-lg bg-char px-5 py-3 font-display text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Request an exact quote
              <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {group.items.map((item, index) => (
              <Reveal key={item.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-char/10 bg-white shadow-[0_14px_38px_rgba(52,55,59,.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(52,55,59,.09)]">
                  <div className={`h-1.5 w-full ${theme.line}`} />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <span className={`font-display text-[10px] font-bold ${theme.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`rounded-full px-3.5 py-2 font-display text-[12px] font-bold ${theme.soft} ${theme.text}`}>
                        {item.price}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[21px] font-bold tracking-[-.5px] text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                      {item.desc}
                    </p>
                    <Link
                      href="/contact#project-brief"
                      className={`group mt-auto inline-flex items-center gap-2 pt-7 font-display text-[13px] font-semibold ${theme.text}`}
                    >
                      Ask about this service
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-[20px] border border-char/10 bg-white p-6 shadow-[0_14px_38px_rgba(52,55,59,.05)] md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-muted">
                  Compare another category
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICE_GROUPS.filter((item) => item.id !== group.id).map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/pricing/${item.id}`}
                      className="rounded-full border border-char/10 bg-paper px-4 py-2 font-display text-[12px] font-semibold text-char transition-all hover:border-char/25 hover:bg-char hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/services#pricing"
                className="group inline-flex shrink-0 items-center gap-2 font-display text-[13px] font-semibold text-olive"
              >
                <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" />
                Back to all pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Need a price for your exact brief?"
        text="Tell us what you need and we'll turn it into one clear, practical quote."
        buttonLabel="Request a quote"
      />
    </main>
  );
}
