"use client";

import Link from "next/link";
import { Package, Gift, CreditCard, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice, formatDate } from "@/lib/utils";

const recentOrders = [
  { id: "ORD-001", items: "Avakaya Pickle x2, Kaju Katli", total: 1297, status: "DELIVERED", date: "2026-02-28" },
  { id: "ORD-002", items: "Sample Box", total: 499, status: "SHIPPED", date: "2026-03-05" },
  { id: "ORD-003", items: "Diwali Festival Box", total: 4999, status: "PROCESSING", date: "2026-03-10" },
];

const statusColors: Record<string, "green" | "orange" | "default"> = {
  DELIVERED: "green",
  SHIPPED: "orange",
  PROCESSING: "default",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="text-2xl font-bold text-intiki-navy mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { icon: Package, label: "Orders", value: "3", href: "/dashboard/orders" },
          { icon: Gift, label: "Samples", value: "1", href: "/dashboard/samples" },
          { icon: CreditCard, label: "Active Subs", value: "0", href: "/dashboard/subscriptions" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} href={stat.href}>
              <Card className="hover:shadow-sm transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Icon className="h-5 w-5 text-intiki-navy mx-auto mb-1" />
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <h2 className="font-semibold mb-3">Recent Orders</h2>
      <div className="space-y-3">
        {recentOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm">{order.id}</p>
                  <p className="text-xs text-gray-500">{order.items}</p>
                </div>
                <Badge variant={statusColors[order.status] || "default"}>
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-intiki-navy">
                  {formatPrice(order.total)}
                </span>
                <span className="text-xs text-gray-400">{formatDate(order.date)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Link href="/shop">
        <Button variant="outline" className="w-full mt-4">
          Continue Shopping <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
