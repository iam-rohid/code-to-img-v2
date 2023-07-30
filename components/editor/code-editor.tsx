import { useEditorStore } from "./store/editor-store";
import CodeMirror, { BasicSetupOptions } from "@uiw/react-codemirror";
import { useEffect, useMemo, useState } from "react";
import { Extension } from "@codemirror/state";
import { color } from "@uiw/codemirror-extensions-color";
import { langs } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";

import { createTheme } from "@uiw/codemirror-themes";
import { themes } from "./themes";

const baseExtensions = [EditorView.lineWrapping];

export default function CodeEditor() {
  const { code, setCode, language, theme: themeId } = useEditorStore();
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
    const options = themes[themeId]?.options;
    if (options) {
      return createTheme(options);
    }
    return undefined;
  }, [themeId]);

  useEffect(() => {
    setExtensions([baseExtensions, color, langs[language]()]);
  }, [language]);

  return (
    <CodeMirror
      value={code}
      onChange={(value) => setCode(value)}
      extensions={extensions}
      theme={theme}
      basicSetup={basicSetup}
    />
  );
}
