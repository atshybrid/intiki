"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gift, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sampleItems = [
  { emoji: "🥭", name: "Mango Pickle Sample", size: "50g" },
  { emoji: "🌿", name: "Gongura Pickle Sample", size: "50g" },
  { emoji: "🌾", name: "Ragi Millet Sample", size: "100g" },
  { emoji: "🍬", name: "Sweet Sample", size: "2 pcs" },
];

export function SampleBoxHighlight() {
  return (
    <section className="py-12 bg-gradient-to-br from-intiki-gold/10 via-intiki-cream to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="gold" className="mb-4">
              Our Unique USP
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-intiki-navy mb-3">
              Try Before You Buy Big
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Don&apos;t trust blindly. Before ordering ₹10,000 worth of products,
              receive a Sample Box with small portions. Verify quality, taste the
              authenticity, then place your bulk order with confidence.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Receive 4-6 product samples",
                "Verify quality & taste",
                "Sample cost adjusted in bulk order",
                "Very few competitors offer this",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-intiki-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/sample-box">
              <Button variant="gold" size="lg">
                Order Sample Box — ₹499
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-intiki-gold/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-intiki-gold/20">
                  <Gift className="h-6 w-6 text-intiki-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Starter Sample Box</h3>
                  <p className="text-sm text-gray-500">4 curated samples</p>
                </div>
                <span className="ml-auto text-xl font-bold text-intiki-navy">₹499</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {sampleItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-50"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                      <p className="text-[10px] text-gray-400">{item.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
