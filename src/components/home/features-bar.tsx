"use client";

import {
  Home,
  Package,
  ChefHat,
  Leaf,
  Truck,
  Headphones,
} from "lucide-react";
import { FEATURES_BAR } from "@/lib/constants";

const iconMap = {
  Home,
  Package,
  ChefHat,
  Leaf,
  Truck,
  Headphones,
};

export function FeaturesBar() {
  return (
    <section className="bg-intiki-green text-white py-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURES_BAR.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">{item.title}</p>
                  <p className="text-[10px] text-white/70">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
