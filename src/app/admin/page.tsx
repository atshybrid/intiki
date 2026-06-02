"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Truck,
  Gift,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
  { icon: Package, label: "Products", href: "/admin/products" },
  { icon: ShoppingBag, label: "Orders", href: "/admin/orders" },
  { icon: Truck, label: "Shipments", href: "/admin/shipments" },
  { icon: Gift, label: "Sample Requests", href: "/admin/samples" },
  { icon: CreditCard, label: "Subscriptions", href: "/admin/subscriptions" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const stats = [
  { label: "Total Orders", value: "1,247", change: "+12%" },
  { label: "Active Shipments", value: "89", change: "+5%" },
  { label: "Sample Requests", value: "156", change: "+23%" },
  { label: "Subscriptions", value: "342", change: "+8%" },
  { label: "Revenue (MTD)", value: "₹24.5L", change: "+18%" },
  { label: "New Users", value: "78", change: "+15%" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden lg:flex w-64 flex-col border-r bg-white">
        <div className="p-5 border-b">
          <h2 className="font-bold text-intiki-navy text-lg">Intiki Admin</h2>
          <p className="text-xs text-gray-400">Management Panel</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-intiki-navy text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <Badge variant="green" className="mt-2">{stat.change}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-3">
                {[
                  { id: "ORD-1247", customer: "Priya S.", amount: "₹4,999", status: "Processing" },
                  { id: "ORD-1246", customer: "Rajesh K.", amount: "₹499", status: "Sample Box" },
                  { id: "ORD-1245", customer: "Anitha R.", amount: "₹8,999", status: "Shipped" },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="text-sm font-semibold">{order.id}</p>
                      <p className="text-xs text-gray-400">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{order.amount}</p>
                      <Badge variant="outline" className="text-[10px]">{order.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-4">Pending Sample Requests</h3>
              <div className="space-y-3">
                {[
                  { customer: "Meera P.", items: 4, date: "Today" },
                  { customer: "Suresh N.", items: 6, date: "Yesterday" },
                  { customer: "Lakshmi V.", items: 3, date: "2 days ago" },
                ].map((req, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="text-sm font-semibold">{req.customer}</p>
                      <p className="text-xs text-gray-400">{req.items} samples</p>
                    </div>
                    <Badge variant="orange">{req.date}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
