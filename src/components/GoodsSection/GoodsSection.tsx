import React from "react";
import GoodsList from "@/components/GoodsSection/GoodsList";

const GoodsSection = () => {
  return (
    <div className="relative mx-5 -mt-20 md:-mt-20 xl:-mt-32 z-20 mb-10 max-w-[1480px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lgx:grid-cols-3 xxxl:grid-cols-4 gap-6 px-2">
        <GoodsList />
      </div>
    </div>
  );
};

export default GoodsSection;
