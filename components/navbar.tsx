"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 px-3 py-3 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-subtle bg-surface/85 px-4 shadow-soft backdrop-blur-xl sm:px-6 lg:px-8">
        <Link
          aria-label="Home"
          className="inline-flex h-10 items-center rounded-full px-2 text-text-primary dark:text-primary"
          href="/"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-subtle bg-background/55 px-2 py-1 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text-primary",
                pathname === link.href && "bg-surface text-text-primary"
              )}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-subtle bg-background/55 text-text-primary"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-background md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-full flex-col px-4 py-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link
                aria-label="Home"
                className="inline-flex h-11 items-center rounded-full px-2 text-text-primary dark:text-primary"
                href="/"
                onClick={() => setOpen(false)}
              >
                <LogoMark />
              </Link>
              <button
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-full border border-subtle bg-surface text-text-primary"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-16 grid gap-2">
              {links.map((link) => (
                <Link
                  className={cn(
                    "rounded-2xl border border-subtle bg-surface/70 px-4 py-4 text-2xl font-semibold tracking-tight text-text-secondary backdrop-blur-xl hover:border-primary/60 hover:text-text-primary",
                    pathname === link.href && "border-primary/60 text-text-primary"
                  )}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
