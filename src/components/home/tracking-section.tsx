"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Package,
  FileCheck,
  Plane,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRACKING_STEPS } from "@/lib/constants";

const stepIcons = { Home: MapPin, Package, FileCheck, Plane, CheckCircle };

export function TrackingSection() {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const id = trackingId.trim() || "INTK20260315001";
    router.push(`/track?id=${encodeURIComponent(id)}`);
  };

  return (
    <section id="track-courier" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <Badge variant="green" className="mb-3">
            <Plane className="h-3 w-3 mr-1" /> Live Courier Tracking
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-2">
            Track Your International Courier
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Real-time tracking from pickup in India to delivery at your doorstep worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Track form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-intiki-green/20 shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleTrack} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Enter Courier Tracking Number
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="e.g. INTK20260315001"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="pl-11 h-12 text-base"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Try demo: INTK20260315001
                    </p>
                  </div>
                  <Button type="submit" variant="orange" size="lg" className="w-full font-bold">
                    Track International Courier
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <Link href="/send">
                    <Button variant="outline" className="w-full text-xs h-auto py-3">
                      <Package className="h-4 w-4 mr-1" />
                      Send New Courier
                    </Button>
                  </Link>
                  <Link href="/track">
                    <Button variant="ghost" className="w-full text-xs h-auto py-3 text-intiki-green">
                      Full Tracking Page →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tracking steps preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Card className="bg-intiki-cream border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-intiki-green mb-5">Courier Status Stages</h3>
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-intiki-green/20" />
                  {TRACKING_STEPS.map((step, i) => {
                    const Icon = stepIcons[step.icon as keyof typeof stepIcons] || Package;
                    const isActive = i <= 3;
                    return (
                      <div key={step.id} className="flex items-center gap-4 mb-5 last:mb-0 relative">
                        <div
                          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            isActive
                              ? "bg-intiki-green text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${isActive ? "text-intiki-green" : "text-gray-400"}`}>
                            {step.label}
                          </p>
                          <p className="text-xs text-gray-500">
                            {step.id === "picked-up" && "Collected from family doorstep"}
                            {step.id === "packed" && "Export-safe packaging done"}
                            {step.id === "export-cleared" && "Customs cleared in India"}
                            {step.id === "in-transit" && "International flight in progress"}
                            {step.id === "delivered" && "Delivered to recipient"}
                          </p>
                        </div>
                        {isActive && i === 3 && (
                          <Badge variant="orange" className="ml-auto text-[10px] shrink-0">
                            Live
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
