import { CreateThemeOptions } from "@uiw/codemirror-themes";

export type EditorTheme = {
  id: string;
  name: string;
  options: CreateThemeOptions;
  window: {
    background: string;
    backgroundOpacity?: number;
    borderColor?: string;
    titleBarBackground?: string;
    titleBarBorderColor?: string;
    titleBarForeground?: string;
  };
};
