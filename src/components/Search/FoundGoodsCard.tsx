import React from "react";
import FormattedPrice from "@/components/FormattedPrice";
import LinkImageHover from "@/components/LinkImageHover";

interface IFoundGoodsCard {
  product: IStoreProduct;
}

const FoundGoodsCard = ({ product }: IFoundGoodsCard) => {
  const { brand, description, price, title, category, oldPrice, isNew } =
    product;
  return (
    <div className="p-2 xxxl:p-0 relative bg-gray-100 rounded-lg flex flex-col xxxl:flex-row items-center gap-4 border border-gray-300">
      <div className="min-w-[180px] rounded-lg xxxl:rounded-none xxxl:border-r border-gray-300 shrink-0 relative sm:min-w-[270px] bg-black/20 hover:bg-transparent duration-300">
        {isNew && (
          <div className="absolute top-2 right-2 text-red-700 text-lg uppercase font-bold animate-pulse">
            New
          </div>
        )}
        <LinkImageHover product={product} />
      </div>
      <div className="flex items-center sm:p-4 gap-4">
        <div className="flex flex-col gap-1 h-full items-start">
          <p className="grow text-lg font-semibold text-custom_blue">{title}</p>
          <p className="text-sm text-gray-600 ">
            Category:{" "}
            <span className="uppercase font-semibold">{category}</span>
          </p>
          <p className="text-sm text-gray-600 ">
            Brand: <span className="uppercase font-semibold">{brand}</span>
          </p>
          <p className="text-sm text-gray-600 ">{description}</p>
          <div className="flex flex-col items-start lgx:flex-row lgx:items-center w-full justify-between gap-1 my-2">
            <div className="text-sm text-gray-600">
              <p>
                Price:
                <span className="ml-1 font-semibold text-amber-800">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p>
                Old price:
                <span className="ml-1 font-semibold text-custom_blue">
                  <FormattedPrice amount={oldPrice} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundGoodsCard;
