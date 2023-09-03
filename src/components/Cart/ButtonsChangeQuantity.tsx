import React from "react";
import {
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import { LuMinus, LuPlus } from "react-icons/lu";
import useSetLocalStorage from "@/hooks/useSetLocalStorage";

interface IButtonsChangeQuantity {
  product: IStoreProduct;
}

const ButtonsChangeQuantity = ({ product }: IButtonsChangeQuantity) => {
  const dispatch = useAppDispatch();

  useSetLocalStorage("cart");

  return (
    <div className="flex items-center justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
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
      <span className="text-black">{product.quantity}</span>
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
  );
};

export default ButtonsChangeQuantity;
