const PIPELINE = [
  { label: "Enquiry", color: "bg-lime" },
  { label: "Workflow", color: "bg-brand" },
  { label: "Delivered", color: "bg-lime" },
];

export default function TechnologyVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden>
      <div className="absolute -inset-8 rounded-full bg-brand/10 blur-[80px]" />

      <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-[#181b1e]/90 shadow-[0_35px_90px_rgba(0,0,0,.42)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff735f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f6c85f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/45">
            business.africonnect
          </div>
          <div className="h-5 w-5 rounded-md border border-white/10" />
        </div>

        <div className="grid min-h-[390px] grid-cols-[74px_1fr]">
          <div className="border-r border-white/10 p-4">
            <div className="mb-8 grid h-9 w-9 place-items-center rounded-xl bg-lime font-display text-[12px] font-extrabold text-ink">
              AC
            </div>
            <div className="space-y-4">
              {[0, 1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`h-8 rounded-lg ${
                    item === 0 ? "bg-white/10" : "bg-white/[.035]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">
                  Operations overview
                </div>
                <div className="mt-1.5 font-display text-[22px] font-bold text-white">
                  Everything in one view.
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-3 py-1.5 text-[11px] font-semibold text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_0_4px_rgba(163,217,85,.12)]" />
                Online
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Orders", "Projects", "Support"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[.045] p-3"
                >
                  <div className="text-[10px] text-white/40">{label}</div>
                  <div className="mt-2 font-display text-[20px] font-bold text-white">
                    {i === 0 ? "24" : i === 1 ? "08" : "02"}
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${
                        i === 1 ? "w-3/5 bg-brand" : "w-4/5 bg-lime"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[.035] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/70">
                  Connected workflow
                </span>
                <span className="text-[10px] text-white/35">Live</span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                {PIPELINE.map((item, i) => (
                  <div className="contents" key={item.label}>
                    <div className="rounded-lg border border-white/10 bg-[#202428] p-3 text-center">
                      <span className={`mx-auto mb-2 block h-2 w-2 rounded-full ${item.color}`} />
                      <span className="text-[9px] font-medium text-white/55">
                        {item.label}
                      </span>
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <span className="text-[12px] text-white/20">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-7 flex items-center gap-3 rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/20 text-brand">
          ↗
        </span>
        <div>
          <div className="text-[10px] text-white/40">Built around</div>
          <div className="text-[12px] font-semibold text-white">your workflow</div>
        </div>
      </div>
    </div>
  );
}
