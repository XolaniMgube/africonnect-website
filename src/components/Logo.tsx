import Image from "next/image";

type LogoProps = {
  /** Color of the wordmark; the official icon keeps its brand colors. */
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`flex items-center gap-3 font-display text-[21px] font-extrabold tracking-[-0.5px] ${className}`}
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={40}
        height={40}
        className="h-[40px] w-[40px] flex-none object-contain"
      />
      <span>
        <span className="text-lime">Afri</span>Connect
      </span>
    </span>
  );
}
