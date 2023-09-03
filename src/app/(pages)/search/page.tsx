"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hook";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FoundGoodsCard from "@/components/SearchField/FoundGoodsCard";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const allProducts = useAppSelector((state) => state.app.allGoods);
  const searchValue = searchParams?.get("query");
  const [foundGoods, setFoundGoods] = useState<IStoreProduct[] | []>([]);

  useEffect(() => {
    if (!searchValue) return;

    const filtered = allProducts.filter((item: IStoreProduct) =>
      item.title.toLocaleLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFoundGoods(filtered);
  }, [allProducts, searchValue]);

  return (
    <div className="grow grid w-full m-auto px-6 gap-10 py-4 text-black">
      {foundGoods.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1 mb-2">
              <p className="text-2xl font-semibold text-amazon_blue">
                Found goods list
              </p>
            </div>
            <div className="overflow-auto max-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-2">
              {foundGoods.map((product: IStoreProduct) => (
                <FoundGoodsCard
                  key={product._id}
                  product={{ ...product, quantity: 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="p-4 bg-gray-200 min-h-[50vh] space-y-4 flex flex-col items-center justify-center py-5
        rounded-lg shadow-lg
        text-[var(--text-color-inverted)]
        empty"
        >
          <p className="text-center text-xl">
            No products were found for your request.
            <br />
            Change the search query.
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

export default SearchPage;
