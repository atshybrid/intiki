"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/auth-store";

export default function SettingsPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-4">
        <ArrowLeft className="h-4 w-4" /> Account
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green mb-6">Settings</h1>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
            <Input defaultValue={user?.name || ""} placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
            <Input defaultValue={user?.email || ""} type="email" placeholder="Email" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
            <Input placeholder="+91 XXXXX XXXXX" type="tel" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Default Country</label>
            <Input defaultValue="USA" placeholder="Delivery country" />
          </div>
          <Button variant="orange" className="w-full font-bold">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
