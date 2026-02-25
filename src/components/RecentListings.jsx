import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import './RecentListings.css';

const RecentListings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const listings = [
    { id: 1, name: 'HDPE Scraps', category: 'Plastics', weight: '5.5 Tons', price: '40,000', status: 'In Stock' },
    { id: 2, name: 'HDPE Scraps', category: 'Plastics', weight: '5.5 Tons', price: '40,000', status: 'Out of stock' },
    { id: 3, name: 'HDPE Scraps', category: 'Plastics', weight: '5.5 Tons', price: '40,000', status: 'Limited' },
    { id: 4, name: 'HDPE Scraps', category: 'Plastics', weight: '5.5 Tons', price: '40,000', status: 'Sold' },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock': return 'status-in-stock';
      case 'out of stock': return 'status-out-of-stock';
      case 'limited': return 'status-limited';
      case 'sold': return 'status-sold';
      default: return '';
    }
  };

  return (
    <div className="recent-listings-card">
      <div className="listings-card-header">
        <h2 className="card-title">Recent Listing</h2>
        <div className="card-controls">
          <div className="search-box">
            <Search size={18} className="search-icon-table" />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-btn-table">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="listings-table">
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Category</th>
              <th>Weight / QTY</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item) => (
              <tr key={item.id}>
                <td className="material-name">{item.name}</td>
                <td>{item.category}</td>
                <td>{item.weight}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`status-pill ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn-table">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-footer-table">
        <p className="showing-text">Showing 4 of 24 active listings</p>
        <div className="pagination">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
