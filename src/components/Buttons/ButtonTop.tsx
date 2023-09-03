"use client";
import React from "react";
import button from "@/components/Buttons/Button";

const ButtonTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className="w-full flex text-gray-200 items-center py-4 justify-center bg-custom_light_blue brightness-150 hover:brightness-200 focus-visible:brightness-200"
    >
      Back to top
    </button>
  );
};

export default ButtonTop;
