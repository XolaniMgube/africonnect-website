import Image from "next/image";
import AboutVisual from "./AboutVisual";

export default function AboutPageVisual({
  image,
  alt,
  priority = false,
}: {
  image?: string | null;
  alt: string;
  priority?: boolean;
}) {
  if (!image) {
    return (
      <div className="relative py-5 lg:py-10">
        <AboutVisual />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-7 rounded-full bg-lime/10 blur-[90px]" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/15 bg-char shadow-[0_35px_90px_rgba(0,0,0,.34)]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-char/70 px-4 py-2 font-display text-[10.5px] font-semibold uppercase tracking-[1.2px] text-white backdrop-blur-md">
          AfriConnect · Vosloorus
        </div>
        {/* <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-char/72 p-4 backdrop-blur-md sm:p-5">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[1.1px] text-lime">
            One team, multiple solutions
          </p>
          <p className="mt-1.5 max-w-[390px] text-[12.5px] leading-relaxed text-white/70 sm:text-[13.5px]">
            Creative, production and technology connected from the first brief.
          </p>
        </div> */}
      </div>
      <div className="absolute -right-3 -top-4 hidden rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl sm:block">
        <p className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/35">Established</p>
        <p className="mt-1 font-display text-[13px] font-bold text-white">2018</p>
      </div>
    </div>
  );
}
