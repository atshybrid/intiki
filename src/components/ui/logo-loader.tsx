"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Package, Globe, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { COURIER_PARTNERS } from "@/lib/courier-partners";

interface LogoLoaderProps {
  fullScreen?: boolean;
  message?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: {
    img: "h-28 w-[168px]",
    inner: "h-44 w-44",
    outer: "h-56 w-56",
    partner: "h-72 w-72",
    icon: "h-4 w-4",
    partnerText: "text-[8px]",
    pin: "text-[9px]",
  },
  md: {
    img: "h-40 w-[240px]",
    inner: "h-56 w-56",
    outer: "h-[17rem] w-[17rem]",
    partner: "h-[21rem] w-[21rem]",
    icon: "h-5 w-5",
    partnerText: "text-[9px]",
    pin: "text-[10px]",
  },
  lg: {
    img: "h-52 w-[312px]",
    inner: "h-[17rem] w-[17rem]",
    outer: "h-[21rem] w-[21rem]",
    partner: "h-[26rem] w-[26rem]",
    icon: "h-5 w-5",
    partnerText: "text-[10px]",
    pin: "text-xs",
  },
  xl: {
    img: "h-64 w-[384px] sm:h-72 sm:w-[432px]",
    inner: "h-[20rem] w-[20rem] sm:h-[22rem] sm:w-[22rem]",
    outer: "h-[24rem] w-[24rem] sm:h-[26rem] sm:w-[26rem]",
    partner: "h-[30rem] w-[30rem] sm:h-[32rem] sm:w-[32rem]",
    icon: "h-6 w-6",
    partnerText: "text-[10px] sm:text-xs",
    pin: "text-xs sm:text-sm",
  },
};

function OrbitItem({
  radiusClass,
  duration,
  reverse,
  delay = 0,
  children,
}: {
  radiusClass: string;
  duration: number;
  reverse?: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`absolute ${radiusClass} pointer-events-none`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

function RouteRing({ className }: { className: string }) {
  return (
    <svg
      className={`absolute inset-0 ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="4 3"
        className="text-intiki-green/25"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#routeGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="18 270"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <defs>
        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F47920" />
          <stop offset="50%" stopColor="#FFC20E" />
          <stop offset="100%" stopColor="#008751" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoLoader({
  fullScreen = true,
  message = "Loading...",
  size = "lg",
}: LogoLoaderProps) {
  const s = sizeMap[size];

  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        {/* Partner orbit — DHL / FedEx / UPS badges */}
        <OrbitItem radiusClass={s.partner} duration={14}>
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 shadow-md font-bold ${s.partnerText}`}
            style={{
              background: COURIER_PARTNERS[0].colors.bg,
              color: COURIER_PARTNERS[0].colors.text,
            }}
          >
            {COURIER_PARTNERS[0].name}
          </div>
        </OrbitItem>
        <OrbitItem radiusClass={s.partner} duration={14} delay={4.67}>
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 shadow-md font-bold ${s.partnerText}`}
            style={{
              background: COURIER_PARTNERS[1].colors.bg,
              color: COURIER_PARTNERS[1].colors.text,
            }}
          >
            {COURIER_PARTNERS[1].name}
          </div>
        </OrbitItem>
        <OrbitItem radiusClass={s.partner} duration={14} delay={9.33}>
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 shadow-md font-bold ${s.partnerText}`}
            style={{
              background: COURIER_PARTNERS[2].colors.bg,
              color: COURIER_PARTNERS[2].colors.text,
            }}
          >
            {COURIER_PARTNERS[2].name}
          </div>
        </OrbitItem>

        {/* Outer dashed ring — global route */}
        <motion.div
          className={`absolute ${s.outer} rounded-full border-2 border-dashed border-intiki-green/20`}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated SVG route tracker */}
        <div className={`absolute ${s.outer}`}>
          <RouteRing className="text-intiki-orange" />
        </div>

        {/* Origin / destination pins */}
        <OrbitItem radiusClass={s.outer} duration={20} reverse>
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-intiki-green text-white shadow-lg">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <span className={`font-bold text-intiki-green whitespace-nowrap ${s.pin}`}>
              🇮🇳 India
            </span>
          </div>
        </OrbitItem>
        <OrbitItem radiusClass={s.outer} duration={20} reverse delay={10}>
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-intiki-orange text-white shadow-lg">
              <Globe className="h-3.5 w-3.5" />
            </div>
            <span className={`font-bold text-intiki-orange whitespace-nowrap ${s.pin}`}>
              🌍 Worldwide
            </span>
          </div>
        </OrbitItem>

        {/* Inner gold pulse ring */}
        <motion.div
          className={`absolute ${s.inner} rounded-full border-[3px] border-intiki-gold/40`}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.15, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner rotating dashed ring */}
        <motion.div
          className={`absolute ${s.inner} rounded-full border-[2px] border-dashed border-intiki-orange/50`}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Plane — clockwise inner orbit */}
        <OrbitItem radiusClass={s.inner} duration={5}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-intiki-orange text-white shadow-lg ring-2 ring-white">
            <Plane className={`${s.icon} -rotate-45`} />
          </div>
        </OrbitItem>

        {/* Package — counter-clockwise inner orbit */}
        <OrbitItem radiusClass={s.inner} duration={7} reverse delay={1.5}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-intiki-green text-white shadow-lg ring-2 ring-white">
            <Package className={s.icon} />
          </div>
        </OrbitItem>

        {/* Logo center */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
        className="text-base sm:text-lg font-semibold text-intiki-green font-[family-name:var(--font-playfair)] text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {BRAND.tagline}
      </motion.p>

      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="flex items-center gap-2 rounded-full bg-intiki-green/10 px-4 py-1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-intiki-orange opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-intiki-orange" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-intiki-green">
            International Courier in Transit
          </span>
        </motion.div>

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
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-intiki-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-intiki-gold/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-intiki-orange/10 rounded-full blur-3xl" />
          {/* Subtle globe grid */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-[0.04]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            <Globe className="w-full h-full text-intiki-green" strokeWidth={0.5} />
          </motion.div>
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
