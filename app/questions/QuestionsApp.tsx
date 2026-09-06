'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { categories } from './data';

type Choice = 'a' | 'b';

interface Saved {
  a: string;
  b: string;
  answers: Record<number, Choice>;
}

const STORAGE_KEY = 'questions.v1';
const DEFAULT_SAVED: Saved = { a: 'Mom', b: 'Dad', answers: {} };

function readSaved(): Saved {
  if (typeof window === 'undefined') return DEFAULT_SAVED;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SAVED;
    const parsed = JSON.parse(raw) as Partial<Saved>;
    return {
      a:
        typeof parsed.a === 'string' && parsed.a.trim()
          ? parsed.a.trim()
          : DEFAULT_SAVED.a,
      b:
        typeof parsed.b === 'string' && parsed.b.trim()
          ? parsed.b.trim()
          : DEFAULT_SAVED.b,
      answers:
        parsed.answers && typeof parsed.answers === 'object'
          ? parsed.answers
          : {},
    };
  } catch {
    return DEFAULT_SAVED;
  }
}

interface Item {
  text: string;
  categoryIndex: number;
}

const FLAT: Item[] = categories.flatMap((cat) =>
  cat.questions.map((text) => ({
    text,
    categoryIndex: categories.indexOf(cat),
  }))
);

const clamp = (v: number) => Math.max(0, Math.min(FLAT.length - 1, v));

export default function QuestionsApp() {
  const [saved, setSaved] = useState<Saved | null>(null);
  const [idx, setIdx] = useState(0);
  const [panel, setPanel] = useState(false);
  const [editing, setEditing] = useState(false);
  const [aDraft, setADraft] = useState(DEFAULT_SAVED.a);
  const [bDraft, setBDraft] = useState(DEFAULT_SAVED.b);

  useEffect(() => {
    setSaved(readSaved());
  }, []);

  useEffect(() => {
    if (!saved) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {
      // storage unavailable; ignore
    }
  }, [saved]);

  useEffect(() => {
    if (editing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIdx((i) => clamp(i - 1));
      if (e.key === 'ArrowRight') setIdx((i) => clamp(i + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [editing]);

  const total = FLAT.length;
  const current = FLAT[idx];
  const cat = categories[current.categoryIndex];
  const realAnswered =
    saved && typeof saved.answers === 'object'
      ? Object.keys(saved.answers).filter(
          (k) => Number(k) >= 0 && Number(k) < total
        ).length
      : 0;
  const progress = saved ? Math.round((realAnswered / total) * 100) : 0;
  const choice: Choice | undefined =
    saved && idx in saved.answers ? saved.answers[idx] : undefined;

  const choose = useCallback(
    (c: Choice) => {
      setSaved((s) => {
        if (!s) return s;
        const answers = { ...s.answers, [idx]: c };
        return { ...s, answers };
      });
      if (idx < total - 1) setIdx((i) => clamp(i + 1));
    },
    [idx, total]
  );

  const saveNames = () => {
    setSaved((s) => {
      if (!s) return s;
      const a = aDraft.trim() || DEFAULT_SAVED.a;
      const b = bDraft.trim() || DEFAULT_SAVED.b;
      return { ...s, a, b };
    });
    setEditing(false);
  };

  const clearAll = () => {
    if (typeof window === 'undefined') return;
    if (!window.confirm('Clear all answers on this device?')) return;
    setSaved((s) => (s ? { ...s, answers: {} } : s));
  };

  if (!saved) {
    return (
      <div className="py-20 text-center text-sm text-[#6B7280] dark:text-[#9CA3AF]">
        Loading questions…
      </div>
    );
  }

  const nameFor = (c: Choice) => (c === 'a' ? saved.a : saved.b);

  return (
    <div>
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
            Question {idx + 1} of {total}
          </span>
          <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
            {realAnswered} answered · {progress}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-[#E5E7EB] dark:bg-[#262626] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#2563EB] dark:bg-[#60A5FA] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Category header */}
      <div className="mb-3 flex items-center gap-2 text-sm">
        <span aria-hidden>{cat.emoji}</span>
        <span className="text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wide text-xs font-medium">
          {cat.name}
        </span>
      </div>

      {/* Question */}
      <div className="rounded-2xl border border-[#E5E5E4] dark:border-[#2E2E2D] bg-white dark:bg-[#191918] p-6 shadow-sm mb-5">
        <h1 className="text-[20px] leading-snug text-[#1A1A1A] dark:text-[#EBEBEA]">
          {current.text}
        </h1>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {(['a', 'b'] as Choice[]).map((c) => {
          const selected = choice === c;
          const color =
            c === 'a'
              ? 'border-[#EC4899] bg-[#EC4899] text-white'
              : 'border-[#2563EB] bg-[#2563EB] text-white';
          const dim =
            c === 'a'
              ? 'border-[#F5C6DB] text-[#BE2E6D] hover:border-[#EC4899] dark:border-[#5b2440] dark:text-[#F9A8C4]'
              : 'border-[#BFD3FA] text-[#1D4ED8] hover:border-[#2563EB] dark:border-[#26395e] dark:text-[#93C5FD]';
          return (
            <button
              key={c}
              type="button"
              onClick={() => choose(c)}
              aria-pressed={selected}
              className={`rounded-xl border-2 px-3 py-5 text-center font-semibold transition-colors cursor-pointer ${
                selected ? color : dim
              }`}
            >
              <span className="block text-2xl mb-2">
                {selected ? '✓' : c.toUpperCase()}
              </span>
              {nameFor(c)}
            </button>
          );
        })}
      </div>

      {/* Nav controls */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          type="button"
          onClick={() => setIdx((i) => clamp(i - 1))}
          disabled={idx === 0}
          className="rounded-lg border border-[#E5E5E4] dark:border-[#2E2E2D] px-4 py-2 text-sm text-[#1A1A1A] dark:text-[#EBEBEA] disabled:opacity-40 hover:bg-[#F5F5F4] dark:hover:bg-[#262625] transition-colors cursor-pointer"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={() => setPanel(true)}
          className="rounded-lg bg-[#1A1A1A] dark:bg-[#EBEBEA] px-4 py-2 text-sm text-white dark:text-[#111110] hover:opacity-85 transition-opacity cursor-pointer"
        >
          All questions
        </button>

        <button
          type="button"
          onClick={() => setIdx((i) => clamp(i + 1))}
          disabled={idx === total - 1}
          className="rounded-lg border border-[#E5E5E4] dark:border-[#2E2E2D] px-4 py-2 text-sm text-[#1A1A1A] dark:text-[#EBEBEA] disabled:opacity-40 hover:bg-[#F5F5F4] dark:hover:bg-[#262625] transition-colors cursor-pointer"
        >
          Next →
        </button>
      </div>

      {/* Utility row */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
        {editing ? (
          <span className="inline-flex flex-wrap items-center gap-2">
            <input
              value={aDraft}
              onChange={(e) => setADraft(e.target.value)}
              aria-label="First name"
              className="w-24 rounded-md border border-[#E5E5E4] dark:border-[#2E2E2D] bg-white dark:bg-[#191918] px-2 py-1 text-[#1A1A1A] dark:text-[#EBEBEA]"
            />
            <input
              value={bDraft}
              onChange={(e) => setBDraft(e.target.value)}
              aria-label="Second name"
              className="w-24 rounded-md border border-[#E5E5E4] dark:border-[#2E2E2D] bg-white dark:bg-[#191918] px-2 py-1 text-[#1A1A1A] dark:text-[#EBEBEA]"
            />
            <button
              type="button"
              onClick={saveNames}
              className="text-[#2563EB] dark:text-[#60A5FA] hover:underline cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="hover:underline cursor-pointer"
            >
              Cancel
            </button>
          </span>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                setADraft(saved.a);
                setBDraft(saved.b);
                setEditing(true);
              }}
              className="hover:underline cursor-pointer"
            >
              {saved.a} vs {saved.b} · change
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="hover:underline cursor-pointer"
            >
              Clear answers
            </button>
          </>
        )}
      </div>

      {/* All-questions panel */}
      {panel && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={() => setPanel(false)}
        >
          <div
            className="w-full sm:max-w-[560px] max-h-[82vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#FAFAF9] dark:bg-[#171717] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-[#1A1A1A] dark:text-[#EBEBEA]">
                All questions
              </h2>
              <button
                type="button"
                onClick={() => setPanel(false)}
                aria-label="Close"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#EBEBEA] cursor-pointer text-xl leading-none"
              >
                ×
              </button>
            </div>

            {categories.map((cat, ci) => {
              const firstFlat = categories
                .slice(0, ci)
                .reduce((n, c) => n + c.questions.length, 0);
              const done = Array.from(
                { length: cat.questions.length },
                (_, i) => firstFlat + i
              ).filter((gi) => saved.answers[gi]).length;
              return (
                <div key={cat.name} className="mb-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-sm font-medium text-[#1A1A1A] dark:text-[#EBEBEA]">
                      <span className="mr-1.5">{cat.emoji}</span>
                      {cat.name}
                    </h3>
                    <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                      {done}/{cat.questions.length}
                    </span>
                  </div>
                  <ol className="space-y-1">
                    {cat.questions.map((q, qi) => {
                      const gi = firstFlat + qi;
                      const ans = saved.answers[gi];
                      return (
                        <li key={qi}>
                          <button
                            type="button"
                            onClick={() => {
                              setIdx(gi);
                              setPanel(false);
                            }}
                            className={`w-full text-left rounded-lg px-3 py-2 flex items-start gap-2 text-sm transition-colors cursor-pointer ${
                              gi === idx
                                ? 'bg-[#E0E7FF] dark:bg-[#1e2a4a] text-[#1A1A1A] dark:text-[#EBEBEA]'
                                : 'hover:bg-[#F0F0EE] dark:hover:bg-[#222221] text-[#1A1A1A] dark:text-[#EBEBEA]'
                            }`}
                          >
                            <span className="shrink-0 w-4 text-[#6B7280] dark:text-[#9CA3AF] text-xs mt-0.5">
                              {gi + 1}
                            </span>
                            <span className="flex-1 leading-snug">{q}</span>
                            {ans && (
                              <span
                                className={`shrink-0 mt-0.5 text-xs font-semibold ${
                                  ans === 'a'
                                    ? 'text-[#BE2E6D] dark:text-[#F9A8C4]'
                                    : 'text-[#1D4ED8] dark:text-[#93C5FD]'
                                }`}
                              >
                                {nameFor(ans)}
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
