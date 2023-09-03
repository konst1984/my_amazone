import React from "react";
import { useAppSelector } from "@/app/redux/hook";
import Link from "next/link";

const FavoritesLink = () => {
  const favorites = useAppSelector((state) => state.app.favoriteData);
  return (
    <Link
      href={"/favorites"}
      className="text-xs text-gray-100 justify-start
          flex flex-col shrink-0 px-2 border border-transparent
          hover:border-white cursor-pointer duration-300 h-[70%] relative"
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
