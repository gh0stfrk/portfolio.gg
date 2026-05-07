import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Salman Sayyed."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        description="Email and social links."
        eyebrow="Contact"
        title="Contact"
      />

      <div className="mt-10 rounded-2xl border border-subtle bg-surface p-6 sm:p-8">
        <Link
          className="inline-flex items-center gap-3 text-lg font-semibold text-text-primary hover:text-primary"
          href="mailto:salman@salmansyyd.com"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Mail className="size-5" />
          </span>
          salman@salmansyyd.com
        </Link>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ["GitHub", "https://github.com/gh0stfrk"],
            ["LinkedIn", "https://www.linkedin.com/in/syydsalman"],
            ["X", "https://x.com/gh0stfrk"]
          ].map(([label, href]) => (
            <Link
              className="rounded-full border border-subtle px-4 py-2 text-sm font-semibold text-text-secondary hover:border-primary/60 hover:text-text-primary"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
