'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BookingFormData {
  custName: string;
  custPhone: string;
  custEmail: string;
  roomType: string;
  roomPrice: number;
  quantity: number;
  branch: string;
  checkInDate: string;
  checkOutDate: string;
  stayingDays: number;
  meals: string[];
  isMember: boolean;
  paymentMethod: string;
  otherRequest: string;
  totalPrice: number;
}

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<BookingFormData>({
    custName: '',
    custPhone: '',
    custEmail: '',
    roomType: '',
    roomPrice: 0,
    quantity: 1,
    branch: '',
    checkInDate: '',
    checkOutDate: '',
    stayingDays: 0,
    meals: [],
    isMember: false,
    paymentMethod: '',
    otherRequest: '',
    totalPrice: 0
  });

  const roomPrices: Record<string, number> = {
    'mini': 400.00,
    'luxury': 800.00,
    'premium': 1200.00
  };

  const branches = [
    { value: 'seoul', label: 'Seoul' },
    { value: 'busan', label: 'Busan' },
    { value: 'gangnam', label: 'Gangnam' },
    { value: 'mapo-gu', label: 'Mapo-gu' },
    { value: 'incheon', label: 'Incheon' },
    { value: 'gwangju', label: 'Gwangju' }
  ];

  const mealOptions = [
    { value: 'breakfast', label: 'Breakfast', price: 20 },
    { value: 'lunch', label: 'Lunch', price: 30 },
    { value: 'dinner', label: 'Dinner', price: 40 }
  ];

  const calculateDays = (checkIn: string, checkOut: string): number => {
    if (!checkIn || !checkOut) return 0;
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const calculateTotal = (): number => {
    let total = formData.roomPrice * formData.stayingDays * formData.quantity;

    // Add meal costs (per person per day)
    formData.meals.forEach(meal => {
      const mealOption = mealOptions.find(option => option.value === meal);
      if (mealOption) {
        total += mealOption.price * formData.stayingDays * formData.quantity; // Assuming meals per person
      }
    });

    if (formData.isMember) {
      total *= 0.9;
    }

    return total > 0 ? total : 0;
  };

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoomChange = (roomType: string) => {
    const price = roomPrices[roomType] || 0;
    setFormData(prev => ({ ...prev, roomType, roomPrice: price }));
  };

  const handleMealChange = (meal: string, checked: boolean) => {
    const updatedMeals = checked
      ? [...formData.meals, meal]
      : formData.meals.filter(m => m !== meal);
    handleInputChange('meals', updatedMeals);
  };

  useEffect(() => {
    const days = calculateDays(formData.checkInDate, formData.checkOutDate);
    handleInputChange('stayingDays', days > 0 ? days : 0);
  }, [formData.checkInDate, formData.checkOutDate]);

  useEffect(() => {
    const total = calculateTotal();
    handleInputChange('totalPrice', total);
  }, [formData.roomPrice, formData.stayingDays, formData.meals, formData.isMember, formData.quantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.roomType || !formData.branch || !formData.checkInDate || !formData.checkOutDate) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Submitted:', formData);
    router.push('/booking/confirmation');
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Book Your Stay</h1>
        <p className="text-xl font-light text-primary-100">Reserve your luxury experience today</p>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/5 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal Info */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl font-bold text-primary-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-DEFAULT text-sm text-white">1</span>
                Personal Details
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.custName}
                    onChange={(e) => handleInputChange('custName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.custPhone}
                    onChange={(e) => handleInputChange('custPhone', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.custEmail}
                    onChange={(e) => handleInputChange('custEmail', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Stay Details */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl font-bold text-primary-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-DEFAULT text-sm text-white">2</span>
                Stay Details
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Branch</label>
                  <select
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.branch}
                    onChange={(e) => handleInputChange('branch', e.target.value)}
                  >
                    <option value="">Select Branch</option>
                    {branches.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Room Type</label>
                  <select
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.roomType}
                    onChange={(e) => handleRoomChange(e.target.value)}
                  >
                    <option value="">Select Room</option>
                    <option value="mini">Mini Suite (RM 400)</option>
                    <option value="luxury">Luxury Double Suite (RM 800)</option>
                    <option value="premium">Premium Suite (RM 1200)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Check In</label>
                  <input
                    type="date"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.checkInDate}
                    onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Check Out</label>
                  <input
                    type="date"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.checkOutDate}
                    onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Guests</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Duration (Days)</label>
                  <input
                    type="text"
                    disabled
                    className="w-full rounded-lg border-gray-200 bg-gray-50 shadow-sm"
                    value={formData.stayingDays}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">Add Meals (Per Person/Day)</label>
                <div className="flex gap-6">
                  {mealOptions.map(meal => (
                    <label key={meal.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gold-DEFAULT focus:ring-gold-DEFAULT"
                        checked={formData.meals.includes(meal.value)}
                        onChange={(e) => handleMealChange(meal.value, e.target.checked)}
                      />
                      <span className="text-sm text-gray-600">{meal.label} (+RM{meal.price})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Payment & Summary */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl font-bold text-primary-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-DEFAULT text-sm text-white">3</span>
                Payment
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col gap-4 rounded-lg bg-primary-50 p-6">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="member"
                      checked={formData.isMember}
                      onChange={() => handleInputChange('isMember', true)}
                      className="border-gray-300 text-gold-DEFAULT focus:ring-gold-DEFAULT"
                    />
                    <span className="font-medium text-primary-900">I am a Member (10% Discount)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="member"
                      checked={!formData.isMember}
                      onChange={() => handleInputChange('isMember', false)}
                      className="border-gray-300 text-gold-DEFAULT focus:ring-gold-DEFAULT"
                    />
                    <span className="text-gray-700">I am not a Member</span>
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Payment Method</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="payment"
                          value="bank"
                          required
                          checked={formData.paymentMethod === 'bank'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="border-gray-300 text-gold-DEFAULT focus:ring-gold-DEFAULT"
                        />
                        <span className="text-sm">Bank Transfer</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="payment"
                          value="counter"
                          required
                          checked={formData.paymentMethod === 'counter'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                          className="border-gray-300 text-gold-DEFAULT focus:ring-gold-DEFAULT"
                        />
                        <span className="text-sm">Counter Payment</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Special Requests</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-gold-DEFAULT focus:ring-gold-DEFAULT"
                      value={formData.otherRequest}
                      onChange={(e) => handleInputChange('otherRequest', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-between rounded-xl bg-primary-900 p-6 text-white md:flex-row">
                <div>
                  <p className="text-sm text-primary-200">Total Price</p>
                  <p className="text-3xl font-bold text-gold-DEFAULT">RM {formData.totalPrice.toFixed(2)}</p>
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-gold-DEFAULT px-8 py-3 font-bold text-white transition-all hover:bg-gold-dark hover:shadow-lg md:mt-0"
                >
                  Confirm Booking
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}