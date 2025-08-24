import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './styles.scss';

export default function RoomsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rooms-layout">
      <Navigation />
      <main className="rooms-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
