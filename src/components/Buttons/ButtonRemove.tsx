import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { deleteFavorite, deleteProduct } from "@/app/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import useSetLocalStorage from "@/hooks/useSetLocalStorage";

const actions = {
  cart: deleteProduct,
  favorites: deleteFavorite,
};

interface IButtonRemove {
  id: number;
  keyAction: string;
}

const ButtonRemove = ({ id, keyAction }) => {
  const dispatch = useAppDispatch();
  const target = useAppSelector((state) => state.app[keyAction]);

  useSetLocalStorage(keyAction);

  const handleClick = () => {
    if (target.length === 1) {
      localStorage.removeItem(keyAction);
    }
    dispatch(actions[keyAction](id));
  };

  return (
    <Button onClick={handleClick} theme={ButtonTheme.DELETE}>
      remove
    </Button>
  );
};

export default ButtonRemove;
