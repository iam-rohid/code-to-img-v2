import { create } from "zustand";
import { CodeSlice, createCodeSlice } from "./code-slice";
import { WindowSlice, createWindowSlice } from "./window-slice";
import { LanguageSlice, languageSlice } from "./language-slice";
import { ThemeSlice, createThemeSlice } from "./editor-theme-slice";

export const useEditorStore = create<
  CodeSlice & WindowSlice & LanguageSlice & ThemeSlice
>()((...a) => ({
  ...createCodeSlice(...a),
  ...createWindowSlice(...a),
  ...languageSlice(...a),
  ...createThemeSlice(...a),
}));
