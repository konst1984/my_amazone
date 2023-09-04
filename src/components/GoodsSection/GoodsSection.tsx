import React from "react";
import GoodsList from "@/components/GoodsSection/GoodsList";

const GoodsSection = () => {
  return (
    <div className="relative mx-5 -mt-20 md:-mt-20 xl:-mt-32 z-20 mb-10 max-w-[1480px]">
      <GoodsList />
    </div>
  );
};

export default GoodsSection;
