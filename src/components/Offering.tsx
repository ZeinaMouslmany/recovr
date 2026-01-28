import React from 'react';
import './Offering.css';

const Offering: React.FC = () => {
  return (
    <section className="offering">
      <div className="container">

        {/* Title */}
        <h2 className="offering-title">PsyTechVR Offering</h2>

        {/* Subtitle under title */}
        <p className="offering-subtitle">
          When purchasing a subscription, each doctor receives equipment, upon making a refundable deposit*
        </p>

        {/* Thin box */}
        <div className="offering-card">
          <h3>1 Month</h3>
          <p className="trial">15-days free trial</p>
          <p className="price">then $120 / 1 month</p>

          <p className="limited-offer">LIMITED TIME OFFER</p>

          <ul>
            <li>VR headsets & Bio-sensors (returnable deposit)</li>
            <li>Unlimited VR app access + monthly updates</li>
            <li>Learning management system</li>
            <li>Check-up questionnaires</li>
            <li>Analytics of VR training</li>
            <li>VR Biofeedback</li>
            <li>VR broadcasting tool</li>
            <li>Chat & notifications</li>
            <li>24/7 Tech support</li>
          </ul>

          <button className="demo-btn">Subscribe Now</button>
        </div>

      </div>
    </section>
  );
};

export default Offering;
