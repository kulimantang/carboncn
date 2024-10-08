import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-inset focus-visible:ring-ring disabled:pointer-events-none  focus:ring-1 border focus:ring-offset-1 focus:ring-offset-focus focus:border-focus focus:ring-focus-inset",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary border-button-primary text-text-on-color hover:bg-button-primary-hover hover:border-button-primary-hover active:bg-button-primary-active",
        destructive:
          "bg-button-danger border-button-danger text-text-on-color hover:bg-button-danger-hover active:bg-button-danger-active hover:border-button-danger-hover",
        "danger--tertiary":
          "bg-background text-button-danger-secondary hover:text-text-on-color border-button-danger-secondary hover:bg-button-danger-hover active:bg-button-danger-active hover:border-button-danger-hover focus:hover:border-button-danger-hover focus:bg-button-danger focus:text-text-on-color",
        outline:
          "bg-transparent border-button-tertiary text-button-tertiary hover:bg-button-tertiary-hover hover:border-button-tertiary-hover active:bg-button-tertiary-active hover:text-text-inverse focus:text-text-inverse focus:bg-button-tertiary",
        secondary:
          "bg-button-secondary border-button-secondary text-text-on-color hover:bg-button-secondary-hover hover:border-button-secondary-hover active:bg-button-secondary-active",
        ghost:
          "bg-transparent border-transparent text-link-primary hover:text-link-primary-hover hover:bg-background-hover active:bg-background-active",
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
