'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review:', formData);
    alert('Thank you for your review!');
    setFormData({ name: '', comment: '', rating: 5 });
  };

  const reviews = [
    { name: 'Angela', rating: 5, comment: 'I like The Haneul Grand so much! Good service. A lot of facilities. Will come again! 💖', avatar: '/images/c1.png' },
    { name: 'Daniel', rating: 4, comment: 'The hotel is clean. Bed was comfortable. Nice hotel. Love it!', avatar: '/images/c2.png' },
    { name: 'Amanda', rating: 3, comment: 'Service quite slow! The staff was not really friendly.', avatar: '/images/c3.png' },
    { name: 'John', rating: 2, comment: 'The pool was not in operation during our stay. Customer service quite slow!', avatar: '/images/c4.png' },
    { name: 'Ben', rating: 1, comment: 'Not as clean as I expected. Poor room service!', avatar: '/images/c5.png' },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Guest Reviews</h1>
        <p className="text-xl font-light text-primary-100">What our guests say about us</p>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="mb-6 font-serif text-2xl font-bold text-primary-900">Recent Feedback</h2>
            <div className="grid gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="flex gap-4 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary-100">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <h4 className="font-bold text-primary-900">{review.name}</h4>
                      <div className="flex text-gold-DEFAULT">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Stats & Form */}
          <div className="space-y-8">
            <div className="rounded-xl bg-primary-50 p-8 shadow-md">
              <h3 className="mb-6 font-serif text-xl font-bold text-primary-900">Overall Ratings</h3>
              <div className="space-y-4">
                {['Cleanliness', 'Staff', 'Service', 'Facilities', 'Location'].map(metric => (
                  <div key={metric}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{metric}</span>
                      <span className="font-bold text-gold-dark">4.8</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[96%] bg-gold-DEFAULT"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 font-serif text-xl font-bold text-primary-900">Leave a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Rating</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    className="w-full accent-gold-DEFAULT"
                    value={formData.rating}
                    onChange={e => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  />
                  <div className="text-right font-bold text-gold-dark">{formData.rating} Stars</div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Comment</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.comment}
                    onChange={e => setFormData({ ...formData, comment: e.target.value })}
                  />
                </div>
                <button type="submit" className="w-full rounded-md bg-gold-DEFAULT py-2 font-bold text-white hover:bg-gold-dark">Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}