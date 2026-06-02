"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

interface LogoLoaderProps {
  fullScreen?: boolean;
  message?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// Logo aspect ratio ~ 3:2 (1536 x 1024)
const sizeMap = {
  sm:  { img: "h-28 w-[168px]",  ring: "h-36 w-[216px]" },
  md:  { img: "h-40 w-[240px]",  ring: "h-52 w-[312px]" },
  lg:  { img: "h-52 w-[312px]",  ring: "h-64 w-[384px]" },
  xl:  { img: "h-64 w-[384px] sm:h-72 sm:w-[432px]", ring: "h-[20rem] w-[26rem] sm:h-[22rem] sm:w-[28rem]" },
};

export function LogoLoader({
  fullScreen = true,
  message = "Loading...",
  size = "lg",
}: LogoLoaderProps) {
  const s = sizeMap[size];

  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        <motion.div
          className={`absolute ${s.ring} rounded-full border-[3px] border-dashed border-intiki-gold/50`}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute ${s.ring} rounded-full border-[3px] border-intiki-orange/40`}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Image
            src="/images/Intiki_logo.png"
            alt="Intiki"
            width={432}
            height={288}
            className={`${s.img} object-contain drop-shadow-2xl`}
            unoptimized
            priority
          />
        </motion.div>
      </div>

      <motion.p
        className="text-base sm:text-lg font-semibold text-intiki-green font-[family-name:var(--font-playfair)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {BRAND.tagline}
      </motion.p>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">{message}</span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-intiki-orange"
              animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-0 text-4xl pointer-events-none select-none opacity-20"
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        aria-hidden
      >
        ✈️
      </motion.div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-intiki-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-intiki-gold/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-intiki-orange/10 rounded-full blur-3xl" />
        </div>
        <div className="relative px-4">{content}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-24 relative overflow-hidden">
      {content}
    </div>
  );
}
