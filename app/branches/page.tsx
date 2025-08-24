import React from 'react';

export default function Branches() {
  return (
    <div className="branches-container">
      <h1>Our Branches</h1>
      <div className="branches-list">
        <div className="branch-item">
          <h2>Seoul Branch</h2>
          <p>Our flagship location in the heart of Seoul</p>
        </div>
        <div className="branch-item">
          <h2>Busan Branch</h2>
          <p>Beachfront luxury in Busan</p>
        </div>
        <div className="branch-item">
          <h2>Gangnam Branch</h2>
          <p>Modern elegance in Gangnam</p>
        </div>
        <div className="branch-item">
          <h2>Incheon Branch</h2>
          <p>Convenient luxury near Incheon International Airport</p>
        </div>
        <div className="branch-item">
          <h2>Mapo-gu Branch</h2>
          <p>Cultural district location with river views</p>
        </div>
        <div className="branch-item">
          <h2>Gwangju Branch</h2>
          <p>Southern comfort in Gwangju</p>
        </div>
      </div>
    </div>
  );
}