import React from 'react';

export default function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h3>What are the check-in and check-out times?</h3>
          <p>Check-in is at 3:00 PM and check-out is at 12:00 PM.</p>
        </div>
        <div className="faq-item">
          <h3>Is breakfast included in the room rate?</h3>
          <p>Yes, breakfast is included in all our room packages.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer airport shuttle service?</h3>
          <p>Yes, we offer complimentary airport shuttle service for all guests.</p>
        </div>
        <div className="faq-item">
          <h3>Is Wi-Fi available?</h3>
          <p>Yes, high-speed Wi-Fi is available throughout the hotel free of charge.</p>
        </div>
      </div>
    </div>
  );
}