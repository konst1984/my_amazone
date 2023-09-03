import React from "react";
import FavoritesList from "@/components/Favorites/FavoritesList";

const Favorites = () => {
  return (
    <div className="grid grow w-full m-auto px-6 gap-10 py-4 text-[var(--text-color-inverted)] bg-gray-300 min-h-[inherit]">
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded-lg">
          <p className="flex items-center justify-between border-b-[1px] text-2xl font-semibold text-amazon_blue border-b-gray-400 pb-1 mb-2">
            Favorite Items
          </p>
          <FavoritesList />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
