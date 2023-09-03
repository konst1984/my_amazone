"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hook";
import { setAllGoods } from "@/app/redux/features/appSlice";
import ProductCard from "@/components/GoodsSection/ProductCard";

interface IGoodsList {
  goods: IProductProps[] | [];
}

const GoodsList = ({ goods }: IGoodsList) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllGoods(goods));
  }, [dispatch, goods]);

  return (
    <>
      {goods?.map((product: IProductProps) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};

export default GoodsList;
