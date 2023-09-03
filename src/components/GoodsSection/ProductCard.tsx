"use client";
import React from "react";
import FormattedPrice from "@/components/FormattedPrice";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { addToCart } from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import LinkImageHover from "@/components/LinkImageHover";

const ProductCard = ({ product }: { product: IProductProps }) => {
  const { title, brand, category, description, isNew, oldPrice, price } =
    product;

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-between w-full bg-white text-black p-4 border border-gray-300 rounded-lg overflow-hidden">
      <div className="w-full h-auto relative bg-gradient-to-r from-gray-200 to-gray-400">
        <LinkImageHover product={product} />
        {isNew && (
          <p className="absolute top-2 right-2 text-custom_blue font-medium text-xs tracking-wide animate-bounce">
            <span className="text-orange-500 font-semibold">SAVE</span>{" "}
            <FormattedPrice amount={oldPrice - price} />
          </p>
        )}
      </div>
      <hr />
      <div className="px-4 py-3 flex flex-col grow gap-2">
        <p className="text-xs text-gray-500 tracking-wide">{category}</p>
        <p className="grow text-base font-medium">{title}</p>
        <p className="text-xs text-gray-500 tracking-wide">{brand}</p>
        <p className="flex items-center gap-2">
          <span className="text-sm line-through">
            <FormattedPrice amount={oldPrice} />
          </span>
          <span className="text-custom_blue font-semibold">
            <FormattedPrice amount={price} />
          </span>
        </p>
        <p className="text-xs text-gray-600 text-justify">
          {description.substring(0, 120)}
        </p>
        <Button
          onClick={() =>
            dispatch(
              addToCart({
                ...product,
                quantity: 1,
              })
            )
          }
          theme={ButtonTheme.YELLOW}
        >
          add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
