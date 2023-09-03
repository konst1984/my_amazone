import { ReactNode, RefObject, useEffect, useRef } from "react";
import { useKeydown } from "@/hooks/useKeyDown";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { createPortal } from "react-dom";

interface IConfirmModal {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: ReactNode;
}

const Modal = ({ openModal, setOpenModal, children }: IConfirmModal) => {
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(backdropRef, () => setOpenModal(false), openModal);
  useKeydown("Escape", () => setOpenModal(false), openModal);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }
  }, [openModal]);

  return (
    <>
      {openModal && (
        <>
          {createPortal(
            <div className="fixed bg-black/50 inset-0 flex items-center justify-center z-[60]">
              <div
                className="mx-3"
                ref={backdropRef as RefObject<HTMLDivElement>}
              >
                {children}
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </>
  );
};

export default Modal;
