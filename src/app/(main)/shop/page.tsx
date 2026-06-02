"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search, Heart, Star, ShoppingCart, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { CATEGORIES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { LogoLoader } from "@/components/ui/logo-loader";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialSearch = searchParams.get("search") || "";
  const showWishlist = searchParams.get("wishlist") === "true";

  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    showWishlist ? null : initialCategory
  );
  const addToCart = useCartStore((s) => s.addItem);
  const { toggleItem, hasItem, items: wishlistIds } = useWishlistStore();

  const filtered = MOCK_PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || p.category === activeCategory;
    const matchesWishlist = !showWishlist || wishlistIds.includes(p.id);
    return matchesSearch && matchesCategory && matchesWishlist;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-1">
          {showWishlist ? "My Wishlist" : "Shop From India"}
        </h1>
        <p className="text-sm text-gray-500">
          {showWishlist
            ? wishlistIds.length > 0
              ? `${wishlistIds.length} saved item${wishlistIds.length === 1 ? "" : "s"}`
              : "Save products you love with the heart icon"
            : "Verified vendors, authentic products"}
        </p>
      </div>

      {showWishlist && wishlistIds.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link href="/shop">
            <Button variant="orange">Browse Products</Button>
          </Link>
        </div>
      ) : (
        <>

      {/* Sample box banner */}
      <div className="bg-gradient-to-r from-intiki-orange/10 to-intiki-gold/10 border border-intiki-orange/20 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Gift className="h-8 w-8 text-intiki-orange shrink-0" />
          <div>
            <p className="font-bold text-sm text-gray-900">Not sure? Try Sample First!</p>
            <p className="text-xs text-gray-500">Order Sample → Taste → Confirm → Ship</p>
          </div>
        </div>
        <Link href="/sample-box">
          <Button variant="orange" size="sm" className="shrink-0 font-bold">
            Sample Box ₹499
          </Button>
        </Link>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search pickles, snacks, millets, sarees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 mb-4">
        <button
          onClick={() => setActiveCategory(null)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-intiki-green text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-intiki-green text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <Link href={`/shop/${product.slug}`}>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {product.isSample && (
                  <Badge variant="gold" className="absolute top-2 left-2 text-[10px]">
                    Sample Available
                  </Badge>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleItem(product.id);
                  }}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-sm"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      hasItem(product.id)
                        ? "fill-intiki-orange text-intiki-orange"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
            </Link>
            <CardContent className="p-3">
              <Link href={`/shop/${product.slug}`}>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-intiki-green">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-intiki-gold text-intiki-gold" />
                <span className="text-xs text-gray-500">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-intiki-green">
                    {formatPrice(product.price)}
                  </span>
                  {product.comparePrice && (
                    <span className="text-xs text-gray-400 line-through ml-1">
                      {formatPrice(product.comparePrice)}
                    </span>
                  )}
                </div>
                <Button
                  variant="orange"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0] || "",
                      slug: product.slug,
                    })
                  }
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
        </>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<LogoLoader fullScreen={false} message="Loading shop..." size="sm" />}>
      <ShopContent />
    </Suspense>
  );
}
