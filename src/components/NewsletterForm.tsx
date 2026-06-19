"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(true);
      return;
    }
    // TODO: connect to your mailing list (Mailchimp, Brevo, an API route…).
    setError(false);
    setDone(true);
  };

  if (done) {
    return (
      <p className="font-display text-[16px] font-semibold text-lime">
        You&apos;re in — look out for our next guide. 🎉
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError(false);
        }}
        placeholder="you@business.co.za"
        aria-label="Email address"
        className={`flex-1 rounded-lg border bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-white/40 focus:border-lime ${
          error ? "border-red-400" : "border-white/15"
        }`}
      />
      <button
        type="submit"
        className="rounded-lg bg-lime px-6 py-3.5 font-display text-[15px] font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
      >
        Subscribe
      </button>
    </form>
  );
}
