import React from "react";
import Image from "next/image";
import ProductCardContent from "@/components/GoodsSection/ProductCardContent";
import NotImage from "@/assets/images/no-image_400.webp";
import ButtonsChangeQuantity from "@/components/Cart/ButtonsChangeQuantity";
import ButtonRemove from "@/components/Buttons/ButtonRemove";

interface ICartGoodsProps {
  product: IStoreProduct;
}

const CartProduct = ({ product }: ICartGoodsProps) => {
  const { _id, description, image, price, title, quantity, brand } = product;

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4 p-2">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={image || NotImage}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <ProductCardContent
            description={description}
            price={price}
            quantity={quantity}
            title={title}
            brand={brand}
            total={true}
          />
          <div className="flex items-center gap-6 pb-1">
            <ButtonsChangeQuantity product={product} />
            <ButtonRemove keyAction="cart" id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
