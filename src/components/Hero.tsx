import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const handleBookDemo = () => {
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1rLxSwhVyDEIht-TrSvygW02E2G_NpddYYet6kX3V5Mf2rkdiNMtG9ZkFKW3Y7xJ0AYVSXKrCV',
      '_blank'
    );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to RCOVR</h1>
        <h3>Conquer the Mind Safely</h3>
        <p>Experience the world without the risk. rcovr creates hyper-realistic,<br>
        </br> immersive environments that empower patients to face their fears while clinicians monitor every heartbeat.</p>
        <button className="hero-btn" onClick={handleBookDemo}>
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
