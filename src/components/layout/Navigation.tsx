'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-transform duration-500 ease-in-out ${
        !isHome || isScrolled 
          ? 'translate-y-0 border-b border-primary-200 bg-white/95 backdrop-blur-md shadow-md' 
          : '-translate-y-full border-transparent bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-hotel-head">
            <span className="text-gold-DEFAULT">O</span>jingeo Hotel
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            <li><Link href="/" className="nav-link font-sans text-sm font-medium hover:text-gold-DEFAULT">Home</Link></li>
            <li><Link href="/rooms" className="nav-link font-sans text-sm font-medium hover:text-gold-DEFAULT">Rooms</Link></li>
            <li><Link href="/facilities" className="nav-link font-sans text-sm font-medium hover:text-gold-DEFAULT">Facilities</Link></li>
            <li><Link href="/booking" className="nav-link font-sans text-sm font-medium hover:text-gold-DEFAULT">Booking</Link></li>

            <li className="group relative">
              <Link href="/branches" className="nav-link flex items-center gap-1 font-sans text-sm font-medium hover:text-gold-DEFAULT">
                Branches
                <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="invisible absolute right-0 top-full mt-2 w-64 translate-y-2 rounded-lg border border-primary-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <Link href="/seoul-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Seoul (서울) →</Link>
                <Link href="/busan-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Busan (부산) →</Link>
                <Link href="/gangnam-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Gangnam (강남) →</Link>
                <Link href="/mapo-gu-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Mapo-gu (마포구) →</Link>
                <Link href="/incheon-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Incheon (인천) →</Link>
                <Link href="/gwangju-branch" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50 hover:text-gold-dark">Gwangju (광주) →</Link>
              </div>
            </li>

            <li><Link href="/about-us" className="nav-link font-sans text-sm font-medium hover:text-gold-DEFAULT">About Us</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-gray-600 hover:bg-primary-50 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-primary-100 pb-4 lg:hidden">
            <ul className="flex flex-col gap-2 pt-4">
              <li><Link href="/" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/rooms" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50" onClick={() => setIsOpen(false)}>Rooms</Link></li>
              <li><Link href="/booking" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50" onClick={() => setIsOpen(false)}>Booking</Link></li>
              <li><Link href="/branches" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50" onClick={() => setIsOpen(false)}>Branches</Link></li>
              <li><Link href="/about-us" className="block rounded-md px-4 py-2 text-sm hover:bg-primary-50" onClick={() => setIsOpen(false)}>About Us</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}