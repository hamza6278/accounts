import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo1.5.png";
import './header.css';

const Header = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(false); // hide when scrolling down
      } else {
        setShowHeader(true);  // show when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showHeader) return null; // completely remove header when scrolling

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>


        
        <div className="right-section">
          <nav className="nav-links">
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
          </nav>
          <div className="phone-number">202-555-0188</div>
        </div>
      </div>
    </header>
  );
};

export default Header;