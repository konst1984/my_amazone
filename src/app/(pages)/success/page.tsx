"use client";
import React from "react";
import { useAppDispatch } from "@/app/redux/hook";
import { resetCart } from "@/app/redux/features/appSlice";
import Link from "next/link";

const Success = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-20">
      <h1 className="text-2xl text-hoverBg font-semibold">
        Thank you for shopping in next_amazon
      </h1>
      <Link
        className="text-lg text-gray-500 hover:bg-gray-400 px-2 rounded-3xl underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300"
        href={"/"}
        onClick={() => dispatch(resetCart())}
      >
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default Success;
