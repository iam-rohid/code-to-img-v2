import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CodeEditor from "./code-editor";
import { themes } from "./themes";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  canvasWidthAtom,
  codeBlockThemeAtom,
  titleBarTitleAtom,
  codeBlockTitleBarAtom,
  editorAtom,
} from "./atoms";

export default function CodeBlock() {
  const editor = useAtomValue(editorAtom);
  const setWidth = useSetAtom(canvasWidthAtom);

  const [domLoaded, setDomLoaded] = useState(false);
  const [height, setHeight] = useState(0);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [oldWidth, setOldWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const widnowTheme = useMemo(
    () => themes[editor.codeBlock.theme].window,
    [editor.codeBlock.theme]
  );

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const onResize: ResizeObserverCallback = useCallback((event) => {
    setHeight(event[0].target.clientHeight);
  }, []);

  useEffect(() => {
    if (!domLoaded) {
      return;
    }
    const observer: ResizeObserver = new ResizeObserver(onResize);
    const el = canvasRef.current;
    if (el) {
      observer.observe(el);
    }
    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [domLoaded, onResize]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    document.documentElement.classList.remove(
      "select-none",
      "cursor-col-resize"
    );
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      const mouseX = event.clientX;
      const distance = (prevMouseX - mouseX) * 2;
      const newWidth = oldWidth + (isReversed ? -distance : +distance);
      setWidth(Math.min(1028, Math.max(512, newWidth)));
      setOldWidth(newWidth);
      setPrevMouseX(mouseX);
    },
    [isReversed, oldWidth, prevMouseX, setWidth]
  );

  useEffect(() => {
    if (!domLoaded) {
      return;
    }
    if (isDragging) {
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [domLoaded, isDragging, onMouseMove, onMouseUp]);

  if (!domLoaded) {
    return null;
  }

  return (
    <div className="mx-auto w-fit h-fit p-16">
      <div className="relative w-fit h-fit">
        <div
          ref={canvasRef}
          className="bg-gradient-to-br from-[#E28A9A] to-[#4858D0]"
          style={{
            width: `${editor.canvas.width}px`,
          }}
        >
          <div
            style={{
              paddingLeft: `${editor.canvas.paddingX}px`,
              paddingRight: `${editor.canvas.paddingX}px`,
              paddingTop: `${editor.canvas.paddingY}px`,
              paddingBottom: `${editor.canvas.paddingY}px`,
            }}
          >
            <div className="relative z-10">
              <div
                className="absolute inset-0 backdrop-blur-xl -z-10"
                style={{
                  backgroundColor: widnowTheme.background,
                  opacity: widnowTheme.backgroundOpacity,
                  borderRadius: `${editor.codeBlock.borderRadius}px`,
                  border: widnowTheme.borderColor
                    ? `1px solid ${widnowTheme.borderColor}`
                    : undefined,
                  boxShadow: "0px 24px 32px -8px rgba(0,0,0,0.5)",
                }}
              />
              {editor.codeBlock.titleBar.show && <TitleBar />}
              <div
                style={{
                  padding: `${editor.codeBlock.padding}px`,
                }}
              >
                <CodeEditor />
              </div>
            </div>
          </div>
        </div>

        <div
          onMouseDown={(event) => {
            setPrevMouseX(event.clientX);
            setIsDragging(true);
            setOldWidth(editor.canvas.width);
            setIsReversed(false);
            document.documentElement.classList.add(
              "select-none",
              "cursor-col-resize"
            );
          }}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-8 bg-white left-0 -translate-x-1/2 rounded-full z-10 cursor-col-resize"
        />
        <div
          onMouseDown={(event) => {
            setPrevMouseX(event.clientX);
            setIsDragging(true);
            setOldWidth(editor.canvas.width);
            setIsReversed(true);
            document.documentElement.classList.add(
              "select-none",
              "cursor-col-resize"
            );
          }}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-8 bg-white right-0 translate-x-1/2 rounded-full z-10 cursor-col-resize"
        />

        <div className="flex absolute -bottom-8 items-center justify-center left-0 right-0 z-10">
          <div className="absolute -z-10 h-px left-0 right-0 top-1/2 -translate-y-1/2 bg-slate-200 dark:bg-zinc-800" />
          <p className="absolute truncate top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-zinc-950 px-2 text-sm text-slate-600 dark:text-zinc-400">
            {editor.canvas.width}
          </p>
        </div>

        <div className="flex absolute -right-8 items-center justify-center top-0 bottom-0 z-10">
          <div className="absolute -z-10 w-px top-0 bottom-0 left-1/2 -translate-x-1/2 bg-slate-200 dark:bg-zinc-800" />
          <p className="bg-white truncate rotate-90 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 dark:bg-zinc-950 px-2 text-sm text-slate-600 dark:text-zinc-400">
            {height}
          </p>
        </div>
      </div>
    </div>
  );
}

const TitleBar = () => {
  const titleBar = useAtomValue(codeBlockTitleBarAtom);
  const [title, setTitle] = useAtom(titleBarTitleAtom);
  const themeKey = useAtomValue(codeBlockThemeAtom);
  const widnowTheme = useMemo(() => themes[themeKey].window, [themeKey]);

  return (
    <div
      className="grid grid-cols-[56px,1fr,56px] gap-4 px-4 items-center pt-2.5"
      style={{
        borderBottom: widnowTheme.titleBarBorderColor
          ? `1px solid ${widnowTheme.titleBarBorderColor}`
          : undefined,
        backgroundColor: widnowTheme.titleBarBackground,
        color: widnowTheme.titleBarForeground,
      }}
    >
      {titleBar.showTraficLights ? (
        <div className="flex items-center justify-between">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      ) : (
        <div></div>
      )}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        className="text-sm h-fit bg-transparent text-center outline-none"
      />
      <div></div>
    </div>
  );
};
