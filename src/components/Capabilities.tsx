import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    num: "01",
    title: "Web platforms",
    body: "Fast, responsive websites and customer portals built around a clear commercial goal.",
  },
  {
    num: "02",
    title: "Digital commerce",
    body: "Online stores with product management, payments, delivery and the tools your team needs.",
  },
  {
    num: "03",
    title: "Business systems",
    body: "Dashboards, booking tools and workflow software that replace repetitive manual processes.",
  },
  {
    num: "04",
    title: "Connected services",
    body: "Payments, forms, notifications and third-party services joined into one reliable flow.",
  },
  {
    num: "05",
    title: "Hosting & email",
    body: "Domains, professional inboxes and managed hosting configured and supported by one team.",
  },
  {
    num: "06",
    title: "Ongoing support",
    body: "Maintenance, improvements and practical help after launch so the solution keeps working.",
  },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]">
      <div
        className="pointer-events-none absolute right-[-160px] top-[-160px] h-[520px] w-[520px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,159,224,.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-site px-[30px]">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-brand">
              <i className="h-1.5 w-1.5 rounded-full bg-brand" />
              What we build
            </span>
            <h2 className="font-display text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
              Practical technology. Built around the business.
            </h2>
          </div>
          <p className="max-w-[500px] text-[17px] leading-relaxed text-muted lg:justify-self-end">
            We do not start with a fashionable tool or a fixed template. We
            start with the job the business needs to do, then design the right
            combination of platform, workflow and support.
          </p>
        </Reveal>

        <div className="grid border-l border-t border-black/[.09] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <Reveal key={item.title}>
              <div className="group min-h-[245px] border-b border-r border-black/[.09] bg-paper/40 p-7 transition-colors duration-300 hover:bg-white md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[12px] font-bold text-brand">
                    {item.num}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-black/10 transition-colors group-hover:bg-lime-2" />
                </div>
                <h3 className="mt-10 font-display text-[21px] font-bold tracking-[-.4px] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
