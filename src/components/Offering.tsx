import React from "react";
import "./Offering.css";

const plans = [
  {
    title: "Monthly Plan",
    price: 39,
    period: "/ month",
    trial: "15-Day Free Trial",
  },
  {
    title: "Annual Plan",
    price: 399,
    period: "/ year",
    trial: "15-Day Free Trial",
  },
];

const Offering: React.FC = () => {
  return (
    <section className="offering">
      <div className="container">

        <h2 className="offering-title">RCOVR Offering</h2>

        <p className="offering-subtitle">
          When purchasing a subscription, each doctor receives equipment
          upon making a refundable deposit*
        </p>

        <div className="offering-cards">
          {plans.map((plan) => (
            <div className="offering-card" key={plan.title}>

              <div className="plan-header">
                <h3>{plan.title}</h3>
                <span className="trial-badge">{plan.trial}</span>
              </div>

              <p className="price">
                ${plan.price} <span>{plan.period}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;
