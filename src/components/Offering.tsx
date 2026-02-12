import React from "react";
import "./Offering.css";

const Offering: React.FC = () => {
  return (
    <section className="offering">
      <div className="container">

        <h2 className="offering-title">PsyTechVR Offering</h2>

        <p className="offering-subtitle">
          When purchasing a subscription, each doctor receives equipment
          upon making a refundable deposit*
        </p>

        <div className="offering-card">

          <div className="plan-header">
            <h3>1 Month Plan</h3>
            <span className="trial-badge">15-Day Free Trial</span>
          </div>

          <p className="price">
            $120 <span>/ month</span>
          </p>

          <div className="limited-offer">Limited Time Offer</div>

          <div className="features-list">
            <span>VR headsets & bio-sensors (returnable deposit)</span>
            <span>Unlimited VR app access + monthly updates</span>
            <span>Learning management system</span>
            <span>Check-up questionnaires</span>
            <span>VR training analytics</span>
            <span>VR biofeedback</span>
            <span>VR broadcasting tools</span>
            <span>Chat & smart notifications</span>
            <span>24/7 technical support</span>
          </div>

          <button className="demo-btn">Subscribe Now</button>
        </div>

      </div>
    </section>
  );
};

export default Offering;
