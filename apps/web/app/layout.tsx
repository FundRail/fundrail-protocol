import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FundRail',
  description: 'Stellar payment workflows for modern funding operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
