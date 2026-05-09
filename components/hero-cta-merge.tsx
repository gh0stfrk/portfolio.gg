import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroCtaMergeProps = {
  blogHref: string;
  projectsHref: string;
  className?: string;
};

export function HeroCtaMerge({
  blogHref,
  projectsHref,
  className
}: HeroCtaMergeProps): JSX.Element {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <div className="pointer-events-none absolute inset-y-2 left-1/2 z-10 w-10 -translate-x-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 blur-md" />
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
