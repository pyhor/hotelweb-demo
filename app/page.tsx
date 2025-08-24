import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Ojingeo Hotel</h1>
        <p>Experience luxury and comfort in the heart of South Korea</p>
        <button className="book-now-button">Book Now</button>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <h2>Luxury Rooms</h2>
          <p>Elegant and comfortable accommodations for all guests</p>
        </div>
        <div className="feature">
          <h2>Fine Dining</h2>
          <p>Experience exquisite cuisine at our restaurants</p>
        </div>
        <div className="feature">
          <h2>Premium Facilities</h2>
          <p>Enjoy our swimming pools, spa, and fitness center</p>
        </div>
      </div>
    </div>
  );
}