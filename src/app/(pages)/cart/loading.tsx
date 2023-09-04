import React from "react";
import Skeleton from "@/components/Cart/Skeleton";
import Loader from "@/components/Loader";

const Loading = () => {
  return (
    <>
      <Loader />
      <Skeleton />
    </>
  );
};

export default Loading;
