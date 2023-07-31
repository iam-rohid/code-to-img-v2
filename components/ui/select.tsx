import { forwardRef } from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react";

const Root = SelectPrimitives.Root;

Root.displayName = "Root";

const Trigger = forwardRef<
  HTMLButtonElement,
  SelectPrimitives.SelectTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitives.Trigger
      className={cn(
        "relative text-left truncate h-8 rounded-md items-center justify-between pl-3 pr-8 inline-flex text-sm leading-none gap-2 border border-slate-200 dark:border-zinc-800",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Trigger.displayName = "Trigger";

const Content = forwardRef<HTMLDivElement, SelectPrimitives.SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitives.Portal>
        <SelectPrimitives.Content
          className={cn(
            "bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-50 border border-slate-200 dark:border-zinc-800 rounded-lg shadow-xl",
            className
          )}
          ref={ref}
          {...props}
        >
          <SelectPrimitives.ScrollUpButton className="flex items-center justify-center h-8">
            <ChevronUp size={18} />
          </SelectPrimitives.ScrollUpButton>
          <SelectPrimitives.Viewport className="p-1">
            {children}
          </SelectPrimitives.Viewport>
          <SelectPrimitives.ScrollDownButton className="flex items-center justify-center h-8">
            <ChevronDown size={18} />
          </SelectPrimitives.ScrollDownButton>
        </SelectPrimitives.Content>
      </SelectPrimitives.Portal>
    );
  }
);

Content.displayName = "Content";

const Group = SelectPrimitives.Group;

const Item = forwardRef<HTMLDivElement, SelectPrimitives.SelectItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitives.Item
        className={cn(
          "relative text-sm leading-none outline-none focus:bg-slate-100 dark:focus:bg-zinc-800 cursor-pointer rounded-md flex items-center h-8 pr-3 pl-8 select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
        <SelectPrimitives.ItemIndicator className="absolute left-0 w-8 inline-flex items-center justify-center">
          <CheckIcon size={18} />
        </SelectPrimitives.ItemIndicator>
      </SelectPrimitives.Item>
    );
  }
);

Item.displayName = "Item";

const Label = forwardRef<HTMLDivElement, SelectPrimitives.SelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitives.Label
        className={cn("", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

const Separator = forwardRef<
  HTMLDivElement,
  SelectPrimitives.SelectSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitives.Separator
      className={cn("", className)}
      ref={ref}
      {...props}
    />
  );
});

Separator.displayName = "Separator";

const Value = forwardRef<HTMLSpanElement, SelectPrimitives.SelectValueProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitives.Value
        className={cn("flex-1 truncate", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Value.displayName = "Value";

const Icon = forwardRef<HTMLSpanElement, SelectPrimitives.SelectIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitives.Icon
        className={cn(
          "w-8 absolute right-0 inline-flex items-center justify-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {children || <ChevronDown size={18} />}
      </SelectPrimitives.Icon>
    );
  }
);

Icon.displayName = "Icon";

const Select = {
  Root,
  Trigger,
  Value,
  Icon,
  Content,
  Group,
  Item,
  Label,
  Separator,
};

export default Select;
