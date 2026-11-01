import type { Metadata } from "next";
import Link from "next/link";
import { ContactBusinessCard } from "@/components/contact-business-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Salman Sayyed."
};

export default function ContactPage() {
  return (
    <section className="mx-auto min-h-[calc(100svh-4.5rem)] w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        description="Email and social links."
        level={1}
        split
        title="Contact"
      />

      <div className="mt-16 grid items-center gap-16 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary">Start a conversation</p>
          <Link
            className="mt-5 block break-all font-display text-[clamp(1.65rem,3vw,3rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-text-primary transition-colors hover:text-primary"
            href="mailto:salman@salmansyyd.com"
          >
            salman@salmansyyd.com
          </Link>
          <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-text-secondary">
            Have a backend, cloud, or data systems problem to solve? Send a note and tell me what you’re building.
          </p>
        </div>
        <ContactBusinessCard />
      </div>
    </section>
  );
}
