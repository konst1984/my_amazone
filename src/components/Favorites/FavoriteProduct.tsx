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
  const { _id, description, price, title, brand } = product;

  return (
    <div className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 md:grid-cols-favorite items-center gap-4 mb-2 mr-2">
      <div className="flex justify-center items-center bg-amber-100 rounded-lg min-h-[280px] s:min-h-[340px]">
        <Image
          src={product.image || NotImage}
          alt="Product image"
          width={200}
          height={200}
          priority={index === 0 && true}
          className="w-auto h-auto"
        />
      </div>
      <div className="flex products-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <ProductCardContent
            description={description}
            price={price}
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
