"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Package,
  FileCheck,
  Plane,
  CheckCircle,
  ArrowRight,
  Globe,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { COURIER_STEPS, COURIER_COUNTRIES } from "@/lib/constants";
import { COURIER_PARTNERS } from "@/lib/courier-partners";

const stepIcons = { Home, Package, FileCheck, Plane, CheckCircle };

export function CourierSection() {
  return (
    <section id="international-courier" className="py-14 bg-intiki-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-intiki-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-intiki-orange rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-intiki-gold text-intiki-green mb-4 font-bold">
              ✈️ International Courier Service
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Send From Home to NRIs Worldwide
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Mother packs pickles, sweets, snacks & clothes at home. Intiki picks up,
              quality-checks, export-packs, handles customs clearance & delivers to
              150+ countries via trusted global courier partners.
            </p>

            {/* Partner names */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-xs text-white/60 mr-1">Shipped via:</span>
              {COURIER_PARTNERS.map((p) => (
                <span
                  key={p.id}
                  className="text-xs font-black px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: p.colors.bg,
                    color: p.id === "fedex" ? p.colors.text : p.colors.text,
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "FREE door-to-door pickup from family home in India",
                "FREE export-safe packing — no hidden charges",
                "Video verification before every shipment",
                "Real-time courier tracking till delivery",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-intiki-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/send">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-intiki-orange hover:bg-intiki-orange/90 font-bold"
                >
                  Send International Courier
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/track">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-bold"
                >
                  Track My Courier
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Courier flow steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-intiki-gold" />
                  How International Courier Works
                </h3>
                <div className="space-y-4">
                  {COURIER_STEPS.map((step, i) => {
                    const Icon = stepIcons[step.icon as keyof typeof stepIcons];
                    return (
                      <div key={step.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-intiki-orange text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-intiki-gold" />
                            <span className="font-semibold text-sm">{step.label}</span>
                          </div>
                          <p className="text-xs text-white/70 mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 pt-4 border-t border-white/20 flex items-center gap-2">
                  <Video className="h-4 w-4 text-intiki-gold" />
                  <span className="text-xs text-white/80">30-second video verification before dispatch</span>
                </div>
              </CardContent>
            </Card>

            {/* Countries */}
            <div className="mt-4 flex flex-wrap gap-2">
              {COURIER_COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-white/10 px-2.5 py-1 rounded-full border border-white/20"
                >
                  {c}
                </span>
              ))}
              <span className="text-xs bg-intiki-gold/20 text-intiki-gold px-2.5 py-1 rounded-full font-semibold">
                +140 more
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
