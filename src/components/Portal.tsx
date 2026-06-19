"use client";

/*
 * FRONT-END DEMO of the client portal.
 *
 * Auth is faked: any email + password (or the "demo account" button) logs you
 * in, and the session is remembered in localStorage. All data comes from
 * PORTAL in lib/content.ts.
 *
 * To make this real, replace:
 *   1. login()  -> a call to your auth provider (NextAuth, Supabase, Clerk…)
 *   2. PORTAL   -> data fetched for the logged-in client from your backend
 *   3. send msg -> a POST to your messages endpoint
 */

import { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import { PORTAL, type PortalProject } from "@/lib/content";

const KEY = "afri_portal_demo";
const TABS = ["Overview", "Files", "Invoices", "Messages"] as const;
type Tab = (typeof TABS)[number];

const statusStyle: Record<PortalProject["status"], string> = {
  "In progress": "bg-brand/10 text-brand",
  "In review": "bg-amber-100 text-amber-700",
  Complete: "bg-olive/10 text-olive",
};

export default function Portal() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(localStorage.getItem(KEY) === "1");
    setReady(true);
  }, []);

  const login = () => {
    localStorage.setItem(KEY, "1");
    setAuthed(true);
  };
  const logout = () => {
    localStorage.removeItem(KEY);
    setAuthed(false);
  };

  // avoid a flash of the wrong view before localStorage is read
  if (!ready)
    return <PageHeader eyebrow="Client portal" title="Loading your workspace…" />;

  return authed ? <Dashboard onLogout={logout} /> : <Login onLogin={login} />;
}

/* -------------------------------------------------------------------------- */

function Login({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !pw.trim()) {
      setError(true);
      return;
    }
    onLogin();
  };

  const field =
    "w-full rounded-lg border border-[var(--line)] bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-char";

  return (
    <>
      <PageHeader
        eyebrow="Client portal"
        title="Welcome back."
        intro="Log in to track your projects, view files and invoices, and message your team."
        crumbs={[{ href: "/portal", label: "Client login" }]}
      />
      <section className="py-[120px]">
        <div className="mx-auto max-w-[440px] px-[30px]">
          <form
            onSubmit={submit}
            className="rounded-2xl border border-[var(--line)] bg-paper p-8 md:p-10"
          >
            <h2 className="mb-1 font-display text-[24px] font-bold tracking-[-0.6px] text-ink">
              Sign in
            </h2>
            <p className="mb-7 text-[15px] text-muted">
              Use your AfriConnect account details.
            </p>

            <label className="mb-2 block font-display text-[13.5px] font-semibold text-char">
              Email
            </label>
            <input
              className={`${field} mb-4 ${error && !email ? "border-red-400" : ""}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="you@business.co.za"
            />

            <label className="mb-2 block font-display text-[13.5px] font-semibold text-char">
              Password
            </label>
            <input
              type="password"
              className={`${field} ${error && !pw ? "border-red-400" : ""}`}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
                setError(false);
              }}
              placeholder="••••••••"
            />

            {error && (
              <p className="mt-3 text-[14px] text-red-500">
                Please enter your email and password.
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-char px-6 py-3.5 font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={onLogin}
              className="mt-3 w-full rounded-lg border border-[var(--line)] bg-paper px-6 py-3.5 font-display text-[14.5px] font-semibold text-char transition-colors hover:border-char"
            >
              Explore the demo →
            </button>

            <p className="mt-5 text-center text-[13px] text-muted">
              This is a front-end demo — any details will sign you in.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const { client, projects } = PORTAL;
  const [activeId, setActiveId] = useState(projects[0].id);
  const [tab, setTab] = useState<Tab>("Overview");
  const project = projects.find((p) => p.id === activeId)!;

  return (
    <>
      <PageHeader
        eyebrow={`Hello, ${client.name.split(" ")[0]}`}
        title="Your projects, all in one place."
        intro={client.company}
        crumbs={[{ href: "/portal", label: "Portal" }]}
      />

      <section className="py-[80px]">
        <div className="mx-auto max-w-site px-[30px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2.5">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveId(p.id);
                    setTab("Overview");
                  }}
                  className={`rounded-lg border px-[18px] py-2.5 font-display text-[14.5px] font-semibold transition-all duration-200 ${
                    p.id === activeId
                      ? "border-char bg-char text-white"
                      : "border-[var(--line)] bg-paper text-char hover:border-char"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <button
              onClick={onLogout}
              className="font-display text-[14px] font-semibold text-muted underline-offset-4 hover:text-char hover:underline"
            >
              Log out
            </button>
          </div>

          {/* summary card */}
          <div className="mb-6 rounded-2xl border border-[var(--line)] bg-paper p-7 md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-display text-[12.5px] font-semibold uppercase tracking-[1px] text-muted">
                  {project.type}
                </span>
                <h2 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.8px] text-ink">
                  {project.name}
                </h2>
              </div>
              <span
                className={`rounded-full px-3.5 py-1.5 font-display text-[13px] font-semibold ${statusStyle[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-[13.5px] font-medium text-muted">
                <span>Overall progress</span>
                <span className="font-bold text-ink">{project.progress}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-paper-2">
                <div
                  className="h-full rounded-full bg-lime transition-all duration-700"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="mb-7 flex gap-1 border-b border-[var(--line)]">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-3 font-display text-[14.5px] font-semibold transition-colors ${
                  tab === t ? "text-ink" : "text-muted hover:text-char"
                }`}
              >
                {t}
                {tab === t && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded bg-lime" />
                )}
              </button>
            ))}
          </div>

          {tab === "Overview" && <Overview project={project} />}
          {tab === "Files" && <Files project={project} />}
          {tab === "Invoices" && <Invoices project={project} />}
          {tab === "Messages" && <Messages project={project} />}
        </div>
      </section>
    </>
  );
}

/* ----- tab panels ---------------------------------------------------------- */

function Overview({ project }: { project: PortalProject }) {
  return (
    <ol className="relative ml-2 border-l-2 border-[var(--line)]">
      {project.milestones.map((m) => (
        <li key={m.title} className="relative pb-8 pl-7 last:pb-0">
          <span
            className={`absolute -left-[9px] top-0.5 grid h-4 w-4 place-items-center rounded-full ${
              m.state === "done"
                ? "bg-lime"
                : m.state === "active"
                  ? "bg-brand ring-4 ring-brand/20"
                  : "border-2 border-[var(--line)] bg-paper"
            }`}
          >
            {m.state === "done" && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1A1C1F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </span>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3
              className={`font-display text-[17px] font-bold tracking-[-0.3px] ${
                m.state === "todo" ? "text-muted" : "text-ink"
              }`}
            >
              {m.title}
            </h3>
            <span className="text-[13.5px] font-medium text-muted">{m.date}</span>
          </div>
          {m.state === "active" && (
            <p className="mt-1 text-[14px] text-brand">Currently working on this</p>
          )}
        </li>
      ))}
    </ol>
  );
}

function Files({ project }: { project: PortalProject }) {
  return (
    <div className="space-y-3">
      {project.files.map((f) => (
        <div
          key={f.name}
          className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-paper p-4"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-char font-display text-[11px] font-bold text-lime">
            {f.format}
          </div>
          <div className="flex-1">
            <div className="font-display text-[15.5px] font-semibold text-ink">
              {f.name}
            </div>
            <div className="text-[13px] text-muted">
              {f.format} · {f.size}
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] px-4 py-2 font-display text-[13.5px] font-semibold text-char transition-colors hover:border-char">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            Download
          </button>
        </div>
      ))}
    </div>
  );
}

function Invoices({ project }: { project: PortalProject }) {
  const badge: Record<string, string> = {
    Paid: "bg-olive/10 text-olive",
    Due: "bg-amber-100 text-amber-700",
    Overdue: "bg-red-100 text-red-600",
  };
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)]">
      {project.invoices.map((inv, i) => (
        <div
          key={inv.no}
          className={`flex flex-wrap items-center justify-between gap-4 p-5 ${
            i % 2 ? "bg-paper" : "bg-paper-2"
          }`}
        >
          <div>
            <div className="font-display text-[15.5px] font-bold text-ink">
              {inv.no}
            </div>
            <div className="text-[14px] text-muted">{inv.desc}</div>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[13.5px] text-muted">{inv.date}</span>
            <span className="font-display text-[16px] font-bold text-ink">
              {inv.amount}
            </span>
            <span
              className={`rounded-full px-3 py-1 font-display text-[12.5px] font-semibold ${badge[inv.status]}`}
            >
              {inv.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Messages({ project }: { project: PortalProject }) {
  const [thread, setThread] = useState(project.messages);
  const [draft, setDraft] = useState("");

  // reset the thread when the active project changes
  useEffect(() => setThread(project.messages), [project]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setThread((t) => [
      ...t,
      { from: "you", name: "You", text, time: "Just now" },
    ]);
    setDraft("");
  };

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-paper p-5 md:p-7">
      <div className="mb-5 max-h-[420px] space-y-4 overflow-y-auto pr-1">
        {thread.map((m, i) => {
          const mine = m.from === "you";
          return (
            <div
              key={i}
              className={`flex flex-col ${mine ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
                  mine
                    ? "rounded-br-sm bg-char text-white"
                    : "rounded-bl-sm bg-paper-2 text-char"
                }`}
              >
                {m.text}
              </div>
              <span className="mt-1.5 px-1 text-[12px] text-muted">
                {m.name} · {m.time}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={send} className="flex gap-2.5 border-t border-[var(--line)] pt-5">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Write a message to your team…"
          className="flex-1 rounded-lg border border-[var(--line)] bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-char"
        />
        <button
          type="submit"
          className="rounded-lg bg-lime px-5 py-3 font-display text-[14.5px] font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
        >
          Send
        </button>
      </form>
    </div>
  );
}
