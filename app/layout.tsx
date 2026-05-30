import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'ООО СОКРАТ — AI Web Agency',
  description: 'Премиальные AI-сайты, интеграции CRM и платежей для B2B-компаний.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="min-h-full bg-slate-950">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
