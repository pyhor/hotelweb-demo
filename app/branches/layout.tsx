import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './styles.scss';

export default function BranchesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="branches-layout">
      <Navigation />
      <main className="branches-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
