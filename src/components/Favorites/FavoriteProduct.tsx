import React from "react";
import Image from "next/image";
import ProductCardContent from "@/components/GoodsSection/ProductCardContent";
import NotImage from "@/assets/images/no-image_400.webp";
import ButtonAddCart from "@/components/Buttons/ButtonAdd";
import ButtonRemove from "@/components/Buttons/ButtonRemove";

interface IFavoriteProps extends IProductProps {
  quantity: number;
}
interface IFavorite {
  product: IFavoriteProps;
  index: number;
}

const FavoriteProduct = ({ product, index }: IFavorite) => {
  const { _id, description, price, title, quantity, brand } = product;

  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2 mt-2">
      <Image
        src={product.image || NotImage}
        alt="Product image"
        width={150}
        height={150}
        priority={index === 0 && true}
        className="w-auto h-auto"
      />
      <div className="flex products-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <ProductCardContent
            description={description}
            price={price}
            quantity={quantity}
            brand={brand}
            title={title}
          />
          <div className="flex flex-col gap-2 sm:flex-row">
            <ButtonAddCart product={product} />
            <ButtonRemove keyAction="favorites" id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
