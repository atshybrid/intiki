import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "header";
}

// Logo aspect ratio ~ 3:2 (1536 x 1024)
const sizes = {
  sm:   { width: 180, height: 120, img: "h-[72px] w-[108px]" },
  md:   { width: 240, height: 160, img: "h-[96px] w-[144px]" },
  lg:   { width: 300, height: 200, img: "h-[120px] w-[180px]" },
  xl:   { width: 360, height: 240, img: "h-[140px] w-[210px]" },
  header: { width: 420, height: 280, img: "h-[88px] w-[132px] sm:h-[110px] sm:w-[165px] md:h-[130px] md:w-[195px]" },
};

export function Logo({ className, size = "header" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center group transition-transform hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src="/images/Intiki_logo.png"
        alt="Intiki — From Home, With Love"
        width={s.width}
        height={s.height}
        className={cn(s.img, "object-contain")}
        priority
        unoptimized
      />
    </Link>
  );
}
