import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-auto w-20", className)}
      fill="none"
      viewBox="0 0 84 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="19"
        x1="9.5"
        x2="50.5"
        y1="9.5"
        y2="9.5"
      />
      <circle
        cx="74.5"
        cy="9.5"
        fill="currentColor"
        r="7.5"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}
