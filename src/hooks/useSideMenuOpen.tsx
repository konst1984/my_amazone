import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const useSideMenuOpen = () => {
  const [openSlideMenu, setOpenSlideMenu] = useState<
    boolean | Dispatch<SetStateAction<boolean>>
  >(false);

  const showSlideMenu = () => {
    if (!openSlideMenu) {
      setOpenSlideMenu(true);
    }
  };

  useEffect(() => {
    if (openSlideMenu) {
      document.body.classList.add("fixed");
    } else document.body.classList.remove("fixed");
  }, [openSlideMenu]);

  return {openSlideMenu, setOpenSlideMenu, showSlideMenu};
};

export default useSideMenuOpen;
