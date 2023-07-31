import { atom } from "jotai";

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

export const widthAtom = atom<number>(720);
export const paddingXAtom = atom<number>(64);
export const paddingYAtom = atom<number>(64);
export const backgroundAtom = atom({
  type: "color",
  color: "red",
} as CanvasBackground);
export const codeAtom = atom(exampleCode);
export const borderRadiusAtom = atom(12);
export const showLineNumbersAtom = atom(true);
export const titleAtom = atom<string>("");
export const showTitleBarAtom = atom(true);
export const showTraficLightsAtom = atom(true);
export const themeAtom = atom("aura");
export const languageAtom = atom("jsx");
export const windowPaddingAtom = atom(8);
export const canvasNodeAtom = atom<HTMLElement | null>(null);
