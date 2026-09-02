import Image from "next/image";

export default function FeaturedResourceVisual({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-full min-h-[460px] overflow-hidden bg-char lg:min-h-[620px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        sizes="(min-width: 1024px) 46vw, 100vw"
        className="object-cover object-[center_38%]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/55" />

      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-char/75 px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[1.3px] text-white shadow-sm backdrop-blur-md md:left-7 md:top-7">
        AI × Print
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-char/85 px-4 py-3.5 text-white shadow-2xl backdrop-blur-md md:bottom-7 md:left-7 md:right-7 md:px-5">
        <div>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">
            The new print workflow
          </p>
          <p className="mt-1 text-[12px] text-white/65">
            Faster tools. Human judgement.
          </p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-lime font-display text-[12px] font-bold text-char">
          AI
        </div>
      </div>
    </div>
  );
}
