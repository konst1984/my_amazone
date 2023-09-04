import React from "react";
import Loader from "@/components/Loader";
import Skeleton from "@/components/Search/Skeleton";

const Loading = () => {
  return (
    <>
      <Loader />
      <Skeleton />
    </>
  );
};

export default Loading;
