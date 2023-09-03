"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hook";
import Link from "next/link";

const FavoritesLink = () => {
  const favoritesData = useAppSelector((state) => state.app.favorites);
  const [favorites, setFavorites] = useState<IStoreProduct[]>([]);

  useEffect(() => {
    setFavorites(favoritesData);
  }, [favoritesData]);

  return (
    <Link
      href={"/favorites"}
      className="text-xs text-gray-100 justify-center flex flex-col shrink-0 px-2 py-1 border border-transparent hover:border-white cursor-pointer duration-300 h-full relative"
    >
      <p>Marked</p>
      <p className="text-white font-bold">& Favorite</p>
      {favorites.length > 0 && (
        <span className="absolute right-2 top-0 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-custom_yellow">
          {favorites.length}
        </span>
      )}
    </Link>
  );
};

export default FavoritesLink;
