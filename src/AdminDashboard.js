import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
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
          {/* Your main content goes here */}
          <h1>Welcome to the Admin Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
