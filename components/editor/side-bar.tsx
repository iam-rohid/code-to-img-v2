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
  showTraficLightsAtom,
  showLineNumbersAtom,
} from "./atoms";
import { langs } from "@uiw/codemirror-extensions-langs";
import Switch from "../ui/switch";
import { Slider } from "../ui/range-slider";
import Select from "../ui/select";
import Label from "../ui/label";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

export default function SideBar() {
  const [canvasPaddingX, setCanvasPaddingX] = useAtom(canvasPaddingXAtom);
  const [canvasPaddingY, setCanvasPaddingY] = useAtom(canvasPaddingYAtom);
  const [codeBlockPadding, setCodeBlockPadding] = useAtom(codeBlockPaddingAtom);
  const [borderRadius, setBorderRadius] = useAtom(codeBlockBorderRadiusAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(codeBlockThemeAtom);
  const [showTitleBar, setShowTitleBar] = useAtom(showTitleBarAtom);
  const [showTraficLights, setShowTraficLights] = useAtom(showTraficLightsAtom);
  const [showLineNumbers, setShowLineNumbers] = useAtom(showLineNumbersAtom);

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0 overflow-y-auto flex flex-col">
      <header className="p-6 pb-0">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="CodeToImg Logo"
            className="w-10 h-10 object-contain"
            width={512}
            height={512}
          />
        </Link>
      </header>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <fieldset className="grid gap-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="horizontal-padding">Padding Horizontal</Label>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              {canvasPaddingX}px
            </p>
          </div>
          <Slider.Root
            id="horizontal-padding"
            value={[canvasPaddingX]}
            onValueChange={([value]) => setCanvasPaddingX(value)}
            min={32}
            max={200}
            step={1}
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </fieldset>

        <fieldset className="grid gap-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="vertical-padding">Padding Vertical</Label>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              {canvasPaddingY}px
            </p>
          </div>
          <Slider.Root
            value={[canvasPaddingY]}
            onValueChange={([value]) => setCanvasPaddingY(value)}
            min={32}
            max={200}
            step={1}
            id="vertical-padding"
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </fieldset>

        <fieldset className="grid gap-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="inner-padding">Inner Padding</Label>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              {codeBlockPadding}px
            </p>
          </div>
          <Slider.Root
            id="inner-padding"
            value={[codeBlockPadding]}
            onValueChange={([value]) => setCodeBlockPadding(value)}
            min={0}
            max={32}
            step={1}
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </fieldset>

        <fieldset className="grid gap-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="border-radius">Border Radius</Label>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              {borderRadius}px
            </p>
          </div>
          <Slider.Root
            id="inner-padding"
            value={[borderRadius]}
            onValueChange={([value]) => setBorderRadius(value)}
            min={0}
            max={32}
            step={1}
          >
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </fieldset>

        <fieldset className="grid gap-1">
          <Label htmlFor="language">Language</Label>
          <Select.Root
            value={language}
            onValueChange={(value) => setLanguage(value)}
          >
            <Select.Trigger id="language" className="w-full">
              <Select.Value placeholder="Select a language" />
              <Select.Icon />
            </Select.Trigger>
            <Select.Content>
              {Object.keys(langs)
                .sort()
                .map((option) => (
                  <Select.Item key={option} value={option}>
                    {option}
                  </Select.Item>
                ))}
            </Select.Content>
          </Select.Root>
        </fieldset>

        <fieldset className="grid gap-1">
          <Label htmlFor="theme">Theme</Label>
          <Select.Root
            value={theme}
            onValueChange={(value) => setTheme(value as keyof typeof themes)}
          >
            <Select.Trigger id="theme" className="w-full">
              <Select.Value placeholder="Select a theme" />
              <Select.Icon />
            </Select.Trigger>
            <Select.Content>
              {Object.keys(themes)
                .sort()
                .map((option) => (
                  <Select.Item key={option} value={option}>
                    {themes[option as keyof typeof themes]?.name || "Custom"}
                  </Select.Item>
                ))}
            </Select.Content>
          </Select.Root>
        </fieldset>

        <fieldset className="flex items-center justify-between gap-1">
          <Label htmlFor="show-titlebar">Title bar</Label>
          <Switch.Root
            id="show-titlebar"
            checked={showTitleBar}
            onCheckedChange={setShowTitleBar}
          >
            <Switch.Thumb />
          </Switch.Root>
        </fieldset>

        {showTitleBar && (
          <>
            <fieldset className="flex items-center justify-between gap-1">
              <Label htmlFor="show-trafic-lights">Trafic Lights</Label>
              <Switch.Root
                id="show-trafic-lights"
                checked={showTraficLights}
                onCheckedChange={setShowTraficLights}
              >
                <Switch.Thumb />
              </Switch.Root>
            </fieldset>
          </>
        )}
        <fieldset className="flex items-center justify-between gap-1">
          <Label htmlFor="show-line-numbers">Line Numbers</Label>
          <Switch.Root
            id="show-line-numbers"
            checked={showLineNumbers}
            onCheckedChange={setShowLineNumbers}
          >
            <Switch.Thumb />
          </Switch.Root>
        </fieldset>
      </div>
      <footer className="p-6 pt-0">
        <button className="h-10 rounded-md bg-indigo-500 text-white font-medium text-sm inline-flex items-center w-full px-4 justify-center">
          Export
        </button>
      </footer>
    </aside>
  );
}
