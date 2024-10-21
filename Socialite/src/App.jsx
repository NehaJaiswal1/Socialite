import React from 'react';
import Navbar from './Components/Navbar';  // Correct import path for Navbar
import Follow from './Components/Follow';  // Correct import path for Follow
import Sidebar from './Components/Sidebae'; // Correct import path for Sidebar
import Feed from './Components/feed';  // Assuming this is the feed component where posts are rendered
import './App.css';

const App = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main layout with Sidebar, Feed, and Follow components */}
      <div className="main-content-layout">
        {/* Sidebar on the left */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Feed content in the center */}
        <div className="feed">
          <Feed />
        </div>

        {/* Follow section on the right */}
        <div className="follow-section">
          <Follow />
        </div>
      </div>
    </div>
  );
};

export default App;
