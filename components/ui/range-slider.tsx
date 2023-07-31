import { cn } from "@/lib/utils";
import * as SliderPrimitives from "@radix-ui/react-slider";
import { forwardRef } from "react";

const Root = forwardRef<HTMLSpanElement, SliderPrimitives.SliderProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitives.Root
        className={cn(
          "relative flex items-center select-none touch-none h-6",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Root.displayName = "Root";

const Track = forwardRef<HTMLSpanElement, SliderPrimitives.SliderTrackProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitives.Track
        className={cn(
          "relative grow rounded-full h-1 bg-slate-200 dark:bg-zinc-800",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Track.displayName = "Track";

const Range = forwardRef<HTMLSpanElement, SliderPrimitives.SliderRangeProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitives.Range
        className={cn("absolute bg-indigo-500 rounded-full h-full", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Range.displayName = "Range";

const Thumb = forwardRef<HTMLSpanElement, SliderPrimitives.SliderThumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitives.Thumb
        className={cn(
          "w-4 h-4 rounded-full bg-indigo-500 block cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Thumb.displayName = "Thumb";

export const Slider = {
  Root,
  Track,
  Range,
  Thumb,
};
