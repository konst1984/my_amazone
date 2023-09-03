import React from "react";
import GoodsList from "@/components/GoodsSection/GoodsList";
import axios from "axios";

async function getAllGoods() {
  try {
    const res = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

const GoodsSection = async () => {
  const goods = await getAllGoods();

  return (
    <div className="relative mx-6 -mt-20 md:-mt-20 xl:-mt-32 z-20 mb-10 max-w-[1480px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lgx:grid-cols-3 xxxl:grid-cols-4 gap-6 px-2">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default GoodsSection;
