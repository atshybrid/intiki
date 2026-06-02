"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  Gift,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getFestivalBoxById, getAllFestivalBoxes } from "@/lib/festival-data";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import { use } from "react";

export default function FestivalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const box = getFestivalBoxById(id);
  const allBoxes = getAllFestivalBoxes();
  const [activeImage, setActiveImage] = useState(0);
  const addToCart = useCartStore((s) => s.addItem);

  if (!box) notFound();

  const related = allBoxes.filter((b) => b.id !== box.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-intiki-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-intiki-green">Home</Link>
          <span>/</span>
          <Link href="/festival" className="hover:text-intiki-green">Festival Boxes</Link>
          <span>/</span>
          <span className="text-intiki-green font-semibold">{box.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <Link
          href="/festival"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> All Festival Boxes
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-4">
              <Image
                src={box.gallery[activeImage] || box.image}
                alt={box.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="gold" className="text-sm px-3 py-1">
                  {box.emoji} {box.festival}
                </Badge>
              </div>
            </div>
            <div className="flex gap-3">
              {box.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-intiki-orange shadow-md scale-105"
                      : "border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">{box.emoji}</span>
              <Badge variant="green">{box.items} Items Included</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-2">
              {box.name}
            </h1>
            <p className="text-intiki-orange font-semibold mb-4">{box.tagline}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{box.description}</p>

            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-intiki-gold text-intiki-gold" />
              ))}
              <span className="text-sm text-gray-500 ml-2">4.9 (128 reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-intiki-green">{formatPrice(box.price)}</span>
              {box.comparePrice && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(box.comparePrice)}
                </span>
              )}
              {box.comparePrice && (
                <Badge variant="orange">
                  Save {formatPrice(box.comparePrice - box.price)}
                </Badge>
              )}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {box.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-intiki-greenLight shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            {/* Trust icons */}
            <div className="flex gap-4 mb-6 p-4 bg-white rounded-xl border border-gray-100">
              {[
                { icon: Truck, label: `Delivery ${box.deliveryDays}` },
                { icon: Shield, label: "Export Safe Pack" },
                { icon: Video, label: "Video Verified" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 flex-1 text-center">
                  <Icon className="h-5 w-5 text-intiki-green" />
                  <span className="text-[10px] text-gray-500 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="orange"
                size="lg"
                className="flex-1 font-bold text-base"
                onClick={() =>
                  addToCart({
                    id: `festival-${box.id}`,
                    name: box.name,
                    price: box.price,
                    image: box.image,
                    slug: `festival/${box.id}`,
                  })
                }
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart — {formatPrice(box.price)}
              </Button>
              <Link href="/sample-box" className="flex-1">
                <Button variant="outline" size="lg" className="w-full font-bold border-intiki-orange text-intiki-orange">
                  <Gift className="h-5 w-5" />
                  Try Sample First
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contents list */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-6">
            What&apos;s Inside — {box.items} Curated Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {box.contents.map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 p-4">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">{item.name}</p>
                    <p className="text-xs text-intiki-orange font-medium">{item.qty}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-intiki-greenLight shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Related boxes */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-6">
              Other Festival Boxes
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link key={rel.id} href={`/festival/${rel.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all group h-full">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <span className="text-2xl">{rel.emoji}</span>
                        <p className="font-bold text-sm">{rel.name}</p>
                        <p className="text-xs text-white/80">{formatPrice(rel.price)}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
