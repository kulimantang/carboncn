"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 8, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "group z-50 min-w-[8rem] rounded-sm border bg-cds-layer shadow-md shadow-cds-shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "relative",
        className
      )}
      {...props}
    >
      {/* inidcator: */}
      <div
        className={cn(
          "absolute h-2 w-2 rotate-45 border bg-cds-layer",
          "group-data-[state=open]:animate-in group-data-[state=closed]:animate-out",
          "group-data-[side=top]:bottom-[-5px] group-data-[side=top]:border-l-0 group-data-[side=top]:border-t-0",
          "group-data-[side=bottom]:top-[-5px] group-data-[side=bottom]:border-b-0 group-data-[side=bottom]:border-r-0",
          "group-data-[side=left]:right-[-5px] group-data-[side=left]:border-l-0 group-data-[side=left]:border-t-0",
          "group-data-[side=right]:left-[-5px] group-data-[side=right]:border-b-0 group-data-[side=right]:border-r-0",
          "group-data-[side=top]:left-1/2 group-data-[side=top]:-translate-x-1/2",
          "group-data-[side=bottom]:left-1/2 group-data-[side=bottom]:-translate-x-1/2",
          "group-data-[side=left]:top-1/2 group-data-[side=left]:-translate-y-1/2",
          "group-data-[side=right]:top-1/2 group-data-[side=right]:-translate-y-1/2"
        )}
      />
      {props.children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
