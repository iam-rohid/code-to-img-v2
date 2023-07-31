"use client";

import CodeBlock from "./code-block";
import SideBar from "./side-bar";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const iv = process.env.NEXT_PUBLIC_IV!;
const key = process.env.NEXT_PUBLIC_KEY!;

export default function Editor() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return (
      <div className="h-screen w-screen text-slate-950 dark:text-zinc-50 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 flex">
        <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0 overflow-y-auto flex flex-col" />
        <div className="flex-1 overflow-x-auto">
          <div className="mx-auto p-16 w-fit">
            <div className="w-[720px] h-[456px] bg-white dark:bg-zinc-900"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen text-slate-950 dark:text-zinc-50 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 flex">
      <SideBar />
      <div className="flex-1 overflow-x-auto">
        <CodeBlock />
      </div>
    </div>
  );
}
