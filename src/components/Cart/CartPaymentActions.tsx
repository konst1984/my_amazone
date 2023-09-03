"use client";

import React from "react";
import FormattedPrice from "@/components/FormattedPrice";
import { useAppSelector } from "@/app/redux/hook";
import { selectTotalAmount } from "@/app/redux/features/appSlice";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

const CartPaymentActions = () => {
  const userInfo = useAppSelector((state) => state.app.userInfo);
  const cart = useAppSelector((state) => state.app.cart);
  const totalAmount = useAppSelector(selectTotalAmount);
  const { data: session } = useSession();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart, email: session?.user?.email }),
    });
    const checkoutSession = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result?.error) {
      alert(result?.error.message);
    }
  };

  return (
    <>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (
        <div className="flex flex-col items-center">
          <button
            onClick={handleCheckout}
            className="w-full h-10 text-sm font-semibold
            bg-custom_blue text-white rounded-lg  hover:bg-custom_yellow focus-visible:text-black duration-300"
          >
            Proceed to Buy
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="w-full h-10 text-sm font-semibold bg-custom_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
            Proceed to Buy
          </button>
          <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
            Please login to continue
          </p>
        </div>
      )}
    </>
  );
};

export default CartPaymentActions;
