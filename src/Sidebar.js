// Sidebar.js
import React from "react";
import { FaBus, FaUser } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar-header">
      
   
    </div>
    <nav>
      <ul>
        <li>
          <FaBus className="icon" />
          <span>Générer Bus</span>
        </li>
        <li>
          <FaUser className="icon" />
          <span>Générer Conducteur</span>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
