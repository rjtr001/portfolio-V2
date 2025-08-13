
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      asChild
      className="h-full w-full flex-1 bg-primary transition-all relative"
    >
      <motion.span
        className="h-full w-full block"
        initial={{ transform: "translateX(-100%)" }}
        animate={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        transition={{ 
          type: "spring", 
          stiffness: 50, 
          damping: 20,
          delay: 0.1
        }}
      >
        {/* Pulsing light effect */}
        <span 
          className="absolute top-0 right-0 h-full w-[10px] 
                   bg-white/30 animate-pulse-right rounded-full"
        />
      </motion.span>
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
