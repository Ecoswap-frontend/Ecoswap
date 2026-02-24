import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ImpactSection.css';

const ImpactSection = () => {
  return (
    <div className="impact-grid">
      <div className="impact-card">
        <h3 className="impact-title">Sustainable Impact</h3>
        <p className="impact-desc">
          Your recycling efforts have diverted massive waste from land fills this year.
        </p>
        <div className="impact-stats">
          <div className="impact-stat-item">
            <span className="impact-stat-value">124.5</span>
            <span className="impact-stat-unit">Tons</span>
          </div>
          <div className="impact-stat-item">
            <span className="impact-stat-value">8.2k</span>
            <span className="impact-stat-unit">CO2 Saved</span>
          </div>
        </div>
      </div>

      <div className="offer-card">
        <div className="offer-header">
          <div className="offer-info">
            <h3 className="offer-title">New Buyer Offer!</h3>
            <p className="offer-desc">A buyer just made an offer on your product</p>
          </div>
          <div className="offer-icon">
            <MessageCircle size={24} />
            <span className="notification-dot"></span>
          </div>
        </div>
        <button className="view-offer-btn">
          View Offer Details
        </button>
      </div>
    </div>
  );
};

export default ImpactSection;
