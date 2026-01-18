import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';


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
