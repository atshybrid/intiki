"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, Star, ShoppingCart, Gift, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { use } from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((s) => s.addItem);
  const { toggleItem, hasItem } = useWishlistStore();

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-4"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              {product.isSample && (
                <Badge variant="gold" className="mb-2">Sample Available — Try Before Bulk Order</Badge>
              )}
              <h1 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
                {product.name}
              </h1>
            </div>
            <button
              onClick={() => toggleItem(product.id)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Heart
                className={`h-5 w-5 ${
                  hasItem(product.id) ? "fill-intiki-orange text-intiki-orange" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-intiki-gold text-intiki-gold"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-intiki-green">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {product.weight && (
            <p className="text-sm text-gray-500 mb-4">Weight: {product.weight}g</p>
          )}

          {/* Sample flow reminder */}
          {product.isSample && (
            <div className="bg-intiki-cream border border-intiki-gold/30 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-intiki-green mb-2">
                🎁 Trust Building Flow
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="bg-intiki-orange text-white px-2 py-0.5 rounded-full font-bold">1</span> Order Sample
                <span>→</span>
                <span className="bg-intiki-gold text-intiki-green px-2 py-0.5 rounded-full font-bold">2</span> Taste
                <span>→</span>
                <span className="bg-intiki-greenLight text-white px-2 py-0.5 rounded-full font-bold">3</span> Confirm
                <span>→</span>
                <span className="bg-intiki-navy text-white px-2 py-0.5 rounded-full font-bold">4</span> Ship
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center gap-2 border rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 rounded-l-xl"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 rounded-r-xl"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="orange"
              size="lg"
              className="flex-1 font-bold"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0] || "",
                    slug: product.slug,
                  });
                }
              }}
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            {product.isSample && (
              <Link href="/sample-box" className="flex-1">
                <Button variant="gold" size="lg" className="w-full font-bold">
                  <Gift className="h-4 w-4" />
                  Try Sample First — ₹499
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
