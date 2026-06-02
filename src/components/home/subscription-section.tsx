"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SUBSCRIPTION_PLANS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export function SubscriptionSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-navy mb-2">
            Amma Box Subscription
          </h2>
          <p className="text-gray-600">
            Monthly taste of home — recurring love from India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {SUBSCRIPTION_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`h-full relative ${
                  "popular" in plan && plan.popular
                    ? "ring-2 ring-intiki-gold shadow-lg"
                    : ""
                }`}
              >
                {"popular" in plan && plan.popular && (
                  <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="h-3 w-3 mr-1" /> Most Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-intiki-navy">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm text-gray-500">/{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-intiki-green shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/subscription?plan=${plan.id}`}>
                    <Button
                      variant={"popular" in plan && plan.popular ? "gold" : "outline"}
                      className="w-full"
                    >
                      Subscribe
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
