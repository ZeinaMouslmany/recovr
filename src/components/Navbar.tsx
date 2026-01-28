import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Recovr</div>
      <button className="nav-btn">Contact</button>
    </nav>
  );
};

export default Navbar;
