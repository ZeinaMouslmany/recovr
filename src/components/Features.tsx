import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Efficient VR Therapy Solution</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">VR</div>
            <h3>	Immersive Virtual Reality</h3>
            <p>
             3D environments designed for high ecological validity.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">+</div>
            <h3>Controlled Exposure</h3>
            <br></br>
            <p>
              Safe, repeatable triggers for phobia desensitization.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">$</div>
            <h3>Remote Patient Monitoring</h3>
            <p>
             High-fidelity therapy from the clinic or at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
