import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type Heading2Props = ComponentPropsWithoutRef<'h2'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-6"
      {...props}
    />
  ),
  h2: (props: Heading2Props) => (
    <h2
      className="text-[#1A1A1A] dark:text-[#EBEBEA] font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-[#1A1A1A] dark:text-[#EBEBEA] font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="text-[#1A1A1A] dark:text-[#EBEBEA] leading-[1.75] mb-4"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-[#1A1A1A] dark:text-[#EBEBEA] list-decimal pl-5 space-y-2 leading-[1.75]"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-[#1A1A1A] dark:text-[#EBEBEA] list-disc pl-5 space-y-1 leading-[1.75]"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'text-[#2563EB] hover:text-[#1A1A1A] dark:text-[#60A5FA] dark:hover:text-[#EBEBEA] underline underline-offset-2 decoration-[#2563EB]/30 dark:decoration-[#60A5FA]/30 transition-colors';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
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
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] pl-4 text-[#6B7280] dark:text-[#9CA3AF]"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
