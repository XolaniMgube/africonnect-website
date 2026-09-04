import Image from "next/image";

type LogoProps = {
  /** Color of the wordmark; the official icon keeps its brand colors. */
  className?: string;
  /** Smaller lockup used by the fixed navigation after the page scrolls. */
  compact?: boolean;
};

export default function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center font-display transition-all duration-300 ${
        compact ? "gap-0" : "gap-0"
      } ${className}`}
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={60}
        height={60}
        className={`flex-none object-contain transition-all duration-300 ${
          compact ? "h-[46px] w-[46px]" : "h-[70px] w-[70px]"
        }`}
      />
      <span className="flex flex-col items-start leading-none">
        <span
          className={`whitespace-nowrap font-extrabold transition-all duration-300 ${
            compact
              ? "text-[14px] tracking-[0.6px]"
              : "text-[18px] tracking-[0.8px]"
          }`}
        >
          <span className="text-lime">AFRI</span>CONNECT
        </span>
        <span
          className={`whitespace-nowrap font-semibold uppercase text-lime-2 transition-all duration-300 ${
            compact
              ? "mt-[2px] text-[7px] tracking-[2.35px]"
              : "mt-[4px] text-[10px] tracking-[3px]"
          }`}
        >
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}
