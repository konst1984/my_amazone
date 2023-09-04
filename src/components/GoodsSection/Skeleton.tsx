import React from "react";

const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lgx:grid-cols-3 xxxl:grid-cols-4 gap-6 px-2">
      {Array(4)
        .fill("skeleton")
        .map((_, index) => (
          <div
            key={index}
            className="skeleton flex flex-col justify-between w-full bg-gray-200 text-black p-4 rounded-lg overflow-hidden"
          >
            <div className="w-full relative bg-gradient-to-r h-[320px] max-h-80 from-gray-200 to-gray-400 animate-pulse"></div>
            <hr />
            <div className="px-4 py-3 flex flex-col h-auto grow gap-2 bg-gray-200 w-full justify-between">
              <p className="text-xs text-gray-500 tracking-wide h-4 rounded-xl bg-gray-300 w-28 animate-pulse" />
              <p className="text-base font-medium h-4 rounded-xl bg-gray-300 w-20 animate-pulse" />
              <p className="text-xs text-gray-500 tracking-wide h-5 rounded-xl bg-gray-300  w-24 animate-pulse" />
              <p className="text-custom_blue font-semibold h-5 rounded-xl bg-gray-300  w-28 animate-pulse" />
              <p className="text-xs text-gray-600 text-justify h-10 rounded-xl bg-gray-300 w-full animate-pulse" />
              <p className="text-xs text-gray-600 text-justify h-8 rounded-lg bg-gray-300 w-28 animate-pulse" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
