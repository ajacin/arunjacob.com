import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/nav';
import { FooterLinks } from '../components/footer-links';

export const metadata: Metadata = {
  metadataBase: new URL('https://arunjacob.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  title: {
    default: 'Arun Jacob',
    template: '%s | Arun Jacob',
  },
  description:
    'Senior frontend engineer open to new roles. Building GlassNudge and FedNews. Based in Woodstock, Ontario.',
  openGraph: {
    title: 'Arun Jacob',
    description:
      'Senior frontend engineer open to new roles. Building GlassNudge and FedNews. Based in Woodstock, Ontario.',
    url: 'https://arunjacob.com',
    siteName: 'Arun Jacob',
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: 'Arun Jacob',
    description:
      'Senior frontend engineer open to new roles. Building GlassNudge and FedNews. Based in Woodstock, Ontario.',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col justify-between pt-12 pb-16 px-6 bg-[#FAFAF9] dark:bg-[#111110] text-[#1A1A1A] dark:text-[#EBEBEA]">
          <main className="max-w-[560px] mx-auto w-full space-y-9">
            <Nav />
            {children}
          </main>
          <FooterLinks />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

