
import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import Icon from '../assets/icon.svg?react';
import Moon from '../assets/moon.svg?react';
import DarkMoon from '../assets/darkmoon.svg?react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-bg');
      document.body.classList.remove('light-bg')
    } else {
      document.body.classList.remove('dark-bg');
      document.body.classList.add('light-bg')
    }
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="header-logo">
          <div className="header-logo-icon">
            <Icon />
          </div>
          <span className="header-logo-text">Eco<span>Swap</span></span>
        </div>

        <nav className="header-nav">
          <a href="#" className="nav-link-active">Dashboard</a>
          <a href="#" className="nav-link">Marketplace</a>
          <a href="#" className="nav-link">My Orders</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} >
            {isDarkMode ? <Moon /> : <DarkMoon/>}
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