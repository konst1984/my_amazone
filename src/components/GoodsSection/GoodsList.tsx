"use client";
import React from "react";
import { useAppSelector } from "@/app/redux/hook";
import ProductCard from "@/components/GoodsSection/ProductCard";
import Skeleton from "@/components/GoodsSection/Skeleton";
import useHasMounted from "@/hooks/useHasMounted";

const GoodsList = () => {
  const goods = useAppSelector((state) => state.app.allGoods);
  const hasMounted = useHasMounted();

  return (
    <>
      {hasMounted && goods.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lgx:grid-cols-3 xxxl:grid-cols-4 gap-6 px-2">
          {goods?.map((product: IProductProps) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default GoodsList;
