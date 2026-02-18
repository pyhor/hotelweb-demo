import { ReactNode } from 'react';
// import '../../styles/scss/booking.scss';

export default function BookingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="booking-layout">
      <main className="booking-main">
        {children}
      </main>
    </div>
  );
}
