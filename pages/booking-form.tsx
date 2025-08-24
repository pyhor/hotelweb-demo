import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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

const BookingForm: React.FC = () => {
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

  const roomPrices = {
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

  // Calculate days between check-in and check-out
  const calculateDays = (checkIn: string, checkOut: string): number => {
    if (!checkIn || !checkOut) return 0;
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  // Calculate total price
  const calculateTotal = (): number => {
    let total = formData.roomPrice * formData.stayingDays;
    
    // Add meal costs
    formData.meals.forEach(meal => {
      const mealOption = mealOptions.find(option => option.value === meal);
      if (mealOption) {
        total += mealOption.price * formData.stayingDays * formData.quantity;
      }
    });

    // Apply member discount (10%)
    if (formData.isMember) {
      total *= 0.9;
    }

    return total;
  };

  // Update form data
  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle room selection
  const handleRoomChange = (roomType: string) => {
    const price = roomPrices[roomType as keyof typeof roomPrices] || 0;
    handleInputChange('roomType', roomType);
    handleInputChange('roomPrice', price);
  };

  // Handle meal selection
  const handleMealChange = (meal: string, checked: boolean) => {
    const updatedMeals = checked 
      ? [...formData.meals, meal]
      : formData.meals.filter(m => m !== meal);
    handleInputChange('meals', updatedMeals);
  };

  // Update staying days when dates change
  useEffect(() => {
    const days = calculateDays(formData.checkInDate, formData.checkOutDate);
    handleInputChange('stayingDays', days);
  }, [formData.checkInDate, formData.checkOutDate]);

  // Update total price when relevant fields change
  useEffect(() => {
    const total = calculateTotal();
    handleInputChange('totalPrice', total);
  }, [formData.roomPrice, formData.stayingDays, formData.meals, formData.isMember, formData.quantity]);

  // Form validation
  const validateForm = (): boolean => {
    if (!formData.custName || !formData.custPhone || !formData.custEmail) {
      alert('Please fill in all required personal information.');
      return false;
    }
    if (!formData.roomType || !formData.branch) {
      alert('Please select a room and branch.');
      return false;
    }
    if (!formData.checkInDate || !formData.checkOutDate) {
      alert('Please select check-in and check-out dates.');
      return false;
    }
    if (formData.stayingDays <= 0) {
      alert('Check-out date must be after check-in date.');
      return false;
    }
    if (!formData.paymentMethod) {
      alert('Please select a payment method.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Booking form submitted:', formData);
      alert('Booking submitted successfully!');
      // Redirect to confirmation page
      // router.push('/booking-received');
    }
  };

  const handleReset = () => {
    setFormData({
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
  };

  return (
    <>
      <Head>
        <title>Ojingeo Hotel - Booking Form</title>
        <meta name="keywords" content="hotel, rooms, event, Korea, Seoul, Hongdae, Busan, Gangnam, Mapo-gu, Incheon, Gwangju, travel" />
        <link href="/images/layout/ojingeohotel_logo.jpeg" rel="shortcut icon" type="image/x-icon" />
      </Head>

      <div className="booking-form-container">
        <header>
          <nav className="navlist">
            <a href="#" id="navicon">
              <img src="/images/layout/navicon.png" alt="navicon" />
            </a>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/rooms">Rooms</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/booking">Booking</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li className="dropdown">
                <span><Link href="/branches">Branches &#x25BC;</Link></span>
                <div className="dropdown-list">
                  <Link href="/seoul-branch">Seoul 서울 &#10146;</Link>
                  <Link href="/busan-branch">Busan 부산 &#10146;</Link>
                  <Link href="/gangnam-branch">Gangnam 강남 &#10146;</Link>
                  <Link href="/mapo-gu-branch">Mapo-gu 마포구 &#10146;</Link>
                  <Link href="/incheon-branch">Incheon 인천 &#10146;</Link>
                  <Link href="/gwangju-branch">Gwangju 광주 &#10146;</Link>
                </div>
              </li>
              <li><Link href="/policy">Policy</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
            </ul>
          </nav>
        </header>

        <h1 id="pagename">Booking Form</h1>
        <div>
          <h1 style={{ paddingLeft: '30px' }}>BOOKING ROOM FORM</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit} style={{ paddingLeft: '30px' }}>
            <div>
              <label htmlFor="nameBox">Name:</label>
              <input
                type="text"
                id="nameBox"
                placeholder="First and Last Name"
                value={formData.custName}
                onChange={(e) => handleInputChange('custName', e.target.value)}
                required
              />
            </div><br />

            <div>
              <label htmlFor="phoneBox">Phone No:</label>
              <input
                type="tel"
                id="phoneBox"
                placeholder="(xxx) xxx-xxxx"
                pattern="^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$"
                value={formData.custPhone}
                onChange={(e) => handleInputChange('custPhone', e.target.value)}
                required
              />
            </div><br />

            <div>
              <label htmlFor="emailBox">Email:</label>
              <input
                type="email"
                id="emailBox"
                placeholder="ex:name@example.com"
                value={formData.custEmail}
                onChange={(e) => handleInputChange('custEmail', e.target.value)}
                required
              />
            </div><br />

            <div>
              <label htmlFor="roomBox">Room:</label>
              <select
                id="roomBox"
                value={formData.roomType}
                onChange={(e) => handleRoomChange(e.target.value)}
                required
              >
                <option value="">Select a room</option>
                <option value="mini">Mini Room</option>
                <option value="luxury">Luxury Room</option>
                <option value="premium">Premium Room</option>
              </select>
            </div><br />

            <div>
              <label htmlFor="priceBox1">Room Price (RM):</label>
              <input
                type="text"
                id="priceBox1"
                className="numbers"
                value={formData.roomPrice.toFixed(2)}
                disabled
              />
            </div><br />

            <div>
              <label htmlFor="quantity">Number of Guests:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
                required
              />
            </div><br />

            <div>
              <label htmlFor="branchBox">Branch:</label>
              <select
                id="branchBox"
                value={formData.branch}
                onChange={(e) => handleInputChange('branch', e.target.value)}
                required
              >
                <option value="">Select a branch</option>
                {branches.map(branch => (
                  <option key={branch.value} value={branch.value}>
                    {branch.label}
                  </option>
                ))}
              </select>
            </div><br />

            <div>
              <label htmlFor="checkInBox">Check In Date:</label>
              <input
                type="date"
                id="checkInBox"
                value={formData.checkInDate}
                onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                disabled={!formData.roomType}
              />
            </div><br />

            <div>
              <label htmlFor="checkOutBox">Check Out Date:</label>
              <input
                type="date"
                id="checkOutBox"
                value={formData.checkOutDate}
                onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                disabled={!formData.roomType}
              />
            </div><br />

            <div>
              <label htmlFor="durationBox1">Duration of Stay (Days):</label>
              <input
                type="text"
                id="durationBox1"
                value={formData.stayingDays}
                disabled
              />
            </div><br />

            <div>
              <label>Select Meals:</label>
              {mealOptions.map(meal => (
                <React.Fragment key={meal.value}>
                  <input
                    type="checkbox"
                    id={`food-${meal.value}`}
                    checked={formData.meals.includes(meal.value)}
                    onChange={(e) => handleMealChange(meal.value, e.target.checked)}
                    disabled={!formData.roomType}
                  />
                  <label htmlFor={`food-${meal.value}`}>{meal.label}</label>
                </React.Fragment>
              ))}
            </div><br />

            <div>
              <label>Membership:</label>
              <input
                type="radio"
                id="Ymember"
                name="member"
                checked={formData.isMember === true}
                onChange={() => handleInputChange('isMember', true)}
                disabled={!formData.roomType}
                required
              />
              <label htmlFor="Ymember">Yes, I am a member.</label>
              <input
                type="radio"
                id="Nmember"
                name="member"
                checked={formData.isMember === false}
                onChange={() => handleInputChange('isMember', false)}
                disabled={!formData.roomType}
                required
              />
              <label htmlFor="Nmember">No, I am not a member.</label>
            </div><br />

            <div>
              <em>*Note: Members are to show their membership card at the front desk upon arrival to confirm payment</em>
            </div><br />

            <div>
              <label htmlFor="totalPriceBox">Total (RM):</label>
              <input
                type="text"
                id="totalPriceBox"
                className="numbers"
                value={formData.totalPrice.toFixed(2)}
                disabled
              />
            </div><br />

            <div>
              <label>Choose a payment:</label>
              <input
                type="radio"
                id="Bpayment"
                name="payment"
                value="bank"
                checked={formData.paymentMethod === 'bank'}
                onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                required
              />
              <label htmlFor="Bpayment">Bank payment</label>
              <input
                type="radio"
                id="Cpayment"
                name="payment"
                value="counter"
                checked={formData.paymentMethod === 'counter'}
                onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                required
              />
              <label htmlFor="Cpayment">Counter payment</label>
            </div><br />

            <div>
              <p>
                Other request:{' '}
                <input
                  type="text"
                  value={formData.otherRequest}
                  onChange={(e) => handleInputChange('otherRequest', e.target.value)}
                />
              </p>
            </div>

            <input
              type="submit"
              value="Submit"
              style={{ margin: '10px', width: '80px', height: '30px' }}
            />
            <input
              type="button"
              value="Reset"
              onClick={handleReset}
              style={{ margin: '10px', width: '80px', height: '30px' }}
            />
          </form>
        </div>

        <footer>
          <div>
            <Link href="/message" className="gocomment">
              Want to leave a comment?
            </Link>
          </div>

          <div className="footerdiv" id="callfooterdiv">
            <img src="/images/layout/phone.png" alt="Contact Us" id="callicon" title="Ojingeo Hotel information" />
            <p className="contact">Contact Us</p>
            <div id="info">
              <a href="tel:+826-969-6769" style={{ color: '#ffffff' }}>
                &#9742;: (+82)6-969-6769
              </a><br />
              <a href="mailto:info@ojingeohotel.com" style={{ color: '#ffffff' }}>
                &#9993;: info@ojingeohotel.com
              </a>
              <br />Hongdae, Seoul, Korea &#127472;&#127479;
            </div>
          </div>

          <div className="footerdiv">
            <img src="/images/layout/handshake.png" alt="Sponsorship" title="Ojingeo Hotel Sponsorship" id="sponsoredicon" />
            <p className="sponsored">Our Sponsorship</p>
            <img src="/images/layout/sponsorship.jpg" alt="Sponsored" id="sponsored" title="Ojingeo Hotel Sponsorship" />
          </div>

          <div className="footerdiv">
            <img src="/images/layout/check-mark.png" alt="Secure Payment" title="Ojingeo Hotel Secure Payment" id="secureicon" />
            <p className="payment">Secure Payment</p>
            <img src="/images/layout/payment.png" alt="Payment" id="payment" title="Ojingeo Hotel Secure Payment" />
          </div>

          <p id="copyright">Copyrights &#169; 2021. All rights reserved by Ojingeo Hotel</p>
        </footer>
      </div>
    </>
  );
};

export default BookingForm;