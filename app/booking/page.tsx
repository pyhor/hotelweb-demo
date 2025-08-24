import React from 'react';

export default function Booking() {
  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <form className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="check-in">Check-in Date</label>
            <input type="date" id="check-in" name="check-in" required />
          </div>
          <div className="form-group">
            <label htmlFor="check-out">Check-out Date</label>
            <input type="date" id="check-out" name="check-out" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="adults">Adults</label>
            <select id="adults" name="adults">
              <option value="1">1</option>
              <option value="2" selected>2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="children">Children</label>
            <select id="children" name="children">
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="room-type">Room Type</label>
          <select id="room-type" name="room-type">
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="mini-suite">Mini Suite</option>
            <option value="premium-suite">Premium Suite</option>
            <option value="luxury-double-suite">Luxury Double Suite</option>
          </select>
        </div>
        <button type="submit" className="booking-button">Check Availability</button>
      </form>
    </div>
  );
}