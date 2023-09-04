"use client";
import React from "react";
import FavoriteProduct from "@/components/Favorites/FavoriteProduct";
import { useAppSelector } from "@/app/redux/hook";
import Reset from "@/components/Buttons/Reset";
import EmptyFavoritesList from "@/components/Favorites/EmptyFavoritesList";
import Skeleton from "@/components/Favorites/Skeleton";
import useHasMounted from "@/hooks/useHasMounted";

const FavoritesList = () => {
  const hasMounted = useHasMounted();
  const favorites = useAppSelector((state) => state.app.favorites);

  if (!hasMounted) {
    return <Skeleton />;
  }

  return (
    <div className="bg-white p-4 rounded-lg">
      <p className="flex items-center justify-between border-b-[1px] text-2xl font-semibold text-amazon_blue border-b-gray-400 pb-1 mb-2">
        Favorite Items
      </p>
      {favorites.length > 0 ? (
        <>
          <div className="overflow-auto max-h-[70vh]">
            {favorites.map((product: IStoreProduct, index) => (
              <FavoriteProduct
                key={product._id}
                product={product}
                index={index}
              />
            ))}
          </div>
          <Reset
            textModal="Are you sure to reset your items from the favorites list?"
            textButton="reset to favorites"
            resetTarget="favorites"
          />
        </>
      ) : (
        <EmptyFavoritesList />
      )}
    </div>
  );
};

export default FavoritesList;
