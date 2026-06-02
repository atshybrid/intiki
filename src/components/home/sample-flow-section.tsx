"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Utensils, CheckCircle, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SAMPLE_FLOW } from "@/lib/constants";

const iconMap = { Gift, Utensils, CheckCircle, Plane };

const colorMap = {
  orange: "bg-intiki-orange text-white",
  gold: "bg-intiki-gold text-intiki-green",
  green: "bg-intiki-greenLight text-white",
  navy: "bg-intiki-navy text-white",
};

export function SampleFlowSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-intiki-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-3 text-sm px-4 py-1">
            Our Unique Trust System
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-2">
            Order Sample → Taste → Confirm → Ship
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don&apos;t trust blindly. Try our samples first, verify quality at home,
            then confirm your bulk order with complete confidence.
          </p>
        </div>

        {/* Flow steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {SAMPLE_FLOW.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {i < SAMPLE_FLOW.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-intiki-gold/40 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center h-full">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full mx-auto mb-3 ${
                      colorMap[step.color as keyof typeof colorMap]
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-intiki-orange uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA row with product images */}
        <div className="bg-white rounded-2xl shadow-lg border border-intiki-gold/20 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="flex gap-3 overflow-hidden">
              {["/images/Pickes.png", "/images/snakes.png", "/images/Spces_millets.png"].map(
                (img, i) => (
                  <div
                    key={i}
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 border-2 border-white shadow-md"
                  >
                    <Image src={img} alt="Sample product" fill className="object-cover" />
                  </div>
                )
              )}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-intiki-green mb-2">
                Start with ₹499 Sample Box
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Sample cost adjusted when you place bulk order of ₹10,000+
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/sample-box">
                  <Button variant="orange" size="lg" className="font-bold w-full sm:w-auto">
                    ORDER SAMPLE BOX <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
