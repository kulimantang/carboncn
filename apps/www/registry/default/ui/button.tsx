import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center use-preflight whitespace-nowrap text-sm font-medium ring-inset focus:outline-none disabled:cursor-not-allowed border-transparent focus:ring-1 border focus:ring-offset-1 disabled:bg-cds-button-disabled disabled:text-cds-text-disabled disabled:border-cds-border-disabled focus:ring-offset-cds-focus focus:border-cds-focus focus:ring-cds-focus-inset",
  {
    variants: {
      variant: {
        default:
          "bg-cds-button-primary text-cds-text-on-color hover:bg-cds-button-primary-hover  active:bg-cds-button-primary-active",
        destructive:
          "bg-cds-button-danger  text-cds-text-on-color hover:bg-cds-button-danger-hover active:bg-cds-button-danger-active ",
        "danger--tertiary":
          "bg-cds-background focus:bg-cds-button-danger focus:text-cds-text-on-color text-cds-button-danger-secondary hover:text-cds-text-on-color border-cds-button-danger-secondary hover:bg-cds-button-danger-hover active:bg-cds-button-danger-active hover:border-cds-button-danger  focus:hover:border-cds-button-danger-hover",
        outline:
          "bg-transparent border-cds-button-tertiary text-cds-button-tertiary hover:bg-cds-button-tertiary-hover hover:border-cds-button-tertiary-hover active:bg-cds-button-tertiary-active hover:text-cds-text-inverse focus:text-cds-text-inverse focus:bg-cds-button-tertiary",
        secondary:
          "bg-cds-button-secondary border-cds-button-secondary text-cds-text-on-color hover:bg-cds-button-secondary-hover hover:border-cds-button-secondary-hover active:bg-cds-button-secondary-active",
        ghost:
          "bg-transparent border-transparent text-cds-link-primary hover:text-cds-link-primary-hover hover:bg-cds-hover active:bg-cds-background-active",
        link: "",
      },
      size: {
        default: "h-12 px-4 py-[14px] pl-[15px] pr-[63px]",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        data-use-preflight
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
