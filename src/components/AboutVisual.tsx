export default function AboutVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[560px]"
      role="img"
      aria-label="Illustration of the AfriConnect team working together under one roof"
    >
      <div className="absolute -inset-8 rounded-full bg-lime/10 blur-[85px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#181b1e] shadow-[0_35px_90px_rgba(0,0,0,.42)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f0a35b]" />
          </div>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[1.4px] text-white/40">
            AfriConnect · Vosloorus
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/45">
            Est. 2018
          </span>
        </div>

        <svg
          viewBox="0 0 720 500"
          className="block aspect-[1.42/1] w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="about-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#202428" />
              <stop offset="1" stopColor="#15181b" />
            </linearGradient>
            <radialGradient id="about-glow" cx="50%" cy="42%" r="58%">
              <stop offset="0" stopColor="#A3D955" stopOpacity=".16" />
              <stop offset="1" stopColor="#A3D955" stopOpacity="0" />
            </radialGradient>
            <pattern id="about-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.15" fill="#ffffff" fillOpacity=".07" />
            </pattern>
          </defs>

          <rect width="720" height="500" fill="url(#about-bg)" />
          <rect width="720" height="500" fill="url(#about-glow)" />
          <rect width="720" height="500" fill="url(#about-dots)" />

          <path
            d="M105 214 360 82l255 132"
            fill="none"
            stroke="#A3D955"
            strokeOpacity=".55"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M143 203v207h434V203"
            fill="none"
            stroke="#ffffff"
            strokeOpacity=".1"
            strokeWidth="2"
          />
          <circle cx="360" cy="82" r="7" fill="#A3D955" />
          <circle cx="360" cy="82" r="15" fill="none" stroke="#A3D955" strokeOpacity=".18" />

          <g opacity=".72">
            <path d="M184 173h104" stroke="#fff" strokeOpacity=".12" strokeWidth="2" />
            <path d="M432 173h104" stroke="#fff" strokeOpacity=".12" strokeWidth="2" />
            <circle cx="172" cy="173" r="4" fill="#3B9FE0" />
            <circle cx="548" cy="173" r="4" fill="#F0A35B" />
          </g>

          <g>
            <circle cx="242" cy="264" r="39" fill="#C98C68" />
            <path d="M203 255c5-39 73-51 81-2-19-6-27-20-32-31-8 21-24 31-49 33Z" fill="#25282c" />
            <path d="M153 425c3-86 38-129 89-129s86 43 89 129H153Z" fill="#A3D955" />
            <path d="M242 301v124" stroke="#1A1C1F" strokeOpacity=".12" strokeWidth="2" />
          </g>

          <g>
            <circle cx="360" cy="226" r="43" fill="#8A5C45" />
            <path d="M319 219c1-49 75-55 83-5-23-2-38-14-50-30-4 20-14 31-33 35Z" fill="#171a1d" />
            <path d="M258 425c4-102 44-154 102-154s98 52 102 154H258Z" fill="#3B9FE0" />
            <path d="m329 285 31 42 31-42" fill="#fff" fillOpacity=".17" />
          </g>

          <g>
            <circle cx="481" cy="264" r="39" fill="#E0AF88" />
            <path d="M441 258c3-43 69-53 79-8-20-4-39-16-49-30-3 19-13 31-30 38Z" fill="#3a2a25" />
            <path d="M392 425c3-86 38-129 89-129s86 43 89 129H392Z" fill="#F0A35B" />
            <path d="M481 301v124" stroke="#1A1C1F" strokeOpacity=".12" strokeWidth="2" />
          </g>

          <g>
            <circle cx="128" cy="330" r="31" fill="#A96F4F" />
            <path d="M96 327c2-34 56-43 64-6-17-4-28-13-38-24-3 15-11 24-26 30Z" fill="#171a1d" />
            <path d="M63 425c3-62 28-94 65-94s62 32 65 94H63Z" fill="#9D8CFF" />
          </g>

          <g>
            <circle cx="592" cy="330" r="31" fill="#B97E5E" />
            <path d="M561 326c1-36 57-42 63-5-17-5-30-14-39-25-2 15-10 24-24 30Z" fill="#24272b" />
            <path d="M527 425c3-62 28-94 65-94s62 32 65 94H527Z" fill="#E9EDF0" />
          </g>

          <rect x="80" y="410" width="560" height="18" rx="9" fill="#111417" />
          <rect x="121" y="428" width="478" height="4" rx="2" fill="#A3D955" fillOpacity=".3" />

          <g fill="#fff" fillOpacity=".9">
            <circle cx="229" cy="266" r="2.6" />
            <circle cx="254" cy="266" r="2.6" />
            <circle cx="346" cy="230" r="2.8" />
            <circle cx="375" cy="230" r="2.8" />
            <circle cx="468" cy="266" r="2.6" />
            <circle cx="493" cy="266" r="2.6" />
          </g>
          <g stroke="#1A1C1F" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round">
            <path d="M233 280c6 5 12 5 18 0" />
            <path d="M351 245c6 5 13 5 19 0" />
            <path d="M472 280c6 5 12 5 18 0" />
          </g>
        </svg>
      </div>

      <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/15 text-lime">
          ●
        </span>
        <div>
          <div className="text-[10px] text-white/40">Built locally</div>
          <div className="text-[12px] font-semibold text-white">
            One team, one roof
          </div>
        </div>
      </div>
    </div>
  );
}
