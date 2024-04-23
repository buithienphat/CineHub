import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
