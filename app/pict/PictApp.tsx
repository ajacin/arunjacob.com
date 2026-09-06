'use client';

import { useCallback, useEffect, useState } from 'react';
import { words } from '../pictionary/words';

function shuffleIndices(): number[] {
  const idx = words.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export default function PictApp() {
  const [ready, setReady] = useState(false);
  const [deck, setDeck] = useState<number[]>([]);
  const [pos, setPos] = useState(0);

  const draw = useCallback(() => {
    setPos((p) => Math.min(p + 1, deck.length));
  }, [deck.length]);

  const reset = useCallback(() => {
    setDeck(shuffleIndices());
    setPos(0);
  }, []);

  useEffect(() => {
    setDeck(shuffleIndices());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        draw();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ready, draw]);

  if (!ready) {
    return (
      <div className="py-20 text-center text-sm text-[#6B7280] dark:text-[#9CA3AF]">
        Loading words…
      </div>
    );
  }

  const total = deck.length;
  const drawn = Math.min(pos, total);
  const current = drawn > 0 ? words[deck[drawn - 1]] : null;
  const currentNo = drawn > 0 ? deck[drawn - 1] + 1 : null;
  const done = pos >= total;

  return (
    <div>
      <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-1">
        Pictionary Picker
      </h1>
      <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-6">
        Draw a random word for the whole list. Press the button, Space, or
        Enter.
      </p>

      <div className="flex items-center justify-between text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-3">
        <span>
          {done ? 'Deck complete' : `${total - drawn} words left`} · {total}{' '}
          total
        </span>
        {drawn > 0 && (
          <button
            type="button"
            onClick={reset}
            className="hover:underline cursor-pointer"
          >
            Start over
          </button>
        )}
      </div>

      <div className="rounded-2xl border border-[#E5E5E4] dark:border-[#2E2E2D] bg-white dark:bg-[#191918] px-6 py-12 flex flex-col items-center justify-center min-h-[300px] text-center shadow-sm mb-6">
        {current ? (
          <>
            {currentNo && (
              <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                Card #{currentNo}
              </span>
            )}
            <div className="text-4xl sm:text-5xl font-bold uppercase leading-tight text-[#1A1A1A] dark:text-[#EBEBEA] break-words">
              {current}
            </div>
          </>
        ) : (
          <span className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
            Draw a word to begin
          </span>
        )}
      </div>

      {done ? (
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-xl bg-[#1A1A1A] dark:bg-[#EBEBEA] px-4 py-3 text-sm font-semibold text-white dark:text-[#111110] hover:opacity-85 transition-opacity cursor-pointer"
        >
          All words shown · Reshuffle
        </button>
      ) : (
        <button
          type="button"
          onClick={draw}
          autoFocus
          className="w-full rounded-xl bg-[#2563EB] dark:bg-[#60A5FA] px-4 py-3 text-sm font-semibold text-white dark:text-[#111110] hover:opacity-90 transition-opacity cursor-pointer"
        >
          {current ? 'Next word →' : 'Draw a word'}
        </button>
      )}
    </div>
  );
}
