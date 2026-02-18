'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={`min-h-screen ${!isHome ? 'pt-20' : ''}`}>
      {children}
    </main>
  );
}
