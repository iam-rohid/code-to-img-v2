import { useEffect, useMemo, useRef, useState } from "react";
import CodeEditor from "./code-editor";
import { useEditorStore } from "./store/editor-store";
import { themes } from "./themes";

export default function CodeBlock() {
  const {
    horizontalPadding,
    verticalPadding,
    width,
    theme,
    borderRadius,
    innerPadding,
    showTitleBar,
    title,
    setTitle,
    code,
  } = useEditorStore();
  const [height, setHeight] = useState(0);
  const currentTheme = useMemo(() => themes[theme], [theme]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const onResize: ResizeObserverCallback = (event) => {
    setHeight(event[0].target.clientHeight);
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="mx-auto w-fit h-fit p-16">
      <div className="relative w-fit h-fit">
        <div
          ref={canvasRef}
          className="bg-gradient-to-br from-[#E28A9A] to-[#4858D0]"
          style={{
            width: `${width}px`,
          }}
        >
          <div
            style={{
              paddingLeft: `${horizontalPadding}px`,
              paddingRight: `${horizontalPadding}px`,
              paddingTop: `${verticalPadding}px`,
              paddingBottom: `${verticalPadding}px`,
            }}
          >
            <div className="relative z-10">
              <div
                className="absolute inset-0 backdrop-blur-xl -z-10"
                style={{
                  backgroundColor: currentTheme.window.background,
                  opacity: currentTheme.window.backgroundOpacity,
                  borderRadius: `${borderRadius}px`,
                  border: currentTheme.window.borderColor
                    ? `1px solid ${currentTheme.window.borderColor}`
                    : undefined,
                  boxShadow: "0px 24px 32px -8px rgba(0,0,0,0.5)",
                }}
              />
              {showTitleBar && (
                <div
                  className="grid grid-cols-[56px,1fr,56px] gap-4 px-4 items-center pt-2.5"
                  style={{
                    borderBottom: currentTheme.window.titleBarBorderColor
                      ? `1px solid ${currentTheme.window.titleBarBorderColor}`
                      : undefined,
                    backgroundColor: currentTheme.window.titleBarBackground,
                    color: currentTheme.window.titleBarForeground,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    className="text-sm h-fit bg-transparent text-center outline-none"
                  />
                </div>
              )}
              <div
                style={{
                  padding: `${innerPadding}px`,
                }}
              >
                <CodeEditor />
              </div>
            </div>
          </div>
        </div>

        <div className="flex absolute -bottom-8 items-center justify-center left-0 right-0 z-10">
          <div className="absolute -z-10 h-px left-0 right-0 top-1/2 -translate-y-1/2 bg-slate-200 dark:bg-zinc-800" />
          <p className="absolute truncate top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-zinc-950 px-2 text-sm text-slate-600 dark:text-zinc-400">
            {width}
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
