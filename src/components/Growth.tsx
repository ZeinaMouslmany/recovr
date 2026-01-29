import React from 'react';
import './Growth.css';

const Growth: React.FC = () => {
  return (
    <section className="growth">
      <div className="container">
        <h2>Grow Your Practice with PsyTechVR</h2>
        <p className="subtitle">
          PsyTechVR isn't just a therapy tool — it's a way to grow your practice and maximize revenue.
        </p>

        <div className="growth-cards">
          <div className="growth-card">
            <div className="vr-icon">
              <svg viewBox="0 0 120 60" className="vr-goggles">
                <rect className="eye left-eye" x="5" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="eye right-eye" x="70" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="bridge" x="50" y="24" width="20" height="6" />
                <path className="smile" d="M45 48 Q60 54 75 48" />
              </svg>
            </div>
            <h3>Attract More Clients</h3>
            <p>
              Stand out with innovative therapy options that drive patient demand.
            </p>
          </div>

          <div className="growth-card">
            <div className="vr-icon">
              <svg viewBox="0 0 120 60" className="vr-goggles">
                <rect className="eye left-eye" x="5" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="eye right-eye" x="70" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="bridge" x="50" y="24" width="20" height="6" />
                <path className="smile" d="M45 48 Q60 54 75 48" />
              </svg>
            </div>
            <h3>Increase Revenue per Session</h3>
            <p>
              Offer premium VR-enhanced therapy at higher rates.
            </p>
          </div>

          <div className="growth-card">
            <div className="vr-icon">
              <svg viewBox="0 0 120 60" className="vr-goggles">
                <rect className="eye left-eye" x="5" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="eye right-eye" x="70" y="10" rx="10" ry="10" width="45" height="30" />
                <rect className="bridge" x="50" y="24" width="20" height="6" />
                <path className="smile" d="M45 48 Q60 54 75 48" />
              </svg>
            </div>
            <h3>Expand into Telehealth</h3>
            <p>
              Serve more clients remotely without additional office costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
