"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const storageKey = "salman-portfolio-theme";
type ThemeMode = "dark" | "light";

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);
  localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    const nextTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={!isDark}
      className="inline-flex size-11 items-center justify-center text-text-secondary transition-colors hover:text-primary"
      onClick={() => {
        const currentTheme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        setTheme(nextTheme);
        applyTheme(nextTheme);
      }}
      type="button"
    >
      {mounted && isDark ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}
