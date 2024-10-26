import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaUser, FaBars } from 'react-icons/fa'; // Import icons
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/generer-bus">
              <FaBus /> Générer Bus
            </Link>
          </li>
          <li>
            <Link to="/generer-conducteur">
              <FaUser /> Générer Conducteur
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
