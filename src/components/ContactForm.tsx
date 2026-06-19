"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const SERVICES = [
  "Brand & Design",
  "Web & Systems",
  "Print & Signage",
  "Business Consulting",
  "Not sure / a mix",
];

const BUDGETS = [
  "Under R2 500",
  "R2 500 – R10 000",
  "R10 000 – R50 000",
  "R50 000+",
  "Not sure yet",
];

const FIELD =
  "w-full rounded-lg border border-[var(--line)] bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-char";
const LABEL =
  "mb-2 block font-display text-[13.5px] font-semibold text-char";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    if (!form.name.trim()) next.name = true;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = true;
    if (!form.message.trim()) next.message = true;
    setErrors(next);
    if (Object.keys(next).length) return;

    // TODO: wire to a real handler — an API route, Formspree, or email service.
    // For now we confirm locally so the flow is complete and testable.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[var(--line)] bg-paper-2 p-10 text-center">
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-lime">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1C1F"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-[24px] font-bold tracking-[-0.6px] text-ink">
          Thanks, {form.name.split(" ")[0]}!
        </h3>
        <p className="mt-3 max-w-[340px] text-[15.5px] leading-relaxed text-muted">
          We&apos;ve got your message and we&apos;ll come back to you within one
          working day with a plan and a price.
        </p>
        <button
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              service: "",
              budget: "",
              message: "",
            });
            setSent(false);
          }}
          className="mt-7 font-display text-[14.5px] font-semibold text-olive underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-2xl border border-[var(--line)] bg-paper p-7 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="name">
            Your name *
          </label>
          <input
            id="name"
            className={`${FIELD} ${errors.name ? "border-red-400" : ""}`}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Lerato Dube"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`${FIELD} ${errors.email ? "border-red-400" : ""}`}
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@business.co.za"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            className={FIELD}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="082 000 0000"
          />
        </div>

        <div>
          <label className={LABEL} htmlFor="service">
            What do you need?
          </label>
          <select
            id="service"
            className={FIELD}
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL} htmlFor="budget">
            Budget
          </label>
          <select
            id="budget"
            className={FIELD}
            value={form.budget}
            onChange={(e) => set("budget", e.target.value)}
          >
            <option value="">Select a range…</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="message">
            Tell us about your project *
          </label>
          <textarea
            id="message"
            rows={5}
            className={`${FIELD} resize-none ${
              errors.message ? "border-red-400" : ""
            }`}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="A few lines about your business and what you're after…"
          />
        </div>
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="mt-4 text-[14px] text-red-500">
          Please fill in the highlighted fields.
        </p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-char px-[30px] py-[15px] font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,55,59,.25)]"
      >
        Send message
        <Arrow stroke="#fff" />
      </button>
    </form>
  );
}
