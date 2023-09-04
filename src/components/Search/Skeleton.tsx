import React from "react";
import NotImage from "@/assets/images/no-image_400.webp";
import Image from "next/image";

const Skeleton = () => {
  return (
    <div className="grow grid w-full m-auto px-6 gap-10 py-4 text-black">
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1 mb-2">
            <p className="flex items-center justify-between border-b-[1px] border-b-gray-200 pb-1 text-2xl font-semibold text-gray-200 animate-pulse">
              Found goods list
            </p>
          </div>
          <div className="overflow-auto max-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-2">
            {Array(2)
              .fill("skeleton")
              .map((_, index) => (
                <div
                  key={index}
                  className="p-2 xxxl:p-0 relative bg-gray-100 rounded-lg flex flex-col xxxl:flex-row items-center gap-4 border border-gray-300"
                >
                  <div
                    className="min-w-[180px] rounded-lg xxxl:rounded-none xxxl:border-r
                border-gray-300 shrink-0 relative sm:min-w-[270px] bg-black/20 animate-pulse s:min-h-[340px]"
                  >
                    <Image
                      className="object-cover h-auto aspect-[1/1.3] opacity-0"
                      width={250}
                      height={250}
                      src={NotImage}
                      alt="not image"
                    />
                  </div>
                  <div className="flex items-center sm:p-4 gap-4">
                    <div className="flex flex-col gap-1 h-full items-start">
                      <p className="w-[90px] h-[28px] bg-gray-300 animate-pulse rounded-xl" />
                      <p className="w-[180px] h-5 bg-gray-300 animate-pulse rounded-xl" />
                      <p className="w-[80px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
                      <p className="w-full bg-gray-300 animate-pulse rounded-xl text-transparent">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla non magni facili blanditiis molestias soluta
                        eveniet illum accusantium eius mollitia eligendi, ex
                        iste doloribus magnam.
                      </p>
                      <div className="flex flex-col items-start lgx:flex-row lgx:items-center w-full justify-between gap-1 my-2">
                        <div className="text-sm text-gray-600 space-y-2">
                          <p className="w-[90px] h-5 bg-gray-300 animate-pulse rounded-xl" />
                          <p className="w-[150px] h-5 bg-gray-300 animate-pulse rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
