"use client";

import { motion } from "framer-motion";
import { Home, Package, FileCheck, Globe, Gift } from "lucide-react";
import { TRUST_INDICATORS } from "@/lib/constants";

const iconMap = {
  Home,
  Package,
  FileCheck,
  Globe,
  Gift,
};

export function TrustSection() {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TRUST_INDICATORS.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-intiki-navy/5 text-intiki-navy mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
