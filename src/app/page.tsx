import Slider from "@/components/Slider";
import GoodsSection from "@/components/GoodsSection/GoodsSection";
import React from "react";

const Home = () => {
  return (
    <main className="relative pb-10 bg-gray-100 grow">
      <Slider />
      <GoodsSection />
    </main>
  );
};

export default Home;
