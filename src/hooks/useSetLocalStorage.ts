import React, { useEffect } from "react";
import { useAppSelector } from "@/app/redux/hook";

const useSetLocalStorage = (key: string) => {
  let target = useAppSelector((state) => state.app[key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(target));
  }, [key, target]);
};

export default useSetLocalStorage;
