"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/redux/hook";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import ConfirmResetModal from "@/components/ConfirmResetModal";
import { resetCart, resetFavorites } from "@/app/redux/features/appSlice";

interface IReset {
  textButton: string;
  textModal: string;
  resetTarget: string;
}

const actionObject = {
  cart: resetCart,
  favorites: resetFavorites,
};

const Reset = ({ textButton, textModal, resetTarget }: IReset) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const handleReset = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (confirmReset) {
      dispatch(actionObject[resetTarget]());
      localStorage.removeItem(resetTarget);
    }
  }, [resetTarget, dispatch, confirmReset]);

  return (
    <div className="mt-2">
      <ConfirmResetModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setConfirmReset={setConfirmReset}
        textModal={textModal}
      />
      <Button onClick={handleReset} theme={ButtonTheme.DELETE}>
        {textButton}
      </Button>
    </div>
  );
};

Reset.displayName = "Reset";

export default Reset;
