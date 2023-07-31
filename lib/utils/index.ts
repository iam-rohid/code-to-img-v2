import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./converter";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
