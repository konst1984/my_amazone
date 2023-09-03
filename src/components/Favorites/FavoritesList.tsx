"use client";
import React from "react";
import FavoriteProduct from "@/components/Favorites/FavoriteProduct";
import { useAppSelector } from "@/app/redux/hook";
import Reset from "@/components/Buttons/Reset";
import { resetFavorites } from "@/app/redux/features/appSlice";
import EmptyFavoritesList from "@/components/Favorites/EmptyFavoritesList";
import useHasMounted from "@/hooks/useHasMounted";
import Loader from "@/components/GoodsSection/Loader";

const FavoritesList = () => {
  const favorites = useAppSelector((state) => state.app.favorites);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <Loader />;
  }

  return (
    <>
      {favorites.length > 0 ? (
        <>
          <div className="overflow-auto max-h-[70vh] mr-2">
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
    </>
  );
};

export default FavoritesList;
