import React from 'react';
import { Settings, Plus } from 'lucide-react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <header className="dash-header">
      <div className="dash-header-left">
        <h1 className="dash-title">Dashboard</h1>
        <p className="dash-welcome">Welcome back Sarah. Here's what is happening today</p>
      </div>
      <div className="dash-header-right">
        <button className="settings-btn">
          <Settings size={24} />
        </button>
        <button className="add-listing-btn">
          <Plus size={20} />
          <span>Add New Listing</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
