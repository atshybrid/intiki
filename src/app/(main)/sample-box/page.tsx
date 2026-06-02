"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, CheckCircle, ArrowRight, Utensils, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSampleProducts } from "@/lib/mock-data";
import { SAMPLE_FLOW } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const flowIcons = { Gift, Utensils, CheckCircle, Plane };

export default function SampleBoxPage() {
  const sampleProducts = getSampleProducts();
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(1);

  const toggleProduct = (id: string) => {
    if (Object.keys(selected).length >= 6 && !selected[id]) return;
    setSelected((prev) => {
      if (prev[id]) {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const selectedCount = Object.keys(selected).length;
  const basePrice = 499;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <Badge variant="gold" className="mb-3">Our Unique USP</Badge>
        <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-1">
          Sample Box
        </h1>
        <p className="text-sm text-gray-500">
          Order Sample → Taste → Confirm → Ship
        </p>
      </div>

      {/* Visual flow */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {SAMPLE_FLOW.map((step) => {
          const Icon = flowIcons[step.icon as keyof typeof flowIcons];
          const isActive = currentStep >= step.step;
          return (
            <button
              key={step.step}
              onClick={() => setCurrentStep(step.step)}
              className={`text-center p-3 rounded-xl transition-all ${
                isActive
                  ? "bg-intiki-green text-white shadow-md"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <Icon className="h-5 w-5 mx-auto mb-1" />
              <p className="text-[10px] font-bold leading-tight">{step.title}</p>
            </button>
          );
        })}
      </div>

      {/* Step content */}
      {currentStep === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="mb-6 bg-gradient-to-br from-intiki-gold/10 to-intiki-cream border-intiki-gold/20">
            <CardContent className="p-5">
              <h2 className="font-bold text-lg text-intiki-green mb-2">
                Step 1: Select Your Samples
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Choose 2-6 products to try. Each sample is a small portion (50-100g).
              </p>
            </CardContent>
          </Card>

          <div className="space-y-3 mb-6">
            {sampleProducts.map((product) => {
              const isSelected = !!selected[product.id];
              return (
                <Card
                  key={product.id}
                  className={`cursor-pointer transition-all ${
                    isSelected ? "ring-2 ring-intiki-orange bg-intiki-orange/5" : ""
                  }`}
                  onClick={() => toggleProduct(product.id)}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">Sample: 50g portion</p>
                    </div>
                    {isSelected ? (
                      <Badge variant="green">Selected ✓</Badge>
                    ) : (
                      <span className="text-xs text-gray-400">Tap to add</span>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      )}

      {currentStep === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="mb-6">
            <CardContent className="p-6 text-center">
              <Utensils className="h-12 w-12 text-intiki-gold mx-auto mb-4" />
              <h2 className="font-bold text-lg text-intiki-green mb-2">
                Step 2: Taste & Verify at Home
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your sample box arrives in 7-10 days. Taste each product, check quality,
                freshness, and authenticity. No rush — take your time.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                {["/images/Pickes.png", "/images/snakes.png"].map((img, i) => (
                  <div key={i} className="relative h-20 w-20 rounded-xl overflow-hidden">
                    <Image src={img} alt="Sample" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {currentStep === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="mb-6">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-intiki-greenLight mx-auto mb-4" />
              <h2 className="font-bold text-lg text-intiki-green mb-2">
                Step 3: Confirm Your Bulk Order
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Happy with the quality? Place your bulk order of ₹10,000+ with confidence.
                Your ₹499 sample cost is fully adjusted in the bulk order.
              </p>
              <Link href="/shop" className="inline-block mt-4">
                <Button variant="green" size="lg" className="font-bold">
                  Browse Products to Order
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {currentStep === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="mb-6">
            <CardContent className="p-6 text-center">
              <Plane className="h-12 w-12 text-intiki-navy mx-auto mb-4" />
              <h2 className="font-bold text-lg text-intiki-green mb-2">
                Step 4: We Ship Worldwide
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Export-safe packaging, customs documentation, video verification —
                your order reaches your loved ones anywhere in the world.
              </p>
              <Link href="/track" className="inline-block mt-4">
                <Button variant="outline" size="lg">
                  Track Your Shipment
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Sticky order bar - only on step 1 */}
      {currentStep === 1 && (
        <Card className="sticky bottom-24 md:bottom-4 shadow-lg border-intiki-orange/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{selectedCount}/6 samples selected</p>
                <p className="text-xl font-bold text-intiki-green">{formatPrice(basePrice)}</p>
                <p className="text-xs text-intiki-greenLight">Adjusted in bulk order ₹10,000+</p>
              </div>
              <Button
                variant="orange"
                size="lg"
                disabled={selectedCount < 2}
                className="font-bold"
                onClick={() => setCurrentStep(2)}
              >
                Order Sample Box
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation between steps */}
      {currentStep > 1 && (
        <div className="flex gap-3 mt-4">
          <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)} className="flex-1">
            Previous Step
          </Button>
          {currentStep < 4 && (
            <Button variant="orange" onClick={() => setCurrentStep(currentStep + 1)} className="flex-1 font-bold">
              Next Step
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
