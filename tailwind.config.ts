import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)"
        },
        subtle: "rgb(var(--color-subtle) / <alpha-value>)"
      },
      fontFamily: {
        sans: [
          "var(--font-body)",
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-display)",
          "Space Grotesk",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgb(0 0 0 / 0.18)"
      },
      keyframes: {
        "tumble-across": {
          "0%": { left: "-12%" },
          "100%": { left: "104%" }
        },
        "tumble-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.33, 0, 0.67, 0)"
          },
          "50%": {
            transform: "translateY(-46px)",
            animationTimingFunction: "cubic-bezier(0.33, 1, 0.67, 1)"
          }
        },
        "tumble-shadow": {
          "0%, 100%": { transform: "scaleX(1)", opacity: "0.35" },
          "50%": { transform: "scaleX(0.55)", opacity: "0.12" }
        },
        "wind-gust": {
          "0%": { transform: "translateX(-30%)", opacity: "0" },
          "20%": { opacity: "0.7" },
          "80%": { opacity: "0.7" },
          "100%": { transform: "translateX(130%)", opacity: "0" }
        },
        "heat-shimmer": {
          "0%, 100%": { opacity: "0.25", transform: "scaleY(1)" },
          "50%": { opacity: "0.6", transform: "scaleY(1.6)" }
        }
      },
      animation: {
        "tumble-across": "tumble-across 11s linear infinite",
        "tumble-bounce": "tumble-bounce 1.1s infinite",
        "tumble-shadow": "tumble-shadow 1.1s infinite",
        "tumble-spin": "spin 1.1s linear infinite",
        "wind-gust": "wind-gust 4s ease-in-out infinite",
        "heat-shimmer": "heat-shimmer 3s ease-in-out infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
