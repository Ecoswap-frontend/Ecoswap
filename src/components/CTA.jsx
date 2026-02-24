import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';
import Wave from '../assets/images/Ellipse 2.png'

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-card"
        >
          {/* Wavy Pattern Overlay */}
          <div className="cta-pattern">
            <img src={Wave} alt="" />
          </div>

          <div className="cta-content">
            <h2 className="cta-title">
              Ready to join the circular revolution?
            </h2>
            <p className="cta-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="cta-buttons">
              <button className="btn-cta-buyer">
                Register as a buyer
              </button>
              <button className="btn-cta-seller">
                Register as a seller
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

