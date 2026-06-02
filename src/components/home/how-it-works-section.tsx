"use client";

import { motion } from "framer-motion";
import { Home, Package, FileCheck, Plane, CheckCircle, Search, Gift, ShoppingCart } from "lucide-react";

const sendSteps = [
  { icon: Home, label: "Pickup", desc: "From family doorstep" },
  { icon: Package, label: "Packaging", desc: "Export-safe packing" },
  { icon: FileCheck, label: "Customs", desc: "Documentation handled" },
  { icon: Plane, label: "Flight", desc: "International transit" },
  { icon: CheckCircle, label: "Delivery", desc: "To your loved ones" },
];

const buySteps = [
  { icon: Search, label: "Browse", desc: "Explore products" },
  { icon: Gift, label: "Sample Box", desc: "Try before bulk" },
  { icon: CheckCircle, label: "Confirm", desc: "Verify quality" },
  { icon: ShoppingCart, label: "Bulk Order", desc: "Order with confidence" },
  { icon: Plane, label: "Delivery", desc: "Worldwide shipping" },
];

function StepFlow({ steps, title }: { steps: typeof sendSteps; title: string }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-intiki-navy mb-4 text-center">{title}</h3>
      <div className="flex items-start justify-between relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 hidden sm:block" />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center relative z-10 flex-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-intiki-navy text-white mb-2">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-gray-900">{step.label}</span>
              <span className="text-[10px] text-gray-400 text-center mt-0.5 hidden sm:block">
                {step.desc}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-intiki-navy mb-2">
            How It Works
          </h2>
          <p className="text-gray-600">Simple, transparent, trustworthy</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <StepFlow steps={sendSteps} title="Send Package" />
          <StepFlow steps={buySteps} title="Buy Products" />
        </div>
      </div>
    </section>
  );
}
