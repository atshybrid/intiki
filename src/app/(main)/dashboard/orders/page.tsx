"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice, formatDate } from "@/lib/utils";

const orders = [
  { id: "ORD-001", items: "Avakaya Pickle x2, Kaju Katli", total: 1297, status: "DELIVERED", date: "2026-02-28" },
  { id: "ORD-002", items: "Sample Box", total: 499, status: "SHIPPED", date: "2026-03-05" },
  { id: "ORD-003", items: "Diwali Festival Box", total: 4999, status: "PROCESSING", date: "2026-03-10" },
];

const statusVariant: Record<string, "green" | "orange" | "default"> = {
  DELIVERED: "green",
  SHIPPED: "orange",
  PROCESSING: "default",
};

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-4">
        <ArrowLeft className="h-4 w-4" /> Account
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green mb-6">My Orders</h1>
      <div className="space-y-3">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm">{order.id}</p>
                  <p className="text-xs text-gray-500">{order.items}</p>
                </div>
                <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-intiki-green">{formatPrice(order.total)}</span>
                <span className="text-xs text-gray-400">{formatDate(order.date)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
