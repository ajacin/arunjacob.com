import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/nav';

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
    'Senior frontend engineer. Building GlassNudge. Based in Woodstock, Ontario.',
  openGraph: {
    title: 'Arun Jacob',
    description:
      'Senior frontend engineer. Building GlassNudge. Based in Woodstock, Ontario.',
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
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'email', url: 'mailto:hello@arunjacob.com' },
    { name: 'github', url: 'https://github.com/ajacin' },
    { name: 'x', url: 'https://x.com/ajacin' },
    { name: 'linkedin', url: 'https://linkedin.com/in/arunjacob' },
  ];

  return (
    <footer className="max-w-[560px] mx-auto w-full mt-12 text-center">
      <div className="flex justify-center space-x-3 text-sm">
        {links.map((link, i) => (
          <span key={link.name} className="flex items-center space-x-3">
            {i > 0 && <span className="text-[#6B7280] dark:text-[#9CA3AF]">·</span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors duration-200"
            >
              {link.name}
            </a>
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
