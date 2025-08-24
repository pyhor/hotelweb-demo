import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './styles.scss';

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="account-layout">
      <Navigation />
      <main className="account-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
