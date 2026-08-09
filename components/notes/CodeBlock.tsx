"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

function formatLanguage(language: string) {
  const languages: Record<string, string> = {
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    jsx: "JSX",
    tsx: "TSX",
    html: "HTML",
    css: "CSS",
    json: "JSON",
    bash: "Bash",
    shell: "Shell",
    sh: "Shell",
    cpp: "C++",
    python: "Python",
    py: "Python",
    sql: "SQL",
    text: "Code",
  };

  return languages[language.toLowerCase()] ?? language;
}

export default function CodeBlock({
  code,
  language = "text",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  }

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
        {/* Language */}
        <span className="text-xs font-medium text-zinc-400">
          {formatLanguage(language)}
        </span>

        {/* Copy */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-5 text-sm leading-7">
        <code
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </pre>
    </div>
  );
}