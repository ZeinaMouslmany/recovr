import React from 'react';
import './VRTherapy.css';

const VRTherapy: React.FC = () => {
  return (
    <section className="vr-therapy">
      <div className="container">
        <div className="vr-image">
          <img
            src="https://images.unsplash.com/photo-1612831455547-0e8c1c8e9e39?auto=format&fit=crop&w=800&q=80"
            alt="VR Therapy"
          />
        </div>
        <div className="vr-text">
          <h2>A New Quality of VR Therapy For Mental Health and Wellness</h2>
          <ul>
            <li>Learning platform with implementation guides</li>
            <li>VR therapy library with realistic graphics</li>
            <li>AI module to create exposure scenarios</li>
            <li>Launchpad for specialist to control VR session</li>
            <li>Dashboard with statistics</li>
          </ul>
          <button className="demo-btn">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default VRTherapy;
