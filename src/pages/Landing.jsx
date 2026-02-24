import React from 'react'
import "./Landing.css";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marketplace from '../components/Marketplace';
import CTA from '../components/CTA';
import Footer from '../components/Footer'


function Landing() {
  return (
    <div className="app-wrapper">
      <Header/>
      <main>
        <Hero />
        <Marketplace />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Landing
