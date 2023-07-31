import { EditorTheme } from "./types";
import { tags as t } from "@lezer/highlight";
import { CreateThemeOptions } from "@uiw/codemirror-themes";

const settingsLight: CreateThemeOptions["settings"] = {
  background: "#faf8f5",
  foreground: "#b29762",
  caret: "#93abdc",
  selection: "#e3dcce",
  selectionMatch: "#e3dcce",
  gutterBackground: "#faf8f5",
  gutterForeground: "#cdc4b1",
  gutterBorder: "transparent",
  lineHighlight: "#EFEFEF",
};

const stylesLight: CreateThemeOptions["styles"] = [
  { tag: [t.comment, t.bracket], color: "#b6ad9a" },
  {
    tag: [t.atom, t.number, t.keyword, t.link, t.attributeName, t.quote],
    color: "#063289",
  },
  {
    tag: [t.emphasis, t.heading, t.tagName, t.propertyName, t.variableName],
    color: "#2d2006",
  },
  { tag: [t.typeName, t.url, t.string], color: "#896724" },
  { tag: [t.operator, t.string], color: "#1659df" },
  { tag: [t.propertyName], color: "#b29762" },
  { tag: [t.unit, t.punctuation], color: "#063289" },
];

export const duotoneLight: EditorTheme = {
  name: "Duotone Light",
  options: {
    theme: "light",
    settings: settingsLight,
    styles: stylesLight,
  },
  window: {
    background: settingsLight.background,
    titleBarForeground: settingsLight.gutterForeground,
    borderColor: "#BCBCBC",
  },
};

const settingsDark: CreateThemeOptions["settings"] = {
  background: "#2a2734",
  foreground: "#6c6783",
  caret: "#ffad5c",
  selection: "rgba(255, 255, 255, 0.1)",
  gutterBackground: "#2a2734",
  gutterForeground: "#545167",
  lineHighlight: "#36334280",
};

const stylesDark: CreateThemeOptions["styles"] = [
  { tag: [t.comment, t.bracket], color: "#6c6783" },
  {
    tag: [t.atom, t.number, t.keyword, t.link, t.attributeName, t.quote],
    color: "#ffcc99",
  },
  {
    tag: [
      t.emphasis,
      t.heading,
      t.tagName,
      t.propertyName,
      t.className,
      t.variableName,
    ],
    color: "#eeebff",
  },
  { tag: [t.typeName, t.url], color: "#7a63ee" },
  { tag: t.operator, color: "#ffad5c" },
  { tag: t.string, color: "#ffb870" },
  { tag: [t.propertyName], color: "#9a86fd" },
  { tag: [t.unit, t.punctuation], color: "#e09142" },
];

export const duotoneDark: EditorTheme = {
  name: "Duotone Dark",
  options: {
    theme: "dark",
    settings: settingsDark,
    styles: stylesDark,
  },
  window: {
    background: settingsDark.background,
    titleBarForeground: settingsDark.gutterForeground,
    borderColor: "#363950",
  },
};
