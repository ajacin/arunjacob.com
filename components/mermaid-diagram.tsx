'use client';

import { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

// Mermaid holds its theme in module-global config, so every render re-applies
// the variables for the scheme in effect at that moment rather than relying on
// a one-time `initialize`.
const LIGHT_THEME_VARIABLES = {
  primaryColor: '#e3f2fd',
  primaryBorderColor: '#1565c0',
  secondaryColor: '#c8e6c9',
  tertiaryColor: '#fff9c4',
  lineColor: '#37474f',
  textColor: '#1a1a1a',
  fontSize: '14px',
};

// Matches the site's dark surface (#111110). Without this, node text renders
// near-black on a near-black page and the diagrams are unreadable.
const DARK_THEME_VARIABLES = {
  primaryColor: '#1e293b',
  primaryBorderColor: '#60a5fa',
  primaryTextColor: '#e5e7eb',
  secondaryColor: '#334155',
  tertiaryColor: '#3f3f46',
  lineColor: '#94a3b8',
  textColor: '#e5e7eb',
  mainBkg: '#1e293b',
  nodeBorder: '#60a5fa',
  clusterBkg: '#18181b',
  clusterBorder: '#3f3f46',
  titleColor: '#e5e7eb',
  edgeLabelBackground: '#18181b',
  // Sequence-diagram roles, which don't all inherit from the vars above.
  actorBkg: '#1e293b',
  actorBorder: '#60a5fa',
  actorTextColor: '#e5e7eb',
  actorLineColor: '#94a3b8',
  signalColor: '#94a3b8',
  signalTextColor: '#e5e7eb',
  labelBoxBkgColor: '#1e293b',
  labelBoxBorderColor: '#60a5fa',
  labelTextColor: '#e5e7eb',
  loopTextColor: '#e5e7eb',
  noteBkgColor: '#422006',
  noteBorderColor: '#a16207',
  noteTextColor: '#fef3c7',
  activationBkgColor: '#475569',
  activationBorderColor: '#60a5fa',
  fontSize: '14px',
};

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  // Bumped when the OS colour scheme flips, to re-run the render below.
  const [themeTick, setThemeTick] = useState(0);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setThemeTick((tick) => tick + 1);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    async function render() {
      // Read the scheme synchronously so the first render is already correct,
      // rather than painting light and correcting on a second pass.
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const actorLabel = isDark ? '#e5e7eb' : '#1a1a1a';

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose',
          themeVariables: isDark ? DARK_THEME_VARIABLES : LIGHT_THEME_VARIABLES,
          // Mermaid styles sequence-diagram actor labels as `text.actor > tspan`,
          // but the top/bottom actor *boxes* are `<text class="actor actor-box">`
          // with no tspan. Those fall through to `.actor { fill: <background> }`
          // and the label is painted in its own background colour. Its rule is
          // ID-scoped (#mermaid-xxx .actor), so only !important outranks it.
          themeCSS: `text.actor, text.actor > tspan { fill: ${actorLabel} !important; }`,
        });

        // Theme-suffixed id: re-rendering under the same id after a scheme
        // change reuses stale state, and mermaid requires a unique id anyway.
        const mermaidId = `mermaid-${id.replace(/[^a-zA-Z0-9]/g, '')}-${isDark ? 'dark' : 'light'}`;
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
  }, [chart, id, themeTick]);

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
