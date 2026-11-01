import Link from "next/link";
import type { ReactElement } from "react";

const socialLinks = [
  { href: "https://github.com/gh0stfrk", label: "GitHub" },
  { href: "https://www.linkedin.com/in/syydsalman", label: "LinkedIn" },
  { href: "https://x.com/gh0stfrk", label: "X" }
] as const;

export function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-[#07120B]">
      <div className="mx-auto w-full max-w-[1920px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Get in touch
            </h2>
            <Link
              className="mt-6 inline-flex min-h-11 break-all text-lg font-semibold underline decoration-[#07120B]/40 underline-offset-4 hover:decoration-[#07120B] sm:text-xl"
              href="mailto:salman@salmansyyd.com"
            >
              salman@salmansyyd.com
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 md:col-span-5 md:justify-end">
            {socialLinks.map((link) => (
              <Link
                className="inline-flex min-h-11 items-center text-base font-semibold underline decoration-[#07120B]/40 underline-offset-4 transition-colors hover:decoration-[#07120B]"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm">© {year} Salman Sayyed</p>
      </div>
    </footer>
  );
}
