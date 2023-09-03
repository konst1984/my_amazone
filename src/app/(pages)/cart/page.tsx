"use client";
import React from "react";
import CartPayment from "@/components/Cart/CartPayment";
import EmptyCart from "@/components/Cart/EmptyCart";
import { useAppSelector } from "@/app/redux/hook";
import CartProduct from "@/components/Cart/CartProduct";
import Reset from "@/components/Buttons/Reset";
import { resetCart } from "@/app/redux/features/appSlice";
import useHasMounted from "@/hooks/useHasMounted";
import Loader from "@/components/GoodsSection/Loader";

const Cart = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <Loader />;
  }

  return (
    <div className="min-h-[calc(100vh-200px)]">
      {cart.length > 0 ? (
        <main className="flex flex-col lgx:flex-row max-w-screen-2xl mx-auto px-6 gap-10 py-4 bg-gray-300 min-h-[inherit]">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1 text-2xl font-semibold text-custom_blue">
                Shopping Cart
              </p>
              <div className="pt-2 flex flex-col gap-2 overflow-auto max-h-[70vh]">
                {cart.map((product: IStoreProduct) => (
                  <CartProduct key={product._id} product={product} />
                ))}
              </div>
            </div>
            <Reset
              textModal="Are you sure to reset your items from the cart?"
              textButton="reset to cart"
              resetTarget="cart"
            />
          </div>
          <div className="bg-white h-64 p-4 rounded-lg flex items-center justify-center min-w-[250px] shadow-card">
            <CartPayment />
          </div>
        </main>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
