'use client';

import { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid once
let initialized = false;
function initMermaid() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'loose',
    themeVariables: {
      // Light theme defaults
      primaryColor: '#e3f2fd',
      primaryBorderColor: '#1565c0',
      secondaryColor: '#c8e6c9',
      tertiaryColor: '#fff9c4',
      lineColor: '#37474f',
      textColor: '#1a1a1a',
      fontSize: '14px',
    },
  });
  initialized = true;
}

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initMermaid();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    async function render() {
      try {
        // mermaid requires a unique ID for each diagram
        const mermaidId = `mermaid-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
        const { svg } = await mermaid.render(mermaidId, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : 'Failed to render diagram',
          );
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="my-4 p-4 border border-red-300 dark:border-red-700 rounded bg-red-50 dark:bg-red-950">
        <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-2">
          Diagram render error
        </p>
        <p className="text-xs text-red-500 dark:text-red-400 mb-2 font-mono">
          {error}
        </p>
        <pre className="text-xs text-red-500 dark:text-red-400 overflow-x-auto whitespace-pre-wrap">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto [&>svg]:max-w-full"
    />
  );
}
