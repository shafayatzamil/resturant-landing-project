import React from "react";
import Analytics from "./Analytics";
import HeroSection from "./HeroSection";
import Managment from "./Managment";
import Navbar from "./Navbar";
import TrastedCompany from "./TrastedCompany";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrastedCompany />
      <Managment />
      <Analytics />
    </div>
  );
};

export default Home;
