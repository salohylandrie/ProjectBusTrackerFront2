import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="dashboard-content">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Outlet /> {/* Rendu des pages enfants */}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
