"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROMO_CARDS } from "@/lib/constants";

export function PromoCardsSection() {
  return (
    <section className="py-10 bg-intiki-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROMO_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={card.href}>
                <div
                  className={`group relative rounded-2xl overflow-hidden h-48 cursor-pointer shadow-md hover:shadow-xl transition-all ${
                    "highlight" in card && card.highlight
                      ? "ring-2 ring-intiki-orange"
                      : ""
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-sm mb-0.5">{card.title}</h3>
                    <p className="text-[11px] text-white/80 mb-2">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-intiki-gold group-hover:gap-2 transition-all">
                      {card.cta} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
