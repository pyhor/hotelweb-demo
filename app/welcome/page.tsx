import React from 'react';

export default function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to Ojingeo Hotel</h1>
      <p>Thank you for becoming a member of our hotel family.</p>
      <p>As a valued member, you now have access to exclusive benefits and offers.</p>
      <div className="member-benefits">
        <h2>Your Member Benefits</h2>
        <ul>
          <li>10% discount on all room bookings</li>
          <li>Early check-in and late check-out</li>
          <li>Complimentary room upgrade (subject to availability)</li>
          <li>Access to member-only events</li>
        </ul>
      </div>
    </div>
  );
}