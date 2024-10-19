// LeftNav.js
import React, { useState } from 'react';
import './LeftNav.css'; // Import the CSS file for styling the Navbar

const LeftNav = () => {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreItems = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className={`left-side-nav ${isOpen ? 'open' : ''}`}>
      <nav className="navbar">
        <ul className="nav-list">
          {/* List items go here */}
        </ul>
      </nav>
    </div>
  );
}

export default LeftNav;
