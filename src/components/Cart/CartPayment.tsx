import React from "react";
import { SiMediamarkt } from "react-icons/si";
import CartPaymentActions from "@/components/Cart/CartPaymentActions";

const CartPayment = () => {
  return (
    <div className="flex flex-col gap-4 text-black">
      <div className="flex gap-2 items-center">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details....
        </p>
      </div>
      <CartPaymentActions />
    </div>
  );
};

export default CartPayment;
