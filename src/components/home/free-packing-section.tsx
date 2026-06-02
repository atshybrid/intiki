"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Package, CheckCircle, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FREE_PACKING_FEATURES } from "@/lib/constants";

export function FreePackingSection() {
  return (
    <section id="free-packing" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-intiki-gold/30">
              <Image
                src="/images/free-packing.png"
                alt="Free packing with door pickup — Intiki courier at your doorstep"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating FREE badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-3 -right-3 md:top-4 md:right-4 bg-intiki-orange text-white rounded-2xl px-4 py-3 shadow-xl text-center"
            >
              <p className="text-2xl font-black leading-none">FREE</p>
              <p className="text-[10px] font-bold uppercase tracking-wide">Packing</p>
            </motion.div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-bold text-intiki-green flex items-center gap-1">
                <Gift className="h-3.5 w-3.5 text-intiki-orange" />
                Free Packing With Love ♡
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Badge variant="orange" className="mb-4 font-bold text-sm">
              🎁 Special Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-3">
              Free Packing with Door Pickup
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your family doesn&apos;t need to worry about packaging. Intiki agent arrives at your
              doorstep, picks up items, and packs everything free — export-safe, hygienic,
              and ready for international courier via DHL, FedEx & UPS.
            </p>

            <ul className="space-y-4 mb-8">
              {FREE_PACKING_FEATURES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intiki-cream">
                    <CheckCircle className="h-5 w-5 text-intiki-greenLight" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/send">
                <Button variant="orange" size="lg" className="w-full sm:w-auto font-bold">
                  <Home className="h-4 w-4" />
                  Book Free Door Pickup
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-intiki-green text-intiki-green font-bold">
                  <Package className="h-4 w-4" />
                  Know More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
