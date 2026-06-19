type LogoProps = {
  /** color of the wordmark + dot-sphere; the green node-link is always lime */
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`flex items-center gap-3 font-display text-[21px] font-extrabold tracking-[-0.5px] ${className}`}
    >
      <svg className="h-[38px] w-[38px] flex-none" viewBox="0 0 40 40" fill="none">
        <g fill="currentColor" opacity="0.85">
          <ellipse cx="13" cy="9" rx="2.4" ry="1.7" />
          <ellipse cx="19" cy="7.5" rx="2.6" ry="1.8" />
          <ellipse cx="9" cy="13" rx="2" ry="1.6" />
          <ellipse cx="25" cy="10" rx="2.2" ry="1.7" />
          <ellipse cx="8" cy="20" rx="1.9" ry="1.7" />
          <ellipse cx="22" cy="22" rx="2.4" ry="2" />
          <ellipse cx="11" cy="27" rx="2.2" ry="1.8" />
          <ellipse cx="17" cy="30" rx="2.6" ry="2" />
          <ellipse cx="24" cy="28" rx="2" ry="1.6" />
        </g>
        <g fill="#A3D955">
          <circle cx="26" cy="12" r="3.2" />
          <circle cx="19" cy="18" r="3.6" />
          <circle cx="14" cy="25" r="3" />
          <path
            d="M26 12 L19 18 L14 25"
            stroke="#A3D955"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <span>
        <span className="text-lime">Afri</span>Connect
      </span>
    </span>
  );
}
