import React from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa'; // Import icons
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="navbar-title">Admin Dashboard</div>
      <div className="navbar-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
