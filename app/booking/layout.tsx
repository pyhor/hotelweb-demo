import { ReactNode } from 'react';
import Navigation from '../../src/components/layout/Navigation';
import Footer from '../../src/components/layout/Footer';
import '../../styles/scss/booking.scss';

export default function BookingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="booking-layout">
      <Navigation />
      <main className="booking-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
