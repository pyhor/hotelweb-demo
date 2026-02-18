import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold">
              <span className="text-gold-DEFAULT">The</span> Haneul Grand
            </div>
            <p className="text-primary-200">
              Experience the pinnacle of luxury and hospitality in South Korea's most vibrant cities.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons (Placeholders) */}
              <div className="h-10 w-10 rounded-full bg-primary-900/50 transition-colors hover:bg-gold-DEFAULT"></div>
              <div className="h-10 w-10 rounded-full bg-primary-900/50 transition-colors hover:bg-gold-DEFAULT"></div>
              <div className="h-10 w-10 rounded-full bg-primary-900/50 transition-colors hover:bg-gold-DEFAULT"></div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold-DEFAULT">Contact Us</h3>
            <div className="space-y-4 text-primary-200">
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-5 w-5 shrink-0 text-gold-DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+82 2-1234-5678</p>
              </div>
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-5 w-5 shrink-0 text-gold-DEFAULT" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>reservations@ojingeohotel.com</p>
              </div>
            </div>
          </div>

          {/* Secure Payment Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold-DEFAULT">Secure Payment</h3>
            <div className="flex items-center gap-4">
              <div className="h-8 w-12 rounded bg-white/10"></div>
              <div className="h-8 w-12 rounded bg-white/10"></div>
              <div className="h-8 w-12 rounded bg-white/10"></div>
            </div>
            <p className="text-sm text-primary-300">
              We ensure secure payment processing for all bookings.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-900 pt-8 text-center text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} The Haneul Grand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}