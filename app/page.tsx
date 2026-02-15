'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg-1.png"
            alt="The Haneul Grand Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in font-serif text-5xl font-bold leading-tight md:text-7xl">
            Welcome to <span className="text-gold-DEFAULT">The Haneul Grand</span>
          </h1>
          <p className="mb-10 animate-slide-up text-lg font-light md:text-2xl">
            Experience luxury and comfort in the heart of South Korea
          </p>
          <Link
            href="/booking"
            className="inline-block animate-slide-up rounded-full bg-gold-DEFAULT border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold-DEFAULT/20"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <motion.div 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInDown}
              className="group rounded-2xl bg-primary-50 p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-light/20 text-gold-dark">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">Luxury Rooms</h2>
              <p className="text-gray-600">Elegant and comfortable accommodations designed for your ultimate relaxation.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInDown}
              className="group rounded-2xl bg-primary-50 p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-light/20 text-gold-dark">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">Fine Dining</h2>
              <p className="text-gray-600">Experience exquisite multinational cuisine prepared by our world-class chefs.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeInDown}
              className="group rounded-2xl bg-primary-50 p-8 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-light/20 text-gold-dark">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">Premium Facilities</h2>
              <p className="text-gray-600">Enjoy our state-of-the-art swimming pools, spa, and 24/7 fitness center.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}