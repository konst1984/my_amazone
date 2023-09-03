"use client";
import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { addToCart, addToFavorite } from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const ButtonsIcons = ({ product }: { product: IProductProps }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="w-12 h-24 absolute bottom-10 right-0
                border-gray-400 rounded-md
                flex flex-col gap-2 translate-x-20 group-hover:-translate-x-2 transition-transform duration-300"
    >
      <Button
        theme={ButtonTheme.ICON}
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
      >
        <HiShoppingCart />
      </Button>
      <Button
        theme={ButtonTheme.ICON}
        onClick={() => dispatch(addToFavorite({ ...product, quantity: 1 }))}
      >
        <FaHeart />
      </Button>
    </div>
  );
};

export default ButtonsIcons;
