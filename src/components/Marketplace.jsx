
import React from 'react';
// import { Search, MapPin, Package, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import "./Marketplace.css";
import MarketPlaceCard from './MarketPlaceCard';
import FilterIcon from '../assets/filter.svg?react';
import SearchIcon from '../assets/search.svg?react';



const Marketplace = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("All");
  const [selectedStock, setSelectedStock] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const manualData = [
    {
      id: 1001,
      name: "HDPE Pellets",
      price: 1820,
      weight: 922,
      location: "Ikeja Market",
      stockStatus: "Limited",
      quality: "A (reusable)",
      image: "https://images.unsplash.com/photo-1591193520257-c030ea85780d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 1002,
      name: "Cotton Scraps",
      price: 1100,
      weight: 1376,
      location: "Ikeja Computer Village",
      stockStatus: "In Stock",
      quality: "B (needs cleaning)",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 1003,
      name: "Polyester Offcuts",
      price: 1430,
      weight: 558,
      location: "Ikeja Industrial",
      stockStatus: "Limited",
      quality: "C (raw)",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 1004,
      name: "Organic Sludge",
      price: 1460,
      weight: 1639,
      location: "Ikeja Market",
      stockStatus: "In Stock",
      quality: "C (raw)",
      image: "https://images.unsplash.com/photo-1557234195-bd9f290f3e6d?q=80&w=400&auto=format&fit=crop"
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecoswap-app.free.beeceptor.com/products');
        if (!response.ok) throw new Error("API Limit Reached");
        const data = await response.json();
        setProducts(data.products || manualData);
      } catch (error) {
        console.log("Using manual response because:", error.message);
        setProducts(manualData);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 2. Logic for filtering
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesQuality = selectedQuality === "All" || item.quality.includes(selectedQuality);
    const matchesStock = selectedStock === "All" || item.stockStatus === selectedStock;

    return matchesSearch && matchesQuality && matchesStock;
  });

  if (loading) return <div className='loader'>Fetching fresh produce...</div>
  if (error) return <div className='error'>Error loading data</div>
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
              <SearchIcon className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className={`filter-button ${isFilterOpen ? 'active' : ''}`} onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <FilterIcon size={24} />
            </button>
            {isFilterOpen && (
              <div className='filter-dropdown-container'>
                <select onChange={(e) => setSelectedQuality(e.target.value)} className="filter-dropdown">
                  <option value="All">All Grades</option>
                  <option value="A">Grade A</option>
                  <option value="B">Grade B</option>
                  <option value="C">Grade C</option>
                </select>

                <select onChange={(e) => setSelectedStock(e.target.value)} className="filter-dropdown">
                  <option value="All">All Availability</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Limited">Limited</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="listings-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}

              >
                <MarketPlaceCard product={product} />
              </motion.div>
            ))
          ) : (
            {})}
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