import React from "react";
import NotImage from "@/assets/images/no-image_400.webp";
import Image from "next/image";

const SingleProductSkeleton = () => {
  return (
    <div className="grow max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      <div className="w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg justify-evenly shadow-card">
        <div className="flex items-center justify-center bg-gray-200 animate-pulse rounded-lg relative group overflow-hidden">
          <Image
            className="object-cover h-auto aspect-[1/1.2] opacity-0"
            width={500}
            height={500}
            src={NotImage}
            alt="not image"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
          <p className="w-[130px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
          <p className="w-[180px] h-[28px] md:h-[36px] bg-gray-300 animate-pulse rounded-xl" />
          <p className="w-full bg-gray-300 animate-pulse rounded-xl text-transparent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
            magni facili blanditiis molestias soluta eveniet illum accusantium
            eius mollitia eligendi, ex iste doloribus magnam.
          </p>
          <p className="w-[200px] h-[28px] bg-gray-300 animate-pulse rounded-xl" />
          <p className="w-[125px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
          <p className="w-[115px] h-[34px] bg-gray-300 animate-pulse rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
