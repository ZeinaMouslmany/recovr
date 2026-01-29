import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Recovr Logo" />
      </div>

      <button className="nav-btn">Book a Demo</button>
    </nav>
  );
};

export default Navbar;
