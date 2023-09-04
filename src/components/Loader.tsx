import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 z-[100]">
      <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
