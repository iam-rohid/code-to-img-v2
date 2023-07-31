import { EditorTheme } from "./types";
import { tags as t } from "@lezer/highlight";
import { CreateThemeOptions } from "@uiw/codemirror-themes";

const settings: CreateThemeOptions["settings"] = {
  background: "#282a36",
  foreground: "#f8f8f2",
  caret: "#f8f8f0",
  selection: "rgba(255, 255, 255, 0.1)",
  selectionMatch: "rgba(255, 255, 255, 0.2)",
  gutterBackground: "#282a36",
  gutterForeground: "#6D8A88",
  gutterBorder: "transparent",
  lineHighlight: "rgba(255, 255, 255, 0.1)",
};

const styles: CreateThemeOptions["styles"] = [
  { tag: t.comment, color: "#6272a4" },
  { tag: t.string, color: "#f1fa8c" },
  { tag: t.atom, color: "#bd93f9" },
  { tag: t.meta, color: "#f8f8f2" },
  { tag: [t.keyword, t.operator, t.tagName], color: "#ff79c6" },
  { tag: [t.function(t.propertyName), t.propertyName], color: "#66d9ef" },
  {
    tag: [
      t.definition(t.variableName),
      t.function(t.variableName),
      t.className,
      t.attributeName,
    ],
    color: "#50fa7b",
  },
  { tag: t.atom, color: "#bd93f9" },
];

export const dracula: EditorTheme = {
  name: "Dracula",
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
