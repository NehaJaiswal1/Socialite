import React, { useState } from 'react';
import './LeftNav.css'; // Import the CSS file for styling the Navbar

function LeftNavbar() {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control navbar visibility on mobile
  const [showDevelopment, setShowDevelopment] = useState(false); // State to toggle Development list

  const toggleMoreItems = (event) => {
    event.preventDefault();
    setShowMore(!showMore); // Toggle the state for "See More" / "See Less"
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  const toggleDevelopment = () => {
    setShowDevelopment(!showDevelopment); // Toggle the Development sublist visibility
  };

  return (
    <div className="navbar-container">
      {/* Menu Icon (Hamburger button) */}
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Sidebar / Navbar */}
      <div className={`left-side-nav ${isOpen ? 'open' : ''}`}>
        <nav className="navbar">
          <ul className="nav-list">
            {/* Initial list items */}
            <li className="feed">
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Feed</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Video</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Event</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Pages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Groups</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Market</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                <span className="list-text">Blog</span>
              </a>
            </li>

            {/* "See More" button */}
            {!showMore && (
              <li id="toggle-button">
                <a href="#" onClick={toggleMoreItems}>
                  <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                  <span className="list-text" id="see-more-text">See More</span>
                </a>
              </li>
            )}

            {/* Extra items when "See More" is clicked */}
            {showMore && (
              <>
                <li>
                  <a href="#">
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">Games</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">Fundraiser</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">Blog II</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">Event II</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">Groups II</span>
                  </a>
                </li>

                {/* "See Less" button */}
                <li id="see-less">
                  <a href="#" onClick={toggleMoreItems}>
                    <img src="https://via.placeholder.com/20" alt="Icon" className="icon" />
                    <span className="list-text">See Less</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Shortcut section */}
        <div className="shortcut">
          <div className="name">Shortcut</div>

          <a href="#">
            <div className="img">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="img-shape" />
              <div className="pr">Marin Gray</div>
            </div>
          </a>
          <a href="#">
            <div className="img">
              <img src="assets/images/avatars/avatar-7.jpg" alt="" className="img-shape" />
              <div className="pr">Alexa Stella</div>
            </div>
          </a>
          <a href="#">
            <div className="img">
              <img src="assets/images/avatars/avatar-3.jpg" alt="" className="img-shape" />
              <div className="pr">Sarah Ali</div>
            </div>
          </a>
        </div>

        {/* New Pages section */}
        <div className="pages-section">
          <div className="name">Pages</div>

          <a href="#">
            <div className="img">
              <img src="https://via.placeholder.com/40" alt="Setting Icon" className="img-shape" />
              <div className="pr">Setting</div>
            </div>
          </a>
          <a href="#">
            <div className="img">
              <img src="https://via.placeholder.com/40" alt="Upgrade Icon" className="img-shape" />
              <div className="pr">Upgrade</div>
            </div>
          </a>
          <a href="#">
            <div className="img">
              <img src="https://via.placeholder.com/40" alt="Authentication Icon" className="img-shape" />
              <div className="pr">Authentication</div>
            </div>
          </a>

          {/* Development Section with Collapsible List */}
          <div className="development-section">
            <a href="#" onClick={toggleDevelopment}>
              <div className="img">
                <img src="https://via.placeholder.com/40" alt="Development Icon" className="img-shape" />
                <div className="pr">Development</div>
              </div>
            </a>

            {/* Conditionally show the list when "Development" is clicked */}
            {showDevelopment && (
              <ul className="development-list">
                <li className="dev-list">
                  <a href="#">Elements</a>
                </li>
                <li>
                  <a href="#">Components</a>
                </li>
                <li>
                  <a href="#">Icons</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftNavbar;
