import Link from "next/link";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

const centerGlow = "pointer-events-none absolute inset-y-2 left-1/2 z-10 w-10 -translate-x-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 blur-md"; // taste-skill-ignore: the restrained center glow is part of the distinctive split CTA the user asked to keep.

type HeroCtaMergeProps = {
  blogHref: string;
  projectsHref: string;
  className?: string;
};

export function HeroCtaMerge({
  blogHref,
  projectsHref,
  className
}: HeroCtaMergeProps): ReactElement {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <div className={centerGlow} />
      <div className="grid grid-cols-2 gap-[2px]">
        <Link
          className="relative inline-flex items-center justify-center rounded-2xl rounded-r-lg bg-primary px-5 py-3.5 text-sm font-semibold text-[#0B0F14] hover:bg-primary/90"
          href={blogHref}
        >
          View Blogs
        </Link>
        <Link
          className="relative inline-flex items-center justify-center rounded-2xl rounded-l-lg border border-subtle bg-surface px-5 py-3.5 text-sm font-semibold text-text-primary hover:border-primary/60"
          href={projectsHref}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
