import Image from 'next/image';

const EAGLE_DARK_SRC = '/baldy-green-4k.png';
const EAGLE_LIGHT_SRC = '/baldy-light-mode-4k.jpg';

export function NeonEagle() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div className="pointer-events-none absolute inset-6 rounded-full bg-primary/10 blur-3xl dark:hidden" />
      <Image
        src={EAGLE_LIGHT_SRC}
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        className="h-full w-full scale-x-[-1] object-contain mix-blend-multiply brightness-95 contrast-125 saturate-110 dark:hidden"
        draggable={false}
      />
      <Image
        src={EAGLE_DARK_SRC}
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        className="hidden h-full w-full object-contain scale-x-[-1] dark:block dark:mix-blend-screen"
        draggable={false}
      />
    </div>
  );
}
