import { EditorTheme } from "./types";
import { tags as t } from "@lezer/highlight";

export const baseTheme: EditorTheme = {
  id: "base-theme",
  name: "Base Theme",
  options: {
    theme: "dark",
    settings: {
      foreground: "#92CAF0",
      caret: "#FFFFFF",
      selection: "#FFFFFF20",
      selectionMatch: "#1E293B",
      gutterBackground: "transparent",
      gutterForeground: "#FFFFFF50",
      gutterBorder: "transparent",
    },
    styles: [
      { tag: t.typeName, color: "#6FCB91" },
      { tag: t.tagName, color: "#6FCB91" },
      { tag: t.variableName, color: "#8EC4E6" },
      { tag: t.bracket, color: "#DEDD1D" },
      { tag: t.keyword, color: "#CD7ABA" },
      { tag: t.string, color: "#CD896F" },
      { tag: t.comment, color: "#444870" },
    ],
  },
  window: {
    background: "#1A1B26",
    backgroundOpacity: 1,
    titleBarForeground: "#FFFFFF80",
    borderColor: "#363950",
  },
};
