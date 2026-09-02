import Link from "next/link";
import Arrow from "./Arrow";
import Globe from "./Globe";

const PROOF = [
  { value: "Since 2018", label: "Building for South African businesses" },
  { value: "20+", label: "Specialist services" },
  { value: "One team", label: "From first brief to ongoing support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-dark pb-0 pt-20 text-white">
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-45" />
      <div
        className="pointer-events-none absolute -right-16 -top-36 h-[620px] w-[620px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,159,224,.24), transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-28 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,217,85,.22), transparent 68%)",
        }}
      />

      <div className="relative z-[2] mx-auto grid min-h-[730px] max-w-site items-center gap-14 px-[30px] py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
        <div className="relative z-[2]">
          <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
            <span className="flex gap-[3px]" aria-hidden>
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
            </span>
            Your best solution. Est 2018
          </span>

          <h1 className="max-w-[690px] font-display text-[clamp(45px,6.2vw,74px)] font-extrabold leading-[.98] tracking-[-2.7px] text-white">
            Everything you need,{" "}
            <span className="text-lime">Connected.</span>
          </h1>

          <p className="mt-8 max-w-[600px] text-[clamp(17.5px,2vw,20px)] leading-relaxed text-white/70">
            Design, Print, Web, Systems and Support.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-lg bg-lime px-[30px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              Discuss your project
              <Arrow stroke="#1A1C1F" />
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 rounded-lg px-2 py-3 font-display text-[15px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              See what we&apos;ve built
              <Arrow
                stroke="#fff"
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[145px] z-[1] w-[480px] -translate-x-[42%] opacity-[.28] [&_.pulse-tag]:hidden sm:left-auto sm:right-[-95px] sm:top-[105px] sm:w-[540px] sm:translate-x-0 sm:opacity-[.32] lg:pointer-events-auto lg:relative lg:left-auto lg:right-auto lg:top-auto lg:z-auto lg:w-auto lg:translate-x-0 lg:opacity-100 lg:[&_.pulse-tag]:flex">
          <Globe />
        </div>
      </div>

      <div className="relative z-[2] border-t border-white/10 bg-black/10">
        <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PROOF.map((item, i) => (
            <div
              key={item.value}
              className={`py-6 sm:px-7 ${i === 0 ? "sm:pl-0" : ""}`}
            >
              <div className="font-display text-[16px] font-bold text-white">
                {item.value}
              </div>
              <div className="mt-1 text-[13.5px] text-white/50">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
