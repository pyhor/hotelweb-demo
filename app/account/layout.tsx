import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../../styles/scss/style1.scss';

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
