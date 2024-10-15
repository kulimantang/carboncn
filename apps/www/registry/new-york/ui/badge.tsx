import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-cds-tag-background-gray",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        red: "border-transparent bg-cds-tag-background-red text-cds-tag-color-red",
        magenta:
          "border-transparent bg-cds-tag-background-magenta text-cds-tag-color-magenta",
        purple:
          "border-transparent bg-cds-tag-background-purple text-cds-tag-color-purple",
        blue: "border-transparent bg-cds-tag-background-blue text-cds-tag-color-blue",
        cyan: "border-transparent bg-cds-tag-background-cyan text-cds-tag-color-cyan",
        teal: "border-transparent bg-cds-tag-background-teal text-cds-tag-color-teal",
        green:
          "border-transparent bg-cds-tag-background-green text-cds-tag-color-green",
        gray: "border-transparent bg-cds-tag-background-gray text-cds-tag-color-gray",
        "cool-gray":
          "border-transparent bg-cds-tag-background-cool-gray text-cds-tag-color-cool-gray",
        "warm-gray":
          "border-transparent bg-cds-tag-background-warm-gray text-cds-tag-color-warm-gray",
        "high-contrast":
          "border-transparent bg-cds-background-inverse text-cds-text-inverse",
      },
      size: {
        default: "px-2.5 py-0.5 h-6 text-xs",
        sm: "px-2 py-0.5 h-5 text-xs",
        lg: "px-3 py-1 h-7 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
