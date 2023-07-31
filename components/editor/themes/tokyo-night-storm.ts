import { CreateThemeOptions } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { EditorTheme } from "./types";

const settings: CreateThemeOptions["settings"] = {
  background: "#24283b",
  foreground: "#7982a9",
  caret: "#c0caf5",
  selection: "#6f7bb630",
  selectionMatch: "#1f2335",
  gutterBackground: "#24283b",
  gutterForeground: "#7982a9",
  gutterBorder: "transparent",
  lineHighlight: "#292e42",
};

const styles: CreateThemeOptions["styles"] = [
  { tag: t.keyword, color: "#bb9af7" },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: "#c0caf5" },
  { tag: [t.propertyName], color: "#7aa2f7" },
  {
    tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
    color: "#9ece6a",
  },
  { tag: [t.function(t.variableName), t.labelName], color: "#7aa2f7" },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: "#bb9af7",
  },
  { tag: [t.definition(t.name), t.separator], color: "#c0caf5" },
  { tag: [t.className], color: "#c0caf5" },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: "#ff9e64",
  },
  { tag: [t.typeName], color: "#2ac3de", fontStyle: "#2ac3de" },
  { tag: [t.operator, t.operatorKeyword], color: "#bb9af7" },
  { tag: [t.url, t.escape, t.regexp, t.link], color: "#b4f9f8" },
  { tag: [t.meta, t.comment], color: "#565f89" },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.link, textDecoration: "underline" },
  { tag: t.heading, fontWeight: "bold", color: "#89ddff" },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: "#c0caf5" },
  { tag: t.invalid, color: "#ff5370" },
  { tag: t.strikethrough, textDecoration: "line-through" },
];

export const tokyoNightStorm: EditorTheme = {
  name: "Tokyo Night Storm",
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
