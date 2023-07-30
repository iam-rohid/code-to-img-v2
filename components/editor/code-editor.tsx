import CodeMirror, { BasicSetupOptions } from "@uiw/react-codemirror";
import { useEffect, useMemo, useState } from "react";
import { Extension } from "@codemirror/state";
import { color } from "@uiw/codemirror-extensions-color";
import { langs } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";

import { createTheme } from "@uiw/codemirror-themes";
import { themes } from "./themes";
import { useAtom, useAtomValue } from "jotai";
import { codeAtom, codeBlockThemeAtom, languageAtom } from "./atoms";

const baseExtensions = [EditorView.lineWrapping];

export default function CodeEditor({
  onEditorCreated,
}: {
  onEditorCreated?: (view: EditorView) => void;
}) {
  const themeKey = useAtomValue(codeBlockThemeAtom);
  const language = useAtomValue(languageAtom);
  const [code, setCode] = useAtom(codeAtom);

  const [extensions, setExtensions] = useState<Extension[]>();
  const [basicSetup] = useState<BasicSetupOptions>({
    foldGutter: false,
    foldKeymap: false,
    searchKeymap: false,
    highlightActiveLine: false,
    highlightActiveLineGutter: false,
    drawSelection: false,
    rectangularSelection: false,
    highlightSelectionMatches: false,
    allowMultipleSelections: false,
    bracketMatching: false,
    highlightSpecialChars: false,
    syntaxHighlighting: false,
    autocompletion: false,
  });

  const theme = useMemo(() => {
    const options = themes[themeKey]?.options;
    if (options) {
      return createTheme(options);
    }
    return undefined;
  }, [themeKey]);

  useEffect(() => {
    setExtensions([
      baseExtensions,
      color,
      langs[language as keyof typeof langs](),
    ]);
  }, [language]);

  return (
    <CodeMirror
      value={code}
      onChange={(value) => setCode(value)}
      extensions={extensions}
      theme={theme}
      basicSetup={basicSetup}
      onCreateEditor={onEditorCreated}
    />
  );
}
