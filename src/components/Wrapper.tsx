"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hook";
import { setAllGoods } from "@/app/redux/features/appSlice";

interface IGoodsList {
  goods: IProductProps[] | [];
}

const Wrapper = ({
  children,
  goods,
}: {
  children: React.ReactNode;
  goods: IGoodsList;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllGoods(goods));
  }, [dispatch, goods]);

  return <>{children}</>;
};

export default Wrapper;
