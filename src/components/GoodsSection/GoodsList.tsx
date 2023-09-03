"use client";
import React from "react";
import { useAppSelector } from "@/app/redux/hook";
import ProductCard from "@/components/GoodsSection/ProductCard";

const GoodsList = () => {
  const goods = useAppSelector((state) => state.app.allGoods);

  return (
    <>
      {goods?.map((product: IProductProps) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};

export default GoodsList;
