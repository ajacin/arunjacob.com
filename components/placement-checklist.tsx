'use client';

import { useEffect, useState } from 'react';

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export interface ChecklistGroup {
  heading: string;
  items: ChecklistItem[];
}

const STORAGE_KEY = 'fanshawe-pn-placement-v1';

export function Checklist({ groups }: { groups: ChecklistGroup[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Restore after mount so the server-rendered markup stays stable.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // Storage unavailable (private mode, blocked cookies) — fall back to unchecked.
    }
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Persisting is a convenience; the checkbox still works without it.
      }
      return next;
    });
  }

  return (
    <div className="space-y-7">
      {groups.map((group) => (
        <div key={group.heading}>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#78716C] dark:text-[#A8A29E] pb-1.5 mb-1 border-b-2 border-[#1A1A1A] dark:border-[#EBEBEA]">
            {group.heading}
          </h3>
          {group.items.map((item) => (
            <label
              key={item.id}
              className="flex gap-2.5 items-start py-2 border-b border-[#E7E5E4] dark:border-[#292524] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={Boolean(checked[item.id])}
                onChange={() => toggle(item.id)}
                className="mt-[3px] w-[15px] h-[15px] shrink-0 accent-[#0F6153] dark:accent-[#5FC7B0] cursor-pointer"
              />
              <span
                className={`text-[13.5px] leading-relaxed ${
                  checked[item.id] ? 'text-[#A8A29E] dark:text-[#78716C] line-through' : ''
                }`}
              >
                <span className="font-medium">{item.label}</span>
                {item.note ? (
                  <span className="text-[#78716C] dark:text-[#A8A29E]"> — {item.note}</span>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
