import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Startvia | Start Your U.S. Company',
  description: 'English-first U.S. company formation landing page with WhatsApp onboarding.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
