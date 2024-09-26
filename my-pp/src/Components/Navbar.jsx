import React, { useState } from 'react';
import '../Styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close on mobile view
  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="brand" href="#">BrandName</a>
        <button className="toggle-button" onClick={toggleNavbar}>
          {isOpen ? '✖' : '☰'} {/* Display cross if menu is open, hamburger if closed */}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleNavbar}>Home</a>
          <a href="#" onClick={toggleNavbar}>About</a>
          <a href="#" onClick={toggleNavbar}>Services</a>
          <a href="#" onClick={toggleNavbar}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
