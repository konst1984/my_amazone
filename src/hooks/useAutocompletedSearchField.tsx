import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hook";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useKeydown } from "@/hooks/useKeyDown";

const useAutocompletedSearchField = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [searchQuery, setSearchQuery] = useState("");
  const allProducts = useAppSelector((state) => state.app.allGoods);
  const [filteredGoods, setFilteredGoods] = useState<IStoreProduct[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useOutsideClick(ref, () => setSearchQuery(""), !!searchQuery);
  useKeydown("Escape", () => setSearchQuery(""), !!searchQuery);

  useEffect(() => {
    const filtered = allProducts.filter((item: IStoreProduct) =>
      item.title.toLocaleLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFilteredGoods(filtered);
  }, [allProducts, searchQuery]);

  return { handleSearch, searchQuery, filteredGoods, setSearchQuery };
};

export default useAutocompletedSearchField;
