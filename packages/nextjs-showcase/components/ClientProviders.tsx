'use client';

import dynamic from 'next/dynamic';

const Providers = dynamic(
  () => import('./Providers').then((mod) => mod.Providers),
  { ssr: false } // Disable SSR for wallet providers
);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}

