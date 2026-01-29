import React from 'react';
import './Offering.css';

const Offering: React.FC = () => {
  return (
    <section className="offering">
      <div className="container">

        <h2 className="offering-title">PsyTechVR Offering</h2>

        <p className="offering-subtitle">
          When purchasing a subscription, each doctor receives equipment,
          upon making a refundable deposit*
        </p>

        <div className="offering-card">

          <div className="plan-header">
            <h3>1 Month</h3>
            <span className="trial-badge">15-days free trial</span>
          </div>

          <p className="price">Then $120 / month</p>

          <div className="limited-offer">LIMITED TIME OFFER</div>

          <div className="features-list">
            <span>VR headsets & Bio-sensors (returnable deposit)</span>
            <span>Unlimited VR app access + monthly updates</span>
            <span>Learning management system</span>
            <span>Check-up questionnaires</span>
            <span>Analytics of VR training</span>
            <span>VR Biofeedback</span>
            <span>VR broadcasting tool</span>
            <span>Chat & notifications</span>
            <span>24/7 Tech support</span>
          </div>

          <button className="demo-btn">Subscribe Now</button>
        </div>

      </div>
    </section>
  );
};

export default Offering;
