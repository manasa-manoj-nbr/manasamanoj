import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border-2 px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pixel-shadow",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:scale-105",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:scale-105",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:scale-105",
        outline: "border-border bg-transparent text-foreground hover:bg-muted hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
