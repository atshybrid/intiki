"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export default function SubscriptionsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-4">
        <ArrowLeft className="h-4 w-4" /> Account
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green mb-2">My Subscriptions</h1>
      <p className="text-sm text-gray-500 mb-6">No active subscriptions</p>
      <Card className="mb-6">
        <CardContent className="p-6 text-center">
          <p className="text-gray-600 mb-4">Subscribe to Amma Box for monthly taste of home</p>
          <Link href="/subscription">
            <Button variant="orange" className="font-bold">View Plans</Button>
          </Link>
        </CardContent>
      </Card>
      <div className="space-y-3">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <Card key={plan.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{plan.name}</p>
                <p className="text-sm text-intiki-green font-bold">{formatPrice(plan.price)}/mo</p>
              </div>
              <Link href={`/subscription?plan=${plan.id}`}>
                <Button variant="outline" size="sm">Subscribe</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
