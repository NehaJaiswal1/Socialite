import React from 'react';
import Navbar from './Components/Navbar';  // Correct import path for Navbar
import Follow from './Components/Follow';  // Correct import path for Follow'
 
import './App.css';

const App = () => {

  return (
    <div>
      <div>
      <Navbar />
      </div>
    
      <div className="main-content"> {/* Flex container for layout */}
        
        <div className="sidebar"> {/* Sidebar on the right */}
          <Follow /> {/* Render the "Follow" component */}
        </div>
      </div>

    </div>
  );
}

export default App;
