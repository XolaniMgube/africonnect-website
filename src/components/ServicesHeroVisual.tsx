import ServiceIcon from "./ServiceIcon";

const DISCIPLINES = [
  {
    id: "brand",
    number: "01",
    name: "Brand & design",
    note: "Identity and creative direction",
    icon: "bg-lime text-ink",
    line: "bg-lime",
  },
  {
    id: "print",
    number: "02",
    name: "Print & signage",
    note: "Production and physical visibility",
    icon: "bg-[#f0a35b] text-ink",
    line: "bg-[#f0a35b]",
  },
  {
    id: "websites",
    number: "03",
    name: "Websites & e-commerce",
    note: "Digital presence and online sales",
    icon: "bg-brand text-white",
    line: "bg-brand",
  },
  {
    id: "business",
    number: "04",
    name: "Business & systems",
    note: "Tools, compliance and operations",
    icon: "bg-[#ece8ff] text-[#6555a3]",
    line: "bg-[#9d8cff]",
  },
] as const;

export default function ServicesHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-hidden>
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-[#181b1e]/90 p-5 shadow-[0_35px_90px_rgba(0,0,0,.42)] backdrop-blur-xl md:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[1.3px] text-lime">
              Connected service desk
            </p>
            <p className="mt-1 font-display text-[19px] font-bold text-white">
              One brief. The right mix.
            </p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-[10.5px] font-semibold text-lime">
            <i className="h-1.5 w-1.5 rounded-full bg-lime" />
            In-house
          </span>
        </div>

        <div className="relative mt-5 space-y-3">
          <div className="absolute bottom-5 left-[25px] top-5 w-px bg-white/10" />
          {DISCIPLINES.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center gap-4 rounded-2xl border border-white/[.09] bg-white/[.04] p-3.5"
            >
              <div
                className={`relative z-[2] grid h-[50px] w-[50px] shrink-0 place-items-center rounded-xl ${item.icon}`}
              >
                <ServiceIcon id={item.id} size={23} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="truncate font-display text-[14px] font-semibold text-white">
                    {item.name}
                  </p>
                  <span className="font-display text-[10px] font-bold text-white/30">
                    {item.number}
                  </span>
                </div>
                <p className="mt-1 text-[11.5px] text-white/45">{item.note}</p>
                <div className="mt-2.5 h-[3px] rounded-full bg-white/[.07]">
                  <div className={`h-full w-2/3 rounded-full ${item.line}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 rounded-2xl border border-white/10 bg-black/15 p-4 text-center">
          {[
            ["01", "Understand"],
            ["02", "Connect"],
            ["03", "Deliver"],
          ].map(([number, label], index) => (
            <div className="contents" key={label}>
              <div>
                <span className="font-display text-[9px] font-bold text-lime">
                  {number}
                </span>
                <p className="mt-1 text-[10px] text-white/55">{label}</p>
              </div>
              {index < 2 && <span className="text-white/20">→</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl">
        <p className="text-[10px] text-white/40">Built around</p>
        <p className="mt-0.5 font-display text-[12px] font-semibold text-white">
          the outcome, not the department
        </p>
      </div>
    </div>
  );
}
