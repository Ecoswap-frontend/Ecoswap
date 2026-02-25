import React, { useState } from 'react'
import './Footer.css'
import Linkedin from '../assets/linklden.svg?react';
import WhatsApp from '../assets/whatsapp.svg?react';
import Instagram from '../assets/instgram.svg?react';
import Logo from '../assets/logo.svg?react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <Logo size={24} />
              </div>
              <span className="logo-text">Eco<span>Swap</span></span>
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-link">
                <WhatsApp size={24} />
              </a>
            </div>
          </div>

          <div className="footer-nav-section">
            <div>
              <ul className="footer-list">
                <h4 className="footer-column-title">Marketplace</h4>
                <li><a href="#">Plastics</a></li>
                <li><a href="#">Metals</a></li>
                <li><a href="#">Paper and Cardboard</a></li>
                <li><a href="#">Glass</a></li>
              </ul>
            </div>
            <div>
              <ul className="footer-list">
                <h4 className="footer-column-title">Company</h4>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <ul className="footer-list">
                <h4 className="footer-column-title">Resources</h4>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Grading Guide</a></li>
                <li><a href="#">Logistics</a></li>
                <li><a href="#">API Docs</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 Ecoswap. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;