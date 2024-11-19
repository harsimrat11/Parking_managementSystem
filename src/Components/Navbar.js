import React from 'react';
import '../Styles/Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""></input>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Parking Space</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Wallet</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
  )
}

export default Navbar