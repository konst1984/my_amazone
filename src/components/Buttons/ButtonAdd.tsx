import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { addToCart } from "@/app/redux/features/appSlice";
import { useAppDispatch } from "@/app/redux/hook";
import useSetLocalStorage from "@/hooks/useSetLocalStorage";

const ButtonAddCart = ({ product }: { product: IProductProps }) => {
  const dispatch = useAppDispatch();

  useSetLocalStorage("cart");

  return (
    <Button
      onClick={() =>
        dispatch(
          addToCart({
            ...product,
            quantity: 1,
          })
        )
      }
      theme={ButtonTheme.YELLOW}
    >
      add to cart
    </Button>
  );
};

export default ButtonAddCart;
