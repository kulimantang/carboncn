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
      <div>
        {label && (
          <label
            className="mb-2 block text-xs text-text-secondary"
            htmlFor={id || label}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id || label}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground box-border flex h-10 w-full rounded-none border-b border-border-strong bg-field px-4 py-2 text-sm outline-focus file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  focus-visible:outline-offset-[-2px] focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
          data-use-preflight
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
