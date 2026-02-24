import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import StatsCards from './StatsCards';
import RecentListings from './RecentListings';
import ImpactSection from './ImpactSection';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="dashboard-main">
        <div className="dashboard-container">
          <DashboardHeader />
          
          {activeTab === 'dashboard' ? (
            <div className="dashboard-content">
              <StatsCards />
              <RecentListings />
              <ImpactSection />
            </div>
          ) : (
            <div className="placeholder-content">
              <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section</h2>
              <p>This section is under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
