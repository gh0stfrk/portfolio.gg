import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={cn("size-11 object-contain", className)}
      height={54}
      priority
      src="/u78fohqinm6s3im5c6oxe-svg.svg"
      width={54}
    />
  );
}
