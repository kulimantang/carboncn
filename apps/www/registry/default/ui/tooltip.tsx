"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "group z-50 py-3 px-4 flex items-center justify-center text-sm text-cds-text-inverse rounded-sm bg-cds-background-inverse shadow-md shadow-cds-shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative",
      className
    )}
    {...props}
  >
    <div
      className={cn(
        "absolute h-2 w-2 rotate-45 bg-cds-background-inverse",
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
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
