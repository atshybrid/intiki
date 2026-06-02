"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/stores/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const shipping = items.length > 0 ? 999 : 0;
  const grandTotal = total() + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <p className="text-gray-500 mb-4">Your cart is empty</p>
        <Link href="/shop">
          <Button variant="orange">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="text-2xl font-bold text-intiki-navy mb-6">Cart ({items.length})</h1>

      <div className="space-y-3 mb-6">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-intiki-cream text-2xl">
                📦
              </div>
              <div className="flex-1">
                <Link href={`/shop/${item.slug}`}>
                  <p className="font-semibold text-sm hover:text-intiki-navy">{item.name}</p>
                </Link>
                <p className="text-sm font-bold text-intiki-navy">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-lg hover:bg-gray-100"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-lg hover:bg-gray-100"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <button onClick={() => removeItem(item.id)}>
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="sticky bottom-24 md:bottom-4">
        <CardContent className="p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">{formatPrice(total())}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">International Shipping</span>
            <span className="font-semibold">{formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-3">
            <span>Total</span>
            <span className="text-intiki-navy">{formatPrice(grandTotal)}</span>
          </div>
          <Button variant="orange" size="lg" className="w-full">
            Proceed to Checkout <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
