import { ReactNode } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../../styles/scss/branches.scss';

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
