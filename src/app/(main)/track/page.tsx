"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Home,
  Package,
  FileCheck,
  Plane,
  CheckCircle,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRACKING_STEPS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { LogoLoader } from "@/components/ui/logo-loader";

const iconMap = { Home, Package, FileCheck, Plane, CheckCircle };

const DEMO_TRACKING = {
  trackingNumber: "INTK20260315001",
  status: "IN_TRANSIT" as const,
  origin: { city: "Hyderabad", country: "India" },
  destination: { city: "New Jersey", country: "USA" },
  estimatedDelivery: "2026-03-20",
  videoUrl: "#",
  events: [
    { status: "PICKED_UP", location: "Hyderabad", description: "Courier picked up from family home", timestamp: "2026-03-10T10:00:00" },
    { status: "PACKED", location: "Hyderabad Hub", description: "Export packaging & quality check done", timestamp: "2026-03-11T14:30:00" },
    { status: "EXPORT_CLEARED", location: "Hyderabad Customs", description: "International customs clearance approved", timestamp: "2026-03-12T09:00:00" },
    { status: "IN_TRANSIT", location: "In Flight", description: "International courier in transit to USA", timestamp: "2026-03-13T06:00:00" },
  ],
};

function TrackContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || "";

  const [trackingId, setTrackingId] = useState(initialId);
  const [result, setResult] = useState<typeof DEMO_TRACKING | null>(() =>
    initialId.trim()
      ? { ...DEMO_TRACKING, trackingNumber: initialId.trim().toUpperCase() }
      : null
  );

  const doTrack = (id: string) => {
    if (id.trim()) {
      setResult({ ...DEMO_TRACKING, trackingNumber: id.trim().toUpperCase() });
    }
  };

  const currentStep = result
    ? (() => {
        const map: Record<string, number> = {
          PICKED_UP: 0,
          PACKED: 1,
          EXPORT_CLEARED: 2,
          IN_TRANSIT: 3,
          DELIVERED: 4,
        };
        return map[result.status] ?? 0;
      })()
    : -1;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <Badge variant="green" className="mb-2">International Courier</Badge>
        <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-1">
          Track Your Courier
        </h1>
        <p className="text-sm text-gray-500">
          Real-time international courier tracking — India to worldwide
        </p>
      </div>

      <div className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Enter courier tracking number (INTK...)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="pl-10"
            onKeyDown={(e) => e.key === "Enter" && doTrack(trackingId)}
          />
        </div>
        <Button variant="orange" className="font-bold" onClick={() => doTrack(trackingId)}>
          Track
        </Button>
      </div>

      {!result && (
        <div className="text-center py-12 bg-intiki-cream rounded-2xl">
          <Plane className="h-12 w-12 text-intiki-green/30 mx-auto mb-3" />
          <p className="text-gray-600 text-sm font-medium">
            Enter your international courier tracking number
          </p>
          <p className="text-xs text-gray-400 mt-2 mb-4">Try demo: INTK20260315001</p>
          <Button variant="outline" size="sm" onClick={() => doTrack("INTK20260315001")}>
            Track Demo Courier
          </Button>
        </div>
      )}

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <Card className="border-intiki-green/20 shadow-md">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500">Courier Tracking Number</p>
                  <p className="font-bold text-intiki-green text-lg">{result.trackingNumber}</p>
                </div>
                <Badge variant="orange">In Transit ✈️</Badge>
              </div>

              <div className="flex items-center justify-between text-sm mb-6 p-3 bg-intiki-cream rounded-xl">
                <div>
                  <p className="text-xs text-gray-400">From</p>
                  <p className="font-semibold">{result.origin.city}, {result.origin.country}</p>
                </div>
                <Plane className="h-6 w-6 text-intiki-orange" />
                <div className="text-right">
                  <p className="text-xs text-gray-400">To</p>
                  <p className="font-semibold">{result.destination.city}, {result.destination.country}</p>
                </div>
              </div>

              <div className="flex items-center justify-between relative mb-2">
                <div className="absolute top-5 left-0 right-0 h-1 bg-gray-100 rounded-full" />
                <div
                  className="absolute top-5 left-0 h-1 bg-intiki-green rounded-full transition-all"
                  style={{ width: `${(currentStep / (TRACKING_STEPS.length - 1)) * 100}%` }}
                />
                {TRACKING_STEPS.map((step, i) => {
                  const Icon = iconMap[step.icon as keyof typeof iconMap];
                  const isComplete = i <= currentStep;
                  return (
                    <div key={step.id} className="flex flex-col items-center relative z-10 flex-1">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full mb-1 ${
                          isComplete ? "bg-intiki-green text-white" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[9px] font-medium text-gray-500 text-center leading-tight">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {result.estimatedDelivery && (
                <p className="text-sm text-center text-gray-500 mt-4">
                  Estimated delivery:{" "}
                  <span className="font-semibold text-intiki-green">
                    {formatDate(result.estimatedDelivery)}
                  </span>
                </p>
              )}
            </CardContent>
          </Card>

          {result.videoUrl && (
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-intiki-green" />
                  <div>
                    <p className="text-sm font-semibold">Video Verification Available</p>
                    <p className="text-xs text-gray-500">See exactly what was packed before dispatch</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">Watch Video</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-4 text-intiki-green">Courier Timeline</h3>
              <div className="space-y-4">
                {result.events.map((event, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-intiki-green" />
                      {i < result.events.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-semibold">{event.description}</p>
                      <p className="text-xs text-gray-400">
                        {event.location} · {formatDate(event.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Link href="/send">
            <Button variant="orange" className="w-full font-bold">
              Send New International Courier
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<LogoLoader fullScreen={false} message="Loading tracking..." size="sm" />}>
      <TrackContent />
    </Suspense>
  );
}
