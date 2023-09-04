import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <p className="flex items-center justify-between border-b-[1px] border-b-gray-200 pb-1 text-2xl font-semibold text-gray-200 animate-pulse">
        Favorite Items
      </p>
      <div className="overflow-auto max-h-[70vh]">
        {Array(1)
          .fill("skeleton")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 grid grid-cols-1 md:grid-cols-favorite items-center gap-4 mb-2 mr-2"
            >
              <div className="flex justify-center items-center bg-gray-200 rounded-lg min-h-[280px] animate-pulse rounded-xl" />
              <div className="px-2">
                <div className="flex flex-col gap-3">
                  <p className="w-[130px] h-[28px] bg-gray-300 animate-pulse rounded-xl" />
                  <p className="w-[110px] h-[20px] bg-gray-300 animate-pulse rounded-xl" />
                  <p className="w-full h-[40px] bg-gray-300 animate-pulse rounded-xl" />
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
      <p className="h-[34px] w-[127px] bg-gray-300 animate-pulse rounded-lg" />
    </div>
  );
};

export default Skeleton;
