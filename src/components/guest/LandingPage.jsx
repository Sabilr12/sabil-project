import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import About from "./About";
import ProdukUnggulan from "./ProdukUnggulan";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <About /> 
      <ProdukUnggulan/>
      {/* Menambahkan About Section */}
    </>
  );
};

export default LandingPage;
