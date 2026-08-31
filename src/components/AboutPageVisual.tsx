import Image from "next/image";
import AboutVisual from "./AboutVisual";

export default function AboutPageVisual({
  image,
  alt,
}: {
  image?: string | null;
  alt: string;
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
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/15 bg-char shadow-[0_35px_90px_rgba(0,0,0,.34)]">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-char/70 px-4 py-2 font-display text-[10.5px] font-semibold uppercase tracking-[1.2px] text-white backdrop-blur-md">
          AfriConnect · Vosloorus
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-char/82 px-5 py-4 backdrop-blur-md">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">
            One team, one roof
          </p>
          <p className="mt-1 text-[13px] text-white/65">
            Connected by the work, accountable for the whole result.
          </p>
        </div>
      </div>
    </div>
  );
}
