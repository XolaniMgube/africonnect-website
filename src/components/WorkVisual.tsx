import Image from "next/image";
import type { Project } from "@/lib/content";

export default function WorkVisual({ project }: { project: Project }) {
  if (project.image && project.imageAlt) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
    );
  }

  if (project.slug === "mokaleng") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#e8ebdf]">
        <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-lime/25 blur-2xl" />
        <div className="dot-tex absolute inset-0 opacity-25" />

        <div className="absolute left-[9%] top-[20%] h-[72%] w-[82%] origin-bottom -rotate-2 overflow-hidden rounded-[13px] border-[6px] border-char bg-paper shadow-[0_24px_45px_rgba(52,55,59,.28)] transition-transform duration-700 ease-out group-hover:-rotate-1 group-hover:scale-[1.025]">
          <div className="flex h-8 items-center justify-between border-b border-char/10 px-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-lime-2" />
              <span className="font-display text-[7px] font-bold tracking-[.5px] text-char">
                MOKALENG
              </span>
            </div>
            <div className="flex gap-2">
              <span className="h-1 w-7 rounded bg-char/20" />
              <span className="h-1 w-5 rounded bg-char/20" />
              <span className="h-1 w-6 rounded bg-char/20" />
            </div>
          </div>

          <div className="grid h-[calc(100%-2rem)] grid-cols-[.85fr_1.15fr]">
            <div className="flex flex-col justify-center p-4 md:p-5">
              <span className="font-display text-[8px] font-semibold uppercase tracking-[1px] text-olive">
                Built with purpose
              </span>
              <div className="mt-2 font-display text-[17px] font-extrabold leading-[1.02] tracking-[-.6px] text-ink md:text-[20px]">
                A clearer way to present the business.
              </div>
              <span className="mt-4 w-fit rounded bg-lime px-3 py-1.5 font-display text-[7px] font-bold text-char">
                Explore services
              </span>
            </div>
            <div className="relative overflow-hidden bg-[#d6dacd]">
              <div className="absolute bottom-0 right-[-8%] h-[76%] w-[95%] skew-x-[-8deg] bg-char" />
              <div className="absolute bottom-0 left-[4%] h-[54%] w-[43%] skew-x-[10deg] bg-[#50564f]" />
              <div className="absolute left-[24%] top-[16%] h-10 w-10 rounded-full bg-[#f0a35b]/70 blur-[1px]" />
              <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#111310]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(163,217,85,.14),transparent_38%)]" />
      <div className="dot-tex-light absolute inset-0 opacity-45" />

      <div className="absolute left-[8%] top-[19%] h-[65%] w-[84%] transition-transform duration-700 ease-out group-hover:scale-[1.025]">
        <span className="absolute -left-1 top-[12%] h-[76%] w-1.5 rounded-full bg-[#5d625e]" />
        <span className="absolute -right-1 top-[12%] h-[76%] w-1.5 rounded-full bg-[#5d625e]" />
        <span className="absolute -left-3 bottom-0 h-1.5 w-8 rotate-[-8deg] rounded-full bg-[#5d625e]" />
        <span className="absolute -right-3 bottom-0 h-1.5 w-8 rotate-[8deg] rounded-full bg-[#5d625e]" />

        <div className="absolute inset-x-0 top-0 bottom-[12%] overflow-hidden rounded-md border border-white/20 bg-[#20231f] shadow-[0_25px_55px_rgba(0,0,0,.55)]">
          <div className="absolute -right-[12%] -top-[20%] h-[145%] w-[50%] rotate-[12deg] rounded-[50%] border-[34px] border-lime/10" />
          <div className="absolute left-[10%] top-[21%]">
            <div className="font-display text-[21px] font-extrabold uppercase leading-[.95] tracking-[-.8px] text-white md:text-[24px]">
              Ideas made
              <br />
              visible.
            </div>
            <div className="mt-4 h-1 w-12 bg-lime" />
          </div>
          <div className="absolute bottom-[14%] left-[10%] flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-lime text-[7px] font-bold text-lime">
              SS
            </span>
            <span className="font-display text-[9px] font-bold uppercase tracking-[.8px] text-white">
              Slogan Studio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
