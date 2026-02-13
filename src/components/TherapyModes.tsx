import React from 'react';
import './TherapyModes.css';

import onlineImg from '../assets/online.png';
import inpersonImg from '../assets/inperson.png';
import vrIcon from '../assets/vr-icon.png';

const TherapyModes: React.FC = () => {
  return (
    <section className="therapy">
      <div className="container">

        <h2 className="therapy-title">
          Online and In-Person Therapy
        </h2>

        <div className="therapy-grid">

          {/* ONLINE – Coming Next */}
          <div className="therapy-card future">
            <img src={onlineImg} alt="Online Therapy" className="card-image" />

            <div className="future-overlay">
              <img src={vrIcon} alt="VR Icon" />
              <span>Coming Next</span>
            </div>

            <h3>
              Telehealth VR
              <span className="active-tag">Online</span>
            </h3>

            <p>
              Bring specialized care to your clients wherever they are.
              If your patient owns a compatible VR headset, you can lead immersive
              exposure or relaxation sessions remotely through our secure,
              professional-grade platform.
            </p>
          </div>

          {/* IN-PERSON – ACTIVE */}
          <div className="therapy-card active">
            <img
              src={inpersonImg}
              alt="In Person Therapy"
              className="card-image"
            />

            <h3>In-Person</h3>

            <p>
              Turn your office into a center for innovation. After a standard
              clinical screening, use RCOVR on-site to guide patients through live
              sessions, observing and adjusting the experience in real-time from
              your clinician dashboard.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TherapyModes;
