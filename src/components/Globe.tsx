"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type MapDot = Point & { seed: number };

// A simple equirectangular projection of real coastline coordinates. Keeping
// the source points in longitude/latitude makes the silhouette and route
// origins much easier to verify than hand-drawing an abstract normalized blob.
const project = ([longitude, latitude]: [number, number]): Point => ({
  x: (longitude + 18) / 70,
  y: (38 - latitude) / 74,
});

// Simplified from Natural Earth's public-domain 1:110m land coastline. The
// north-east is deliberately closed at Suez so the dots read as Africa rather
// than an abstract polygon connected to the Middle East.
const AFRICA = [
  [32.32, 29.76],
  [32.735, 28.705],
  [35.693, 23.927],
  [35.526, 23.102],
  [36.866, 22],
  [37.482, 18.614],
  [38.41, 17.998],
  [39.266, 15.923],
  [43.318, 12.39],
  [42.716, 11.736],
  [44.614, 10.442],
  [51.111, 12.025],
  [51.045, 10.641],
  [49.453, 6.805],
  [47.741, 4.219],
  [40.263, -2.573],
  [39.202, -4.677],
  [38.8, -6.476],
  [39.44, -6.84],
  [39.187, -8.485],
  [40.479, -10.765],
  [40.776, -14.692],
  [39.453, -16.721],
  [37.411, -17.586],
  [34.786, -19.784],
  [35.563, -22.09],
  [35.459, -24.123],
  [32.575, -25.727],
  [32.916, -26.216],
  [32.203, -28.752],
  [28.22, -32.772],
  [25.781, -33.945],
  [22.574, -33.864],
  [19.617, -34.819],
  [18.245, -33.868],
  [18.222, -31.662],
  [15.211, -27.091],
  [14.258, -22.111],
  [11.795, -18.069],
  [11.779, -15.794],
  [12.5, -13.548],
  [13.634, -12.039],
  [13.687, -10.731],
  [11.915, -5.038],
  [8.798, -1.111],
  [9.795, 3.073],
  [9.404, 3.734],
  [8.5, 4.772],
  [5.898, 4.263],
  [4.326, 6.271],
  [1.865, 6.142],
  [-1.965, 4.711],
  [-4.65, 5.168],
  [-7.519, 4.338],
  [-9.005, 4.833],
  [-12.428, 7.263],
  [-14.839, 10.877],
  [-16.614, 12.171],
  [-16.714, 13.595],
  [-17.625, 14.73],
  [-16.463, 16.135],
  [-16.146, 18.109],
  [-16.973, 21.886],
  [-14.44, 26.255],
  [-12.619, 28.038],
  [-11.689, 28.149],
  [-9.565, 29.934],
  [-9.815, 31.178],
  [-9.301, 32.565],
  [-6.912, 34.11],
  [-5.93, 35.76],
  [-2.17, 35.169],
  [1.467, 36.606],
  [9.51, 37.35],
  [10.21, 37.23],
  [10.181, 36.724],
  [11.029, 37.092],
  [10.34, 33.786],
  [15.246, 32.265],
  [15.714, 31.376],
  [19.086, 30.266],
  [20.053, 30.986],
  [20.134, 32.238],
  [21.543, 32.843],
  [28.914, 30.87],
  [30.977, 31.556],
  [31.961, 30.934],
  [32.193, 31.26],
  [33.773, 30.968],
  [34.557, 31.549],
  [32, 31.3],
].map((coordinate) => project(coordinate as [number, number]));

const MADAGASCAR = [
  [49.195, -12.041],
  [50.477, -15.227],
  [49.499, -17.106],
  [47.931, -22.392],
  [46.282, -25.178],
  [44.834, -25.346],
  [43.254, -22.057],
  [44.043, -18.331],
  [44.945, -16.179],
  [46.882, -15.21],
  [48.005, -14.091],
].map((coordinate) => project(coordinate as [number, number]));

const SOUTH_AFRICA = project([28.0473, -26.2041]); // Johannesburg
const DESTINATIONS = [
  project([31.2357, 30.0444]), // Cairo
  project([-17.4677, 14.7167]), // Dakar
  project([3.3792, 6.5244]), // Lagos
  project([36.8219, -1.2921]), // Nairobi
  project([15.2663, -4.4419]), // Kinshasa
];

function inside(point: Point, polygon: Point[]) {
  let hit = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i];
    const b = polygon[j];
    const crosses =
      a.y > point.y !== b.y > point.y &&
      point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x;
    if (crosses) hit = !hit;
  }
  return hit;
}

function curvePoint(from: Point, to: Point, progress: number): Point {
  const bend = Math.max(0.08, Math.abs(to.x - from.x) * 0.22);
  const control = {
    x: (from.x + to.x) / 2 + (to.x < from.x ? -bend : bend),
    y: Math.min(from.y, to.y) - 0.08,
  };
  const inverse = 1 - progress;
  return {
    x:
      inverse * inverse * from.x +
      2 * inverse * progress * control.x +
      progress * progress * to.x,
    y:
      inverse * inverse * from.y +
      2 * inverse * progress * control.y +
      progress * progress * to.y,
  };
}

export default function Globe({ bare = false }: { bare?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let size = 0;
    let animationFrame = 0;
    let dots: MapDot[] = [];

    const mapToCanvas = (point: Point) => {
      const longitude = point.x * 70 - 18;
      const latitude = 38 - point.y * 74;
      const longitudeFromCenter = ((longitude - 17) * Math.PI) / 180;
      const latitudeRadians = (latitude * Math.PI) / 180;

      // Orthographic projection centred over Africa. This gently compresses
      // the north and south of the continent so it sits on the sphere instead
      // of looking like a flat rectangular map pasted over it.
      return {
        x:
          size *
          (0.5 +
            Math.cos(latitudeRadians) *
              Math.sin(longitudeFromCenter) *
              0.58),
        y: size * (0.5 - Math.sin(latitudeRadians) * 0.58),
      };
    };

    const rebuildDots = () => {
      dots = [];
      const gap = size < 420 ? 8.2 : 9;
      for (let y = 0.06; y <= 0.94; y += gap / (size * 0.8)) {
        for (let x = 0.04; x <= 0.92; x += gap / (size * 0.66)) {
          const offsetX = Math.round(y * 100) % 2 === 0 ? 0 : gap / (size * 1.32);
          const point = { x: x + offsetX, y };
          if (inside(point, AFRICA) || inside(point, MADAGASCAR)) {
            dots.push({ ...point, seed: Math.sin(x * 91 + y * 137) * 1000 });
          }
        }
      }
    };

    const resize = () => {
      const bounds = canvas.parentElement?.getBoundingClientRect();
      if (!bounds) return;
      size = Math.min(bounds.width, bounds.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildDots();
      if (reduceMotion) {
        context.clearRect(0, 0, size, size);
        drawSphere(performance.now());
        drawMap(performance.now());
      }
    };

    const drawSphere = (time: number) => {
      const center = size / 2;
      const radius = size * 0.43;
      const halo = context.createRadialGradient(
        center,
        center,
        radius * 0.08,
        center,
        center,
        radius,
      );
      halo.addColorStop(0, "rgba(163,217,85,.11)");
      halo.addColorStop(0.64, "rgba(59,159,224,.07)");
      halo.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = halo;
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.fill();

      context.save();
      const rim = context.createLinearGradient(
        center - radius,
        center,
        center + radius,
        center,
      );
      rim.addColorStop(0, "rgba(163,217,85,.22)");
      rim.addColorStop(0.5, "rgba(255,255,255,.17)");
      rim.addColorStop(1, "rgba(59,159,224,.21)");
      context.strokeStyle = rim;
      context.lineWidth = 1.2;
      context.setLineDash([2, 7]);
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(255,255,255,.125)";
      context.lineWidth = 0.9;
      [-0.55, -0.28, 0, 0.28, 0.55].forEach((offset) => {
        const latitudeWidth = radius * Math.sqrt(1 - offset * offset);
        context.beginPath();
        context.ellipse(
          center,
          center + radius * offset,
          latitudeWidth,
          radius * 0.13,
          0,
          0,
          Math.PI * 2,
        );
        context.stroke();
      });
      [-0.52, 0, 0.52].forEach((rotation) => {
        context.beginPath();
        context.ellipse(
          center,
          center,
          radius * 0.34,
          radius,
          rotation,
          0,
          Math.PI * 2,
        );
        context.stroke();
      });
      context.restore();

      if (!reduceMotion) {
        const orbitAngle = time * 0.00022;
        const orbitX = center + Math.cos(orbitAngle) * radius * 1.02;
        const orbitY = center + Math.sin(orbitAngle) * radius * 0.28;
        context.beginPath();
        context.arc(orbitX, orbitY, 2.4, 0, Math.PI * 2);
        context.fillStyle = "rgba(163,217,85,.85)";
        context.shadowColor = "#A3D955";
        context.shadowBlur = 12;
        context.fill();
        context.shadowBlur = 0;
      }
    };

    const drawMap = (time: number) => {
      dots.forEach((dot) => {
        const point = mapToCanvas(dot);
        const shimmer = reduceMotion
          ? 0.4
          : 0.29 + (Math.sin(time * 0.0014 + dot.seed) + 1) * 0.085;
        context.beginPath();
        context.arc(point.x, point.y, size * 0.00355, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,255,255,${shimmer})`;
        context.fill();
      });

      const origin = mapToCanvas(SOUTH_AFRICA);
      const routeDuration = 1750;
      const activeRoute = reduceMotion
        ? 2
        : Math.floor(time / routeDuration) % DESTINATIONS.length;
      const routeProgress = reduceMotion ? 1 : (time % routeDuration) / routeDuration;

      DESTINATIONS.forEach((destination, routeIndex) => {
        const destinationCanvas = mapToCanvas(destination);
        const steps = 42;
        const active = routeIndex === activeRoute;
        const visibleProgress = active
          ? Math.min(1, routeProgress / 0.7)
          : routeIndex < activeRoute
            ? 1
            : 0;

        if (visibleProgress > 0) {
          const gradient = context.createLinearGradient(
            origin.x,
            origin.y,
            destinationCanvas.x,
            destinationCanvas.y,
          );
          gradient.addColorStop(0, active ? "rgba(163,217,85,.95)" : "rgba(163,217,85,.18)");
          gradient.addColorStop(1, active ? "rgba(163,217,85,.65)" : "rgba(59,159,224,.12)");
          context.strokeStyle = gradient;
          context.lineWidth = active ? 2 : 1;
          context.beginPath();
          for (let step = 0; step <= Math.floor(steps * visibleProgress); step++) {
            const progress = step / steps;
            const curve = curvePoint(SOUTH_AFRICA, destination, progress);
            const point = mapToCanvas(curve);
            if (step === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
          }
          context.stroke();
        }

        const destinationPulse = active
          ? 4 + Math.sin(time * 0.008) * 1.2
          : 2.2;
        context.beginPath();
        context.arc(
          destinationCanvas.x,
          destinationCanvas.y,
          destinationPulse,
          0,
          Math.PI * 2,
        );
        context.fillStyle = active ? "#A3D955" : "rgba(163,217,85,.38)";
        if (active) {
          context.shadowColor = "#A3D955";
          context.shadowBlur = 18;
        }
        context.fill();
        context.shadowBlur = 0;

        if (active && routeProgress < 0.82) {
          const traveller = curvePoint(
            SOUTH_AFRICA,
            destination,
            Math.min(1, routeProgress / 0.72),
          );
          const travellerCanvas = mapToCanvas(traveller);
          context.beginPath();
          context.arc(travellerCanvas.x, travellerCanvas.y, 3.2, 0, Math.PI * 2);
          context.fillStyle = "#fff";
          context.shadowColor = "#A3D955";
          context.shadowBlur = 15;
          context.fill();
          context.shadowBlur = 0;
        }
      });

      const originPulse = reduceMotion ? 7 : 7 + Math.sin(time * 0.006) * 1.5;
      context.beginPath();
      context.arc(origin.x, origin.y, originPulse * 2.1, 0, Math.PI * 2);
      context.fillStyle = "rgba(163,217,85,.1)";
      context.fill();
      context.beginPath();
      context.arc(origin.x, origin.y, originPulse, 0, Math.PI * 2);
      context.fillStyle = "#A3D955";
      context.shadowColor = "#A3D955";
      context.shadowBlur = 22;
      context.fill();
      context.shadowBlur = 0;
    };

    const frame = (time: number) => {
      context.clearRect(0, 0, size, size);
      drawSphere(time);
      drawMap(time);
      if (!reduceMotion) animationFrame = requestAnimationFrame(frame);
    };

    resize();
    if (!reduceMotion) animationFrame = requestAnimationFrame(frame);
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[530px] animate-bob-slower"
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
      {!bare && (
        <>
          {/* <div className="pulse-tag absolute right-1 top-10">
            <i />
            5 connected routes
          </div> */}
          {/* <div className="pulse-tag absolute bottom-10 left-0">
            <i />
            From South Africa
          </div> */}
        </>
      )}
    </div>
  );
}
