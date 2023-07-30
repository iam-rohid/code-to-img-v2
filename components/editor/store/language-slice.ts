import { langs } from "@uiw/codemirror-extensions-langs";
import { StateCreator } from "zustand";

export type Languagekey = keyof typeof langs;
export const languageOptions = Object.keys(langs).sort() as Languagekey[];

export type LanguageSlice = {
  language: Languagekey;
  setLanguage: (language: Languagekey) => void;
};

export const languageSlice: StateCreator<LanguageSlice> = (set) => ({
  language: "tsx",
  setLanguage: (language) => set({ language }),
});
