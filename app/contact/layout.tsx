import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './styles.scss';

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
