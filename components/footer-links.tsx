'use client';

import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface LinkItem {
  name: string;
  url: string;
  copyValue: string;
}

const links: LinkItem[] = [
  { name: 'email', url: 'mailto:hello@arunjacob.com', copyValue: 'hello@arunjacob.com' },
  { name: 'github', url: 'https://github.com/ajacin', copyValue: 'https://github.com/ajacin' },
  { name: 'x', url: 'https://x.com/ajacin', copyValue: 'https://x.com/ajacin' },
  { name: 'linkedin', url: 'https://linkedin.com/in/ajacin', copyValue: 'www.linkedin.com/in/ajacin' },
];

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // Copy failed silently
      }
      document.body.removeChild(textarea);
    }
  }, [value]);

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy ${value} to clipboard`}
      className="inline-flex items-center justify-center ml-1 p-0.5 rounded transition-colors duration-200 text-[#9CA3AF] dark:text-[#6B7280] hover:text-[#2563EB] dark:hover:text-[#60A5FA] cursor-pointer"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

export function FooterLinks() {
  const pathname = usePathname();

  // /rpn is shared publicly and carries no personal contact details.
  if (pathname?.startsWith('/rpn')) return null;

  return (
    <footer className="max-w-[560px] mx-auto w-full mt-12 text-center print:hidden">
      <div className="flex justify-center space-x-3 text-sm">
        {links.map((link, i) => (
          <span key={link.name} className="flex items-center space-x-3">
            {i > 0 && <span className="text-[#6B7280] dark:text-[#9CA3AF]">·</span>}
            <span className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors duration-200"
              >
                {link.name}
              </a>
              <CopyButton value={link.copyValue} />
            </span>
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
        Site design inspired by{' '}
        <a
          href="https://leerob.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
        >
          leerob.com
        </a>{' '}
        · Built on{' '}
        <a
          href="https://github.com/leerob/next-mdx-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
        >
          next-mdx-blog
        </a>
      </p>
    </footer>
  );
}
