import Image from 'next/image';

const EAGLE_SVG_SRC = '/baldy-green-4k.png';

export function NeonEagle() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl">
      <Image
        src={EAGLE_SVG_SRC}
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        className="h-full w-full object-contain scale-x-[-1] dark:mix-blend-screen"
        draggable={false}
      />
    </div>
  );
}
