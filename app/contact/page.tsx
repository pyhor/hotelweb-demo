'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 30) {
      alert('Message must be at least 30 characters long.');
      return;
    }
    // Simulate submission
    console.log('Sending message:', formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Contact Us</h1>
        <p className="text-xl font-light text-primary-100">We&apos;re here to help you</p>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 rounded-2xl bg-primary-50 p-8 shadow-lg md:p-12">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-primary-900">Get in Touch</h2>
              <p className="mb-8 text-gray-700">
                Have a question about your reservation or our services?
                Reach out to our team directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-DEFAULT text-white">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">Address</h3>
                  <p className="text-gray-600">Hongdae, Seoul, South Korea 🇰🇷</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-DEFAULT text-white">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">Phone</h3>
                  <a href="tel:+8269696769" className="text-gray-600 hover:text-gold-dark">(+82) 6-969-6769</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-DEFAULT text-white">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">Email</h3>
                  <a href="mailto:info@ojingeohotel.com" className="text-gray-600 hover:text-gold-dark">info@ojingeohotel.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-primary-900">Message Sent!</h2>
                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ email: '', message: '' }); }}
                  className="mt-8 text-gold-dark hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="mb-2 font-serif text-3xl font-bold text-primary-900">Send a Message</h2>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    required
                    minLength={30}
                    rows={5}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    placeholder="How can we help you? (Min 30 chars)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <p className="mt-1 text-xs text-gray-400">Minimum 30 characters required.</p>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-gold-DEFAULT py-3 font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ email: '', message: '' })}
                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-50"
                  >
                    Clear
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}