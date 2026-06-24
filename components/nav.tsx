'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: Record<string, { name: string }> = {
  '/': { name: 'home' },
  '/work': { name: 'work' },
};

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4 mb-9">
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className={
              isActive
                ? 'text-[#1A1A1A] dark:text-[#EBEBEA] transition-colors'
                : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-[#EBEBEA] transition-colors'
            }
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
