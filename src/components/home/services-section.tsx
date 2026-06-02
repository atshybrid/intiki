"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Gift,
  Calendar,
  Sparkles,
  Crown,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Heart,
  ShoppingBag,
  Gift,
  Calendar,
  Sparkles,
  Crown,
};

const colorMap = {
  orange: "bg-intiki-orange/10 text-intiki-orange",
  navy: "bg-intiki-navy/10 text-intiki-navy",
  gold: "bg-intiki-gold/20 text-intiki-navy",
  green: "bg-intiki-green/10 text-intiki-green",
  saffron: "bg-orange-100 text-orange-600",
};

export function ServicesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-navy mb-2">
            Our Services
          </h2>
          <p className="text-gray-600">
            More than a courier — a complete home-to-home marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={service.href}>
                  <Card
                    className={`h-full hover:shadow-lg transition-all cursor-pointer group ${
                      "featured" in service && service.featured
                        ? "ring-2 ring-intiki-gold"
                        : ""
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                            colorMap[service.color as keyof typeof colorMap]
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        {"featured" in service && service.featured && (
                          <Badge variant="gold">USP</Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-intiki-navy transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-intiki-navy">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
