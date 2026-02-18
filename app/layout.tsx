import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'The Haneul Grand | Where Luxury Meets the Sky',
  description:
    'Discover refined luxury at The Haneul Grand, inspired by the Korean word "Haneul" (Ha-neul), meaning "sky." Rooted in South Korea, our five-star sanctuary harmonizes serene natural beauty, timeless elegance, and world-class comfort for an unforgettable stay.',
  icons: {
    icon: '/images/logo-1.png',
  },
}

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

import PageWrapper from '@/components/layout/PageWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-primary-50 text-gray-900 antialiased selection:bg-gold-DEFAULT selection:text-white">
        <Navigation />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
