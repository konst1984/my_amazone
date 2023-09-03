import React from "react";
import Image from "next/image";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { signIn } from "next-auth/react";
import { useAppSelector } from "@/app/redux/hook";

const EmptyCart = () => {
  const userInfo = useAppSelector((state) => state.app.userInfo);

  return (
    <main className="px-[18px] py-[14px] bg-gray-300 min-h-[inherit]">
      <section className="flex flex-col gap-5">
        <div className="flex flex-col items-center pt-5 py-[15px] gap-5 bg-white md:flex-row">
          <Image
            width={275}
            height={156}
            src="/images/emptycart.svg"
            alt="empty cart"
            className="w-full md:w-[275px]"
          />
          <div className="flex flex-col gap-4 p-2 items-center">
            <h1 className="text-2xl text-black text-center">
              Your Amazon Cart is empty
            </h1>
            {!userInfo && (
              <div className="flex gap-2">
                <Button theme={ButtonTheme.OUTLINE} onClick={() => signIn()}>
                  Sign up now
                </Button>
              </div>
            )}
          </div>
        </div>
        <p className="text-xs text-black">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item&apos;s most recent price. Shopping CartLearn
          more Do you have a gift card or promotional code? We&apos;ll ask you
          to enter your claim code when it&apos;s time to pay.
        </p>
      </section>
    </main>
  );
};

export default EmptyCart;
