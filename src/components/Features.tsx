import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Effective VR Therapy Solution for Your Private Practice</h2>

        <div className="feature-card">
          <h3>Higher engagement and outcomes</h3>
          <p>
            PsyTechVR allows patients to engage in therapy, leading to improved therapy effectiveness for anxiety, PTSD, phobias and more.
          </p>
        </div>

        <div className="feature-card">
          <h3>More effective therapy delivery</h3>
          <p>
            PsyTechVR provides structured, evidence-based VR protocols that enhance the consistency, quality and impact of therapy sessions.
          </p>
        </div>

        <div className="feature-card">
          <h3>Increased practice revenue</h3>
          <p>
            PsyTechVR allows practices to differentiate themselves, attract new clients and justify premium pricing for innovative treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
