import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-intiki-navy text-white hover:bg-intiki-navy/90 focus-visible:ring-intiki-navy",
        orange: "bg-intiki-orange text-white hover:bg-intiki-orange/90 focus-visible:ring-intiki-orange",
        gold: "bg-intiki-gold text-intiki-navy hover:bg-intiki-gold/90 focus-visible:ring-intiki-gold",
        green: "bg-intiki-green text-white hover:bg-intiki-green/90 focus-visible:ring-intiki-green",
        outline: "border-2 border-intiki-navy text-intiki-navy hover:bg-intiki-navy/5",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-intiki-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
