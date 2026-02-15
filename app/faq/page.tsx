'use client';

import { useState } from 'react';

export default function FAQPage() {
  const faqs = [
    {
      q: 'Is it possible to check-in earlier?',
      a: 'It is sometimes possible to check in early however this is subject to availability. To ensure your room is ready upon arrival, we recommend you reserve the room one night in advance.',
    },
    {
      q: 'Do you have an onsite laundry service?',
      a: 'Yes, we do. Laundry services are chargeable by the article of clothing. Suites have in-room washing and drying facilities.',
    },
    {
      q: 'Is there a fitness centre?',
      a: 'Yes, we have a fitness centre available for all guests. Please refer to the hotel map or ask staff for directions.',
    },
    {
      q: 'Is it facilities free for guests?',
      a: 'Yes, all facilities are free for our The Haneul Grand guests. Booking prices include access to all facilities.',
    },
    {
      q: 'What types of credit cards can I use to guarantee my booking?',
      a: 'We accept Master Card, Visa, Union Pay, and others.',
    },
    {
      q: 'Do you have wheelchair-accessible rooms?',
      a: 'Yes, we have barrier-free rooms with wheelchair access in Superior Rooms. Please contact us directly for details.',
    },
    {
      q: 'Will the hotel hold my room if I\'m arriving late?',
      a: 'Since your reservation is guaranteed with a credit card, The Haneul Grand is obliged to hold your room until 7 am the day after your planned arrival date.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">FAQ</h1>
        <p className="text-xl font-light text-primary-100">Freqently Asked Questions</p>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-primary-100 bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between bg-primary-50 px-6 py-4 text-left font-serif text-lg font-medium text-primary-900 transition-colors hover:bg-primary-100 focus:outline-none"
              >
                {faq.q}
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIndex === index && (
                <div className="border-t border-primary-100 px-6 py-4 text-gray-700 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}