import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const handleBookDemo = () => {
    // Opens the link in a new tab
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1rLxSwhVyDEIht-TrSvygW02E2G_NpddYYet6kX3V5Mf2rkdiNMtG9ZkFKW3Y7xJ0AYVSXKrCV',
      '_blank'
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Recovr Logo" />
      </div>

      <button className="nav-btn" onClick={handleBookDemo}>
        Book a Demo
      </button>
    </nav>
  );
};

export default Navbar;
