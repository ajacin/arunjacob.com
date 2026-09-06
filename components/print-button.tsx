'use client';

export function PrintButton({ label = 'Print / Save as PDF' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center justify-center rounded-md border border-[#2563EB] bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8] dark:bg-[#60A5FA] dark:text-[#111110] dark:hover:bg-[#93c5fd] cursor-pointer"
    >
      {label}
    </button>
  );
}
