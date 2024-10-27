import React from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaUser } from 'react-icons/fa'; // Import icons
import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
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
  );
}

export default Sidebar;
