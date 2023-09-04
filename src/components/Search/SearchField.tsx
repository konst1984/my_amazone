"use client";
import React, { RefObject, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import useAutocompletedSearchField from "@/hooks/useAutocompletedSearchField";
import SearchGoods from "@/components/Search/SearchGoods";

const SearchField = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { handleSearch, searchQuery, filteredGoods, setSearchQuery } =
    useAutocompletedSearchField(divRef);

  const path = searchQuery
    ? { pathname: "/search", query: { query: searchQuery } }
    : "";

  return (
    <div
      ref={divRef as RefObject<HTMLDivElement>}
      className="flex w-full order-last lgx:order-3 grow gap-2 min-w-[250px] h-12 lgx:w-auto lgx:inline-flex items-center justify-between relative py-1"
    >
      <input
        onChange={handleSearch}
        value={searchQuery}
        className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-custom_yellow"
        type="text"
        placeholder="Search Amazon"
      />
      <Link
        href={path}
        onClick={() => setSearchQuery("")}
        aria-label="View all the products found on request on a separate page"
        className="w-12 h-10 bg-custom_yellow text-black
        text-2xl active:brightness-100 hover:brightness-75 focus-visible:brightness-75 flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md"
      >
        <HiOutlineSearch />
      </Link>
      {searchQuery && (
        <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
          {filteredGoods.length > 0 ? (
            <>
              {searchQuery &&
                filteredGoods.map((product: IProductProps) => (
                  <Link
                    key={product._id}
                    className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                    href={{
                      pathname: `${product._id}`,
                      query: { ...product },
                    }}
                    onClick={() => setSearchQuery("")}
                  >
                    <SearchGoods product={product} />
                  </Link>
                ))}
            </>
          ) : (
            <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg p-2">
              <p className="text-xl font-semibold animate-bounce text-center">
                Nothing is matches with your search keywords. Please try again!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchField;
