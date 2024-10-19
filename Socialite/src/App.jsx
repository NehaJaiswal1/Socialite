import React from 'react';
import Navbar from './Components/Navbar';  // Correct import path for Navbar
import Follow from './Components/Follow';  // Correct import path for Follow'
import LeftNav from "./Components/LeftNav";
import './App.css';

const App = () => {

  return (
    <div>
      <Navbar />
      
      <LeftNav />

      <div className="main-content"> {/* Flex container for layout */}
        <div className="main-body">
          {/* Your main content here */}
          
        </div>
        <div className="sidebar"> {/* Sidebar on the right */}
          <Follow /> {/* Render the "Follow" component */}
        </div>
      </div>

    </div>
  );
}

export default App;
