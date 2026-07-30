"use client";

import { useEffect, useState } from "react";
import { bootLines } from "@/data/site";

type Line = { prompt: string; output: string };

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [outputChars, setOutputChars] = useState<number>(0);
  const done = visibleLines >= bootLines.length;

  useEffect(() => {
    if (done) return;
    const current: Line = bootLines[visibleLines];
    if (outputChars <= current.output.length) {
      const t = setTimeout(() => setOutputChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setOutputChars(0);
    }, 380);
    return () => clearTimeout(t);
  }, [visibleLines, outputChars, done]);

  return (
    <div className="rounded-lg border border-border bg-surface/80 shadow-2xl shadow-black/40 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5 bg-surface-raised">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-text-muted text-xs">venkat@portfolio: ~</span>
      </div>
      <div className="p-5 min-h-[190px] flex flex-col gap-3">
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            <p className="text-cyan">
              <span className="text-text-muted">$</span> {line.prompt}
            </p>
            <p className="text-text pl-4">{line.output}</p>
          </div>
        ))}
        {visibleLines < bootLines.length && (
          <div>
            <p className="text-cyan">
              <span className="text-text-muted">$</span> {bootLines[visibleLines].prompt}
            </p>
            <p className="text-text pl-4">
              {bootLines[visibleLines].output.slice(0, outputChars)}
              <span className="inline-block w-2 h-4 bg-amber align-middle ml-0.5 animate-pulse" />
            </p>
          </div>
        )}
        {done && (
          <p className="text-text-muted">
            <span className="text-cyan">$</span>
            <span className="inline-block w-2 h-4 bg-amber align-middle ml-2 animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}
