"use client";

import { useEffect, useRef } from "react";

export default function Globe({ bare = false }: { bare?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let S = 0,
      cx = 0,
      cy = 0,
      R = 0,
      t = 0,
      raf = 0;
    let dots: { phi: number; theta: number }[] = [];

    function build() {
      dots = [];
      const rings = 22;
      for (let i = 0; i < rings; i++) {
        const phi = (Math.PI * (i + 0.5)) / rings;
        const cnt = Math.round(Math.sin(phi) * rings * 1.6) + 3;
        for (let j = 0; j < cnt; j++) {
          dots.push({ phi, theta: (2 * Math.PI * j) / cnt });
        }
      }
    }

    function size() {
      if (!cv || !ctx) return;
      const r = cv.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = r.width * dpr;
      cv.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = r.width;
      cx = S / 2;
      cy = S / 2;
      R = S * 0.42;
      build();
    }

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, S, S);
      if (!reduce) t += 0.0032;

      // dot-grid sphere (front hemisphere)
      for (const d of dots) {
        const th = d.theta + t;
        const x = Math.sin(d.phi) * Math.cos(th);
        const y = Math.cos(d.phi);
        const z = Math.sin(d.phi) * Math.sin(th);
        if (z < -0.15) continue;
        const sx = cx + x * R;
        const sy = cy + y * R;
        const depth = (z + 1) / 2;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.6 + depth * 1.9, 0, 7);
        ctx.fillStyle = `rgba(255,255,255,${0.14 + depth * 0.55})`;
        ctx.fill();
      }

      // green node-link tracing across the front (the logo's signature line)
      const path: { sx: number; sy: number }[] = [];
      for (let k = 0; k <= 5; k++) {
        const phi = 0.85 + k * 0.18;
        const theta = -0.6 + k * 0.26 + t;
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);
        if (z > -0.1) path.push({ sx: cx + x * R, sy: cy + y * R });
      }
      if (path.length > 1) {
        ctx.beginPath();
        ctx.moveTo(path[0].sx, path[0].sy);
        for (let k = 1; k < path.length; k++) ctx.lineTo(path[k].sx, path[k].sy);
        ctx.strokeStyle = "rgba(163,217,85,.9)";
        ctx.lineWidth = 2.4;
        ctx.lineJoin = "round";
        ctx.stroke();
        path.forEach((p, i) => {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, i % 2 ? 4.5 : 6, 0, 7);
          ctx.fillStyle = "#A3D955";
          ctx.fill();
        });
      }

      raf = requestAnimationFrame(frame);
    }

    size();
    frame();
    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[440px] w-[440px] max-w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
      {!bare && (
        <>
          <div className="pulse-tag animate-bob-slow absolute right-[-6px] top-10">
            <i />
            Connected
          </div>
          <div className="pulse-tag animate-bob-slower absolute bottom-14 left-[-10px]">
            <i />
            One team, one roof
          </div>
        </>
      )}
    </div>
  );
}
