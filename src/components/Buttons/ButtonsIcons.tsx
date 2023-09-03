"use client";
import React, { useEffect } from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { addToCart, addToFavorite } from "@/app/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import useSetLocalStorage from "@/hooks/useSetLocalStorage";

const ButtonsIcons = ({ product }: { product: IProductProps }) => {
  const dispatch = useAppDispatch();

  useSetLocalStorage("cart");
  useSetLocalStorage("favorites");

  return (
    <div
      className="w-12 h-24 absolute bottom-10 right-0
                border-gray-400 rounded-md
                flex flex-col gap-2 translate-x-20 group-hover:-translate-x-2 transition-transform duration-300"
    >
      <Button
        theme={ButtonTheme.ICON}
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        aria-label="Add product to cart"
        title="Add product to cart"
      >
        <HiShoppingCart />
      </Button>
      <Button
        theme={ButtonTheme.ICON}
        onClick={() => dispatch(addToFavorite({ ...product, quantity: 1 }))}
        aria-label="Add product to favorites"
        title="Add product to favorites"
      >
        <FaHeart />
      </Button>
    </div>
  );
};

export default ButtonsIcons;
