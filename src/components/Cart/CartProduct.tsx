import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useAppDispatch } from "@/app/redux/hook";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/app/redux/features/appSlice";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import ProductCardContent from "@/components/GoodsSection/ProductCardContent";
import NotImage from "@/assets/images/no-image_400.webp";

interface IProduct {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface ICartGoodsProps {
  product: IProduct;
}

const CartProduct = ({ product }: ICartGoodsProps) => {
  const dispatch = useAppDispatch();
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
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <button
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      ...product,
                      quantity: 1,
                    })
                  )
                }
                className="text-black w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </button>
              <span className="text-black">{quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      ...product,
                      quantity: 1,
                    })
                  )
                }
                className="text-black w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </button>
            </div>
            <Button
              onClick={() => dispatch(deleteProduct(_id))}
              theme={ButtonTheme.DELETE}
            >
              remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
