'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
    alert('Registration functionality would go here.');
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-primary-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gold-DEFAULT py-3 font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-gold-dark hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}