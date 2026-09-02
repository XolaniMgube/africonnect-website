import Link from "next/link";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

const SCOPE = [
  "Product discovery",
  "Online checkout",
  "Customer accounts",
  "Admin workflow",
];

function StorePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden>
      <div className="overflow-hidden rounded-[22px] border border-white/15 bg-[#101214] shadow-[0_30px_70px_rgba(0,0,0,.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/45">
            Lavido Auto Parts
          </span>
          <span className="h-5 w-5 rounded-full bg-[#d85b1f]" />
        </div>
        <div className="grid min-h-[340px] grid-cols-[1.05fr_.95fr]">
          <div className="p-7">
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#f47a36]">
              Find the right part
            </span>
            <div className="mt-3 max-w-[210px] font-display text-[29px] font-extrabold leading-[1.02] text-white">
              Parts for the way you move.
            </div>
            <div className="mt-5 flex rounded-lg border border-white/10 bg-white/5 p-1.5">
              <div className="flex-1 px-2 py-1 text-[8px] text-white/35">Search make or part</div>
              <div className="rounded-md bg-[#d85b1f] px-3 py-1 text-[8px] font-semibold text-white">
                Search
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2">
              {["Engine", "Brakes", "Service", "Body"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[.035] p-3">
                  <span className="block h-6 w-6 rounded-md bg-white/5" />
                  <span className="mt-2 block text-[8px] font-medium text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#d85b1f] via-[#8e3310] to-[#2a1711] p-5">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.32) 1px, transparent 1px)", backgroundSize: "15px 15px" }} />
            <div className="relative ml-auto flex h-full w-[82%] flex-col rounded-xl border border-white/15 bg-[#181a1c] p-4 shadow-2xl">
              <div className="h-24 rounded-lg bg-gradient-to-br from-white/10 to-white/[.03]" />
              <div className="mt-4 h-2 w-2/3 rounded bg-white/25" />
              <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-auto flex items-center justify-between">
                <span className="font-display text-[12px] font-bold text-white">R1 299</span>
                <span className="rounded-md bg-[#d85b1f] px-3 py-2 text-[8px] font-semibold text-white">Add to cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 right-7 rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl">
        <div className="text-[9px] text-white/40">Responsive commerce</div>
        <div className="mt-1 text-[11px] font-semibold text-lime">Storefront + operations</div>
      </div>
    </div>
  );
}

export default function FeaturedCaseStudy() {
  return (
    <section className="bg-char-2 py-[110px] text-white md:py-[130px]">
      <div className="mx-auto grid max-w-site items-center gap-16 px-[30px] lg:grid-cols-[.82fr_1.18fr]">
        <Reveal>
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
            <i className="h-1.5 w-1.5 rounded-full bg-lime" />
            Featured digital build
          </span>
          <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
            An auto-parts business, built to sell online.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/62">
            Lavido needed more than a brochure website. The platform brings
            product discovery, purchasing and day-to-day store management into
            one connected digital experience.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {SCOPE.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[12.5px] text-white/65">
                {item}
              </span>
            ))}
          </div>
          <Link href="/portfolio/lavido-auto-parts" className="group mt-9 inline-flex items-center gap-2.5 font-display text-[15px] font-semibold text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">
            View the case study
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal>
          <StorePreview />
        </Reveal>
      </div>
    </section>
  );
}
