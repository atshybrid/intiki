"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Package,
  Plane,
  CheckCircle,
  Plus,
  Trash2,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageItem {
  description: string;
  quantity: number;
  weight: number;
}

export default function SendPage() {
  const [step, setStep] = useState(1);
  const [items, setItems] = useState<PackageItem[]>([
    { description: "", quantity: 1, weight: 0.5 },
  ]);
  const [videoVerification, setVideoVerification] = useState(true);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, weight: 0.5 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const steps = [
    { num: 1, label: "Sender", icon: Home },
    { num: 2, label: "Recipient", icon: Plane },
    { num: 3, label: "Items", icon: Package },
    { num: 4, label: "Confirm", icon: CheckCircle },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <Badge variant="green" className="mb-2">International Courier</Badge>
        <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-1">
          Send International Courier
        </h1>
        <p className="text-sm text-gray-500">
          Family packs at home in India — we courier worldwide via DHL, FedEx & UPS
        </p>
      </div>

      {/* Free packing banner */}
      <div className="mb-6 rounded-2xl overflow-hidden border-2 border-intiki-gold/40 shadow-md">
        <div className="grid sm:grid-cols-3 gap-0">
          <div className="sm:col-span-1 relative h-32 sm:h-auto min-h-[120px]">
            <Image
              src="/images/free-packing.png"
              alt="Free packing with door pickup"
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="sm:col-span-2 bg-intiki-cream p-4 flex flex-col justify-center">
            <Badge variant="orange" className="w-fit mb-2">FREE</Badge>
            <p className="font-bold text-intiki-green">Free Packing + Door Pickup Included</p>
            <p className="text-xs text-gray-600 mt-1">
              Our agent comes to your door, packs everything free — export-safe & ready to ship.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.num} className="flex flex-col items-center flex-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full mb-1 transition-colors ${
                  step >= s.num
                    ? "bg-intiki-navy text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-medium text-gray-500">{s.label}</span>
            </div>
          );
        })}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Sender Details (In India)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Address" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="City" />
                <Input placeholder="Pincode" />
              </div>
              <Button variant="orange" className="w-full" onClick={() => setStep(2)}>
                Continue
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Recipient Details (Abroad)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Address" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="City" />
                <Input placeholder="Country" />
              </div>
              <Input placeholder="Postal/ZIP Code" />
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button variant="orange" className="flex-1" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Package Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Item {index + 1}</span>
                    {items.length > 1 && (
                      <button onClick={() => removeItem(index)}>
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>
                    )}
                  </div>
                  <Input
                    placeholder="Description (e.g., Mango Pickle 500g)"
                    value={item.description}
                    onChange={(e) => {
                      const updated = [...items];
                      updated[index].description = e.target.value;
                      setItems(updated);
                    }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="Quantity"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[index].quantity = parseInt(e.target.value) || 1;
                        setItems(updated);
                      }}
                    />
                    <Input
                      placeholder="Weight (kg)"
                      type="number"
                      step="0.1"
                      value={item.weight}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[index].weight = parseFloat(e.target.value) || 0;
                        setItems(updated);
                      }}
                    />
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full" onClick={addItem}>
                <Plus className="h-4 w-4" /> Add Another Item
              </Button>

              <div
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-intiki-gold/30 bg-intiki-gold/5 cursor-pointer"
                onClick={() => setVideoVerification(!videoVerification)}
              >
                <Video className="h-5 w-5 text-intiki-navy" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">Video Verification</p>
                  <p className="text-xs text-gray-500">
                    30-second video before shipping
                  </p>
                </div>
                <Badge variant={videoVerification ? "green" : "outline"}>
                  {videoVerification ? "Enabled" : "Off"}
                </Badge>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button variant="orange" className="flex-1" onClick={() => setStep(4)}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Confirm & Schedule Pickup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl bg-intiki-cream space-y-2">
                <p className="text-sm font-semibold text-intiki-navy">What happens next:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1. We schedule door pickup from sender</li>
                  <li>2. Quality check & export packaging</li>
                  <li>3. Customs documentation handled</li>
                  {videoVerification && <li>4. Video verification recorded</li>}
                  <li>{videoVerification ? "5" : "4"}. International delivery to recipient</li>
                </ul>
              </div>

              <Input placeholder="Preferred pickup date" type="date" />
              <Input placeholder="Special instructions (optional)" />

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button variant="orange" className="flex-1">
                  Schedule Pickup
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
