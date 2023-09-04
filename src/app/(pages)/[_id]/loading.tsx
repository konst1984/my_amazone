import React from "react";
import Loader from "@/components/Loader";
import SingleProductSkeleton from "@/components/SingleProductSkeleton";

const Loading = () => {
  return (
    <>
      <Loader />
      <SingleProductSkeleton />
    </>
  );
};

export default Loading;
