import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hook";

const CartLink = () => {
  const cartData = useAppSelector((state) => state.app.cart);
  const [cart, setCart] = useState<IStoreProduct[]>([]);

  useEffect(() => {
    setCart(cartData);
  }, [cartData]);

  return (
    <Link
      href={"/cart"}
      className="shrink-0 order-6 justify-center py-1
              flex items-center sm:px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-full relative"
    >
      <Image
        width={100}
        height={50}
        className="w-auto object-cover h-8 self-center"
        src="/images/cartIcon.webp"
        alt="cart icon"
      />
      <p className="text-xs text-white font-bold mt-2">Cart</p>
      <span className="absolute text-custom_yellow left-[21px] text-sm top-0 sm:left-[29px] font-semibold">
        {cart.length || null}
      </span>
    </Link>
  );
};

export default CartLink;
