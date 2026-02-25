
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="hero-badge">
            The future of circular economy
          </div>
          
          <h1 className="hero-title">
            Turning Waste <br />
            <span className="serif-italic hero-title-accent">Into Value</span>
          </h1>
          
          <div className="hero-buttons">
            <button onClick={onGetStarted} className="btn-hero-primary">
              Get Started
            </button>
            <button className="btn-hero-secondary">
              Sign In
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12k+</div>
              <div className="stat-label">Tons Recycled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">450+</div>
              <div className="stat-label">Global Supplier</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24hrs</div>
              <div className="stat-label">Avg. Response</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200" 
              alt="Recycled plastic bottles" 
              className="hero-image"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hero-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

