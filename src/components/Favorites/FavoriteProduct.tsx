import React from "react";
import Image from "next/image";
import { addToCart, deleteFavorite } from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import ProductCardContent from "@/components/GoodsSection/ProductCardContent";
import NotImage from "@/assets/images/no-image_400.webp";

interface IFavoriteProps extends IProductProps {
  quantity: number;
}
interface IFavorite {
  product: IFavoriteProps;
}

const FavoriteProduct = ({ product }: IFavorite) => {
  const dispatch = useAppDispatch();

  const { description, price, title, quantity, brand } = product;

  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2 mt-2">
      <Image
        src={product.image || NotImage}
        alt="Product image"
        width={150}
        height={150}
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
            <Button
              theme={ButtonTheme.YELLOW}
              onClick={() => {
                dispatch(addToCart({ ...product }));
              }}
            >
              add to cart
            </Button>
            <Button
              theme={ButtonTheme.DELETE}
              onClick={() => {
                dispatch(deleteFavorite(product._id));
              }}
            >
              remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
