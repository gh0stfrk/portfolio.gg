export function SectionHeading({
  title,
  description,
  level = 2,
  split = false
}: {
  title: string;
  description?: string;
  level?: 1 | 2;
  split?: boolean;
}) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={split ? "grid w-full gap-6 md:grid-cols-12 md:items-end md:gap-8" : "max-w-[52rem]"}>
      <div className={split ? "md:col-span-7" : undefined}>
        <Heading
          className={
            level === 1
              ? "text-balance font-display text-[clamp(3.25rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-text-primary"
              : "text-balance font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary"
          }
        >
          {title}
        </Heading>
      </div>
      {description ? (
        <p className={split
          ? "max-w-[38ch] text-lg leading-relaxed text-text-primary sm:text-xl md:col-span-4 md:col-start-9"
          : "mt-5 max-w-[38ch] text-lg leading-relaxed text-text-primary sm:text-xl"
        }>
          {description}
        </p>
      ) : null}
    </div>
  );
}
