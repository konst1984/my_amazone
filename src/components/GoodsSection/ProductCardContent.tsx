import React from "react";
import FormattedPrice from "@/components/FormattedPrice";

interface IProductCardContent {
  price: number;
  title: string;
  description: string;
  quantity?: number;
  brand: string;
  total?: boolean;
}

const ProductCardContent = ({
  price,
  title,
  description,
  quantity,
  brand,
  total = false,
}: IProductCardContent) => {
  return (
    <>
      <p className="text-lg font-semibold text-custom_blue">{title}</p>
      <p className="text-sm text-gray-600">{brand}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex flex-col items-start md:flex-row md:items-center w-full justify-between gap-1 my-2">
        <p className="text-sm text-gray-600">
          Unit Price{" "}
          <span className="font-semibold text-custom_blue">
            <FormattedPrice amount={price} />
          </span>
        </p>
        {total && (
          <p className="text-lg font-semibold text-custom_blue">
            <FormattedPrice amount={price * quantity} />
          </p>
        )}
      </div>
    </>
  );
};

export default ProductCardContent;
