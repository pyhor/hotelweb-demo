import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';


export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="contact-layout">
      <Navigation />
      <main className="contact-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
