import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        variant === "primary"
          ? "bg-primary text-[#0B0F14] hover:bg-primary/90"
          : "border border-subtle bg-surface text-text-primary hover:border-primary/60",
        className
      )}
      {...props}
    />
  );
}
