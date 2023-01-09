import React from "react";
import Analytics from "./Analytics";
import Comunication from "./Comunication";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Managment from "./Managment";
import Navbar from "./Navbar";
import Patner from "./Patner";
import Pricing from "./Pricing";
import SuceessfulStories from "./SuceessfulStories";
import Testomonial from "./Testomonial";
import TrastedCompany from "./TrastedCompany";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrastedCompany />
      <Managment />
      <Comunication />
      <Analytics />
      <Pricing />
      <Testomonial />
      <Patner />
      <SuceessfulStories />
      <Footer />
    </div>
  );
};

export default Home;
