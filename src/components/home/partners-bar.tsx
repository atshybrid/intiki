"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { COURIER_PARTNERS } from "@/lib/courier-partners";

function PartnerBadge({
  name,
  tagline,
  colors,
}: {
  name: string;
  tagline: string;
  colors: { bg: string; text: string; accent: string };
}) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl px-5 py-3 min-w-[110px] shadow-md hover:shadow-lg transition-shadow"
      style={{ backgroundColor: colors.bg }}
    >
      <span
        className="font-black text-xl tracking-tight leading-none"
        style={{ color: colors.text }}
      >
        {name === "FedEx" ? (
          <>
            <span style={{ color: colors.text }}>Fed</span>
            <span style={{ color: colors.accent }}>Ex</span>
          </>
        ) : (
          name
        )}
      </span>
      <span
        className="text-[9px] font-semibold mt-1 uppercase tracking-wider opacity-80"
        style={{ color: name === "DHL" ? colors.accent : colors.text }}
      >
        {tagline}
      </span>
    </div>
  );
}

export function PartnersBar({ variant = "default" }: { variant?: "default" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-4 border-b ${
        isDark
          ? "bg-intiki-green/95 border-white/10"
          : "bg-white border-gray-100 shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className={`flex items-center gap-2 shrink-0 ${isDark ? "text-white/90" : "text-gray-600"}`}>
            <ShieldCheck className={`h-4 w-4 ${isDark ? "text-intiki-gold" : "text-intiki-green"}`} />
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
              Trusted Courier Partners
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
            {COURIER_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <PartnerBadge
                  name={partner.name}
                  tagline={partner.tagline}
                  colors={partner.colors}
                />
              </motion.div>
            ))}
          </div>

          <p className={`text-[10px] sm:text-xs text-center max-w-[200px] ${isDark ? "text-white/60" : "text-gray-400"}`}>
            International delivery via premium global courier network
          </p>
        </div>
      </div>
    </section>
  );
}
