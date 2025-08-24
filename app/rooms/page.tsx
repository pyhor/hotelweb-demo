import React from 'react';

export default function Rooms() {
  return (
    <div className="rooms-container">
      <h1>Our Rooms</h1>
      <div className="rooms-list">
        <div className="room-item">
          <h2>Standard Room</h2>
          <p>Comfortable accommodations with essential amenities</p>
          <p className="price">From $120 per night</p>
        </div>
        <div className="room-item">
          <h2>Deluxe Room</h2>
          <p>Spacious room with premium amenities and city views</p>
          <p className="price">From $180 per night</p>
        </div>
        <div className="room-item">
          <h2>Mini Suite</h2>
          <p>Elegant suite with separate living area</p>
          <p className="price">From $250 per night</p>
        </div>
        <div className="room-item">
          <h2>Premium Suite</h2>
          <p>Luxury suite with panoramic views and exclusive services</p>
          <p className="price">From $350 per night</p>
        </div>
        <div className="room-item">
          <h2>Luxury Double Suite</h2>
          <p>Our finest accommodation with two bedrooms and full amenities</p>
          <p className="price">From $500 per night</p>
        </div>
      </div>
    </div>
  );
}