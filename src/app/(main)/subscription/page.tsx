"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Check, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { LogoLoader } from "@/components/ui/logo-loader";

function SubscriptionContent() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-intiki-navy mb-1">Amma Box</h1>
        <p className="text-sm text-gray-500">
          Monthly taste of home — recurring love from India
        </p>
      </div>

      <Card className="mb-6 bg-intiki-green/5 border-intiki-green/20">
        <CardContent className="p-5">
          <div className="flex items-center gap-3">
            <Calendar className="h-8 w-8 text-intiki-green" />
            <div>
              <h2 className="font-bold">Every Month, A Box of Love</h2>
              <p className="text-sm text-gray-600">
                Pickles, snacks, homemade items & seasonal specials — automatically delivered.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <Card
            key={plan.id}
            className={`${
              selectedPlan === plan.id || ("popular" in plan && plan.popular)
                ? "ring-2 ring-intiki-gold"
                : ""
            }`}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    {"popular" in plan && plan.popular && (
                      <Badge variant="gold">
                        <Star className="h-3 w-3 mr-1" /> Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold text-intiki-navy mt-1">
                    {formatPrice(plan.price)}
                    <span className="text-sm font-normal text-gray-500">/{plan.period}</span>
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-intiki-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={"popular" in plan && plan.popular ? "gold" : "outline"}
                className="w-full"
              >
                Subscribe to {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function SubscriptionPage() {
  return (
    <Suspense fallback={<LogoLoader fullScreen={false} message="Loading plans..." size="sm" />}>
      <SubscriptionContent />
    </Suspense>
  );
}
