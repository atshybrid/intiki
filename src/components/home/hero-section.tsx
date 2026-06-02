"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Package, Globe, Home, ArrowRight, Gift, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BRAND, TRUST_BADGES } from "@/lib/constants";

const badgeIcons = { Home, Shield, Package, Globe };

export function HeroSection() {
  return (
    <section className="relative bg-intiki-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div>
              <Badge className="bg-intiki-green/10 text-intiki-green mb-3 font-semibold">
                ✈️ {BRAND.courierTagline}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-intiki-green leading-tight font-[family-name:var(--font-playfair)]">
                {BRAND.tagline} ❤️
              </h1>
              <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
                {BRAND.description}
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {TRUST_BADGES.map((badge) => {
                const Icon = badgeIcons[badge.icon as keyof typeof badgeIcons];
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-intiki-green/10">
                      <Icon className="h-4 w-4 text-intiki-green" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/send">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-intiki-orange hover:bg-intiki-orange/90 text-white font-bold tracking-wide px-8"
                >
                  <Plane className="h-4 w-4" />
                  SEND COURIER
                </Button>
              </Link>
              <Link href="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-intiki-green text-intiki-green hover:bg-intiki-green/5 font-bold tracking-wide px-8"
                >
                  SHOP NOW
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/sample-box">
                <div className="relative flex-1">
                  <Badge variant="orange" className="absolute -top-2.5 left-3 z-10 text-[10px]">
                    New
                  </Badge>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-intiki-orange text-intiki-orange hover:bg-intiki-orange/5 font-bold tracking-wide"
                  >
                    ORDER SAMPLE BOX
                  </Button>
                </div>
              </Link>
              <Link href="/track" className="flex-1">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full text-intiki-green font-bold border border-intiki-green/30"
                >
                  Track Courier →
                </Button>
              </Link>
            </div>
            <p className="text-sm text-intiki-orange font-semibold flex items-center gap-1">
              <Gift className="h-4 w-4" />
              Taste First, Then Order — Build Trust Before Bulk Purchase
            </p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/home.png"
                alt="Intiki — Authentic Indian products packed with love from home"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating sample box card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-2 md:right-4 bg-white rounded-2xl shadow-xl p-4 border border-intiki-gold/30 max-w-[200px]"
            >
              <Badge variant="gold" className="mb-2 text-[10px]">New Here?</Badge>
              <p className="text-sm font-bold text-gray-900 mb-1">Order Our Sample Box</p>
              <p className="text-[11px] text-gray-500 mb-3">Try before you buy big</p>
              <Link href="/sample-box">
                <Button variant="orange" size="sm" className="w-full text-xs font-bold">
                  ORDER NOW <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
