import React from "react";
import Link from "next/link";

const EmptyFavoritesList = () => {
  return (
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
  );
};

export default EmptyFavoritesList;
