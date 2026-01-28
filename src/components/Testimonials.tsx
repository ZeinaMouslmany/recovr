import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>
            "PsyTechVR completely transformed my therapy sessions. Patients are more engaged and outcomes have improved dramatically."
          </p>
          <h4>- Dr. Sarah Johnson</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "The structured VR protocols are amazing. I can deliver high-quality therapy consistently every time."
          </p>
          <h4>- Dr. Michael Lee</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "Our clinic attracted more clients with PsyTechVR. The technology is a game-changer for mental health therapy."
          </p>
          <h4>- Dr. Emily Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
