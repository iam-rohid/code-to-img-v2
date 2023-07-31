import { cn } from "@/lib/utils";
import * as LabelPrimitives from "@radix-ui/react-label";
import { forwardRef } from "react";

const Label = forwardRef<HTMLLabelElement, LabelPrimitives.LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitives.Root
        className={cn(
          "text-sm select-none font-medium text-slate-600 dark:text-zinc-300",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Label.displayName = "Root";

export default Label;
