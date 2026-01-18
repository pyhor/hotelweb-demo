'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    alert('Login functionality would go here.');
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-primary-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gold-DEFAULT py-3 font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-gold-dark hover:underline">
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
}