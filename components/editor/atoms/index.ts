import { atom } from "jotai";
import { themes } from "../themes";
import { focusAtom } from "jotai-optics";

const exampleCode = `import { useState } from "react"

const Component = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>
        Click Me
      </button>
    </div>
  )
}`;

export type ColorBackground = {
  type: "color";
  color: string;
};
export type GradientBackground = {
  type: "gradient";
  gradient: string;
};
export type ImageBackground = {
  type: "image";
  src: string;
};

export type CanvasBackground =
  | ColorBackground
  | GradientBackground
  | ImageBackground;

export type EditorState = {
  canvas: {
    width: number;
    paddingX: number;
    paddingY: number;
    background: CanvasBackground;
  };
  codeBlock: {
    padding: number;
    language: string;
    code: string;
    theme: keyof typeof themes;
    borderRadius: number;
    showLineNumbers: boolean;
    titleBar: {
      show: boolean;
      title: string;
      showTraficLights: boolean;
    };
  };
};

export const editorAtom = atom<EditorState>({
  canvas: {
    width: 720,
    paddingX: 64,
    paddingY: 64,
    background: {
      type: "color",
      color: "#4858D0",
    },
  },
  codeBlock: {
    padding: 8,
    language: "tsx",
    borderRadius: 12,
    code: exampleCode,
    theme: "aura",
    showLineNumbers: true,
    titleBar: {
      show: true,
      title: "Untitled",
      showTraficLights: true,
    },
  },
});

export const canvasAtom = focusAtom(editorAtom, (optic) =>
  optic.prop("canvas")
);
export const canvasWidthAtom = focusAtom(canvasAtom, (optic) =>
  optic.prop("width")
);
export const canvasPaddingXAtom = focusAtom(canvasAtom, (optic) =>
  optic.prop("paddingX")
);
export const canvasPaddingYAtom = focusAtom(canvasAtom, (optic) =>
  optic.prop("paddingY")
);
export const canvasBackgroundAtom = focusAtom(canvasAtom, (optic) =>
  optic.prop("background")
);
export const codeBlockAtom = focusAtom(editorAtom, (optic) =>
  optic.prop("codeBlock")
);
export const codeAtom = focusAtom(codeBlockAtom, (optic) => optic.prop("code"));
export const codeBlockBorderRadiusAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("borderRadius")
);
export const codeBlockTitleBarAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("titleBar")
);
export const showLineNumbersAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("showLineNumbers")
);
export const titleBarTitleAtom = focusAtom(codeBlockTitleBarAtom, (optic) =>
  optic.prop("title")
);
export const showTitleBarAtom = focusAtom(codeBlockTitleBarAtom, (optic) =>
  optic.prop("show")
);
export const showTraficLightsAtom = focusAtom(codeBlockTitleBarAtom, (optic) =>
  optic.prop("showTraficLights")
);
export const codeBlockThemeAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("theme")
);
export const languageAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("language")
);
export const codeBlockPaddingAtom = focusAtom(codeBlockAtom, (optic) =>
  optic.prop("padding")
);
