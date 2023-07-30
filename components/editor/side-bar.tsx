import { useEditorStore } from "./store/editor-store";
import { Languagekey, languageOptions } from "./store/language-slice";
import { themes } from "./themes";

export default function SideBar() {
  const {
    horizontalPadding,
    verticalPadding,
    setHorizontalPadding,
    setVerticalPadding,
    borderRadius,
    setBorderRadius,
    width,
    setWidth,
    language,
    setLanguage,
    theme,
    setTheme,
    innerPadding,
    setInnerPadding,
    showTitleBar,
    setShowTitleBar,
  } = useEditorStore();

  return (
    <div className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0">
      <fieldset className="flex items-center justify-between">
        <label htmlFor="width">Width</label>
        <input
          type="number"
          value={width}
          min={512}
          max={1048}
          onChange={(e) => setWidth(Number(e.currentTarget.value))}
          className="bg-transparent"
        />
      </fieldset>

      <fieldset className="flex items-center justify-between">
        <label htmlFor="horizontal-padding">Padding X</label>
        <input
          type="range"
          id="horizontal-padding"
          value={horizontalPadding}
          onChange={(e) => setHorizontalPadding(Number(e.currentTarget.value))}
          min={32}
          max={200}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="vertical-padding">Padding Y</label>
        <input
          type="range"
          id="vertical-padding"
          value={verticalPadding}
          onChange={(e) => setVerticalPadding(Number(e.currentTarget.value))}
          min={32}
          max={200}
        />
      </fieldset>
      <fieldset className="flex items-center justify-between">
        <label htmlFor="vertical-padding">Inner Padding</label>
        <input
          type="range"
          id="vertical-padding"
          value={innerPadding}
          onChange={(e) => setInnerPadding(Number(e.currentTarget.value))}
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
          onChange={(e) => setLanguage(e.currentTarget.value as Languagekey)}
          className="bg-transparent"
        >
          {languageOptions.map((option) => (
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
          onChange={(e) => setTheme(e.currentTarget.value)}
          className="bg-transparent"
        >
          {Object.keys(themes).map((option) => (
            <option key={option} value={option}>
              {themes[option]?.name || "Custom"}
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
