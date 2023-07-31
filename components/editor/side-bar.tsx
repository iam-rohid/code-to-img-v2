import { useAtom, useAtomValue } from "jotai";
import { themes } from "./themes";
import {
  borderRadiusAtom,
  windowPaddingAtom,
  languageAtom,
  themeAtom,
  showTitleBarAtom,
  paddingXAtom,
  paddingYAtom,
  showTraficLightsAtom,
  showLineNumbersAtom,
  canvasNodeAtom,
  titleAtom,
} from "./atoms";
import { langs } from "@uiw/codemirror-extensions-langs";
import Switch from "../ui/switch";
import { Slider } from "../ui/range-slider";
import Select from "../ui/select";
import Label from "../ui/label";
import Image from "next/image";
import { DownloadIcon, ImageIcon, LinkIcon } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { downloadHtmlElement } from "@/lib/utils";
import { exportScaleAtom } from "./atoms/export-settings";

export default function SideBar() {
  const [canvasPaddingX, setCanvasPaddingX] = useAtom(paddingXAtom);
  const [canvasPaddingY, setCanvasPaddingY] = useAtom(paddingYAtom);
  const [codeBlockPadding, setCodeBlockPadding] = useAtom(windowPaddingAtom);
  const [borderRadius, setBorderRadius] = useAtom(borderRadiusAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [showTitleBar, setShowTitleBar] = useAtom(showTitleBarAtom);
  const [showTraficLights, setShowTraficLights] = useAtom(showTraficLightsAtom);
  const [showLineNumbers, setShowLineNumbers] = useAtom(showLineNumbersAtom);
  const canvasNode = useAtomValue(canvasNodeAtom);
  const title = useAtomValue(titleAtom);
  const [exportScale, setExportScale] = useAtom(exportScaleAtom);

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0 overflow-y-auto flex flex-col">
      <header className="p-6 pb-0">
        <a href="/">
          <Image
            src="/logo.svg"
            alt="CodeToImg Logo"
            className="w-10 h-10 object-contain"
            width={512}
            height={512}
          />
        </a>
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
      <footer className="p-6 pt-0 space-y-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="h-10 rounded-md bg-indigo-500 hover:bg-indigo-600 transition-colors shadow-md text-white font-medium text-sm inline-flex items-center w-full px-4 justify-center">
              Export
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.DropdownMenuPortal>
            <DropdownMenu.DropdownMenuContent
              align="center"
              side="top"
              sideOffset={8}
              className="bg-white w-52 dark:bg-zinc-900 text-slate-900 dark:text-zinc-50 border border-slate-200 dark:border-zinc-800 shadow-xl rounded-lg p-1.5"
            >
              <DropdownMenu.DropdownMenuItem
                onClick={() => {
                  if (canvasNode) {
                    downloadHtmlElement(canvasNode, {
                      scale: exportScale,
                      format: ".png",
                      title,
                    });
                  }
                }}
                className="h-9 text-slate-600 dark:text-zinc-300 focus:text-slate-900 dark:focus:text-zinc-50 cursor-pointer flex items-center text-left px-3 gap-3 focus:bg-slate-100 dark:focus:bg-zinc-800 rounded-md focus:outline-none text-sm"
              >
                <DownloadIcon size={18} />
                Download as PNG
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem
                onClick={() => {
                  if (canvasNode) {
                    downloadHtmlElement(canvasNode, {
                      scale: exportScale,
                      format: ".jpeg",
                      title,
                    });
                  }
                }}
                className="h-9 text-slate-600 dark:text-zinc-300 focus:text-slate-900 dark:focus:text-zinc-50 cursor-pointer flex items-center text-left px-3 gap-3 focus:bg-slate-100 dark:focus:bg-zinc-800 rounded-md focus:outline-none text-sm"
              >
                <DownloadIcon size={18} />
                Download as JPEG
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem
                onClick={() => {
                  if (canvasNode) {
                    downloadHtmlElement(canvasNode, {
                      scale: exportScale,
                      format: ".svg",
                      title,
                    });
                  }
                }}
                className="h-9 text-slate-600 dark:text-zinc-300 focus:text-slate-900 dark:focus:text-zinc-50 cursor-pointer flex items-center text-left px-3 gap-3 focus:bg-slate-100 dark:focus:bg-zinc-800 rounded-md focus:outline-none text-sm"
              >
                <DownloadIcon size={18} />
                Download as SVG
              </DropdownMenu.DropdownMenuItem>
              {/* <DropdownMenu.DropdownMenuItem className="h-9 text-slate-600 dark:text-zinc-300 focus:text-slate-900 dark:focus:text-zinc-50 cursor-pointer flex items-center text-left px-3 gap-3 focus:bg-slate-100 dark:focus:bg-zinc-800 rounded-md focus:outline-none text-sm">
                <ImageIcon size={18} />
                Copy Image
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem className="h-9 text-slate-600 dark:text-zinc-300 focus:text-slate-900 dark:focus:text-zinc-50 cursor-pointer flex items-center text-left px-3 gap-3 focus:bg-slate-100 dark:focus:bg-zinc-800 rounded-md focus:outline-none text-sm">
                <LinkIcon size={18} />
                Copy Share Link
              </DropdownMenu.DropdownMenuItem> */}
            </DropdownMenu.DropdownMenuContent>
          </DropdownMenu.DropdownMenuPortal>
        </DropdownMenu.Root>
      </footer>
    </aside>
  );
}
