import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors shadow-none",
  {
    variants: {
      status: {
        DRAFT: "border-transparent bg-zinc-100 text-zinc-600 hover:bg-zinc-200",
        SUBMITTED: "border-transparent bg-blue-50 text-blue-600 hover:bg-blue-100",
        "IN REVIEW": "border-transparent bg-purple-100 text-purple-700 hover:bg-purple-200",
        "WAITING CAB": "border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200",
        APPROVED: "border-transparent bg-green-100 text-green-700 hover:bg-green-200",
        SCHEDULED: "border-transparent bg-teal-100 text-teal-700 hover:bg-teal-200",
        "IN PROGRESS": "border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 animate-pulse",
        IMPLEMENTED: "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
        CLOSED: "border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
        REJECTED: "border-transparent bg-red-100 text-red-700 hover:bg-red-200 line-through decoration-red-700/50",
        CANCELLED: "border-transparent bg-red-50 text-red-500 hover:bg-red-100",
        "ON HOLD": "border-transparent bg-orange-100 text-orange-700 hover:bg-orange-200",
      },
    },
    defaultVariants: {
      status: "DRAFT",
    },
  }
)

export interface TicketStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: "DRAFT" | "SUBMITTED" | "IN REVIEW" | "WAITING CAB" | "APPROVED" | "SCHEDULED" | "IN PROGRESS" | "IMPLEMENTED" | "CLOSED" | "REJECTED" | "CANCELLED" | "ON HOLD";
}

export function TicketStatusBadge({ className, status, ...props }: TicketStatusBadgeProps) {
  return (
    <div className={cn(badgeVariants({ status }), className)} {...props}>
      {status}
    </div>
  )
}
