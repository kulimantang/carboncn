import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <>
        {label && (
          <label
            className="mb-2 block text-xs text-cds-text-secondary"
            htmlFor={id || label}
          >
            {label}
          </label>
        )}
        <textarea
          id={id || label}
          className={cn(
            "box-border flex min-h-[80px] w-full rounded-none border-b border-cds-border-strong bg-cds-field px-4 py-2 text-sm text-cds-text-primary outline-cds-focus file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-cds-text-placeholder focus-visible:outline-none focus-visible:outline-offset-[-2px] focus-visible:outline-cds-focus disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
