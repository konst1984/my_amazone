import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import Modal from "@/components/Modal";

interface IConfirmModal {
  openModal: boolean;
  textModal: string;
  setOpenModal: (value: boolean) => void;
  setConfirmReset: (value: boolean) => void;
}

const ConfirmResetModal = ({
  openModal,
  textModal,
  setOpenModal,
  setConfirmReset,
}: IConfirmModal) => {
  const handleClickCancel = () => {
    document.body.classList.remove("fixed");
    setOpenModal(false);
  };

  const handleClickOk = () => {
    setConfirmReset(true);
    setOpenModal(false);
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="bg-gray-300 rounded-2xl text-gray-900 w-full min-w-[250px] p-5 flex flex-col items-center gap-10 shadow-inner">
        <h2 className="text-xl text-center">{textModal}</h2>
        <div className="flex gap-4">
          <Button theme={ButtonTheme.CONFIRM} onClick={handleClickOk}>
            Ok
          </Button>
          <Button theme={ButtonTheme.DELETE} onClick={handleClickCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmResetModal;
