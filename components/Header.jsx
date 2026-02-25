
import React from 'react';
import { Leaf, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = ({ onDashboardClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <div className="header-logo-icon">
            <Leaf size={24} />
          </div>
          <span className="header-logo-text">EcoSwap</span>
        </div>

        <nav className="header-nav">
          <button onClick={onDashboardClick} className="nav-link-active">Dashboard</button>
          <a href="#" className="nav-link">Marketplace</a>
          <a href="#" className="nav-link">My Orders</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle">
            <Moon size={20} />
          </button>
          <div className="auth-buttons">
            <button className="btn-signin">
              Sign In
            </button>
            <button className="btn-getstarted">
              Get Started
            </button>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-content">
              <a href="#" className="mobile-nav-link mobile-nav-link-active">Dashboard</a>
              <a href="#" className="mobile-nav-link mobile-nav-link-inactive">Marketplace</a>
              <a href="#" className="mobile-nav-link mobile-nav-link-inactive">My Orders</a>
              <div className="mobile-auth-buttons">
                <button className="btn-mobile-signin">
                  Sign In
                </button>
                <button className="btn-mobile-getstarted">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

