import { useAtom } from "jotai";
import { themes } from "./themes";
import {
  codeBlockBorderRadiusAtom,
  codeBlockPaddingAtom,
  languageAtom,
  codeBlockThemeAtom,
  showTitleBarAtom,
  canvasPaddingXAtom,
  canvasPaddingYAtom,
} from "./atoms";
import { langs } from "@uiw/codemirror-extensions-langs";

export default function SideBar() {
  const [canvasPaddingX, setCanvasPaddingX] = useAtom(canvasPaddingXAtom);
  const [canvasPaddingY, setCanvasPaddingY] = useAtom(canvasPaddingYAtom);
  const [codeBlockPadding, setCodeBlockPadding] = useAtom(codeBlockPaddingAtom);
  const [borderRadius, setBorderRadius] = useAtom(codeBlockBorderRadiusAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(codeBlockThemeAtom);
  const [showTitleBar, setShowTitleBar] = useAtom(showTitleBarAtom);

  return (
    <div className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0">
      <fieldset className="flex items-center justify-between">
        <label htmlFor="horizontal-padding">Padding X</label>
        <input
          type="range"
          id="horizontal-padding"
          value={canvasPaddingX}
          onChange={(e) => setCanvasPaddingX(Number(e.currentTarget.value))}
          min={32}
          max={200}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="vertical-padding">Padding Y</label>
        <input
          type="range"
          id="vertical-padding"
          value={canvasPaddingY}
          onChange={(e) => setCanvasPaddingY(Number(e.currentTarget.value))}
          min={32}
          max={200}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="vertical-padding">Inner Padding</label>
        <input
          type="range"
          id="vertical-padding"
          value={codeBlockPadding}
          onChange={(e) => setCodeBlockPadding(Number(e.currentTarget.value))}
          min={0}
          max={32}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="border-radius">Border Radius</label>
        <input
          type="range"
          id="border-radius"
          value={borderRadius}
          onChange={(e) => setBorderRadius(Number(e.currentTarget.value))}
          min={0}
          max={32}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="language">Language</label>
        <select
          value={language}
          id="language"
          onChange={(e) => setLanguage(e.currentTarget.value)}
          className="bg-transparent"
        >
          {Object.keys(langs)
            .sort()
            .map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="theme">Theme</label>
        <select
          value={theme}
          id="theme"
          onChange={(e) =>
            setTheme(e.currentTarget.value as keyof typeof themes)
          }
          className="bg-transparent"
        >
          {Object.keys(themes).map((option) => (
            <option key={option} value={option}>
              {themes[option as keyof typeof themes]?.name || "Custom"}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="show-titlebar">Show Title bar</label>
        <input
          type="checkbox"
          id="show-titlebar"
          checked={showTitleBar}
          onChange={(e) =>
            setShowTitleBar(e.currentTarget.checked ? true : false)
          }
        />
      </fieldset>
    </div>
  );
}
