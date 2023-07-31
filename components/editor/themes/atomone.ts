import { EditorTheme } from "./types";
import { tags as t } from "@lezer/highlight";
import { CreateThemeOptions } from "@uiw/codemirror-themes";

const settings: CreateThemeOptions["settings"] = {
  background: "#272C35",
  foreground: "#9d9b97",
  caret: "#797977",
  selection: "#ffffff30",
  selectionMatch: "#2B323D",
  gutterBackground: "#272C35",
  gutterForeground: "#465063",
  gutterBorder: "transparent",
  lineHighlight: "#2B323D",
};

const styles: CreateThemeOptions["styles"] = [
  {
    tag: [
      t.function(t.variableName),
      t.function(t.propertyName),
      t.url,
      t.processingInstruction,
    ],
    color: "hsl(207, 82%, 66%)",
  },
  { tag: [t.tagName, t.heading], color: "#e06c75" },
  { tag: t.comment, color: "#54636D" },
  { tag: [t.propertyName], color: "hsl(220, 14%, 71%)" },
  { tag: [t.attributeName, t.number], color: "hsl( 29, 54%, 61%)" },
  { tag: t.className, color: "hsl( 39, 67%, 69%)" },
  { tag: t.keyword, color: "hsl(286, 60%, 67%)" },
  { tag: [t.string, t.regexp, t.special(t.propertyName)], color: "#98c379" },
];

export const atomone: EditorTheme = {
  name: "Atomone",
  options: {
    theme: "dark",
    settings,
    styles,
  },
  window: {
    background: settings.background,
    titleBarForeground: settings.gutterForeground,
    borderColor: "#363950",
  },
};
