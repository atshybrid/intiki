"use client";

import Link from "next/link";
import {
  User,
  Package,
  Heart,
  CreditCard,
  Gift,
  Settings,
  LogOut,
  ChevronRight,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/stores/auth-store";

const menuItems = [
  { icon: Package, label: "My Orders", href: "/dashboard/orders", count: 3 },
  { icon: Heart, label: "Wishlist", href: "/shop?wishlist=true" },
  { icon: Gift, label: "Sample Requests", href: "/dashboard/samples", count: 1 },
  { icon: CreditCard, label: "Subscriptions", href: "/dashboard/subscriptions" },
  { icon: Crown, label: "Concierge Service", href: "/contact" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function AccountPage() {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated()) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-intiki-cream mx-auto mb-4">
          <User className="h-10 w-10 text-intiki-navy" />
        </div>
        <h1 className="text-2xl font-bold text-intiki-navy mb-2">Welcome to Intiki</h1>
        <p className="text-gray-500 mb-6">
          Sign in to track orders, manage subscriptions, and more
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/login">
            <Button variant="orange" size="lg" className="w-full">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" size="lg" className="w-full">Create Account</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Card className="mb-6">
        <CardContent className="p-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-intiki-navy text-white text-xl font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <Badge variant="green">Verified</Badge>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <Card className="hover:shadow-sm transition-shadow cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-intiki-navy" />
                  <span className="flex-1 font-medium text-sm">{item.label}</span>
                  {"count" in item && item.count && (
                    <Badge variant="orange">{item.count}</Badge>
                  )}
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Button
        variant="ghost"
        className="w-full mt-6 text-red-500 hover:text-red-600 hover:bg-red-50"
        onClick={logout}
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
}
