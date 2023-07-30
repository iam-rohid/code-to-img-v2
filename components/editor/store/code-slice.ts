import { StateCreator } from "zustand";

export type CodeSlice = {
  code: string;
  setCode: (code: string) => void;
};
export const createCodeSlice: StateCreator<CodeSlice> = (set) => ({
  code: `import { useState } from "react"

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
}`,
  setCode: (code: string) => set({ code }),
});
