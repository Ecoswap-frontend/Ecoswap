
import React from 'react';
import { Search, MapPin, Package, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import './Marketplace.css';

const listings = [
  { id: '1', category: 'Glass', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e17?auto=format&fit=crop&q=80&w=400', status: 'In Stock', weight: '1,200kg available', location: 'Abuja, NG', price: '5,000 Naira' },
  { id: '2', category: 'Glass', image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?auto=format&fit=crop&q=80&w=400', status: 'Out of stock', weight: '1,200kg available', location: 'Abuja, NG', price: '5,000 Naira' },
  { id: '3', category: 'Glass', image: 'https://images.unsplash.com/photo-1536647176947-db097c36a29d?auto=format&fit=crop&q=80&w=400', status: 'Limited', weight: '1,200kg available', location: 'Abuja, NG', price: '5,000 Naira' },
  { id: '4', category: 'Glass', image: 'https://images.unsplash.com/photo-1614352238028-d716805acc20?auto=format&fit=crop&q=80&w=400', status: 'In Stock', weight: '1,200kg available', location: 'Abuja, NG', price: '5,000 Naira' },
];

const ListingCard = ({ listing }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock': return 'status-in-stock';
      case 'out of stock': return 'status-out-of-stock';
      case 'limited': return 'status-limited';
      default: return '';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="listing-card"
    >
      <div className="listing-image-container">
        <img 
          src={listing.image} 
          alt={listing.category} 
          className="listing-image" 
          referrerPolicy="no-referrer"
        />
        <span className={`status-badge ${getStatusClass(listing.status)}`}>
          {listing.status}
        </span>
      </div>
      <div className="listing-details">
        <div className="listing-header">
          <h3 className="listing-category">{listing.category}</h3>
          <span className="listing-price">{listing.price}</span>
        </div>
        <div className="listing-info">
          <div className="info-item">
            <Package size={18} className="info-icon" />
            <span className="info-text">{listing.weight}</span>
          </div>
          <div className="info-item">
            <MapPin size={18} className="info-icon" />
            <span className="info-text">{listing.location}</span>
          </div>
        </div>
        <button className="btn-view-details">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

const Marketplace = () => {
  return (
    <section className="marketplace">
      <div className="container">
        <div className="marketplace-header">
          <div className="marketplace-title-section">
            <h2 className="marketplace-title">Latest Marketplace Listing</h2>
            <p className="marketplace-subtitle">Available high-quality recycled materials from verified sources</p>
          </div>
          
          <div className="marketplace-controls">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search" 
                className="search-input"
              />
            </div>
            <button className="filter-button">
              <Filter size={24} />
            </button>
          </div>
        </div>

        <div className="listings-grid">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ListingCard listing={listing} />
            </motion.div>
          ))}
        </div>

        <div className="marketplace-footer">
          <button className="btn-view-all">
            View All Marketplace
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;

