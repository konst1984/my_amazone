"use client";
import React from "react";
import { useAppSelector } from "@/app/redux/hook";
import Link from "next/link";
import FavoriteProduct from "@/components/Favorites/FavoriteProduct";
import Reset from "@/components/Buttons/Reset";
import { resetFavorites } from "@/app/redux/features/appSlice";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.app.favoriteData);

  return (
    <div className="grid grow w-full m-auto px-6 gap-10 py-4 text-[var(--text-color-inverted)] bg-gray-300 min-h-[inherit]">
      {favorites.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Favorite Items
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Action</p>
            </div>
            <div className="overflow-auto max-h-[70vh]">
              {favorites.map((product: IStoreProduct) => (
                <FavoriteProduct key={product._id} product={product} />
              ))}
            </div>
          </div>
          <Reset
            textModal="Are you sure to reset your items from the favorites list?"
            textButton="reset to favorites"
            actionFn={resetFavorites}
          />
        </div>
      ) : (
        <div className="p-4 bg-gray-200 min-h-[50vh] space-y-4  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg text-[var(--text-color-inverted)] empty">
          <p className="text-clamp text-center">
            Nothing is available in the Favorite list
          </p>
          <Link
            href="/"
            className="w-52 h-10 bg-amazon_blue text-center
            bg-gray-400 text-[var(--text-color-inverted)] rounded-lg text-sm font-semibold hover:bg-custom_yellow duration-300 mt-2 uppercase px-4 py-2"
          >
            go to shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
