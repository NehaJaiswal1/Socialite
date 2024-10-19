import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/vidi-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" /> 
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="navbar-icons">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
