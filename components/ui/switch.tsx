import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { forwardRef } from "react";

const Root = forwardRef<HTMLButtonElement, SwitchPrimitives.SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <SwitchPrimitives.Root
        className={cn(
          "w-10 h-6 bg-slate-100 transition-[background-color] dark:bg-zinc-800 data-[state=checked]:bg-indigo-500 relative rounded-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Root.displayName = "Switch";

const Thumb = forwardRef<HTMLSpanElement, SwitchPrimitives.SwitchThumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <SwitchPrimitives.Thumb
        className={cn(
          "w-4 h-4 rounded-full bg-white block absolute top-1/2 -translate-y-1/2 left-1 data-[state=checked]:left-5 transition-[background-color,left] data-[state=checked]:bg-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Thumb.displayName = "Thumb";

const Switch = {
  Root,
  Thumb,
};

export default Switch;
