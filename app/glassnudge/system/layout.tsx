import type { Metadata } from 'next';

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Arun Jacob" template — this is
  // a standalone, password-gated reference page, not a page of the site.
  title: { absolute: 'GlassNudge — System Design' },
  description: 'Password-protected system design reference for GlassNudge.',
  alternates: {
    canonical: '/glassnudge/system',
  },
  // The payload is encrypted client-side and the page is unlisted. There is
  // nothing useful for a crawler to index, so keep it out of search entirely.
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlassNudgeSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
