import React from "react";
import axios from "axios";
import Wrapper from "@/components/Wrapper";

async function getAllGoods() {
  try {
    const res = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

const AsyncWrapper = async ({ children }: { children: React.ReactNode }) => {
  const goods = await getAllGoods();
  return (
    <main className="grow max-w-[1500px] w-full mx-auto">
      <Wrapper goods={goods}>{children}</Wrapper>
    </main>
  );
};

export default AsyncWrapper;
