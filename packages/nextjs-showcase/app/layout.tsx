import type { Metadata } from 'next';
import Script from 'next/script';
import { ClientProviders } from '../components/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'Age Verification - FHEVM',
  description: 'Privacy-preserving age verification using FHEVM v0.9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Load FHEVM Relayer SDK (v0.3.0-5 for FHEVM v0.9) */}
        <Script
          src="https://cdn.zama.org/relayer-sdk-js/0.3.0-5/relayer-sdk-js.umd.cjs"
          strategy="beforeInteractive"
        />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

