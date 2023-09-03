import React from "react";
import Image from "next/image";
import ButtonTop from "@/components/Buttons/ButtonTop";

const OverFooter = () => {
  return (
    <>
      <ButtonTop />
      <div className="p-[10px] w-full h-20 bg-custom_light_blue text-gray-300 flex flex-wrap items-center justify-center gap-4">
        <Image
          width={100}
          height={100}
          className="w-24 h-auto"
          src="/images/logo.webp"
          alt="logo"
        />
        <p className="text-sm -mt-4">
          All rights reserved{" "}
          <a
            className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
            href="https://reactbd.com"
            target="_blank"
          >
            @reactbd.com
          </a>
        </p>
      </div>
    </>
  );
};

export default OverFooter;
