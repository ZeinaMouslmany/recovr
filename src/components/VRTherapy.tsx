import React from 'react';
import './VRTherapy.css';
import vrImage from '../assets/vr-therapy.png';

const VRTherapy: React.FC = () => {
  const handleBookDemo = () => {
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1rLxSwhVyDEIht-TrSvygW02E2G_NpddYYet6kX3V5Mf2rkdiNMtG9ZkFKW3Y7xJ0AYVSXKrCV',
      '_blank'
    );
  };

  return (
    <section className="vr-therapy">
      <div className="container">

        <div className="vr-text">
          <h2>
            A New Quality of VR Therapy <br />
            For Mental Health and Wellness
          </h2>

          <div className="vr-features">
            <div className="vr-feature">
              <span className="vr-dot" />
              <p>Learning platform with implementation guides</p>
            </div>

            <div className="vr-feature">
              <span className="vr-dot" />
              <p>VR therapy library with realistic graphics</p>
            </div>

            <div className="vr-feature">
              <span className="vr-dot" />
              <p>AI module to create exposure scenarios</p>
            </div>

            <div className="vr-feature">
              <span className="vr-dot" />
              <p>Launchpad for specialists to control VR sessions</p>
            </div>

            <div className="vr-feature">
              <span className="vr-dot" />
              <p>Dashboard with detailed statistics</p>
            </div>
          </div>

          <button className="demo-btn" onClick={handleBookDemo}>
            Book a Demo
          </button>
        </div>

        <div className="vr-image">
          <img src={vrImage} alt="VR Therapy Experience" />
        </div>

      </div>
    </section>
  );
};

export default VRTherapy;
