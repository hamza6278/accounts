import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from "../assets/logo1.4.png";   // adjust path based on file location

          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>




const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </div>
        <div className="footer-logo">
        <div className="logo-circle">
        <img src={logo} alt="Logo" className="logo-image" />
         </div>
          </div>
          <div className="footer-credit">
            Back office by Finara
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;