"use client";
import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { addToCart, addToFavorite } from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import useSetLocalStorage from "@/hooks/useSetLocalStorage";

const ButtonsIcons = ({ product }: { product: IProductProps }) => {
  const dispatch = useAppDispatch();

  useSetLocalStorage("cart");
  useSetLocalStorage("favorites");

  const addCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const addFavorite = () => {
    dispatch(addToFavorite({ ...product, quantity: 1 }));
  };

  return (
    <div
      className="w-12 h-24 absolute bottom-10 right-0
                border-gray-400 rounded-md
                 flex flex-col gap-2
                 translate-x-20 group-hover:-translate-x-4 group-focus-within:-translate-x-4 group-focus-visible:-translate-x-4 duration-200 delay-200"
    >
      <Button
        theme={ButtonTheme.ICON}
        onClick={addCart}
        aria-label="Add product to cart"
        title="Add product to cart"
      >
        <HiShoppingCart />
      </Button>
      <Button
        theme={ButtonTheme.ICON}
        onClick={addFavorite}
        aria-label="Add product to favorites"
        title="Add product to favorites"
      >
        <FaHeart />
      </Button>
    </div>
  );
};

export default ButtonsIcons;
