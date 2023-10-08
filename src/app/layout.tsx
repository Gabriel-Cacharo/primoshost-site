import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { AOSInit } from './aos';

const montSerrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PrimosHost',
  description: 'PrimosHost',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AOSInit />

      <body className={montSerrat.className}>{children}</body>
    </html>
  );
}
