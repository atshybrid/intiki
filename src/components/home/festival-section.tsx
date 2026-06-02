"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllFestivalBoxes } from "@/lib/festival-data";
import { formatPrice } from "@/lib/utils";

export function FestivalSection() {
  const boxes = getAllFestivalBoxes();

  return (
    <section className="py-14 bg-gradient-to-b from-white to-intiki-cream">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <Badge variant="gold" className="mb-3">
              <Sparkles className="h-3 w-3 mr-1" /> Festival Collections
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-intiki-green font-[family-name:var(--font-playfair)]">
              Festival Boxes
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Ready-made packages with huge emotional value
            </p>
          </div>
          <Link
            href="/festival"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-intiki-orange hover:gap-2 transition-all"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {boxes.map((box, i) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/festival/${box.id}`} className="block group">
                <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={box.image}
                      alt={box.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-2xl drop-shadow-lg">{box.emoji}</span>
                    </div>
                    {box.comparePrice && (
                      <Badge variant="orange" className="absolute top-3 right-3 text-[10px]">
                        SAVE {Math.round(((box.comparePrice - box.price) / box.comparePrice) * 100)}%
                      </Badge>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-base mb-0.5">{box.name}</h3>
                      <p className="text-xs text-white/80 mb-2">{box.items} curated items</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold">{formatPrice(box.price)}</span>
                          {box.comparePrice && (
                            <span className="text-xs text-white/60 line-through ml-1">
                              {formatPrice(box.comparePrice)}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold bg-intiki-orange px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          View Box →
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/festival">
            <Button variant="outline" className="border-intiki-green text-intiki-green">
              View All Festival Boxes <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
