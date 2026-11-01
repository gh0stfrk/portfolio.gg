"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const linkClass = (href: string) =>
    cn(
      "inline-flex min-h-11 items-center text-base font-medium text-text-secondary transition-colors hover:text-text-primary",
      isActive(href) && "text-text-primary"
    );

  return (
    <header className="relative z-50 px-5 sm:px-8">
      <nav className="mx-auto flex min-h-16 w-full max-w-[1920px] items-center justify-between gap-6">
        <Link
          aria-label="Home"
          className="inline-flex min-h-11 items-center text-text-primary dark:text-primary"
          href="/"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center text-text-primary transition-colors hover:text-primary"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-background px-5 pb-12 pt-24 md:hidden sm:px-8"
          id="mobile-navigation"
        >
          <button
            aria-label="Close navigation menu"
            className="absolute right-5 top-4 inline-flex size-11 items-center justify-center text-text-primary transition-colors hover:text-primary sm:right-8"
            onClick={() => setOpen(false)}
            type="button"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1920px] flex-col">
            {links.map((link) => (
              <Link
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-14 items-center font-display text-[clamp(2.5rem,11vw,5rem)] font-semibold leading-tight tracking-[-0.05em] text-text-secondary transition-colors hover:text-text-primary",
                  isActive(link.href) && "text-text-primary"
                )}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
