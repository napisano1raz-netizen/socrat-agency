import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ООО СОКРАТ — AI Web Agency',
  description: 'Премиальные AI-сайты, интеграции CRM и платежей для B2B-компаний.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
