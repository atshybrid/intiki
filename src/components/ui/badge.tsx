import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "orange" | "gold" | "green" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-intiki-navy/10 text-intiki-navy",
    orange: "bg-intiki-orange/10 text-intiki-orange",
    gold: "bg-intiki-gold/20 text-intiki-navy",
    green: "bg-intiki-green/10 text-intiki-green",
    outline: "border border-gray-200 text-gray-600",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
