import Slider from "@/components/Slider";
import GoodsSection from "@/components/GoodsSection/GoodsSection";
import React from "react";

const Home = async () => {
  return (
    <div className="relative pb-10 bg-gray-100 grow">
      <Slider />
      <GoodsSection />
    </div>
  );
};

export default Home;
