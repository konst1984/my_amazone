"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/redux/hook";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import ConfirmResetModal from "@/components/ConfirmResetModal";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

interface IReset {
  textButton: string;
  textModal: string;
  actionFn:
    | ActionCreatorWithoutPayload<"app/resetCart">
    | ActionCreatorWithoutPayload<"app/resetFavorites">;
}

const Reset = ({ textButton, textModal, actionFn }: IReset) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const handleReset = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (confirmReset) {
      dispatch(actionFn());
    }
  }, [actionFn, dispatch, confirmReset]);

  return (
    <>
      <ConfirmResetModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setConfirmReset={setConfirmReset}
        textModal={textModal}
      />
      <Button onClick={handleReset} theme={ButtonTheme.DELETE}>
        {textButton}
      </Button>
    </>
  );
};

export default Reset;
