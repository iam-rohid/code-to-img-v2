import { StateCreator } from "zustand";
import { themes } from "../themes";

export type ThemeSlice = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: Object.keys(themes)[0],
  setTheme: (theme: string) => set({ theme }),
});
