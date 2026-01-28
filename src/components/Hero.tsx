import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Recovr</h1>
        <p>Build beautiful websites with React & TypeScript</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
