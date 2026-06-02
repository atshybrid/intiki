"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ChevronDown,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/layout/logo";
import { BRAND, DESKTOP_NAV, CATEGORIES } from "@/lib/constants";

export function Header() {
  const cartCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.items.length);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/shop?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top announcement bar */}
      <div className="bg-intiki-green text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <p className="font-medium truncate mr-2">
            ✈️ International Courier — {BRAND.tagline} Delivering India to NRIs ❤️
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/track" className="flex items-center gap-1 hover:text-intiki-gold transition-colors whitespace-nowrap">
              <MapPin className="h-3 w-3" /> Track
            </Link>
            <Link href="/contact" className="hidden sm:flex items-center gap-1 hover:text-intiki-gold transition-colors">
              <HelpCircle className="h-3 w-3" /> Help
            </Link>
            <span className="hidden md:flex items-center gap-1 cursor-pointer hover:text-intiki-gold">
              🇺🇸 USD <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-2 md:py-3">
          <div className="flex items-center gap-3 md:gap-4">
            <Logo size="header" />

            {/* Search bar - desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-auto">
              <div className="flex w-full rounded-xl border-2 border-gray-200 overflow-hidden focus-within:border-intiki-green transition-colors">
                <select className="bg-gray-50 px-3 text-sm text-gray-600 border-r border-gray-200 outline-none cursor-pointer">
                  <option>All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Search for pickles, snacks, millets, sarees..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="bg-intiki-orange hover:bg-intiki-orange/90 text-white px-5 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* User actions */}
            <div className="flex items-center gap-1 md:gap-2 ml-auto">
              <Link href="/login" className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700">
                <User className="h-5 w-5" />
                <span>Login / Register</span>
              </Link>
              <Link href="/shop?wishlist=true">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-intiki-orange text-[10px] font-bold text-white">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Link href="/shop/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-intiki-orange text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="md:hidden mt-3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </form>
        </div>
      </div>

      {/* Navigation bar - desktop */}
      <nav className="hidden md:block border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-1">
          <button className="flex items-center gap-2 bg-intiki-green text-white px-4 py-2.5 rounded-lg text-sm font-semibold mr-3 hover:bg-intiki-green/90 transition-colors">
            <Menu className="h-4 w-4" />
            Shop by Category
          </button>
          {DESKTOP_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-gray-700 hover:text-intiki-green transition-colors"
            >
              {item.label}
              {"badge" in item && item.badge && (
                <Badge variant="orange" className="text-[10px] px-1.5 py-0">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 py-3 space-y-1">
          {DESKTOP_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
              {"badge" in item && item.badge && (
                <Badge variant="orange" className="text-[10px]">{item.badge}</Badge>
              )}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
