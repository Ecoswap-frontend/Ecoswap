import React from 'react';
import { Package, DollarSign, Gavel, TrendingUp } from 'lucide-react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      id: 'active',
      label: 'Active Listings',
      value: '24',
      change: '+12% vs last month',
      icon: Package,
      iconBg: '#ecfdf5',
      iconColor: '#10b981'
    },
    {
      id: 'earnings',
      label: 'Total Earnings',
      value: '120,000',
      change: '50,000 (this month)',
      icon: DollarSign,
      iconBg: '#ecfdf5',
      iconColor: '#10b981'
    },
    {
      id: 'offers',
      label: 'Pending Offers',
      value: '08',
      change: 'Requires attention',
      icon: Gavel,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      warning: true
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-card-header">
            <div className="stat-info">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
            <div 
              className="stat-icon-wrapper"
              style={{ backgroundColor: stat.iconBg, color: stat.iconColor }}
            >
              <stat.icon size={24} />
            </div>
          </div>
          <div className="stat-card-footer">
            {stat.id === 'earnings' && <TrendingUp size={14} className="trend-icon" />}
            <span className={`stat-change ${stat.warning ? 'warning' : ''}`}>
              {stat.warning && '⚠️ '}
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
