import React from 'react';
import Navigation from '../components/guest/Navigation'; 
import HeroSection from '../components/guest/HeroSection'; 
import About from '../components/guest/About'; 
import ProdukUnggulan from '../components/guest/ProdukUnggulan';
import Footer from '../components/guest/Footer';

const GuestLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <About />
      <ProdukUnggulan/> 
      <Footer/>{}
      <main>{children}</main>
    </div>
  );
};

export default GuestLayout;
