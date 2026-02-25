import React from 'react'
import './MarketPlaceCard.css'
import LockIcon from '../assets/lock.svg?react'
import LocationIcon from '../assets/location.svg?react'
import { motion } from 'framer-motion';

const MarketPlaceCard = ({ product }) => {
  const { image, name, weight, location, price, stockStatus } = product;

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock': return 'status-1n';
      case 'out of stock': return 'status-out';
      case 'limited': return 'status-limited';
      default: return '';
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="listing-card"
    >
      <div className="listing-image-container">
        <img
          src={image}
          alt={name}
          className="listing-image"
          referrerPolicy="no-referrer"
        />
        <span className={`status-badge ${getStatusClass(stockStatus)}`}>
          {stockStatus}
        </span>
      </div>
      <div className="listing-details">
        <div className="listing-header">
          <h3 className="listing-category">{name}</h3>
          <span className="listing-price">{price}</span>
        </div>
        <div className="listing-info">
          <div className="info-item">
            <LockIcon size={18} className="info-icon" />
            <span className="info-text">{weight}</span>
          </div>
          <div className="info-item">
            <LocationIcon size={18} className="info-icon" />
            <span className="info-text">{location}</span>
          </div>
        </div>
        <button className="btn-view-details">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default MarketPlaceCard;