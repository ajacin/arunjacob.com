'use client';

import { useState, useCallback, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { highlight } from 'sugar-high';
import MermaidDiagram from '@/components/mermaid-diagram';
import { useDecryptContent } from '@/components/use-decrypt-content';
import { salt, iv, ciphertext } from './encrypted-content';

const CACHE_KEY = 'learn-plaintext';

type CodeComponentProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

function CodeBlock({ inline, className, children, ...props }: CodeComponentProps) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  const codeString = String(children).replace(/\n$/, '');

  if (language === 'mermaid' && !inline) {
    return <MermaidDiagram chart={codeString} />;
  }

  if (inline) {
    const highlighted = highlight(codeString);
    return (
      <code
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className="font-mono text-[14px] px-1 py-0.5 rounded bg-gray-100 dark:bg-zinc-800"
        {...props}
      />
    );
  }

  const highlighted = highlight(codeString);
  return (
    <pre className="bg-[#16161e] rounded-lg overflow-x-auto p-4 my-6 leading-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <code
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className="font-mono text-[14px] leading-[1.5] bg-transparent p-0 border-none [&_span]:font-medium [&_.sh__token--identifier]:!text-white"
        {...props}
      />
    </pre>
  );
}

export default function LearnPage() {
  const { status, plaintext, error, decrypt, reset } = useDecryptContent(salt, iv, ciphertext);
  const [password, setPassword] = useState('');
  const [cachedPlaintext, setCachedPlaintext] = useState<string | null>(null);
  const [isCached, setIsCached] = useState(false);

  // Check sessionStorage cache on mount
  useEffect(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        setCachedPlaintext(cached);
        setIsCached(true);
      }
    } catch {
      // sessionStorage unavailable (private browsing, etc.)
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      decrypt(password);
    },
    [password, decrypt],
  );

  // Cache decrypted content in sessionStorage
  useEffect(() => {
    if (status === 'done' && plaintext) {
      try {
        sessionStorage.setItem(CACHE_KEY, plaintext);
      } catch {
        // sessionStorage full or unavailable
      }
    }
  }, [status, plaintext]);

  const handleLock = useCallback(() => {
    try {
      sessionStorage.removeItem(CACHE_KEY);
    } catch {
      // ignore
    }
    setCachedPlaintext(null);
    setIsCached(false);
    reset();
    setPassword('');
  }, [reset]);

  const displayContent = cachedPlaintext || plaintext;

  // Lock screen
  if ((status !== 'done' && !isCached) || !displayContent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-4">
          Front-End Interview Guide
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-8 text-center max-w-xs leading-[1.75]">
          This content is encrypted. Enter the password to unlock.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-[320px] space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            disabled={status === 'deriving' || status === 'decrypting'}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[#1A1A1A] dark:text-[#EBEBEA] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] disabled:opacity-50 text-[15px]"
          />

          {status === 'error' && (
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={!password || status === 'deriving' || status === 'decrypting'}
            className="w-full px-4 py-2.5 rounded-lg bg-[#1A1A1A] dark:bg-[#EBEBEA] text-white dark:text-[#1A1A1A] font-medium text-[15px] hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer"
          >
            {status === 'deriving' || status === 'decrypting'
              ? 'Unlocking...'
              : 'Unlock'}
          </button>
        </form>

        {status === 'deriving' && (
          <p className="text-xs text-[#9CA3AF] mt-3">
            Deriving encryption key (this takes ~1 second)...
          </p>
        )}
      </div>
    );
  }

  // Unlocked — render markdown content
  return (
    <div>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA]">
          Front-End Interview Guide
        </h1>
        <button
          onClick={handleLock}
          className="text-xs text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#EBEBEA] transition-colors cursor-pointer"
        >
          Lock
        </button>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="text-[26px] font-semibold text-[#1A1A1A] dark:text-[#EBEBEA] mt-10 mb-5" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-[20px] font-semibold text-[#1A1A1A] dark:text-[#EBEBEA] mt-10 mb-4" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-[17px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mt-8 mb-3" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="text-[15px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mt-6 mb-2" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="text-[#1A1A1A] dark:text-[#EBEBEA] leading-[1.75] mb-4" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="text-[#1A1A1A] dark:text-[#EBEBEA] list-disc pl-5 space-y-1 leading-[1.75]" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="text-[#1A1A1A] dark:text-[#EBEBEA] list-decimal pl-5 space-y-2 leading-[1.75]" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="pl-1" {...props}>
              {children}
            </li>
          ),
          a: ({ href, children, ...props }) => {
            const className =
              'text-[#2563EB] hover:text-[#1A1A1A] dark:text-[#60A5FA] dark:hover:text-[#EBEBEA] underline underline-offset-2 decoration-[#2563EB]/30 dark:decoration-[#60A5FA]/30 transition-colors';
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
              >
                {children}
              </a>
            );
          },
          blockquote: ({ children, ...props }) => (
            <blockquote className="ml-[0.075em] border-l-3 border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] pl-4 text-[#6B7280] dark:text-[#9CA3AF]" {...props}>
              {children}
            </blockquote>
          ),
          em: ({ children, ...props }) => (
            <em className="font-medium" {...props}>
              {children}
            </em>
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-medium" {...props}>
              {children}
            </strong>
          ),
          hr: () => <hr className="my-8 border-gray-200 dark:border-zinc-800" />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-gray-200 dark:border-zinc-700">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 font-medium text-[#1A1A1A] dark:text-[#EBEBEA]">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-[#1A1A1A] dark:text-[#EBEBEA] border-b border-gray-100 dark:border-zinc-800">{children}</td>
          ),
          code: CodeBlock,
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {displayContent}
      </ReactMarkdown>
    </div>
  );
}
