import Link from "next/link";
import type { ReactElement } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

const socialLinks = [
  { href: "https://github.com/gh0stfrk", label: "GitHub" },
  { href: "https://www.linkedin.com/in/syydsalman", label: "LinkedIn" },
  { href: "https://x.com/gh0stfrk", label: "X" }
] as const;

const stackTags = ["Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"] as const;

export function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle/80 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-text-primary">Salman Sayyed</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
              Backend-focused software engineer building reliable systems with
              Node.js, TypeScript, AWS, and PostgreSQL.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Navigate
            </p>
            <ul className="mt-3 grid gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Connect
            </p>
            <ul className="mt-3 grid gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-subtle/80 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-secondary sm:text-sm">
              {year} Salman Sayyed.
            </p>
            <ul className="flex flex-wrap gap-2">
              {stackTags.map((tag) => (
                <li className="text-xs text-text-secondary" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
