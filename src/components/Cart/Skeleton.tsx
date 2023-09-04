import React from "react";
import NotImage from "@/assets/images/no-image_400.webp";
import Image from "next/image";

const Skeleton = () => {
  return (
    <div className="min-h-[50vh]">
      <div className="grid grid-cols-1 lgx:grid-cols-3 max-w-screen-2xl mx-auto px-6 gap-8 py-4 bg-gray-300 min-h-[inherit]">
        <div className="flex flex-col gap-4 lgx:col-span-2">
          <div className="bg-white p-4 rounded-lg">
            <p className="flex items-center justify-between border-b-[1px] border-b-gray-200 pb-1 text-2xl font-semibold text-gray-200 animate-pulse">
              Shopping Cart
            </p>
            <div className="pt-2 flex flex-col gap-2 overflow-auto max-h-[70vh]">
              {Array(1)
                .fill("skeleton")
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 flex-col md:flex-row rounded-lg animate-pulse flex items-center gap-4 p-2"
                  >
                    <Image
                      className="object-cover h-auto aspect-[1/1.3] opacity-0 max-h-[230px]"
                      width={200}
                      height={200}
                      src={NotImage}
                      alt="not image"
                    />
                    <div className="flex items-center px-2 gap-4 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <p className="w-[130px] h-[28px] bg-gray-300 animate-pulse rounded-xl" />
                        <p className="w-[110px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
                        <p className="w-full bg-gray-300 animate-pulse rounded-xl text-transparent">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nulla non magni facili blanditiis molestias
                          soluta eveniet illum accusantium eius mollitia
                          eligendi, ex iste doloribus magnam.
                        </p>
                        <p className="w-[125px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <p className="w-[115px] h-[34px] bg-gray-300 animate-pulse rounded-xl" />
                          <p className="w-[91px] h-[34px] bg-gray-300 animate-pulse rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <p className="h-[34px] w-[127px] bg-gray-200 animate-pulse rounded-lg" />
        </div>
        <div className="bg-white h-64 p-4 rounded-lg flex items-center justify-center min-w-[250px] shadow-card">
          <div className="flex w-full flex-col gap-4 ">
            <div className="w-full flex gap-2 items-center">
              <p className="rounded-full p-1 h-6 w-6 bg-gray-300 animate-pulse rounded-xl flex items-center justify-center mt-1" />
              <p className="w-full bg-gray-300 animate-pulse rounded-xl h-[60px]" />
            </div>
            <p className="flex items-center justify-between w-full">
              <span className="w-[45px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
              <span className="w-[90px] h-[34px] bg-gray-300 animate-pulse rounded-xl" />
            </p>
            <div className="flex flex-col items-center">
              <p className="w-full h-10 text-sm bg-gray-300 animate-pulse rounded-lg " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
