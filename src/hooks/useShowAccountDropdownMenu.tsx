import React, { RefObject, useEffect, useState } from "react";
import { useKeydown } from "@/hooks/useKeyDown";

const useShowAccountDropdownMenu = (ref: RefObject<HTMLElement | null>) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = ({ target }: MouseEvent): void => {
    if (ref.current && ref.current?.contains(target as Node)) {
      setShow(true);
    }
  };
  const handleHide = ({ relatedTarget }: MouseEvent): void => {
    if (ref.current && !ref.current?.contains(relatedTarget as Node)) {
      setShow(false);
    }
  };

  useKeydown("Escape", () => setShow(false), show);

  const handlePushEnter = (e: KeyboardEvent): void => {
    if (
      !show &&
      ref.current &&
      ref.current?.contains(e.target as Node) &&
      e?.code === "Enter"
    ) {
      setShow(true);
    }
  };

  useEffect(() => {
    const target = ref.current as Node;

    target.addEventListener("mouseenter", handleShow);
    target.addEventListener("mouseleave", handleHide);
    window.addEventListener("keydown", handlePushEnter);
    return () => {
      target.removeEventListener("mouseenter", handleShow);
      target.removeEventListener("mouseleave", handleHide);
      window.removeEventListener("keydown", handlePushEnter);
    };
  }, [show]);

  return [show];
};

export default useShowAccountDropdownMenu;
