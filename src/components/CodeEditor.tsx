import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  language: 'html' | 'css';
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, language }) => {
  return (
    <div className="h-full overflow-auto font-mono text-sm">
      <Editor
        value={code}
        onValueChange={onChange}
        highlight={(code) => highlight(code, language === 'html' ? languages.markup : languages.css, language)}
        padding={16}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          minHeight: '100%',
        }}
        className="min-h-full"
      />
    </div>
  );
};

export default CodeEditor;