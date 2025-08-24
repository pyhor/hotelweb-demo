import React from 'react';

export default function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Guest Reviews</h1>
      <div className="reviews-list">
        <div className="review-item">
          <div className="review-header">
            <h3>Amazing Stay</h3>
            <div className="rating">★★★★★</div>
          </div>
          <p className="review-author">by John D.</p>
          <p className="review-content">The service was exceptional and the rooms were immaculate. Will definitely return!</p>
        </div>
        <div className="review-item">
          <div className="review-header">
            <h3>Wonderful Experience</h3>
            <div className="rating">★★★★★</div>
          </div>
          <p className="review-author">by Sarah M.</p>
          <p className="review-content">The staff went above and beyond to make our stay memorable. The facilities are top-notch.</p>
        </div>
        <div className="review-item">
          <div className="review-header">
            <h3>Great Location</h3>
            <div className="rating">★★★★☆</div>
          </div>
          <p className="review-author">by Robert K.</p>
          <p className="review-content">Perfect location for exploring the city. Room was comfortable and clean.</p>
        </div>
      </div>
    </div>
  );
}