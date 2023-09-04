import React from "react";
import FavoritesList from "@/components/Favorites/FavoritesList";

const Favorites = () => {
  return (
    <div className="grid grow w-full m-auto px-2 sm:px-6 gap-10 py-4 text-[var(--text-color-inverted)] bg-gray-300 min-h-[inherit]">
      <div className="flex flex-col gap-4">
        <FavoritesList />
      </div>
    </div>
  );
};

export default Favorites;
