import React from "react";
import Analytics from "./Analytics";
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
      <Analytics />
      <Pricing />
      <Testomonial />
      <Patner />
      <SuceessfulStories />
    </div>
  );
};

export default Home;
