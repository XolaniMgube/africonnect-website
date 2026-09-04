"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const SERVICES = [
  "Brand & Design",
  "Print & Signage",
  "Websites & E-commerce",
  "Business & Systems",
  "Not sure / a mix",
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
    businessName: "",
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
              businessName: "",
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
      className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-paper p-5 shadow-[0_16px_42px_rgba(52,55,59,.05)] sm:p-7 md:p-9"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime via-lime-2 to-brand" />
      <div className="-mx-5 -mt-5 mb-6 flex items-center border-b border-[var(--line)] bg-paper-2/70 px-5 py-5 sm:-mx-7 sm:-mt-7 sm:mb-7 sm:justify-between sm:px-7 sm:py-6 md:-mx-9 md:-mt-9 md:mb-8 md:px-9">
        <div className="flex items-center gap-3.5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime text-ink shadow-[0_8px_20px_rgba(163,217,85,.22)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v12H7l-3 3V4Z" />
              <path d="M8 8h8M8 12h5" />
            </svg>
          </span>
          <div>
            <p className="font-display text-[17px] font-bold text-ink">
              Your project details
            </p>
            <p className="mt-0.5 text-[12.5px] text-muted">
              A few details are enough to get started.
            </p>
          </div>
        </div>
        <span className="hidden w-fit rounded-full border border-lime-2/20 bg-lime/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.8px] text-olive sm:inline-flex">
          * Required fields
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
          <label className={LABEL} htmlFor="businessName">
            Business name (if applicable)
          </label>
          <input
            id="businessName"
            className={FIELD}
            value={form.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            placeholder="e.g. Dube Trading"
          />
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

      <div className="mt-7 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-char px-[30px] py-[15px] font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,55,59,.25)] sm:w-auto"
        >
          Send message
          <Arrow stroke="#fff" />
        </button>
        <p className="max-w-[230px] text-[11.5px] leading-relaxed text-muted">
          Your details stay private and are only used to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}
