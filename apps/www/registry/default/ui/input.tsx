import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <>
        {label && (
          <label
            className="text-cds-text-secondary mb-2 block text-xs"
            htmlFor={id || label}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id || label}
          className={cn(
            "placeholder:text-cds-text-placeholder text-cds-text-primary box-border flex h-10 w-full rounded-none border-b border-cds-border-strong bg-cds-field px-4 py-2 text-sm outline-cds-focus file:border-0 file:bg-transparent  file:text-sm file:font-medium focus-visible:outline-none focus-visible:outline-offset-[-2px] focus-visible:outline-cds-focus disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
