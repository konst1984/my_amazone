import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const useSideMenuOpen = () => {
  const [isOpen, setOpenSideMenu] = useState<boolean>(false);

  const showSideMenu = () => {
    if (!isOpen) {
      setOpenSideMenu(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed");
    } else document.body.classList.remove("fixed");
  }, [isOpen]);

  return { isOpen, setOpenSideMenu, showSideMenu };
};

export default useSideMenuOpen;
