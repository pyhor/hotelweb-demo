import React from 'react';

export default function Membership() {
  return (
    <div className="membership-container">
      <h1>Membership Program</h1>
      <div className="membership-info">
        <p>Join our exclusive membership program and enjoy premium benefits at all our locations.</p>
        
        <div className="membership-tiers">
          <div className="tier">
            <h2>Silver Membership</h2>
            <ul>
              <li>5% discount on room rates</li>
              <li>Early check-in when available</li>
              <li>Welcome drink upon arrival</li>
            </ul>
            <p className="price">$100/year</p>
          </div>
          
          <div className="tier">
            <h2>Gold Membership</h2>
            <ul>
              <li>10% discount on room rates</li>
              <li>Early check-in and late check-out</li>
              <li>Welcome drink and fruit basket</li>
              <li>Free spa access once per stay</li>
            </ul>
            <p className="price">$250/year</p>
          </div>
          
          <div className="tier">
            <h2>Platinum Membership</h2>
            <ul>
              <li>15% discount on room rates</li>
              <li>Guaranteed early check-in and late check-out</li>
              <li>Welcome drink, fruit basket, and local gift</li>
              <li>Free spa access throughout stay</li>
              <li>Room upgrade when available</li>
            </ul>
            <p className="price">$500/year</p>
          </div>
        </div>
        
        <div className="signup-section">
          <h2>Become a Member Today</h2>
          <button className="signup-button">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
}