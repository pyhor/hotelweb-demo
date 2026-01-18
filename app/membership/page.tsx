'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MembershipPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirm('Are you sure you want to become a member?')) {
      router.push('/membership/success'); // Updated to new path
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Membership</h1>
        <p className="text-xl font-light text-primary-100">Join our exclusive club for premium benefits</p>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Benefits */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl bg-primary-100 p-10 text-primary-900">
              <h2 className="mb-6 font-serif text-3xl font-bold text-gold-dark">Why Join Us?</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-gold-DEFAULT">✔</span> 10% Discount on Rooms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-DEFAULT">✔</span> 5% Discount on Facilities (Dining, etc.)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-DEFAULT">✔</span> Free Car Park
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-DEFAULT">✔</span> No Renewal Fees (Lifetime Membership)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-DEFAULT">✔</span> Priority Booking
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
              <h2 className="mb-6 font-serif text-2xl font-bold text-primary-900">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                    <input required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                      value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Last Name</label>
                    <input required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                      value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Phone</label>
                  <input required type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                  <select required className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="">Select Country</option>
                    <option value="south_korea">South Korea</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="usa">USA</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className="w-full rounded-lg bg-gold-DEFAULT py-3 font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg">
                  Apply for Membership
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}