import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interview Prep',
  description: 'Password-protected front-end interview preparation guide.',
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
