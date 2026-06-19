import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        char: "#34373B",
        "char-2": "#23262A",
        ink: "#1A1C1F",
        paper: "#FAFAF7",
        "paper-2": "#F1F2ED",
        lime: "#A3D955",
        "lime-2": "#8FC93A",
        olive: "#5E7327",
        brand: "#3B9FE0",
        muted: "#6B7177",
        "hero-dark": "#23262A",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      keyframes: {
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "bob-slow": "bob 5s ease-in-out infinite",
        "bob-slower": "bob 5.5s ease-in-out infinite .9s",
      },
    },
  },
  plugins: [],
};

export default config;
