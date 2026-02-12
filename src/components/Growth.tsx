import React from 'react';
import './Growth.css';

const Growth: React.FC = () => {
  return (
    <section className="growth">
      <div className="container">
        <h2>Grow Your Practice with RCOVR</h2>
        <p className="subtitle">
          RCOVR is more than a therapeutic tool—it is a strategic asset designed to grow your practice and maximize revenue through innovative mental health technology.
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
            Stand out from local competitors by offering cutting-edge VR therapy options that meet the rising demand for modern mental health solutions.
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
              Optimize your billable hours by offering premium, tech-enhanced therapy at higher rates.
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
             Reach new patients beyond your local area with remote VR sessions, serving more clients without increasing physical office costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
