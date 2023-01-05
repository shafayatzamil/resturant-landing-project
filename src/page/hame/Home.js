import React from "react";
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
    </div>
  );
};

export default Home;
