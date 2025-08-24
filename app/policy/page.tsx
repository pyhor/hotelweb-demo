import React from 'react';

export default function Policy() {
  return (
    <div className="policy-container">
      <h1>Hotel Policies</h1>
      <div className="policy-section">
        <h2>Cancellation Policy</h2>
        <p>Cancellations made 48 hours before check-in date will receive a full refund. Cancellations made within 48 hours of check-in will be charged one night's stay.</p>
      </div>
      <div className="policy-section">
        <h2>Pet Policy</h2>
        <p>We welcome pets in designated pet-friendly rooms with an additional cleaning fee.</p>
      </div>
      <div className="policy-section">
        <h2>Smoking Policy</h2>
        <p>All rooms are non-smoking. Designated smoking areas are available outside the building.</p>
      </div>
    </div>
  );
}