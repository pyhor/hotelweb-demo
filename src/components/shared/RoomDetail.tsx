'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RoomDetailProps {
  roomName: string;
  images: string[];
  sleeps: string;
  includes: string;
  price: string;
  memberPrice: string;
  amenities: {
    [category: string]: string[];
  };
}

export default function RoomDetail({ roomName, images, sleeps, includes, price, memberPrice, amenities }: RoomDetailProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col">
      {/* Component Level Navigation */}
      <nav className="bg-primary-100 py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
          <Link href="/rooms" className="text-sm font-medium text-primary-800 hover:text-gold-dark hover:underline">← Back to Rooms</Link>
          <span className="text-primary-300">|</span>
          <Link href="/rooms/mini-suite" className={`text-sm font-medium hover:text-gold-dark hover:underline ${roomName === 'Mini Suite' ? 'text-gold-dark font-bold' : 'text-primary-800'}`}>Mini Suite</Link>
          <Link href="/rooms/luxury-double-suite" className={`text-sm font-medium hover:text-gold-dark hover:underline ${roomName === 'Luxury Double Suite' ? 'text-gold-dark font-bold' : 'text-primary-800'}`}>Luxury Double Suite</Link>
          <Link href="/rooms/premium-suite" className={`text-sm font-medium hover:text-gold-dark hover:underline ${roomName === 'Premium Suite' ? 'text-gold-dark font-bold' : 'text-primary-800'}`}>Premium Suite</Link>
        </div>
      </nav>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-8 font-serif text-4xl font-bold text-primary-900 md:text-5xl">{roomName}</h1>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Slideshow */}
          <div className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src={`/images/${images[currentSlide]}`}
                alt={`${roomName} view ${currentSlide + 1}`}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-gold-DEFAULT"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-gold-DEFAULT"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${currentSlide === idx ? 'border-gold-DEFAULT opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <Image src={`/images/${img}`} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Pricing */}
          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-primary-100">
              <h3 className="mb-6 font-serif text-2xl font-bold text-primary-900">Room Details</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between border-b border-primary-100 pb-2">
                  <span className="font-medium">Sleeps</span>
                  <span>{sleeps}</span>
                </div>
                <div className="flex justify-between border-b border-primary-100 pb-2">
                  <span className="font-medium">Includes</span>
                  <span>{includes}</span>
                </div>
                <div className="flex justify-between border-b border-primary-100 pb-2">
                  <span className="font-medium">Price</span>
                  <span className="text-lg font-semibold">{price}</span>
                </div>
                <div className="flex justify-between border-b border-primary-100 pb-2">
                  <span className="font-medium text-gold-dark">Member Price</span>
                  <span className="text-lg font-bold text-gold-dark">{memberPrice}</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="block w-full rounded-lg bg-gold-DEFAULT py-4 text-center text-lg font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Amenities Preview (Collapsible or truncated could be added here, showing full list below) */}
          </div>
        </div>

        {/* Full Amenities */}
        <div className="mt-16">
          <h2 className="mb-8 border-b border-primary-200 pb-4 font-serif text-3xl font-bold text-primary-900">Amenities & Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(amenities).map(([category, items]) => (
              <div key={category} className="rounded-lg bg-primary-50 p-6">
                <h4 className="mb-4 font-serif text-lg font-bold text-gold-dark">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 text-gold-DEFAULT">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}