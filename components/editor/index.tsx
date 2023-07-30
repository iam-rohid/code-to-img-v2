"use client";

import CodeBlock from "./code-block";
import SideBar from "./side-bar";

export default function Editor() {
  return (
    <div className="h-screen w-screen text-slate-950 dark:text-zinc-50 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 flex">
      <SideBar />
      <div className="flex-1 overflow-x-auto">
        <CodeBlock />
      </div>
    </div>
  );
}
