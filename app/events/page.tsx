import React from 'react';

export default function Events() {
  return (
    <div className="events-container">
      <h1>Hotel Events</h1>
      <div className="events-list">
        <div className="event-item">
          <h2>Summer Pool Party</h2>
          <p className="event-date">July 15, 2023</p>
          <p>Join us for our annual summer pool party with live music and refreshments.</p>
        </div>
        <div className="event-item">
          <h2>Wine Tasting Evening</h2>
          <p className="event-date">August 5, 2023</p>
          <p>Experience a selection of fine wines paired with gourmet appetizers.</p>
        </div>
        <div className="event-item">
          <h2>Cooking Class with Chef Kim</h2>
          <p className="event-date">September 10, 2023</p>
          <p>Learn to prepare traditional Korean dishes with our award-winning chef.</p>
        </div>
        <div className="event-item">
          <h2>New Year's Eve Gala</h2>
          <p className="event-date">December 31, 2023</p>
          <p>Ring in the new year with our elegant gala dinner and entertainment.</p>
        </div>
      </div>
    </div>
  );
}