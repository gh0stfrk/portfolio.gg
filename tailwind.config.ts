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
      }
    }
  },
  plugins: [typography]
};

export default config;
