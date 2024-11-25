import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container n-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/parking-space">Parking Space</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/profile">Profile</Link></li> {/* Update this line */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <h1 className="logo">P_SPACE</h1>
      </div>
    </nav>
  );
}

export default Navbar;