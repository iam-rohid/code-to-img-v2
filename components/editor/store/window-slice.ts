import { StateCreator } from "zustand";

export type WindowSlice = {
  showTitleBar: boolean;
  width: number;
  horizontalPadding: number;
  verticalPadding: number;
  borderRadius: number;
  innerPadding: number;
  title: string;
  setTitle: (value: string) => void;
  setShowTitleBar: (value: boolean) => void;
  setInnerPadding: (innerPadding: number) => void;
  setHorizontalPadding: (horizontalPadding: number) => void;
  setVerticalPadding: (verticalPadding: number) => void;
  setWidth: (width: number) => void;
  setBorderRadius: (radius: number) => void;
};

export const createWindowSlice: StateCreator<WindowSlice> = (set) => ({
  showTitleBar: true,
  width: 720,
  horizontalPadding: 64,
  verticalPadding: 64,
  borderRadius: 12,
  innerPadding: 8,
  title: "Untitled",
  setTitle: (title) => set({ title }),
  setShowTitleBar: (showTitleBar: boolean) => set({ showTitleBar }),
  setInnerPadding: (innerPadding) => set({ innerPadding }),
  setHorizontalPadding: (horizontalPadding: number) =>
    set({ horizontalPadding }),
  setVerticalPadding: (verticalPadding: number) => set({ verticalPadding }),
  setWidth: (width: number) => set({ width }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),
});
