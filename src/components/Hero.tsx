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
    <section className="relative overflow-hidden bg-hero-dark pb-0 pt-24 text-white">
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

      <div className="relative z-[2] mx-auto grid min-h-[calc(100svh-6rem)] max-w-site items-stretch gap-0 px-[30px] pb-10 pt-10 sm:min-h-[640px] sm:gap-14 sm:py-20 lg:min-h-[730px] lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:py-24">
        <div className="relative z-[2] flex flex-col sm:block">
          <span className="mb-5 inline-flex items-center gap-2.5 font-display text-[11px] font-semibold uppercase tracking-[1.35px] text-lime sm:mb-6 sm:text-[12.5px] sm:tracking-[1.5px]">
            <span className="flex gap-[3px]" aria-hidden>
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              <i className="h-[5px] w-[5px] rounded-full bg-lime" />
            </span>
            Your best solution. Est 2018
          </span>

          <div className="flex flex-1 items-center justify-center py-6 sm:block sm:py-0">
            <h1 className="w-full max-w-[690px] -translate-y-3 text-center font-display text-[clamp(39px,12vw,74px)] font-extrabold leading-[1.35] tracking-[-1.9px] text-white max-[360px]:text-[35px] sm:translate-y-0 sm:text-left sm:leading-[.98] sm:tracking-[-2.7px]">
              <span className="block sm:inline">Everything</span>{" "}
              <span className="block sm:inline">you need,</span>{" "}
              <span className="block text-lime sm:inline">Connected</span>
            </h1>
          </div>

          <div className="mx-auto mb-14 w-full max-w-[370px] sm:mx-0 sm:mb-0 sm:mt-8 sm:max-w-none">
            <p className="max-w-[600px] text-center text-[clamp(16px,2vw,20px)] leading-relaxed text-white/75 sm:text-left">
              Design, Print, Web and Systems.
            </p>

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact#project-brief"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-lime px-[30px] py-[15px] font-display text-[15px] font-semibold text-ink shadow-[0_12px_30px_rgba(163,217,85,.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              >
                Discuss your project
                <Arrow stroke="#1A1C1F" />
              </Link>
              <Link
                href="/portfolio#selected-work"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[.045] px-[30px] py-[14px] font-display text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:border-transparent sm:bg-transparent sm:px-2 sm:py-3 sm:backdrop-blur-none"
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
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[95px] z-[1] w-[600px] -translate-x-1/2 opacity-[.78] [&_.pulse-tag]:hidden sm:top-[80px] sm:w-[540px] sm:opacity-[.42] lg:pointer-events-auto lg:relative lg:left-auto lg:right-auto lg:top-auto lg:z-auto lg:w-auto lg:translate-x-0 lg:opacity-100 lg:[&_.pulse-tag]:flex">
          <Globe />
        </div>
      </div>

      <div className="relative z-[2] hidden border-t border-white/10 bg-black/10 sm:block">
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
