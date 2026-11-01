"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent, type CSSProperties, type KeyboardEvent } from "react";

const socials = [
  ["GitHub", "https://github.com/gh0stfrk"],
  ["LinkedIn", "https://www.linkedin.com/in/syydsalman"],
  ["X", "https://x.com/gh0stfrk"]
] as const;

export function ContactBusinessCard() {
  const [flipped, setFlipped] = useState(false);
  const startX = useRef<number | null>(null);
  const cardStyle = { "--card-flip": flipped ? "180deg" : "0deg" } as CSSProperties;

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a, button")) return;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (startX.current === null) return;
    const distance = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(distance) > 42) setFlipped(distance < 0);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const card = event.currentTarget.querySelector<HTMLElement>(".business-card__rotor");
    if (!card || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--card-tilt-x", `${-y * 7}deg`);
    card.style.setProperty("--card-tilt-y", `${x * 9}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLDivElement>) {
    const card = event.currentTarget.querySelector<HTMLElement>(".business-card__rotor");
    card?.style.setProperty("--card-tilt-x", "0deg");
    card?.style.setProperty("--card-tilt-y", "0deg");
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setFlipped(false);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setFlipped(true);
    }
  }

  return (
    <div className="w-full max-w-[34rem]">
      <div
        aria-label="Business card. Swipe left or right to turn it over. Use the left and right arrow keys when focused."
        className="business-card-stage"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerLeave={resetTilt}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="group"
        tabIndex={0}
      >
        <div className="business-card__rotor" style={cardStyle}>
          <article aria-hidden={flipped} className="business-card__face business-card__front" inert={flipped}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  Independent engineer
                </p>
                <h2 className="mt-8 font-display text-3xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
                  Salman Sayyed
                </h2>
                <p className="mt-2 text-sm text-white/65">Backend systems · Mumbai, India</p>
              </div>
              <Image
                alt=""
                aria-hidden="true"
                className="size-[4.5rem] object-contain sm:size-24"
                height={96}
                src="/u78fohqinm6s3im5c6oxe-svg.svg"
                width={96}
              />
            </div>
            <div className="mt-auto flex items-end justify-between pt-4">
              <span className="text-xs text-white/60">Node.js · TypeScript · AWS</span>
              <span className="text-xs font-medium text-primary">01 / 02</span>
            </div>
          </article>

          <article aria-hidden={!flipped} className="business-card__face business-card__back" inert={!flipped}>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#0b0f14]/65">
              Let’s connect
            </p>
            <Link
              className="mt-7 block break-all font-display text-[clamp(1.25rem,4vw,2rem)] font-semibold leading-tight tracking-[-0.04em] text-[#0b0f14] underline decoration-[#0b0f14]/30 underline-offset-4 transition-colors hover:decoration-[#0b0f14]"
              href="mailto:salman@salmansyyd.com"
              tabIndex={flipped ? 0 : -1}
            >
              salman@salmansyyd.com
            </Link>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-4">
              {socials.map(([label, href]) => (
                <Link
                  className="min-h-11 inline-flex items-center text-sm font-semibold text-[#0b0f14] underline decoration-[#0b0f14]/30 underline-offset-4 hover:decoration-[#0b0f14]"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  tabIndex={flipped ? 0 : -1}
                  target="_blank"
                >
                  {label}
                </Link>
              ))}
              <span className="ml-auto self-center text-xs font-medium text-[#0b0f14]/65">02 / 02</span>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-text-secondary">
          {flipped ? "The reverse · contact details" : "The front · swipe to turn it over"}
        </p>
        <button
          aria-label={flipped ? "Show front of business card" : "Show back of business card"}
          aria-pressed={flipped}
          className="min-h-11 shrink-0 text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:decoration-primary"
          onClick={() => setFlipped((value) => !value)}
          type="button"
        >
          {flipped ? "Show front" : "Turn card"}
        </button>
      </div>
    </div>
  );
}
