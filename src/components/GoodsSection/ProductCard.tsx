import React, { memo } from "react";
import FormattedPrice from "@/components/FormattedPrice";
import LinkImageHover from "@/components/LinkImageHover";
import ButtonAddCart from "@/components/Buttons/ButtonAdd";

const ProductCard = memo(({ product }: { product: IProductProps }) => {
  const { title, brand, category, description, isNew, oldPrice, price } =
    product;

  return (
    <div className="flex flex-col justify-between w-full bg-white text-black p-4 border border-gray-300 rounded-lg overflow-hidden">
      <div className="grow w-full relative bg-gradient-to-r from-gray-200 to-gray-400 h-auto max-h-80">
        <LinkImageHover product={product} />
        {isNew && (
          <p className="absolute top-2 right-2 text-custom_blue font-medium text-xs tracking-wide animate-bounce">
            <span className="text-orange-500 font-semibold">SAVE</span>{" "}
            <FormattedPrice amount={oldPrice - price} />
          </p>
        )}
      </div>
      <hr />
      <div className="px-4 py-3 flex flex-col gap-2">
        <p className="text-xs text-gray-500 tracking-wide">{category}</p>
        <p className="text-xs text-gray-500 tracking-wide">{brand}</p>
        <p className="grow text-base font-medium">{title}</p>
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
        <ButtonAddCart product={product} />
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
