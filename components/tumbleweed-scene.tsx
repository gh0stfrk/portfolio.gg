import type { ReactElement } from "react";

const gusts = [
  "top-[18%] w-24 [animation-delay:0s]",
  "top-[38%] w-16 [animation-delay:1.4s]",
  "top-[58%] w-32 [animation-delay:2.6s]"
];

const shimmers = [
  "left-[14%] [animation-delay:0s]",
  "left-[46%] [animation-delay:0.8s]",
  "left-[78%] [animation-delay:1.6s]"
];

function Tumbleweed(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="size-full"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.2}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" opacity="0.9" r="38" />
      <ellipse cx="50" cy="50" rx="38" ry="18" transform="rotate(25 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(-40 50 50)" />
      <ellipse cx="50" cy="50" rx="30" ry="14" transform="rotate(80 50 50)" />
      <ellipse cx="48" cy="52" opacity="0.7" rx="26" ry="30" transform="rotate(12 50 50)" />
      <path d="M20 40c12 8 22 4 30 14s20 10 32 2" opacity="0.8" />
      <path d="M28 76c6-14 4-26 18-34s14-22 10-30" opacity="0.8" />
      <path d="M70 80c-8-10-20-12-24-24s-14-16-26-14" opacity="0.7" />
      <path d="M78 30c-10 4-14 14-26 16s-18 12-20 24" opacity="0.7" />
      <path d="M12 54l-6 2M88 46l7-3M46 12l-1-7M56 88l2 7M22 22l-5-5M80 80l5 4" />
    </svg>
  );
}

export function TumbleweedScene(): ReactElement {
  return (
    <div
      aria-hidden="true"
      className="relative h-64 w-full overflow-hidden sm:h-80"
    >
      {/* sun */}
      <div className="absolute right-[12%] top-6 size-16 rounded-full bg-primary/15 blur-[1px] sm:size-24 dark:bg-primary/10" />

      {/* wind gusts */}
      {gusts.map((gust) => (
        <span
          className={`absolute left-0 h-px ${gust} animate-wind-gust bg-gradient-to-r from-transparent via-text-secondary/50 to-transparent motion-reduce:hidden`}
          key={gust}
        />
      ))}

      {/* distant dunes */}
      <svg
        className="absolute inset-x-0 bottom-10 h-20 w-full text-subtle"
        fill="currentColor"
        preserveAspectRatio="none"
        viewBox="0 0 1200 80"
      >
        <path d="M0 80V52c120-30 240-34 380-10s260 10 380-14 300-18 440 10v42z" opacity="0.5" />
      </svg>

      {/* cactus */}
      <svg
        className="absolute bottom-10 right-[22%] h-20 text-text-secondary/40 sm:h-24"
        fill="currentColor"
        viewBox="0 0 40 80"
      >
        <rect height="72" rx="5" width="10" x="15" y="8" />
        <rect height="26" rx="4" width="8" x="2" y="22" />
        <rect height="8" rx="4" width="14" x="2" y="40" />
        <rect height="20" rx="4" width="8" x="30" y="30" />
        <rect height="8" rx="4" width="10" x="24" y="44" />
      </svg>

      {/* ground + heat shimmer */}
      <div className="absolute inset-x-0 bottom-10 h-px bg-text-secondary/40" />
      {shimmers.map((position) => (
        <span
          className={`absolute bottom-12 h-px w-20 ${position} animate-heat-shimmer bg-text-secondary/30 motion-reduce:hidden`}
          key={position}
        />
      ))}

      {/* the tumbleweed: across → bounce → spin */}
      <div className="absolute bottom-10 left-1/2 w-14 animate-tumble-across motion-reduce:animate-none sm:w-20">
        <div className="mx-auto -mb-1 h-2 w-4/5 origin-center animate-tumble-shadow rounded-full bg-text-primary/40 blur-[2px] motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0.5 aspect-square animate-tumble-bounce motion-reduce:animate-none">
          <div className="size-full animate-tumble-spin text-[#a8875a] motion-reduce:animate-none dark:text-[#c9a978]">
            <Tumbleweed />
          </div>
        </div>
      </div>
    </div>
  );
}
